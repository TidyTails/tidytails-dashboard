import { AbsoluteFill, interpolate, useCurrentFrame, Sequence } from 'remotion';

const colors = {
  bg: '#120d0d',
  card: '#1c1616',
  amber: '#d4a574',
  green: '#4a9c4a',
  text: '#f0e8e8',
  muted: '#9a8a8a',
};

export const ShedSpring: React.FC = () => {
  const frame = useCurrentFrame();

  const springProblems = [
    '🌱 Lawn equipment coming out',
    '🌱 Garden supplies multiplying',
    '🌱 Outdoor projects starting',
    '🌱 Garage? Still full.',
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      {/* Intro */}
      <Sequence from={0} durationInFrames={60}>
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
          <div style={{
            fontFamily: 'system-ui, sans-serif',
            fontSize: 72,
            fontWeight: 800,
            color: colors.green,
            opacity: interpolate(frame, [0, 20], [0, 1]),
          }}>
            March is coming.
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* Spring Problems */}
      <Sequence from={60} durationInFrames={120}>
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', padding: 40 }}>
          <div style={{
            fontFamily: 'system-ui, sans-serif',
            fontSize: 32,
            color: colors.muted,
            marginBottom: 30,
            opacity: interpolate(frame - 60, [0, 15], [0, 1]),
          }}>
            You know what that means:
          </div>
          <div style={{ width: '90%' }}>
            {springProblems.map((problem, i) => {
              const itemFrame = frame - 60 - i * 20;
              const opacity = interpolate(itemFrame, [0, 15], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
              return (
                <div key={i} style={{
                  fontFamily: 'system-ui, sans-serif',
                  fontSize: 36,
                  color: colors.text,
                  marginBottom: 20,
                  opacity,
                  transform: `translateX(${interpolate(itemFrame, [0, 15], [-30, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })}px)`,
                }}>
                  {problem}
                </div>
              );
            })}
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* Solution */}
      <Sequence from={180} durationInFrames={60}>
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', padding: 40 }}>
          <div style={{
            backgroundColor: colors.card,
            padding: 50,
            borderRadius: 24,
            textAlign: 'center',
            opacity: interpolate(frame - 180, [0, 20], [0, 1]),
            borderLeft: `8px solid ${colors.green}`,
          }}>
            <div style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: 36,
              color: colors.text,
              marginBottom: 20,
            }}>
              A shed means:
            </div>
            <div style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: 32,
              color: colors.amber,
              lineHeight: 1.8,
            }}>
              → Everything has a home<br/>
              → Garage is YOUR garage<br/>
              → Car sleeps inside
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* CTA */}
      <Sequence from={240} durationInFrames={60}>
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
          <div style={{
            textAlign: 'center',
            opacity: interpolate(frame - 240, [0, 15], [0, 1]),
          }}>
            <div style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: 42,
              fontWeight: 700,
              color: colors.green,
              marginBottom: 20,
            }}>
              Beat the spring rush.
            </div>
            <div style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: 28,
              color: colors.muted,
              marginBottom: 30,
            }}>
              💰 Rent-to-own available<br/>
              🚚 FREE delivery & setup
            </div>
            <div style={{
              fontFamily: 'monospace',
              fontSize: 42,
              color: colors.amber,
              fontWeight: 700,
            }}>
              Text Darius: 636-354-7406
            </div>
            <div style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: 24,
              color: colors.muted,
              marginTop: 15,
            }}>
              @reddshedredemption
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};
