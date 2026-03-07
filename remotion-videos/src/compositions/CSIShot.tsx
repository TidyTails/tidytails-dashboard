import { AbsoluteFill, interpolate, useCurrentFrame, Sequence } from 'remotion';

const colors = {
  bg: '#0a0a0a',
  yellow: '#ffd700',
  red: '#c45d5d',
  green: '#4a9c4a',
  amber: '#d4a574',
  text: '#e8f0e8',
};

export const CSIShot: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      {/* Crime Scene Tape */}
      <Sequence from={0} durationInFrames={60}>
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
          {[0, 1, 2].map((i) => (
            <div key={i} style={{
              position: 'absolute',
              width: '200%',
              height: 60,
              backgroundColor: colors.yellow,
              transform: `rotate(${-15 + i * 15}deg) translateX(${interpolate(frame, [i * 8, i * 8 + 20], [-1200, 0], { extrapolateRight: 'clamp' })}px)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              top: 500 + i * 350,
            }}>
              <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: 28, fontWeight: 900, color: '#000', letterSpacing: 8 }}>
                ⚠️ CRIME SCENE DO NOT CROSS ⚠️ CRIME SCENE DO NOT CROSS ⚠️
              </div>
            </div>
          ))}
        </AbsoluteFill>
      </Sequence>

      {/* Evidence Markers */}
      <Sequence from={60} durationInFrames={90}>
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 30, justifyContent: 'center', padding: 60 }}>
            {Array.from({ length: 8 }, (_, i) => {
              const showAt = (frame - 60);
              const markerFrame = i * 10;
              const opacity = interpolate(showAt, [markerFrame, markerFrame + 8], [0, 1], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' });
              const scale = interpolate(showAt, [markerFrame, markerFrame + 8], [2, 1], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' });
              return (
                <div key={i} style={{
                  width: 100,
                  height: 120,
                  backgroundColor: colors.yellow,
                  borderRadius: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity,
                  transform: `scale(${scale})`,
                }}>
                  <div style={{ fontSize: 20, fontWeight: 700 }}>💩</div>
                  <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: 36, fontWeight: 900, color: '#000' }}>{i + 1}</div>
                </div>
              );
            })}
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* Big Stat */}
      <Sequence from={150} durationInFrames={90}>
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ textAlign: 'center', opacity: interpolate(frame - 150, [0, 15], [0, 1], { extrapolateRight: 'clamp' }) }}>
            <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: 80, fontWeight: 900, color: colors.red }}>
              274 lbs
            </div>
            <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: 36, color: colors.text, marginTop: 20 }}>
              of dog waste per year.
            </div>
            <div style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: 40,
              fontWeight: 700,
              color: colors.yellow,
              marginTop: 40,
              opacity: interpolate(frame - 150, [30, 50], [0, 1], { extrapolateRight: 'clamp' }),
            }}>
              You're standing in<br/>the evidence.
            </div>
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
              We clean up the evidence.
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
