const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

export const basePath = rawBasePath === "/" ? "" : rawBasePath.replace(/\/$/, "")

export function withBasePath(path: `/${string}`) {
  return `${basePath}${path}`
}
