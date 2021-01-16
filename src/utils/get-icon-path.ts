const SIZE = "24px";
const DIR = "data";

const capitalize = (name: string) => {
  let names = name.split(" ");
  return names.map(n => `${n[0].toUpperCase()}${n.slice(1, n.length)}`).reduce((prev, n) => `${prev}_${n}`); 
}

export const getIconPath = (itemName: string) => {
  itemName = capitalize(itemName);
  console.log(itemName);
  return `${DIR}/${SIZE}-${itemName}.png`;
};

export const getIconName = (itemName: string) => {
  itemName = capitalize(itemName);
  return `${SIZE}-${itemName}.png`;
}