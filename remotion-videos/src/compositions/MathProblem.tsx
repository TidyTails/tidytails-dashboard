import { AbsoluteFill, interpolate, useCurrentFrame, Sequence } from 'remotion';

const colors = {
  bg: '#2d4a2d',
  chalk: '#e8e8d0',
  green: '#4a9c4a',
  amber: '#d4a574',
  text: '#e8f0e8',
  red: '#ff6b6b',
  darkBg: '#0d120d',
};

export const MathProblem: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: frame < 270 ? colors.bg : colors.darkBg }}>
      {/* Chalkboard Title */}
      <Sequence from={0} durationInFrames={30}>
        <AbsoluteFill style={{ justifyContent: 'flex-start', alignItems: 'center', paddingTop: 200 }}>
          <div style={{
            fontFamily: 'Georgia, serif',
            fontSize: 40,
            color: colors.chalk,
            opacity: interpolate(frame, [0, 15], [0, 1], { extrapolateRight: 'clamp' }),
            fontStyle: 'italic',
          }}>
            Pop Quiz 📝
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* Line 1: 1 dog equation */}
      <Sequence from={30} durationInFrames={240}>
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ textAlign: 'center', padding: 40 }}>
            <div style={{
              fontFamily: 'Georgia, serif',
              fontSize: 44,
              color: colors.chalk,
              marginBottom: 40,
              opacity: interpolate(frame - 30, [0, 20], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }),
            }}>
              1 dog × 2 💩/day × 7 days
            </div>

            <div style={{
              fontFamily: 'Georgia, serif',
              fontSize: 72,
              fontWeight: 700,
              color: colors.red,
              marginBottom: 60,
              opacity: interpolate(frame - 30, [25, 45], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }),
            }}>
              = 14 💩
            </div>

            {/* Line 2 */}
            <div style={{
              fontFamily: 'Georgia, serif',
              fontSize: 44,
              color: colors.chalk,
              marginBottom: 20,
              opacity: interpolate(frame - 30, [70, 90], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }),
            }}>
              2 dogs?
            </div>

            <div style={{
              fontFamily: 'Georgia, serif',
              fontSize: 90,
              fontWeight: 700,
              color: colors.red,
              marginBottom: 40,
              opacity: interpolate(frame - 30, [100, 120], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }),
              transform: `scale(${interpolate(frame - 30, [100, 115], [2, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })})`,
            }}>
              = 28 💩
            </div>

            {/* Punchline */}
            <div style={{
              fontFamily: 'Georgia, serif',
              fontSize: 48,
              fontWeight: 700,
              color: '#ffff00',
              marginTop: 40,
              opacity: interpolate(frame - 30, [150, 170], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }),
            }}>
              You need Tidy Tails. 🐕
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* CTA */}
      <Sequence from={270} durationInFrames={60}>
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ textAlign: 'center', opacity: interpolate(frame - 270, [0, 15], [0, 1], { extrapolateRight: 'clamp' }) }}>
            <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: 48, fontWeight: 700, color: colors.text, marginBottom: 20 }}>
              🐕 TIDY TAILS
            </div>
            <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: 32, color: colors.amber, marginBottom: 15 }}>
              We do the math (and the cleanup)
            </div>
            <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: 28, color: colors.text, marginBottom: 40 }}>
              Starting at $25/week
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
