export const SEARCH = "SEARCH";

//value = user?
export function search(value) {
  return { type: SEARCH, value };
}
