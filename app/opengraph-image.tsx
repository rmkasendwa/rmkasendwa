import { ImageResponse } from 'next/og';

export const alt = 'Ronald M. Kasendwa — Product Engineer';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '58px 64px 54px',
        overflow: 'hidden',
        color: '#f4f2ec',
        background: '#111411',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: -250,
          right: -175,
          width: 700,
          height: 700,
          border: '135px solid #1e5c45',
          borderRadius: '50%',
          opacity: 0.95,
        }}
      />
      <div
        style={{
          position: 'absolute',
          right: 0,
          bottom: 0,
          width: 390,
          height: 270,
          display: 'flex',
          opacity: 0.14,
          backgroundImage:
            'linear-gradient(rgba(244,242,236,0.55) 1px, transparent 1px), linear-gradient(90deg, rgba(244,242,236,0.55) 1px, transparent 1px)',
          backgroundSize: '38px 38px',
        }}
      />
      <div
        style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <span
            style={{ fontSize: 27, fontWeight: 700, letterSpacing: '-0.06em' }}
          >
            RMK<span style={{ color: '#81bfa2' }}>.</span>
          </span>
          <span
            style={{
              width: 54,
              height: 1,
              display: 'flex',
              background: 'rgba(244,242,236,0.35)',
            }}
          />
          <span
            style={{
              color: '#b8bdb7',
              fontSize: 15,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}
          >
            Kampala · Uganda
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: '10px 15px',
            color: '#eef0ea',
            border: '1px solid rgba(244,242,236,0.28)',
            borderRadius: 99,
            fontSize: 15,
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              display: 'flex',
              borderRadius: '50%',
              background: '#81bfa2',
            }}
          />
          Product Engineer
        </div>
      </div>
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          width: 990,
        }}
      >
        <span
          style={{
            marginBottom: 18,
            color: '#81bfa2',
            fontSize: 19,
            fontWeight: 600,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
          }}
        >
          Ronald M. Kasendwa
        </span>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            fontSize: 82,
            fontWeight: 600,
            letterSpacing: '-0.06em',
            lineHeight: 0.97,
          }}
        >
          Turning ideas into products that last.
        </div>
      </div>
      <div
        style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: 24,
          color: '#aeb5ae',
          borderTop: '1px solid rgba(244,242,236,0.16)',
          fontSize: 16,
        }}
      >
        <span>
          Product thinking · Software engineering · Cloud infrastructure
        </span>
        <span style={{ color: '#f4f2ec', fontWeight: 600 }}>
          rmkasendwa.com ↗
        </span>
      </div>
    </div>,
    size,
  );
}
