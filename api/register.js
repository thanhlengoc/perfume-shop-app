
const register = (email, name, password) => (
    fetch('http://192.168.35.103/perfume-shop-server/register.php', 
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ email, name, password }),
    })
    .then(res => res.text())
);
export default register;