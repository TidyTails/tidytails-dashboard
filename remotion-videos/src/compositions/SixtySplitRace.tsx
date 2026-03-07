import { AbsoluteFill, interpolate, useCurrentFrame, Sequence } from 'remotion';

const colors = {
  bg: '#0d120d',
  card: '#161c16',
  green: '#4a9c4a',
  red: '#c45d5d',
  amber: '#d4a574',
  text: '#e8f0e8',
};

export const SixtySplitRace: React.FC = () => {
  const frame = useCurrentFrame();

  // Timer animations
  const youMinutes = Math.min(45, Math.floor(interpolate(frame, [30, 200], [0, 45], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })));
  const proMinutes = Math.min(5, Math.floor(interpolate(frame, [30, 80], [0, 5], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })));

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      {/* Split Screen Race */}
      <Sequence from={0} durationInFrames={240}>
        <AbsoluteFill style={{ flexDirection: 'row' }}>
          {/* Left - YOU */}
          <div style={{
            width: '50%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            borderRight: '4px solid #333',
            backgroundColor: 'rgba(196, 93, 93, 0.1)',
          }}>
            <div style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: 40,
              fontWeight: 800,
              color: colors.red,
              marginBottom: 30,
              opacity: interpolate(frame, [0, 15], [0, 1], { extrapolateRight: 'clamp' }),
            }}>
              YOU
            </div>
            <div style={{ fontSize: 50, marginBottom: 20 }}>😓</div>
            <div style={{
              fontFamily: 'monospace',
              fontSize: 56,
              fontWeight: 700,
              color: colors.red,
            }}>
              {youMinutes}:00
            </div>
            <div style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: 22,
              color: '#888',
              marginTop: 15,
            }}>
              minutes
            </div>
            {youMinutes >= 45 && (
              <div style={{
                fontFamily: 'system-ui, sans-serif',
                fontSize: 24,
                color: colors.red,
                marginTop: 20,
                opacity: interpolate(frame, [200, 215], [0, 1], { extrapolateRight: 'clamp' }),
              }}>
                Still going... 🥵
              </div>
            )}
          </div>

          {/* Right - THE PRO */}
          <div style={{
            width: '50%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(74, 156, 74, 0.1)',
          }}>
            <div style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: 40,
              fontWeight: 800,
              color: colors.green,
              marginBottom: 30,
              opacity: interpolate(frame, [0, 15], [0, 1], { extrapolateRight: 'clamp' }),
            }}>
              THE PRO
            </div>
            <div style={{ fontSize: 50, marginBottom: 20 }}>😎</div>
            <div style={{
              fontFamily: 'monospace',
              fontSize: 56,
              fontWeight: 700,
              color: colors.green,
            }}>
              {proMinutes}:00
            </div>
            <div style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: 22,
              color: '#888',
              marginTop: 15,
            }}>
              minutes
            </div>
            {proMinutes >= 5 && (
              <div style={{
                fontFamily: 'system-ui, sans-serif',
                fontSize: 24,
                color: colors.green,
                marginTop: 20,
                opacity: interpolate(frame, [80, 95], [0, 1], { extrapolateRight: 'clamp' }),
              }}>
                ✅ Done!
              </div>
            )}
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* Tagline + CTA */}
      <Sequence from={240} durationInFrames={60}>
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ textAlign: 'center', opacity: interpolate(frame - 240, [0, 15], [0, 1], { extrapolateRight: 'clamp' }) }}>
            <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: 48, fontWeight: 800, color: colors.text, marginBottom: 15 }}>
              Same yard.
            </div>
            <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: 48, fontWeight: 800, color: colors.green, marginBottom: 30 }}>
              Different Sunday.
            </div>
            <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: 36, color: colors.amber, marginBottom: 40 }}>
              🐕 TIDY TAILS • From $25/wk
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
