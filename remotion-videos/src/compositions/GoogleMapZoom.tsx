import { AbsoluteFill, interpolate, useCurrentFrame, Sequence } from 'remotion';

const colors = {
  bg: '#1a1a2e',
  green: '#4a9c4a',
  amber: '#d4a574',
  text: '#e8f0e8',
  blue: '#4285f4',
};

const ZoomLevel: React.FC<{ emoji: string; label: string; frame: number; delay: number }> = ({ emoji, label, frame, delay }) => {
  const progress = interpolate(frame, [delay, delay + 20], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const scale = interpolate(frame, [delay, delay + 20], [0.3, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  return (
    <div style={{
      opacity: progress,
      transform: `scale(${scale})`,
      textAlign: 'center',
      marginBottom: 10,
    }}>
      <div style={{ fontSize: 80 }}>{emoji}</div>
      <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: 28, color: '#aaa', marginTop: 5 }}>{label}</div>
    </div>
  );
};

export const GoogleMapZoom: React.FC = () => {
  const frame = useCurrentFrame();

  const levels = [
    { emoji: '🌍', label: 'Earth', delay: 0 },
    { emoji: '🏙️', label: 'St. Louis', delay: 30 },
    { emoji: '🏘️', label: 'Your Neighborhood', delay: 60 },
    { emoji: '🏡', label: 'Your House', delay: 90 },
    { emoji: '💩', label: '...oh no', delay: 120 },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      {/* Zoom Levels */}
      <Sequence from={0} durationInFrames={180}>
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
          <div style={{
            fontFamily: 'system-ui, sans-serif',
            fontSize: 32,
            color: colors.blue,
            marginBottom: 40,
            opacity: interpolate(frame, [0, 10], [0, 1], { extrapolateRight: 'clamp' }),
          }}>
            📍 Zooming in...
          </div>
          {levels.map((level, i) => (
            <ZoomLevel key={i} {...level} frame={frame} />
          ))}
        </AbsoluteFill>
      </Sequence>

      {/* GPS Pin Drop */}
      <Sequence from={180} durationInFrames={60}>
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ textAlign: 'center', opacity: interpolate(frame - 180, [0, 15], [0, 1], { extrapolateRight: 'clamp' }) }}>
            <div style={{ fontSize: 80, marginBottom: 20 }}>📍</div>
            <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: 44, fontWeight: 700, color: colors.text, marginBottom: 15 }}>
              Tidy Tails is
            </div>
            <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: 52, fontWeight: 900, color: colors.green }}>
              1 tap away.
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
              St. Louis County & Surrounding
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
