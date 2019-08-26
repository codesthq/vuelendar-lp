// @TODO: min and max column size should be defined in some kind of config
export const maxColumnSize = 12;
export const minColumnSize = 0;
export default (size) => size >= minColumnSize && size <= maxColumnSize;
