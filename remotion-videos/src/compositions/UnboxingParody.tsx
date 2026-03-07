import { AbsoluteFill, interpolate, useCurrentFrame, Sequence } from 'remotion';

const colors = {
  bg: '#0a0a0a',
  green: '#4a9c4a',
  amber: '#d4a574',
  text: '#e8f0e8',
  accent: '#ff6b35',
};

const UnboxItem: React.FC<{ emoji: string; label: string; subtitle: string; frame: number; delay: number }> = ({ emoji, label, subtitle, frame, delay }) => {
  const localFrame = frame - delay;
  const opacity = interpolate(localFrame, [0, 10], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const scale = interpolate(localFrame, [0, 15], [3, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const rotation = interpolate(localFrame, [0, 15], [15, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
      <div style={{
        textAlign: 'center',
        opacity,
        transform: `scale(${scale}) rotate(${rotation}deg)`,
      }}>
        <div style={{ fontSize: 140, marginBottom: 20 }}>{emoji}</div>
        <div style={{
          fontFamily: 'system-ui, sans-serif',
          fontSize: 56,
          fontWeight: 900,
          color: colors.text,
          textTransform: 'uppercase',
          letterSpacing: 4,
        }}>
          {label}
        </div>
        <div style={{
          fontFamily: 'system-ui, sans-serif',
          fontSize: 28,
          color: colors.accent,
          marginTop: 15,
          fontStyle: 'italic',
        }}>
          {subtitle}
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const UnboxingParody: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      {/* Intro */}
      <Sequence from={0} durationInFrames={45}>
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
          <div style={{
            textAlign: 'center',
            opacity: interpolate(frame, [0, 15], [0, 1], { extrapolateRight: 'clamp' }),
          }}>
            <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: 32, color: '#888', marginBottom: 10 }}>
              📦 UNBOXING
            </div>
            <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: 48, fontWeight: 800, color: colors.text }}>
              Today we're unboxing...
            </div>
            <div style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: 44,
              fontWeight: 700,
              color: colors.accent,
              marginTop: 20,
              opacity: interpolate(frame, [20, 35], [0, 1], { extrapolateRight: 'clamp' }),
            }}>
              your backyard 💩
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* Gloves */}
      <Sequence from={45} durationInFrames={50}>
        <UnboxItem emoji="🧤" label="GLOVES" subtitle="*snap* — locked and loaded" frame={frame} delay={45} />
      </Sequence>

      {/* Bags */}
      <Sequence from={95} durationInFrames={50}>
        <UnboxItem emoji="🗑️" label="BAGS" subtitle="*unfurl* — heavy duty" frame={frame} delay={95} />
      </Sequence>

      {/* Scoop */}
      <Sequence from={145} durationInFrames={50}>
        <UnboxItem emoji="🔧" label="SCOOP" subtitle="*weapon assembled*" frame={frame} delay={145} />
      </Sequence>

      {/* Mission Ready */}
      <Sequence from={195} durationInFrames={45}>
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
          <div style={{
            textAlign: 'center',
            opacity: interpolate(frame - 195, [0, 15], [0, 1], { extrapolateRight: 'clamp' }),
          }}>
            <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: 60, fontWeight: 900, color: colors.green }}>
              MISSION READY
            </div>
            <div style={{ fontSize: 60, marginTop: 20 }}>🐕💩✨</div>
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
              We unbox your yard weekly
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
