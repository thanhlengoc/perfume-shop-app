const signIn = (email, password) => (
    fetch('http://10.200.230.136/perfume-shop-server/login.php', {
        method: POST,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({email, password})
    })
    .then(res => res.text())
)
export default signIn;