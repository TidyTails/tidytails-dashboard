import { AbsoluteFill, Img, interpolate, useCurrentFrame, Sequence, staticFile } from 'remotion';

const slides = [
  {
    image: staticFile('shed-promo/slide1.jpg'),
    lines: ['18 MONTHS', 'SAME AS CASH 💥'],
  },
  {
    image: staticFile('shed-promo/slide2.jpg'),
    lines: ['This Weekend Only', 'March 14 & 15'],
  },
  {
    image: staticFile('shed-promo/slide3.jpg'),
    lines: ['Call Darius: 636-354-7406', 'backyardbuildingsstl.com'],
  },
];

const SLIDE_DURATION = 120; // 4 seconds each at 30fps

const Slide: React.FC<{ image: string; lines: string[]; startFrame: number }> = ({
  image,
  lines,
  startFrame,
}) => {
  const frame = useCurrentFrame();
  const localFrame = frame - startFrame;

  // Ken Burns: slow zoom in
  const scale = interpolate(localFrame, [0, SLIDE_DURATION], [1.0, 1.08], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Fade in/out
  const opacity = interpolate(
    localFrame,
    [0, 15, SLIDE_DURATION - 15, SLIDE_DURATION],
    [0, 1, 1, 0],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  // Text slide up
  const textY = interpolate(localFrame, [5, 25], [60, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const textOpacity = interpolate(localFrame, [5, 25], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{ opacity }}>
      {/* Background image with Ken Burns */}
      <AbsoluteFill>
        <Img
          src={image}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: `scale(${scale})`,
          }}
        />
        {/* Dark overlay for text readability */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.1) 100%)',
          }}
        />
      </AbsoluteFill>

      {/* Text overlay */}
      <AbsoluteFill
        style={{
          justifyContent: 'flex-end',
          alignItems: 'center',
          paddingBottom: 280,
        }}
      >
        <div
          style={{
            textAlign: 'center',
            opacity: textOpacity,
            transform: `translateY(${textY}px)`,
          }}
        >
          {lines.map((line, i) => (
            <div
              key={i}
              style={{
                fontFamily: 'system-ui, -apple-system, sans-serif',
                fontSize: i === 0 ? 72 : 56,
                fontWeight: i === 0 ? 900 : 700,
                color: '#ffffff',
                textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 2px 6px rgba(0,0,0,0.9)',
                lineHeight: 1.3,
                letterSpacing: i === 0 ? 2 : 0,
                marginBottom: 10,
              }}
            >
              {line}
            </div>
          ))}
        </div>
      </AbsoluteFill>

      {/* Top banner — store name */}
      <div
        style={{
          position: 'absolute',
          top: 80,
          left: 0,
          right: 0,
          textAlign: 'center',
          opacity: textOpacity,
        }}
      >
        <div
          style={{
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontSize: 32,
            fontWeight: 700,
            color: '#ffffff',
            textShadow: '0 2px 10px rgba(0,0,0,0.8)',
            letterSpacing: 3,
            textTransform: 'uppercase',
          }}
        >
          Backyard Buildings STL
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const ShedPromo18Mo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: '#000' }}>
      {slides.map((slide, i) => (
        <Sequence key={i} from={i * SLIDE_DURATION} durationInFrames={SLIDE_DURATION}>
          <Slide image={slide.image} lines={slide.lines} startFrame={i * SLIDE_DURATION} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};
