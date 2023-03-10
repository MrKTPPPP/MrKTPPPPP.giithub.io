// define data
var products = [
    {
        name: "PS5",
        quantity: 1,
        ppu: 19000
    },
    {
        name: "PS4",
        quantity: 2,
        ppu: 8000
    },
    {
        name: "Xbox One",
        quantity: 1,
        ppu: 22000
    },
    {
        name: "Xbox S",
        quantity: 1,
        ppu: 18000
    }
]

function loadData() {

    let productList = document.getElementById("productList")
    let gross = 0
    for (let p in products) {
        let row = document.createElement("tr")
        let productName = document.createElement("td")
        productName.innerHTML = products[p].name

        let quantity = document.createElement("td")
        quantity.innerHTML = products[p].quantity
        quantity.classList.add("text-right")

        let ppu = document.createElement("td")
        ppu.innerHTML = products[p].ppu
        ppu.classList.add("text-right")

        let total = document.createElement("td")
        total.innerHTML = products[p].ppu * products[p].quantity
        total.classList.add("text-right")
        gross += products[p].ppu * products[p].quantity

    row.appendChild(productName)
    row.appendChild(quantity)
    row.appendChild(ppu)
    row.appendChild(total)
    productList.appendChild(row)
    }

    let grossElem = document.getElementById("gross")
    grossElem.innerHTML = gross

    let vat = gross * 0.07
    let net = gross + vat
    document.getElementById("vat").innerHTML = vat.toFixed(2)
    document.getElementById("net").innerHTML = net.toFixed(2)

}


