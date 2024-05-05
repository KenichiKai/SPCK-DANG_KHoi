var listProducts = JSON.parse(localStorage.getItem("cart")) || []

function render() {
    document.getElementById("products").innerHTML = null
    for(i in listProducts) {
        document.getElementById("products").insertAdjacentHTML("beforeend", `
         <div class="card">
        <div class="image-container">
            <img src="../${listProducts[i].image}" alt="">
        </div>
        <div class="container">
            <h5 class="product-name">${listProducts[i].name}</h5>
            <h6><b>Price:</b> ${listProducts[i].price}</h6>
            <button class="btnDelete" onclick="deleteProducts(${i}) ">Delete</button>
        </div>
    </div> 
         `)
    }
}

window.onload = render()

function deleteProducts(index) {
    alert("Are you sure about delete " + listProducts[index].name)
    listProducts.splice(index, 1) //Xóa phần tử tại vị trí index
    localStorage.setItem("cart", JSON.stringify(listProducts))
    render()
}

function deleteAll() {
    alert("Are you sure you want to remove all?")
    listProducts = []
    localStorage.setItem("cart", JSON.stringify(listProducts))
    render()
    
}