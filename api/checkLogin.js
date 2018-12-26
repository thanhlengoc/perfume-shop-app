const checkLogin = (token) => (
    fetch('http://10.200.230.168/perfume-shop-server/check_login.php',
    {   
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ token })
    })
    .then((res) => res.json())
);
export default checkLogin;