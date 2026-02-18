import { AbsoluteFill, interpolate, useCurrentFrame, Sequence } from 'remotion';

const colors = {
  bg: '#0d120d',
  card: '#161c16',
  green: '#4a9c4a',
  amber: '#d4a574',
  text: '#e8f0e8',
  muted: '#8a9a8a',
};

export const TidyTailsBrand: React.FC = () => {
  const frame = useCurrentFrame();

  const features = [
    { icon: '🐕', text: 'Genuine dog people' },
    { icon: '⏰', text: 'On time. Every time.' },
    { icon: '💯', text: 'Never missed a cleanup' },
    { icon: '🏠', text: 'Local, not a franchise' },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      {/* Intro */}
      <Sequence from={0} durationInFrames={75}>
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', padding: 60 }}>
          <div style={{
            fontFamily: 'system-ui, sans-serif',
            fontSize: 42,
            color: colors.text,
            textAlign: 'center',
            opacity: interpolate(frame, [0, 20], [0, 1]),
          }}>
            Why hire<br/>
            <span style={{ fontSize: 64, fontWeight: 800, color: colors.green }}>
              TIDY TAILS?
            </span>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* Feature Cards */}
      {features.map((feature, i) => (
        <Sequence key={i} from={75 + i * 60} durationInFrames={60}>
          <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', padding: 40 }}>
            <div style={{
              backgroundColor: colors.card,
              padding: 50,
              borderRadius: 24,
              borderLeft: `8px solid ${colors.green}`,
              width: '90%',
              opacity: interpolate(frame - (75 + i * 60), [0, 15], [0, 1]),
              transform: `translateX(${interpolate(frame - (75 + i * 60), [0, 15], [-50, 0])}px)`,
            }}>
              <div style={{
                fontFamily: 'system-ui, sans-serif',
                fontSize: 64,
                marginBottom: 20,
              }}>
                {feature.icon}
              </div>
              <div style={{
                fontFamily: 'system-ui, sans-serif',
                fontSize: 40,
                fontWeight: 600,
                color: colors.text,
              }}>
                {feature.text}
              </div>
            </div>
          </AbsoluteFill>
        </Sequence>
      ))}

      {/* CTA */}
      <Sequence from={315} durationInFrames={135}>
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', padding: 40 }}>
          <div style={{
            textAlign: 'center',
            opacity: interpolate(frame - 315, [0, 20], [0, 1]),
          }}>
            <div style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: 36,
              color: colors.muted,
              marginBottom: 20,
            }}>
              If you want corporate, call the franchises.
            </div>
            <div style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: 42,
              fontWeight: 700,
              color: colors.text,
              marginBottom: 40,
            }}>
              If you want reliable & personal...
            </div>
            <div style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: 56,
              fontWeight: 800,
              color: colors.green,
              marginBottom: 30,
            }}>
              DM ME 🐕💩
            </div>
            <div style={{
              fontFamily: 'monospace',
              fontSize: 36,
              color: colors.amber,
            }}>
              636-354-7406
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};
