import { calculatePrice } from "./calculatePrice.js";

const price = calculatePrice({
  price: 100000,
  discount: 25,
  isInstallment: true,
  months: 12,
});
console.log(price);
