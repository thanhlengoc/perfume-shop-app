const initData = () => (
    fetch('http://10.200.230.168/perfume-shop-server/')
    .then(res => res.json())
);
export default initData;