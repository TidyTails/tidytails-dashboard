import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig, Sequence } from 'remotion';

const colors = {
  bg: '#0d120d',
  card: '#161c16',
  green: '#4a9c4a',
  amber: '#d4a574',
  text: '#e8f0e8',
  muted: '#8a9a8a',
};

export const TidyTailsTransformation: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      {/* Title Intro */}
      <Sequence from={0} durationInFrames={60}>
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
          <div style={{
            fontFamily: 'system-ui, sans-serif',
            fontSize: 72,
            fontWeight: 800,
            color: colors.green,
            opacity: interpolate(frame, [0, 20], [0, 1]),
            transform: `scale(${interpolate(frame, [0, 20], [0.8, 1])})`,
          }}>
            TIDY TAILS
          </div>
          <div style={{
            fontFamily: 'system-ui, sans-serif',
            fontSize: 36,
            color: colors.amber,
            marginTop: 20,
            opacity: interpolate(frame, [15, 35], [0, 1]),
          }}>
            Transformation
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* Before Section */}
      <Sequence from={60} durationInFrames={90}>
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
          <div style={{
            backgroundColor: colors.card,
            padding: 60,
            borderRadius: 24,
            borderLeft: `8px solid #c45d5d`,
            opacity: interpolate(frame - 60, [0, 20], [0, 1]),
          }}>
            <div style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: 48,
              fontWeight: 700,
              color: '#c45d5d',
              marginBottom: 20,
            }}>
              😰 BEFORE
            </div>
            <div style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: 32,
              color: colors.text,
              lineHeight: 1.5,
            }}>
              Landmines everywhere<br/>
              Kids can't play outside<br/>
              Neighbors judging<br/>
              You avoiding the yard
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* After Section */}
      <Sequence from={150} durationInFrames={90}>
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
          <div style={{
            backgroundColor: colors.card,
            padding: 60,
            borderRadius: 24,
            borderLeft: `8px solid ${colors.green}`,
            opacity: interpolate(frame - 150, [0, 20], [0, 1]),
          }}>
            <div style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: 48,
              fontWeight: 700,
              color: colors.green,
              marginBottom: 20,
            }}>
              ✨ AFTER
            </div>
            <div style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: 32,
              color: colors.text,
              lineHeight: 1.5,
            }}>
              Clean. Every week.<br/>
              Kids playing freely<br/>
              Yard you're proud of<br/>
              One less thing to do
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
              fontSize: 48,
              fontWeight: 700,
              color: colors.text,
              marginBottom: 30,
            }}>
              Starting at $70/month
            </div>
            <div style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: 36,
              color: colors.amber,
              marginBottom: 40,
            }}>
              🐕💩 Text for a free quote
            </div>
            <div style={{
              fontFamily: 'monospace',
              fontSize: 42,
              color: colors.green,
              fontWeight: 700,
            }}>
              314-850-7140
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};
