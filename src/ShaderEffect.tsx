import { Shader, Blob } from 'shaders/react'

export default function ShaderEffect() {
  return (
    <Shader>
      <Blob
        center={{
          x: 0.5,
          y: 0.5
        }}
        deformation={0.7}
        seed={0.3}
        size={0.65}
        speed={0.3}
        stops={[{ color: "#ff4500", position: 0 }, { color: "#ffd700", position: 1 }]} />
    </Shader>
  )
}