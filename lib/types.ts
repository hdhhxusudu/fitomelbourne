export type Product = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  priceCents: number;
  purityLabel: string;
  netWeightMg: number;
  sku: string;
  image?: string;
};

export type CartStoredLine = {
  slug: string;
  qty: number;
};
