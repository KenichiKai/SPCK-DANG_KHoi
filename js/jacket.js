let products = {
    data: [
        {
            name: "Áo Khoác Nam Under Armour Meridian Full-Zip - Xanh Dương",
            brand: "UNDER ARMOUR",
            price: " 1.349.000đ",
            image: "items/coat1.jpg",
        },

        {
            name: "Áo Khoác Nam Under Armour Storm Run - Trắng",
            brand: "UNDER ARMOUR",
            price: "780.000đ - 1.470.000đ",
            image: "items/coat2.jpg"
        },

        {
            name: "Áo Khoác Nam Under Armour Project Rock Mesh Varsity - Đen",
            brand: "UNDER ARMOUR",
            price: " 1.360.000đ",
            image: "items/coat3.jpg"
        },

        {
            name: "Áo Khoác Nữ Under Armour Rush Woven - Đen",
            brand: "UNDER ARMOUR",
            price: " 1.740.000đ",
            image: "items/coat4.jpg"
        },

        {
            name: ">Áo Khoác Nam Under Armour Project Rock Unstoppable Printed - Trắng",
            brand: "UNDER ARMOUR",
            price: " 3.470.000đ",
            image: "items/coat5.jpg"
        },

        {
            name: "Áo Khoác Nữ Under Armour Phantom Windbreaker - Trắng",
            brand: "UNDER ARMOUR",
            price: " 2.303.000đ",
            image: "items/coat6.jpg"
        },

        {
            name: "Áo Khoác Nữ Under Armour Sport Windbreaker - Tím",
            brand: "UNDER ARMOUR",
            price: " 990.000đ",
            image: "items/coat7.jpg"
        },

        {
            name: "Áo Khoác Nam Columbia Glennaker Lake™ Rain - Đỏ",
            brand: "COLUMBIA",
            price: " 2.670.000đ",
            image: "items/coat8.jpg"
        },

        {
            name: "Áo Khoác Nam Under Armour Project Rock Knit - Đen",
            brand: "UNDER ARMOUR",
            price: " 780.000đ",
            image: "items/coat9.jpg"
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