import { AbsoluteFill, interpolate, useCurrentFrame, Sequence } from 'remotion';

const colors = {
  bg: '#0d120d',
  card: '#161c16',
  green: '#4a9c4a',
  red: '#c45d5d',
  amber: '#d4a574',
  text: '#e8f0e8',
};

export const PoopTimeline: React.FC = () => {
  const frame = useCurrentFrame();

  const days = [
    { day: 1, count: 2 },
    { day: 2, count: 4 },
    { day: 3, count: 6 },
    { day: 4, count: 8 },
    { day: 5, count: 10 },
    { day: 6, count: 12 },
    { day: 7, count: 14 },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      {/* Split Screen Labels */}
      <Sequence from={0} durationInFrames={240}>
        <AbsoluteFill style={{ flexDirection: 'row' }}>
          {/* Left - No Service */}
          <div style={{
            width: '50%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRight: '4px solid #333',
            paddingTop: 120,
          }}>
            <div style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: 36,
              fontWeight: 800,
              color: colors.red,
              marginBottom: 40,
              opacity: interpolate(frame, [0, 15], [0, 1]),
            }}>
              YOUR YARD
            </div>
            {days.map((d, i) => {
              const showFrame = 20 + i * 25;
              const opacity = interpolate(frame, [showFrame, showFrame + 10], [0, 1], { extrapolateRight: 'clamp' });
              return (
                <div key={i} style={{
                  fontFamily: 'system-ui, sans-serif',
                  fontSize: 28,
                  color: colors.text,
                  marginBottom: 12,
                  opacity,
                }}>
                  Day {d.day}: <span style={{ color: colors.red, fontWeight: 700, fontSize: 34 }}>{d.count} 💩</span>
                </div>
              );
            })}
          </div>

          {/* Right - Tidy Tails */}
          <div style={{
            width: '50%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: 120,
          }}>
            <div style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: 36,
              fontWeight: 800,
              color: colors.green,
              marginBottom: 40,
              opacity: interpolate(frame, [0, 15], [0, 1]),
            }}>
              TIDY TAILS
            </div>
            <div style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: 120,
              fontWeight: 900,
              color: colors.green,
              marginTop: 80,
              opacity: interpolate(frame, [20, 35], [0, 1]),
            }}>
              0
            </div>
            <div style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: 28,
              color: colors.amber,
              marginTop: 20,
              opacity: interpolate(frame, [30, 45], [0, 1]),
            }}>
              ✅ Always Clean
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* End Card */}
      <Sequence from={240} durationInFrames={60}>
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ textAlign: 'center', opacity: interpolate(frame - 240, [0, 15], [0, 1], { extrapolateRight: 'clamp' }) }}>
            <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: 56, fontWeight: 800, color: colors.text, marginBottom: 30 }}>
              Which yard is yours?
            </div>
            <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: 36, color: colors.amber, marginBottom: 40 }}>
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
