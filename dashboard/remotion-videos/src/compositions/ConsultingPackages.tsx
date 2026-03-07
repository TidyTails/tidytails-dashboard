import { AbsoluteFill, interpolate, useCurrentFrame, Sequence } from 'remotion';

const colors = {
  bg: '#0d0d12',
  card: '#16161c',
  purple: '#9c4a9c',
  green: '#4a9c4a',
  blue: '#4a7cc4',
  amber: '#d4a574',
  text: '#e8e8f0',
  muted: '#8a8a9a',
};

export const ConsultingPackages: React.FC = () => {
  const frame = useCurrentFrame();

  const packages = [
    { 
      name: '🌱 STARTER', 
      price: '$497/mo', 
      color: colors.green,
      features: 'GBP setup • 16 posts/mo • Monthly call' 
    },
    { 
      name: '🚀 GROWTH', 
      price: '$997/mo', 
      color: colors.blue,
      features: '+ Landing page • 8 ads • Auto-responder' 
    },
    { 
      name: '💎 SCALE', 
      price: '$1,997/mo', 
      color: colors.purple,
      features: '+ AI chatbot • Email marketing • Weekly calls' 
    },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      {/* Intro */}
      <Sequence from={0} durationInFrames={60}>
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
          <div style={{
            fontFamily: 'system-ui, sans-serif',
            fontSize: 48,
            fontWeight: 800,
            color: colors.purple,
            textAlign: 'center',
            opacity: interpolate(frame, [0, 20], [0, 1]),
          }}>
            AI Marketing<br/>
            <span style={{ color: colors.text }}>for Local Businesses</span>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* Packages */}
      {packages.map((pkg, i) => (
        <Sequence key={i} from={60 + i * 90} durationInFrames={90}>
          <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', padding: 40 }}>
            <div style={{
              backgroundColor: colors.card,
              padding: 40,
              borderRadius: 24,
              width: '90%',
              borderLeft: `8px solid ${pkg.color}`,
              opacity: interpolate(frame - (60 + i * 90), [0, 20], [0, 1]),
              transform: `scale(${interpolate(frame - (60 + i * 90), [0, 20], [0.9, 1])})`,
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 20,
              }}>
                <div style={{
                  fontFamily: 'system-ui, sans-serif',
                  fontSize: 36,
                  fontWeight: 700,
                  color: pkg.color,
                }}>
                  {pkg.name}
                </div>
                <div style={{
                  fontFamily: 'system-ui, sans-serif',
                  fontSize: 42,
                  fontWeight: 800,
                  color: colors.amber,
                }}>
                  {pkg.price}
                </div>
              </div>
              <div style={{
                fontFamily: 'system-ui, sans-serif',
                fontSize: 24,
                color: colors.muted,
              }}>
                {pkg.features}
              </div>
            </div>
          </AbsoluteFill>
        </Sequence>
      ))}

      {/* Guarantee */}
      <Sequence from={330} durationInFrames={60}>
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', padding: 40 }}>
          <div style={{
            backgroundColor: colors.card,
            padding: 40,
            borderRadius: 24,
            textAlign: 'center',
            border: `2px solid ${colors.green}`,
            opacity: interpolate(frame - 330, [0, 20], [0, 1]),
          }}>
            <div style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: 36,
              fontWeight: 700,
              color: colors.green,
              marginBottom: 15,
            }}>
              ✅ Month-to-month
            </div>
            <div style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: 28,
              color: colors.muted,
            }}>
              Cancel anytime. No long-term contracts.
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* CTA */}
      <Sequence from={390} durationInFrames={60}>
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
          <div style={{
            textAlign: 'center',
            opacity: interpolate(frame - 390, [0, 15], [0, 1]),
          }}>
            <div style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: 36,
              color: colors.text,
              marginBottom: 20,
            }}>
              Free 15-min call — no pressure.
            </div>
            <div style={{
              fontFamily: 'monospace',
              fontSize: 42,
              color: colors.purple,
              fontWeight: 700,
              marginBottom: 15,
            }}>
              636-354-7406
            </div>
            <div style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: 24,
              color: colors.muted,
            }}>
              cartervhomes@gmail.com
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};
