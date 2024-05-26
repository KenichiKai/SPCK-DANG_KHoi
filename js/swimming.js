let products = {
    data: [
        {
            name: "Quần Bơi Nam Speedo Dive Splice - Xanh Navy",
            brand: "SPEEDO",
            price: " 299.000đ",
            image: "items/swim1.jpg",
        },

        {
            name: "Quần Bơi Nam Speedo Tech Panel - Xanh Navy",
            brand: "SPEEDO",
            price: " 470.000đ",
            image: "items/swim2.jpg"
        },

        {
            name: "Quần Bơi Nữ Speedo Panel Printed - Hồng",
            brand: "PUMA",
            price: " 270.000đ",
            image: "items/swim3.jpg"
        },

        {
            name: "Đồ Bơi Một Mảnh Nữ Speedo Allover Printed Adjustable Thinstrap - Cam",
            brand: "SPEEDO",
            price: "540.000đ",
            image: "items/swim5.jpg"
        },

        {
            name: "Đồ Bơi Một Mảnh Nữ Speedo Shaping Contoureclipse - Đen",
            brand: "SPEEDO",
            price: " 470.000đ",
            image: "items/swim4.jpg"
        },

        {
            name: "Đồ Bơi Một Mảnh Nữ Speedo Zipper Front High Neck Kneesuit - Đen",
            brand: "SPEEDO",
            price: " 780.000đ",
            image: "items/swim6.jpg"
        },

        {
            name: "Áo Bơi Chống Nắng Nam Speedo End+ Splice - Xanh Navy",
            brand: "SPEEDO",
            price: " 670.000đ",
            image: "items/swim7.jpg"
        },

        {
            name: "Quần Bơi Nam Speedo Hyper Boom V-Cut - Đen",
            brand: "SPEEDO",
            price: " 430.000đ",
            image: "items/swim8.jpg"
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