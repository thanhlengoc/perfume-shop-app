
const register = (email, name, password) => (
    fetch('http://10.200.230.136/perfume-shop-server/register.php', {
        method: POST,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ email, name, password }),
    })
    .then(res => res.text())
);
export default register;