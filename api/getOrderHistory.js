const getOrderHistory = (token) => (
    fetch('http://10.200.230.168/perfume-shop-server/order_history.php',
    {   
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ token })
    })
    .then(res => res.json())
);
export default getOrderHistory;