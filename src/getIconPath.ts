const SIZE = "24px";
const DIR = "data";

export const getIconPath = (itemName: string) => {
  return `${DIR}/${SIZE}-${itemName.replace(" ", "_")}.png`;
};

export const getIconName = (itemName: string) => {
  return `${SIZE}-${itemName.replace(" ", "_")}.png`;
}