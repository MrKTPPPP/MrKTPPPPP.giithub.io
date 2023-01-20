var products = [
    {
        title: "Playstaion 5",
        quantity: 1,
        price: 19000,
        discount: 0
    },
    {
        title: "Playstation 4",
        quantity: 1,
        price: 8000,
        discount: 500
    }
]
var modal = document.getElementById("myModal").value;

function openModal(){
    $('#myModal').modal('show')
}

function closeModal(){
    $('#myModal').modal('hide') 
}

function addToProduct(){
    let productObj = {
        title: $('#title').val(),
        quantity: $('#quantity').val(),
        price: $('#price').val(),
        discount: $('#discount').val()
    }
    $('#databody').html("")
    products.push(productObj)
    loadData()
}

function deleteProduct(index){
    console.log("DELETE",index)
    delete products[index]
    $('#databody').html("")
    loadData()
}

function clearTable() {
    const parent = document.getElementById("data-body");
    while(parent.firstChild)
    {
        parent.removeChild(parent.firstChild);
    }
    $("#totalDiscount").html(0)
    $("#gross").html(0)
    $("#vat").html(0)
    $("#net").html(0)
    products = []
    loadData()
}

function loadData() {
    let allRows = ""
    let gross = 0
    let totalDiscount = 0
    for (let p in products) {
        let cellTitle = `<td><img class='icon' src='Delete icon.png' onclick='deleteProduct("${p}")'> ` + products[p].title + "</td>"
        let cellQuantity = '<td class="text-right">' + products[p].quantity + "</td>"
        let cellPrice = '<td class="text-right">' + products[p].price + "</td>"
        let discount = products[p].discount
        totalDiscount += Number(products[p].discount)
        let cellDiscount = '<td class="text-right">' + discount + "</td>"
        let total = (products[p].price * products[p].quantity) - products[p].discount
        gross += total
        let cellTotal = '<td class="text-right">' + total + "</td>"
        let row = `<tr>${cellTitle}${cellQuantity}${cellPrice}${cellDiscount}${cellTotal}</tr>`
        allRows += row
    }
    $('#data-body').html(allRows)
    $("#totalDiscount").html(totalDiscount)
    $("#gross").html(gross)
    let vat = gross * 0.07
    let net = gross + vat
    $("#vat").html(vat)
    $("#net").html(net)
    document.getElementById("vat").innerHTML = vat.toFixed(2)
    document.getElementById("net").innerHTML = net.toFixed(2)
}

