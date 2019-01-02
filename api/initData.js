const initData = () => (
    fetch('http://192.168.35.103/perfume-shop-server/')
    .then(res => res.json())
);
export default initData;