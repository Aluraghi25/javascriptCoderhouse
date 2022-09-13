fetch("https://criptoya.com/api/dolar")
.then(response =>response.json())
.then(({solidario, ccl, mep, blue}) => {
    console.log(solidario, ccl, mep, blue)
})