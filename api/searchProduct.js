const searchProduct = (key) => {
    const url = `http://192.168.35.103/perfume-shop-server/search.php?key=${key}`;
    return fetch(url)
    .then(res => res.json());
};
export default searchProduct;