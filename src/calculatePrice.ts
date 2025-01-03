type PriceParameters = {
  price: number;
  discount: number;
  isInstallment: boolean;
  months: number;
};

export function calculatePrice({
  price,
  discount,
  isInstallment,
  months,
}: PriceParameters): number {
  if (isInstallment) {
    return (price * (1 - discount / 100)) / months;
  } else {
    return price * (1 - discount / 100);
  }
}
