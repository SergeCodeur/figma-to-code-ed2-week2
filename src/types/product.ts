export type Recommendation = {
  node: Product;
};

export type Product = {
  title: string;
  description: string;
  images: {
    edges: {
      node: {
        url: string;
      };
    }[];
  };
  variants: {
    edges: {
      node: {
        price: {
          amount: string;
          currencyCode: string;
        };
        selectedOptions: {
          name: string;
          value: string;
        }[];
      };
    }[];
  };
};

export type Collection = {
  node: {
    title: string;
    products: {
      edges: {
        node: Product;
      }[];
    };
  };
};
