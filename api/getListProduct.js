const getListProduct = (idType, page) => {
    let url;
    if (idType !== 'COLLECTION') {
        url = `http://10.200.230.136/perfume-shop-server/product_by_type.php?id_type=${idType}&page=${page}`;
    } else {
        url = `http://10.200.230.136/perfume-shop-server/get_collection.php?page=${page}`;
    }
    return fetch(url)
    .then(res => res.json());
};
export default getListProduct;