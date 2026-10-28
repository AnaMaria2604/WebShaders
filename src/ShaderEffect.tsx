import { Shader, Blob } from 'shaders/react'

export default function ShaderEffect() {
  return (
    <Shader>
      <Blob
        deformation={1.5}
        seed={52}
        size={0.8}
        speed={1.0}
        stops={[
          { color: "#00e5ff", position: 0 },
          { color: "#ff00aa", position: 0.5 },
          { color: "#8b00ff", position: 1 },
        ]}
      />
    </Shader>
  )
}