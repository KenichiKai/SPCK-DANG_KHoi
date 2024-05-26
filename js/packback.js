let products = {
    data: [
        {
            name: "Ba Lô Puma Academy - Đen",
            brand: "PUMA",
            price: " 999.000đ",
            image: "items/balo1.jpg",
        },

        {
            name: "Ba Lô Thể Thao Puma Downtown - Nâu",
            brand: "PUMA",
            price: " 1.170.000đ",
            image: "items/balo2.jpg"
        },

        {
            name: "Ba Lô Under Armour Loudon Lite - Xanh Navy",
            brand: "UNDER ARMOUR",
            price: " 640.000đ",
            image: "items/balo3.jpg"
        },

        {
            name: "Túi Trống Luyện Tập Under Armour Undeniable 5.0 Duffle - Xám",
            brand: "UNDER ARMOUR",
            price: " 850.000đ",
            image: "items/balo4.jpg"
        },

        {
            name: "Ba Lô Under Armour Loudon Sm - Xanh Navy",
            brand: "UNDER ARMOUR",
            price: " 1.240.000đ",
            image: "items/balo5.jpg"
        },

        {
            name: "Ba Lô Under Armour Loudon - Xám",
            brand: "UNDER ARMOUR",
            price: " 570.000đ",
            image: "items/balo6.jpg"
        },

        {
            name: "Ba Lô Under Armour Loudon Lite - Xanh Navy",
            brand: "UNDER ARMOUR",
            price: " 670.000đ",
            image: "items/balo7.jpg"
        },

        {
            name: "Túi đeo chéo Ellesse Summer Resort-Trevaro Cross",
            brand: "Ellesse",
            price: " 340.000đ",
            image: "items/balo8.jpg"
        },

        {
            name: "Túi Trống Thể Thao Thể Thao Cỡ Nhỏ Adidas 4Athlts - Đen",
            brand: "Adidas",
            price: " 980.000đ",
            image: "items/balo9.jpg"
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