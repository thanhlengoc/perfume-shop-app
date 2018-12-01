const initData = () => (
    fetch('http://10.200.232.183/perfume-shop-server/')// eslint-disable-line
    .then(res => res.json())
);

export default initData;