import { AbsoluteFill, interpolate, useCurrentFrame, Sequence } from 'remotion';

const colors = {
  bg: '#87CEEB',
  darkBg: '#1a0a0a',
  green: '#4a9c4a',
  amber: '#d4a574',
  text: '#e8f0e8',
  red: '#ff3333',
};

export const SmellOVision: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: frame < 120 ? colors.bg : colors.darkBg }}>
      {/* Peaceful Morning */}
      <Sequence from={0} durationInFrames={120}>
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 120, opacity: interpolate(frame, [0, 20], [0, 1], { extrapolateRight: 'clamp' }) }}>
              ☀️
            </div>
            <div style={{
              fontSize: 60,
              marginTop: 30,
              opacity: interpolate(frame, [20, 40], [0, 1], { extrapolateRight: 'clamp' }),
            }}>
              🐦 🌳 ☕
            </div>
            <div style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: 42,
              fontWeight: 600,
              color: '#2d5a2d',
              marginTop: 40,
              opacity: interpolate(frame, [40, 60], [0, 1], { extrapolateRight: 'clamp' }),
            }}>
              Beautiful morning...
            </div>
            <div style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: 36,
              color: '#2d5a2d',
              marginTop: 20,
              opacity: interpolate(frame, [60, 80], [0, 1], { extrapolateRight: 'clamp' }),
            }}>
              Step outside barefoot...
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* RECORD SCRATCH - SQUISH */}
      <Sequence from={120} durationInFrames={60}>
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: 28,
              color: '#888',
              marginBottom: 20,
              opacity: interpolate(frame - 120, [0, 5], [0, 1], { extrapolateRight: 'clamp' }),
            }}>
              *record scratch*
            </div>
            <div style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: 140,
              fontWeight: 900,
              color: colors.red,
              transform: `scale(${interpolate(frame - 120, [5, 15], [3, 1], { extrapolateRight: 'clamp' })})`,
              opacity: interpolate(frame - 120, [5, 10], [0, 1], { extrapolateRight: 'clamp' }),
              textShadow: '0 0 40px rgba(255,0,0,0.5)',
            }}>
              SQUISH
            </div>
            <div style={{
              fontSize: 80,
              marginTop: 20,
              opacity: interpolate(frame - 120, [15, 25], [0, 1], { extrapolateRight: 'clamp' }),
            }}>
              🤢💩🦶
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* We Prevent This */}
      <Sequence from={180} durationInFrames={60}>
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ textAlign: 'center', opacity: interpolate(frame - 180, [0, 15], [0, 1], { extrapolateRight: 'clamp' }) }}>
            <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: 56, fontWeight: 800, color: colors.green, marginBottom: 30 }}>
              We prevent this.
            </div>
            <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: 48, fontWeight: 700, color: colors.text, marginBottom: 20 }}>
              🐕 TIDY TAILS
            </div>
            <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: 32, color: colors.amber, marginBottom: 40 }}>
              Weekly cleanup starting at $25
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
