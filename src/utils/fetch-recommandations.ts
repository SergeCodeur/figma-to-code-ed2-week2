export const fetchRecommandations = async () => {
  try {
    const request = await fetch(
      "https://mock.shop/api?query={products(first:%208,%20sortKey:%20CREATED_AT,%20reverse:%20true){edges%20{node%20{title%20description%20images(first:%201){edges%20{node%20{url}}}%20variants(first:%203){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}"
    );
    const response = await request.json();
    return response.data.products.edges;
  } catch (error) {
    console.error("Failed to fetch products recommandations :", error);
    return [];
  }
};
