var customers = []
var modal = document.getElementById("myModal").value;

$(document).ready(function () {
    console.log("ready!");
    //load data
    $.ajax({
        url: "data.json"
    }).done(function (data) {
        //$(this).addClass("done");
        console.log("DONE", data)
        for (let d in data) {
            //Save the data rec into global var.
            customers.push(data[d])
            let dataStr = `<tr>
                <td>${data[d].name}</td>
                <td>${data[d].email}</td>
                <td>${data[d].phone}</td>
         
            </tr>`
            $("#databody tr:last").after(dataStr)
        }

        console.log(customers)
    });
});

function openModal(){
    $('#myModal').modal('show')
    
}

function closeModal(){
    $('#myModal').modal('hide')
    
}

function addToCustomer(){
    let customerObj = {
        name: $('#name').val(),
        email: $('#email').val(),
        phone: $('#phone').val()
    }
    $('#databody').html("")
    customers.push(customerObj)
    loadData()
   
}

function deleteCustomers(index){
    console.log("DELETE",index)
    delete customers[index]
    $('#databody').html("")
    loadData()
}

function loadData(){
    let allRows = ""
    let datatable = document.getElementById("data-table")
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
    $('#databody').html(allRows)
    datatable.append(customers[p])
    
}