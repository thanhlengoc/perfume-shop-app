const searchProduct = (key) => {
    const url = `http://10.200.230.168/perfume-shop-server/search.php?key=${key}`;
    return fetch(url)
    .then(res => res.json());
};
export default searchProduct;