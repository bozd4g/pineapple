export function slugGenerator(s: string) {
   return s
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '');
}
