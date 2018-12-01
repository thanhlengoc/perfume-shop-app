const checkLogin = (token) => (
    fetch('http://10.200.232.183/perfume-shop-server/check_login.php',
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

//module.exports = checkLogin;
export default checkLogin;