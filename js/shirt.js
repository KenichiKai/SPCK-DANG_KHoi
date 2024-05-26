let products = {
    data: [
        {
            name: "Áo Thun Nam Puma Power Printed - Xanh Navy",
            brand: "PUMA",
            price: " 599.000đ",
            image: "items/shirt1.jpg",
        },

        {
            name: "Áo Tay Ngắn Nam Under Armour Heatgear",
            brand: "UNDER ARMOUR",
            price: " 393.000đ",
            image: "items/shirt2.jpg"
        },

        {
            name: "Áo Thun Thể Thao Nam Under Armour Gl Foundation - Đen",
            brand: "UNDER ARMOUR",
            price: " 370.000đ",
            image: "items/shirt3.jpg"
        },

        {
            name: "Áo Thun Nam Puma Graphics Wave - Xanh Mint",
            brand: "PUMA",
            price: " 479.000đ",
            image: "items/shirt4.jpg"
        },

        {
            name: "Áo Thun Nam Lfc Retro Banner - Xanh Navy",
            brand: "LFC",
            price: " 434.000đ",
            image: "items/shirt5.jpg"
        },

        {
            name: "Áo Thun Bé Trai Lfc Junior Raglan - Xám",
            brand: "LFC",
            price: " 355.000đ",
            image: "items/shirt6.jpg"
        },

        {
            name: "Áo Thun Tay Ngắn Thời Trang Unisex Fila Stacked - Xanh Navy",
            brand: "FILA",
            price: " 447.000đ",
            image: "items/shirt7.jpg"
        },

        {
            name: "Áo Thun Tay Ngắn Thời Trang Unisex Fila Carnevale Di Fila - Đen",
            brand: "FILA",
            price: " 445.000đ",
            image: "items/shirt8.jpg"
        },
    ]
}
var productContainer = document.getElementById("products")
for (let i in products.data) {
    document.getElementById("products").insertAdjacentHTML("beforeend",
        ` 
    <div class="card">
                <div class="animate__animated animate__fadeInDown">
                    <div class="image-container">
                        <img src="${products.data[i].image}" alt="">
                       
                    </div>
                    <div class="container">
                        <h5 class="product-name">${products.data[i].name}</h5>
                        <h7 class="product-brand"><b></b>${products.data[i].brand}</h7>
                        <h5 class="product-price"><b></b>${products.data[i].price}</h5>
                        <button onclick="addToCart(${i})">Thêm vào giỏ hàng</button>            
                    </div>
                </div>
              
    `)
}

var searchInput = document.getElementById("search-input")
var searchBtn = document.getElementById("search")

searchInput.addEventListener("change", function(e)  {
    let inputValue = searchInput.value.toUpperCase()
    let cards = document.querySelectorAll(".card")
    let productBrand = document.querySelectorAll(".product-brand")
    let productName = document.querySelectorAll(".product-name")

    productName.forEach((item, index) => {
        if (item.innerHTML.includes(inputValue)) {
            console.log(inputValue)

            cards[index].classList.remove("hide")
        }
        else {
            cards[index].classList.add("hide")
        }
    })
})

function addToCart(index) {
    const listCart = JSON.parse(localStorage.getItem("cart")) || []
    listCart.push(products.data[index])
    localStorage.setItem("cart", JSON.stringify(listCart))
    alert("Add to cart successfully")
}