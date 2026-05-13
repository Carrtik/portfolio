declare module 'vanta/dist/vanta.net.min' {
  const NET: (config: Record<string, unknown>) => { destroy: () => void }
  export default NET
}

declare module 'vanta/dist/vanta.halo.min' {
  const HALO: (config: Record<string, unknown>) => { destroy: () => void }
  export default HALO
}

declare module 'vanta/dist/vanta.waves.min' {
  const WAVES: (config: Record<string, unknown>) => { destroy: () => void }
  export default WAVES
}

declare module 'vanta/dist/vanta.birds.min' {
  const BIRDS: (config: Record<string, unknown>) => { destroy: () => void }
  export default BIRDS
}
