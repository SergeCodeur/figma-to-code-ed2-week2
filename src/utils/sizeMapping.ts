export const sizeMapping = (size: string): string => {
  const mapping: { [key: string]: string } = {
    "Extra Small": "xs",
    Small: "s",
    Medium: "m",
    Large: "l",
    "Extra Large": "xl",
  };

  return mapping[size] || size; // return the original size if no mapping is found
};
