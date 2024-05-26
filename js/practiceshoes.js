let products = {
    data: [
        {
            name: "Giày Luyện Tập Nữ Skechers GOwalk Massage Fit - Xám",
            brand: "SKECHERS",
            price: " 3.099.000đ",
            image: "items/pract1.jpg",
        },

        {
            name: "Giày Tập Luyện Nữ Skechers GOwalk Flex - Slip In - Be",
            brand: "SKECHERS",
            price: " 2.523.000đ",
            image: "items/pract2.jpg"
        },

        {
            name: "Giày Luyện Tập Nữ Skechers GOwalk Flex - Grand Entrance - Xám",
            brand: "SKECHERS",
            price: "  1.920.000đ",
            image: "items/pract3.jpg"
        },

        {
            name: "Giày Luyện Tập Nữ Skechers GOwalk 7 - Xanh Navy",
            brand: "SKECHERS",
            price: " 2.293.000đ",
            image: "items/pract4.jpg"
        },

        {
            name: "Giày Luyện Tập Nữ Skechers GOwalk 7 - Trắng",
            brand: "SKECHERS",
            price: " 2.210.000đ",
            image: "items/pract5.jpg"
        },

        {
            name: "Giày Luyện Tập Nữ Skechers GOwalk 7 - Đen",
            brand: "SKECHERS",
            price: " 2.632.000đ",
            image: "items/pract6.jpg"
        },

        {
            name: "Giày Luyện Tập Nữ Skechers D'Lux Fitness - Xanh Navy",
            brand: "SKECHERS",
            price: " 1.243.000đ",
            image: "items/pract7.jpg"
        },

        {
            name: "Giày Tập Luyện Nam Skechers GOwalk 6 - Slip In - Xám",
            brand: "SKECHERS",
            price: " 1.558.000đ",
            image: "items/pract8.jpg"
        },

        {
            name: "Giày Luyện Tập Nữ Under Armour Project Rock 5 - Trắng",
            brand: "UNDER ARMOUR",
            price: " 2.325.000đ",
            image: "items/pract9.jpg"
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