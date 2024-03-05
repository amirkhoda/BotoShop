const shortenText = (text) => {
  return text.split(" ").slice(0, 3).join("");
};

const searchProducts = (products, search) => {
  if (!search) return products;

  const seachedProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search)
  );

  return seachedProducts;
};

const filterProducts = (products, category) => {
  if (!category) return products;
  const filteredProducts = products.filter((p) => p.category === category);
  return filteredProducts;
};

const creatQueryObject = (currentQuery, newQuery) => {
  if (newQuery.category === "all") {
    const { category, ...rest } = currentQuery;
    return rest;
  }
  if (newQuery.search === "") {
    const { search, ...rest } = currentQuery;
    return rest;
  }
  return { ...currentQuery, ...newQuery };
};

const getInitialQuery = (searchParams) => {
  const query = {};
  const search = searchParams.get("search");
  const category = searchParams.get("category");
  if (search) query.search = search;
  if (category) query.category = category;
  return query;
};
export {
  shortenText,
  searchProducts,
  filterProducts,
  creatQueryObject,
  getInitialQuery,
};
