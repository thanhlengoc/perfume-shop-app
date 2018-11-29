const signIn = (email, password) => (
    fetch('http://10.200.237.10/api/login.php', {
        method: POST,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({email, password})
    })
    .then(res => res.text())
)

module.exports = signIn;