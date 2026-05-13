import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: '#0a0a0a',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 6,
        }}
      >
        <span
          style={{
            fontSize: 14,
            fontWeight: 900,
            color: '#ff2d55',
            letterSpacing: '-0.04em',
            fontFamily: 'sans-serif',
          }}
        >
          KN
        </span>
      </div>
    ),
    { ...size }
  )
}
