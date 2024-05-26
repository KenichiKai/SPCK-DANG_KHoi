let products = {
    data: [
        {
            name: "Giày Chạy Bộ Nam Under Armour Flow Velociti Wind 2 - Đen",
            brand: "UNDER ARMOUR",
            price: " 2.199.000đ",
            image: "items/sport1.jpg",
        },

        {
            name: "Giày Chạy Bộ Nữ Under Armour Hovr Machina 3 - Cam",
            brand: "UNDER ARMOUR",
            price: " 2.870.000đ",
            image: "items/sport2.jpg"
        },

        {
            name: "Giày Chạy Bộ Nữ Under Armour Flow Synchronicity - Xám",
            brand: "UNDER ARMOUR",
            price: " 1.730.000đ",
            image: "items/sport3.jpg"
        },

        {
            name: "Giày Chạy Bộ Nữ Under Armour Hovr™ Machina 2 Se - Hồng",
            brand: "UNDER ARMOUR",
            price: " 1.993.000đ",
            image: "items/sport4.jpg"
        },

        {
            name: "Giày Chạy Bộ Nữ Skechers GORun Razor 4 - Trắng",
            brand: "SKECHERS",
            price: " 1.974.000đ",
            image: "items/sport5.jpg"
        },

        {
            name: "Giày Chạy Bộ Nam Skechers GORun Consistent - Đen",
            brand: "SKECHERS",
            price: "  1.450.000đ",
            image: "items/sport6.jpg"
        },

        {
            name: "Giày Chạy Bộ Nam Under Armour Hovr Machina 3 - Cam",
            brand: "UNDER ARMOUR",
            price: "1.642.000đ",
            image: "items/sport7.jpg"
        },

        {
            name: "Giày Chạy Bộ Nữ Under Armour Hovr Machina 3 - Đen",
            brand: "UNDER ARMOUR",
            price: " 2.345.000đ",
            image: "items/sport8.jpg"
        },

        {
            name: "Giày Chạy Bộ Nam Hoka Bondi 8 - Xanh Dương",
            brand: "HOKA",
            price: " 1.780.000đ",
            image: "items/sport9.jpg"
        },

        {
            name: "Giày Chạy Bộ Nam Hoka Clifton 9 Wide - Be",
            brand: "HOKA",
            price: " 3.119.000đ",
            image: "items/sport10.jpg"
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