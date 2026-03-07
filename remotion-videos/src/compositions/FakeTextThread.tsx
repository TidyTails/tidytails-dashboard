import { AbsoluteFill, interpolate, useCurrentFrame, Sequence } from 'remotion';

const colors = {
  bg: '#000000',
  bubble: '#34c759',
  bubbleIncoming: '#333333',
  green: '#4a9c4a',
  amber: '#d4a574',
  text: '#e8f0e8',
};

const MessageBubble: React.FC<{ text: string; incoming?: boolean; delay: number; frame: number }> = ({ text, incoming, delay, frame }) => {
  const opacity = interpolate(frame, [delay, delay + 10], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const translateY = interpolate(frame, [delay, delay + 10], [30, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  return (
    <div style={{
      alignSelf: incoming ? 'flex-start' : 'flex-end',
      backgroundColor: incoming ? colors.bubbleIncoming : colors.bubble,
      borderRadius: 22,
      padding: '16px 24px',
      maxWidth: '75%',
      opacity,
      transform: `translateY(${translateY}px)`,
      marginBottom: 12,
    }}>
      <div style={{
        fontFamily: '-apple-system, system-ui, sans-serif',
        fontSize: 32,
        color: '#fff',
      }}>
        {text}
      </div>
    </div>
  );
};

export const FakeTextThread: React.FC = () => {
  const frame = useCurrentFrame();

  const messages = [
    { text: 'cookout at my place Saturday! 🔥🥩', incoming: true, delay: 15 },
    { text: "let's gooo! 🙌", incoming: false, delay: 45 },
    { text: 'actually... let\'s do inside', incoming: true, delay: 80 },
    { text: 'what why??', incoming: false, delay: 110 },
    { text: '...the backyard situation', incoming: true, delay: 140 },
    { text: 'how bad is it?', incoming: false, delay: 165 },
    { text: '💩💩💩💩💩💩💩💩', incoming: true, delay: 190 },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      {/* Chat Header */}
      <Sequence from={0} durationInFrames={240}>
        <AbsoluteFill>
          <div style={{
            padding: '60px 30px',
            borderBottom: '1px solid #222',
            textAlign: 'center',
          }}>
            <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: 24, color: '#888' }}>iMessage</div>
            <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: 32, fontWeight: 600, color: '#fff', marginTop: 8 }}>
              🏠 Dave
            </div>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '30px 24px',
            marginTop: 20,
          }}>
            {messages.map((msg, i) => (
              <MessageBubble key={i} text={msg.text} incoming={msg.incoming} delay={msg.delay} frame={frame} />
            ))}
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* CTA */}
      <Sequence from={240} durationInFrames={60}>
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ textAlign: 'center', opacity: interpolate(frame - 240, [0, 15], [0, 1], { extrapolateRight: 'clamp' }) }}>
            <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: 44, fontWeight: 800, color: colors.text, marginBottom: 15 }}>
              Don't be Dave's yard.
            </div>
            <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: 48, fontWeight: 700, color: colors.green, marginBottom: 30 }}>
              🐕 TIDY TAILS
            </div>
            <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: 32, color: colors.amber, marginBottom: 40 }}>
              Weekly cleanup • St. Louis
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
