export default function applySpacing(spacing) {
  return value => {
    if (!value) {
      return undefined
    }

    if (Array.isArray(value)) {
      return value.map(v => v * spacing)
    }

    return value * spacing
  }
}
