import { AbsoluteFill, interpolate, useCurrentFrame, Sequence } from 'remotion';

const colors = {
  bg: '#0d0d12',
  card: '#16161c',
  purple: '#9c4a9c',
  green: '#4a9c4a',
  amber: '#d4a574',
  text: '#e8e8f0',
  muted: '#8a8a9a',
  red: '#c45d5d',
};

export const ConsultingProblem: React.FC = () => {
  const frame = useCurrentFrame();

  const problems = [
    { icon: '💸', text: 'Agencies want $5K/month' },
    { icon: '👻', text: 'Freelancers flake' },
    { icon: '⏰', text: 'No time to learn AI tools' },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      {/* Hook */}
      <Sequence from={0} durationInFrames={60}>
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', padding: 40 }}>
          <div style={{
            fontFamily: 'system-ui, sans-serif',
            fontSize: 42,
            color: colors.text,
            textAlign: 'center',
            opacity: interpolate(frame, [0, 20], [0, 1]),
          }}>
            You know you need<br/>
            <span style={{ fontSize: 56, fontWeight: 800, color: colors.purple }}>
              better marketing.
            </span>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* But... */}
      <Sequence from={60} durationInFrames={30}>
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
          <div style={{
            fontFamily: 'system-ui, sans-serif',
            fontSize: 64,
            color: colors.muted,
            opacity: interpolate(frame - 60, [0, 15], [0, 1]),
          }}>
            But...
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* Problems */}
      <Sequence from={90} durationInFrames={120}>
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', padding: 40 }}>
          <div style={{ width: '90%' }}>
            {problems.map((problem, i) => {
              const itemFrame = frame - 90 - i * 30;
              const opacity = interpolate(itemFrame, [0, 15], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
              return (
                <div key={i} style={{
                  backgroundColor: colors.card,
                  padding: 30,
                  borderRadius: 16,
                  marginBottom: 20,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 20,
                  opacity,
                  borderLeft: `6px solid ${colors.red}`,
                }}>
                  <div style={{ fontSize: 48 }}>{problem.icon}</div>
                  <div style={{
                    fontFamily: 'system-ui, sans-serif',
                    fontSize: 32,
                    color: colors.text,
                  }}>
                    {problem.text}
                  </div>
                </div>
              );
            })}
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* Sound familiar? */}
      <Sequence from={210} durationInFrames={45}>
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
          <div style={{
            fontFamily: 'system-ui, sans-serif',
            fontSize: 48,
            color: colors.amber,
            fontStyle: 'italic',
            opacity: interpolate(frame - 210, [0, 15], [0, 1]),
          }}>
            Sound familiar?
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* Solution */}
      <Sequence from={255} durationInFrames={105}>
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', padding: 40 }}>
          <div style={{
            backgroundColor: colors.card,
            padding: 50,
            borderRadius: 24,
            borderLeft: `8px solid ${colors.green}`,
            opacity: interpolate(frame - 255, [0, 20], [0, 1]),
          }}>
            <div style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: 32,
              color: colors.muted,
              marginBottom: 15,
            }}>
              I'm TJ. I built AI systems for my own businesses.
            </div>
            <div style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: 42,
              fontWeight: 700,
              color: colors.text,
              marginBottom: 30,
            }}>
              Now I help others do the same.
            </div>
            <div style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: 36,
              color: colors.green,
            }}>
              ✅ From $497/month<br/>
              ✅ Month-to-month<br/>
              ✅ No BS, just results
            </div>
          </div>
          <div style={{
            fontFamily: 'monospace',
            fontSize: 32,
            color: colors.purple,
            marginTop: 30,
            opacity: interpolate(frame - 270, [0, 15], [0, 1]),
          }}>
            636-354-7406
          </div>
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};
