import { AbsoluteFill, interpolate, useCurrentFrame, Sequence } from 'remotion';

const colors = {
  bg: '#0d120d',
  card: '#1a1f1a',
  green: '#4a9c4a',
  red: '#c45d5d',
  amber: '#d4a574',
  text: '#e8f0e8',
};

export const RealEstateAngle: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      {/* Two House Cards */}
      <Sequence from={0} durationInFrames={240}>
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
          <div style={{
            fontFamily: 'system-ui, sans-serif',
            fontSize: 40,
            fontWeight: 800,
            color: colors.text,
            marginBottom: 50,
            opacity: interpolate(frame, [0, 15], [0, 1], { extrapolateRight: 'clamp' }),
          }}>
            Same house. Different yard.
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 30, alignItems: 'center', width: '100%' }}>
            {/* Clean House */}
            <div style={{
              backgroundColor: colors.card,
              borderRadius: 24,
              padding: 40,
              width: '80%',
              borderLeft: `8px solid ${colors.green}`,
              opacity: interpolate(frame, [20, 40], [0, 1], { extrapolateRight: 'clamp' }),
              transform: `translateX(${interpolate(frame, [20, 40], [-200, 0], { extrapolateRight: 'clamp' })}px)`,
            }}>
              <div style={{ fontSize: 60, marginBottom: 10 }}>🏡✨</div>
              <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: 48, fontWeight: 800, color: colors.green }}>
                $350,000
              </div>
              <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: 24, color: colors.amber, marginTop: 8 }}>
                Clean yard • Well maintained
              </div>
            </div>

            {/* Messy House */}
            <div style={{
              backgroundColor: colors.card,
              borderRadius: 24,
              padding: 40,
              width: '80%',
              borderLeft: `8px solid ${colors.red}`,
              opacity: interpolate(frame, [60, 80], [0, 1], { extrapolateRight: 'clamp' }),
              transform: `translateX(${interpolate(frame, [60, 80], [200, 0], { extrapolateRight: 'clamp' })}px)`,
              position: 'relative',
            }}>
              <div style={{ fontSize: 60, marginBottom: 10 }}>🏡💩</div>
              <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: 48, fontWeight: 800, color: colors.text }}>
                $350,000
              </div>
              {/* Red stamp */}
              <div style={{
                position: 'absolute',
                top: 30,
                right: 30,
                fontFamily: 'system-ui, sans-serif',
                fontSize: 36,
                fontWeight: 900,
                color: colors.red,
                border: `4px solid ${colors.red}`,
                padding: '8px 16px',
                borderRadius: 8,
                transform: `rotate(-12deg) scale(${interpolate(frame, [100, 115], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })})`,
                opacity: interpolate(frame, [100, 110], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }),
              }}>
                -$15,000
              </div>
              <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: 24, color: '#888', marginTop: 8 }}>
                Neglected yard
              </div>
            </div>
          </div>

          {/* Bottom text */}
          <div style={{
            fontFamily: 'system-ui, sans-serif',
            fontSize: 44,
            fontWeight: 800,
            color: colors.amber,
            marginTop: 50,
            textAlign: 'center',
            opacity: interpolate(frame, [140, 160], [0, 1], { extrapolateRight: 'clamp' }),
          }}>
            Your yard IS your<br/>home value.
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
            <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: 36, color: colors.green, marginBottom: 15 }}>
              Protect your investment.
            </div>
            <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: 32, color: colors.amber, marginBottom: 40 }}>
              Just $70/month
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
