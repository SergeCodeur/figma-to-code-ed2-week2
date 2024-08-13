// src\utils\fetchCollections.ts
export const fetchCollections = async () => {
  try {
    const request = await fetch(
      "https://mock.shop/api?query={collections(first:%203){edges%20{node%20{title%20products(first:%2020){edges%20{node%20{title%20description%20images(first:%201){edges%20{node%20{url}}}%20variants(first:%203){edges%20{node%20{price%20{amount%20currencyCode},%20selectedOptions%20{name%20value}}}}}}}}}}}"
    );
    const response = await request.json();
    return response.data.collections.edges;
  } catch (error) {
    console.error("Failed to fetch collections:", error);
    return [];
  }
};
