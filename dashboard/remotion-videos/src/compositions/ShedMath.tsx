import { AbsoluteFill, interpolate, useCurrentFrame, Sequence } from 'remotion';

const colors = {
  bg: '#120d0d',
  card: '#1c1616',
  amber: '#d4a574',
  green: '#4a9c4a',
  text: '#f0e8e8',
  muted: '#9a8a8a',
};

export const ShedMath: React.FC = () => {
  const frame = useCurrentFrame();

  const comparisons = [
    { emoji: '📺', text: 'Streaming subscriptions', price: '$50+/mo' },
    { emoji: '🍽️', text: 'Dinner out once a week', price: '$80+/mo' },
    { emoji: '🏋️', text: 'Gym membership (unused)', price: '$40+/mo' },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      {/* Intro */}
      <Sequence from={0} durationInFrames={60}>
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
          <div style={{
            fontFamily: 'system-ui, sans-serif',
            fontSize: 64,
            fontWeight: 800,
            color: colors.amber,
            opacity: interpolate(frame, [0, 20], [0, 1]),
          }}>
            Let's do some math.
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* The Math */}
      <Sequence from={60} durationInFrames={90}>
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', padding: 40 }}>
          <div style={{
            backgroundColor: colors.card,
            padding: 50,
            borderRadius: 24,
            textAlign: 'center',
            opacity: interpolate(frame - 60, [0, 20], [0, 1]),
          }}>
            <div style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: 36,
              color: colors.muted,
              marginBottom: 20,
            }}>
              A $6,000 shed financed over 10 years:
            </div>
            <div style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: 96,
              fontWeight: 800,
              color: colors.green,
            }}>
              ~$79/mo
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* Comparisons */}
      <Sequence from={150} durationInFrames={120}>
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', padding: 40 }}>
          <div style={{
            fontFamily: 'system-ui, sans-serif',
            fontSize: 32,
            color: colors.muted,
            marginBottom: 30,
            opacity: interpolate(frame - 150, [0, 15], [0, 1]),
          }}>
            That's less than:
          </div>
          <div style={{ width: '90%' }}>
            {comparisons.map((item, i) => {
              const itemFrame = frame - 150 - i * 25;
              const opacity = interpolate(itemFrame, [0, 15], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
              return (
                <div key={i} style={{
                  backgroundColor: colors.card,
                  padding: 25,
                  borderRadius: 16,
                  marginBottom: 15,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  opacity,
                  borderLeft: `6px solid ${colors.amber}`,
                }}>
                  <div style={{
                    fontFamily: 'system-ui, sans-serif',
                    fontSize: 28,
                    color: colors.text,
                  }}>
                    {item.emoji} {item.text}
                  </div>
                  <div style={{
                    fontFamily: 'monospace',
                    fontSize: 24,
                    color: colors.amber,
                  }}>
                    {item.price}
                  </div>
                </div>
              );
            })}
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* Benefits */}
      <Sequence from={270} durationInFrames={90}>
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', padding: 40 }}>
          <div style={{
            fontFamily: 'system-ui, sans-serif',
            fontSize: 32,
            color: colors.muted,
            marginBottom: 30,
            opacity: interpolate(frame - 270, [0, 15], [0, 1]),
          }}>
            Unlike those things, a shed:
          </div>
          <div style={{
            backgroundColor: colors.card,
            padding: 40,
            borderRadius: 24,
            borderLeft: `8px solid ${colors.green}`,
            opacity: interpolate(frame - 270, [10, 25], [0, 1]),
          }}>
            <div style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: 32,
              color: colors.text,
              lineHeight: 1.8,
            }}>
              ✅ Adds value to your home<br/>
              ✅ Protects your stuff<br/>
              ✅ Gets your car back in the garage
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* CTA - Fixed to show in last 60 frames */}
      <Sequence from={300} durationInFrames={60}>
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
          <div style={{
            textAlign: 'center',
            opacity: interpolate(frame - 300, [0, 15], [0, 1]),
          }}>
            <div style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: 36,
              color: colors.text,
              marginBottom: 20,
            }}>
              Rates as low as 9.99% APR
            </div>
            <div style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: 28,
              color: colors.muted,
              marginBottom: 30,
            }}>
              FREE delivery & setup
            </div>
            <div style={{
              fontFamily: 'monospace',
              fontSize: 42,
              color: colors.amber,
              fontWeight: 700,
            }}>
              Text Darius: 636-354-7406
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};
