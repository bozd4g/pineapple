export function slugGenerator(s: string) {
   return s
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/&/g, '-y-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-');
}
