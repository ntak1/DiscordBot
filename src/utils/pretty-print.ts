export const prettyPrint = (s: string[]): string => {
    return s.reduce((prev, item) => `${prev}, ${item}`);
}