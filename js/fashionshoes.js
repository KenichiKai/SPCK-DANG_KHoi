let products = {
    data: [
        {
            name: "Giày Sneaker Unisex Puma X-Playstation - Trắng",
            brand: "PUMA",
            price: " 3.099.000đ",
            image: "../fashionshoes/WhitePUMA.jpg",
        },
                {
                    name: "MATRIX 1999 DECK",
                    price: " 249.000đ",
                    image: "matrix-1999-1.jpg"
                },
        
                {
                    name: "RAEDA DECK",
                    price: " 254.000đ",
                    image: "Raeda-Deck.jpg"
                },
        
                {
                    name: "MUSTY DECK",
                    price: " 135.000đ",
                    image: "Musty-Deck.jpg"
                },
        
                {
                    name: "TRISTIQUE DECK",
                    price: " 346.000đ",
                    image: "Tristique-deck.jpg"
                },
        
                {
                    name: "FIELD TRIP DECK",
                    price: " 224.000đ",
                    image: "Fied-Trip-deck.jpg"
                },
        
                {
                    name: "TARO RAINBOW LOGO DECK",
                    price: " 574.000đ",
                    image: "web-5.jpg"
                },
        
                {
                    name: "NEON RAINBOW LOGO DECK",
                    price: " 325.000đ",
                    image: "web-1.jpg"
                },
        
                {
                    name: "ORANAGEW LOGO DECK",
                    price: " 235.000đ",
                    image: "web-2.jpg"
                },
        
                {
                    name: "BLUE RAINBOW LOGO DECK",
                    price: " 378.000đ",
                    image: "web-3.jpg"
                },
        
                {
                    name: "WHITE RAINBOW LOGO DECK",
                    price: " 378.000đ",
                    image: "web-4.jpg"
                },
        
                {
                    name: "CUTIS MODEL DECK",
                    price: " 378.000đ",
                    image: "cutis.jpg"
                },
        
                {
                    name: "CAM VU MODEL DECK",
                    price: " 378.000đ",
                    image: "cam-vu.jpg"
                },
        
                {
                    name: "SON NGUYEN MODEL DECK",
                    price: " 378.000đ",
                    image: "son-nguyen.jpg"
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
                                <img src="./images/${products.data[i].image}" alt="">
                               
                            </div>
                            <div class="container">
                                <h5 class="product-name">${products.data[i].name}</h5>
                                <h9 class="prodcut-brand">${products.data[i].brand}</h9>
                                <h6><b>Price:</b>${products.data[i].price}</h6>
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
        