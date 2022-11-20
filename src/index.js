import { goods } from './goods.js';

/**
 * @param {string} brand
 * @returns {*}
 */
const brandFilter = (brand) => goods.filter(item => brand === item.brand);

/**
 * @param {string} color
 * @returns {*}
 */
const colorFilter = (color) => goods.filter(item => color === item.color);

/**
 * @param {string} model
 * @returns {*}
 */
const modelFilter = (model) => goods.filter(item => model === item.model);

/**
 * @param {number} memory
 * @returns {*}
 */
const memoryFilter = (memory) => goods.filter(item => memory === item.memory);

/**
 * @param {number} price
 * @returns {*}
 */
const priceFilter = (price) => goods.filter(item => price === item.price);

/**
 * @param {string} country
 * @returns {*}
 */
const countryFilter = (country) => goods.filter(item => country === item.country);

/**
 * @param {string} os
 * @returns {*}
 */
const osFilter = (os) => goods.filter(item => os === item.os);

/**
 * @param {number} from
 * @param {number} to
 */
const rangeFilter = (from, to) => goods.filter(item => item.price >= from && item.price <= to);

const minPriceReducer = () => {
  return goods.reduce((accum, item) => Math.min(accum, item.price), goods[0].price);
};


const maxPriceReducer = () => {
  return goods.reduce((accum, item) => Math.max(accum, item.price), goods[0].price);
};

const toMaxSorter = () => goods.sort((min, max) => max.price - min.price);
const toMinSorter = () => goods.sort((min, max) => min.price - max.price);

export const filters = {
  brandFilter,
  countryFilter,
  priceFilter,
  osFilter,
  colorFilter,
  memoryFilter,
  modelFilter,
  rangeFilter,
};

export const reducers = {
  minPriceReducer,
  maxPriceReducer,
};

export const sorters = {
  toMaxSorter,
  toMinSorter,
};
