export function replaceAllNotChinese(str: string): string {
  return str.replace(
    /[a-zA-z0-9\s]+/g,
    (match) => `<span class="hack">${match}</span>`
  )
}
