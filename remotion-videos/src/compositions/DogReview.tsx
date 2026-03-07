import { AbsoluteFill, interpolate, useCurrentFrame, Sequence } from 'remotion';

const colors = {
  bg: '#0d120d',
  card: '#1a1f1a',
  green: '#4a9c4a',
  amber: '#d4a574',
  text: '#e8f0e8',
  gold: '#ffd700',
};

const ReviewCard: React.FC<{ quote: string; dog: string; stars: number; frame: number; delay: number }> = ({ quote, dog, stars, frame, delay }) => {
  const opacity = interpolate(frame, [delay, delay + 15], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const translateX = interpolate(frame, [delay, delay + 15], [100, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  return (
    <div style={{
      backgroundColor: colors.card,
      borderRadius: 20,
      padding: '30px 36px',
      marginBottom: 20,
      opacity,
      transform: `translateX(${translateX}px)`,
      borderLeft: `6px solid ${colors.gold}`,
      width: '85%',
    }}>
      <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: 26, color: colors.gold, marginBottom: 8 }}>
        {'⭐'.repeat(stars)}
      </div>
      <div style={{ fontFamily: 'Georgia, serif', fontSize: 30, color: colors.text, fontStyle: 'italic', marginBottom: 12 }}>
        "{quote}"
      </div>
      <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: 22, color: colors.amber }}>
        — {dog}
      </div>
    </div>
  );
};

export const DogReview: React.FC = () => {
  const frame = useCurrentFrame();

  const reviews = [
    { quote: 'Finally hired a professional', dog: '🐕 Max, Golden Retriever', stars: 5, delay: 20 },
    { quote: "I've been dodging my own landmines", dog: '🐶 Bella, Lab Mix', stars: 5, delay: 70 },
    { quote: '10/10 would recommend', dog: '🦮 Duke, German Shepherd', stars: 5, delay: 120 },
    { quote: 'My humans can walk barefoot again', dog: '🐾 Cooper, Beagle', stars: 5, delay: 170 },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      {/* Title */}
      <Sequence from={0} durationInFrames={240}>
        <AbsoluteFill style={{ alignItems: 'center', paddingTop: 120 }}>
          <div style={{
            fontFamily: 'system-ui, sans-serif',
            fontSize: 44,
            fontWeight: 800,
            color: colors.text,
            marginBottom: 10,
            opacity: interpolate(frame, [0, 15], [0, 1], { extrapolateRight: 'clamp' }),
          }}>
            What Dogs Are Saying
          </div>
          <div style={{
            fontFamily: 'system-ui, sans-serif',
            fontSize: 28,
            color: colors.amber,
            marginBottom: 40,
            opacity: interpolate(frame, [5, 20], [0, 1], { extrapolateRight: 'clamp' }),
          }}>
            ⭐⭐⭐⭐⭐ 5.0 on BarkAdvisor
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            {reviews.map((r, i) => (
              <ReviewCard key={i} {...r} frame={frame} />
            ))}
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* CTA */}
      <Sequence from={240} durationInFrames={60}>
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ textAlign: 'center', opacity: interpolate(frame - 240, [0, 15], [0, 1], { extrapolateRight: 'clamp' }) }}>
            <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: 48, fontWeight: 700, color: colors.text, marginBottom: 20 }}>
              🐕 TIDY TAILS
            </div>
            <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: 32, color: colors.amber, marginBottom: 40 }}>
              Dog-approved since Day 1
            </div>
            <div style={{ fontFamily: 'monospace', fontSize: 42, color: colors.green, fontWeight: 700 }}>
              314-850-7140
            </div>
            <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: 24, color: colors.amber, marginTop: 15 }}>
              tidytailsstl.com
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};
