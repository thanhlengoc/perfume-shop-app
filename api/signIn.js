const signIn = (email, password) => (
    fetch('http://192.168.35.103/perfume-shop-server/login.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({email, password})
    })
    .then(res => res.json())
)
export default signIn;