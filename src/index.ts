import { calculatePrice } from "./calculatePrice.js";
import { normalizeData } from "./normalizeData.js";
import { posts } from "./postsData.js";

const price = calculatePrice({
  price: 100000,
  discount: 25,
  isInstallment: true,
  months: 12,
});
console.log(price);

const normalizePosts = normalizeData(posts);
console.log(normalizePosts);
