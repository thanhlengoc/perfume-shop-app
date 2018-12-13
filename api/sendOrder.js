const sendOrder = (token, arrayDetail) => {
    const data = { token, arrayDetail };
    console.log(data);
    return fetch('http://10.200.230.136/perfume-shop-server/cart.php',
    {   
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.text())
};
export default sendOrder;
