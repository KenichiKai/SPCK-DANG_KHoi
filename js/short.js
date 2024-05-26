let products = {
    data: [
        {
            name: "Quần Ngắn Nam Under Armour Iso-Chill - Đen",
            brand: "UNDER ARMOUR",
            price: " 299.000đ",
            image: "items/short1.jpg",
        },

        {
            name: "Quần Ngắn Nam Under Armour Iso-Chill - Be",
            brand: "UNDER ARMOUR",
            price: " 470.000đ",
            image: "items/short2.jpg"
        },

        {
            name: "Quần Ngắn Nam Under Armour Drive Tapered - Xanh Navy",
            brand: "UNDER ARMOUR",
            price: " 340.000đ",
            image: "items/short3.jpg"
        },

        {
            name: "Quần Ngắn Nam Under Armour Vanish Woven 6 - Xám",
            brand: "UNDER ARMOUR",
            price: " 420.000đ",
            image: "items/short4.jpg"
        },

        {
            name: "Quần Ngắn Nam Under Armour Launch Elite 5'' - Đen",
            brand: "UNDER ARMOUR",
            price: " 540.000đ",
            image: "items/short5.jpg"
        },

        {
            name: "Quần Ngắn Nữ Under Armour Run Stamina 2-In-1 - Đen",
            brand: "UNDER ARMOUR",
            price: " 570.000đ",
            image: "items/short6.jpg"
        },

        {
            name: "Quần Ngắn Nam Under Armour Peak Woven - Xám",
            brand: "UNDER ARMOUR",
            price: " 130.000đ",
            image: "items/short7.jpg"
        },

        {
            name: "Quần Ngắn Nam Under Armour Project Rock Woven Printed - Đen",
            brand: "UNDER ARMOUR",
            price: " 370.000đ",
            image: "items/short8.jpg"
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