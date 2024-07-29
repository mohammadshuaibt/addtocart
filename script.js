let Arrproducts = [
    {
        id: 1,
        name: "Shoe 1",
        image: "item1.jpg",
        Price: 3000,
    },
    {
        id: 2,
        name: "Shoe 2",
        image: "item2.jpg",
        Price: 5000,
    },
    {
        id: 3,
        name: "Shoe 3",
        image: "item3.jpg",
        Price: 2000,
    },
    {
        id: 4,
        name: "Shoe 4",
        image: "item4.jpg",
        Price: 4000,
    },
]

const body = document.querySelector("body"),
products = document.querySelector(".products"),
shoppingBasket = document.querySelector(".shoppingBasket"),
closeCart = document.querySelector(".close"),
productList = document.querySelector(".productList"),
quantity = document.querySelector(".quantity"),
total = document.querySelector(".total");

let checkoutList = [];

shoppingBasket.onclick = () => {
    body.classList.add("active");
};

closeCart.onclick = () => {
    body.classList.remove("active");
};

function onInIt(){
    Arrproducts.forEach((item,key) => {
        let div = document.createElement("div");
        div.classList.add("item");

        div.innerHTML=`
        <img src="images/${item.image}"/>
        <div class="name">${item.name}</div>
        <div class="price">₹${item.Price}</div>
        <button onclick="addtoCart(${key})">Add to Cart</button>`;

        products.appendChild(div);
    });
}
onInIt();

function addtoCart(id){
    if(checkoutList[id] == null){
        checkoutList[id] = Arrproducts[id];
        checkoutList[id].quantity = 1;
    }else{
        checkoutList[id].quantity += 1;
    }
    refreshCart();
}

function refreshCart(){
    productList.innerHTML=``;
    let count = 0;
    let totalPrice = 0;
    checkoutList.forEach((item,key) =>{
        count += item.quantity;
        totalPrice=parseInt(item.Price * item.quantity);
        let li = document.createElement("li");
        li.innerHTML=
        `<img src="images/${item.image}">
        <div>${item.name}</div>
        <div>${item.Price}</div>
        <div>
        <button onclick="changeQuantity(${key},${item.quantity - 1})">-</button>
        <div class="count">${item.quantity}</div>
        <button onclick="changeQuantity(${key},${item.quantity + 1})">+</button>`;

        productList.appendChild(li);
        
        quantity.innerHTML = count;
        // total.innerHTML = `<small>Subtotal(${count} items)</small>`+totalPrice;
    });
}

function changeQuantity(key, quantity){
    if(quantity  == 0){
        delete checkoutList[key];
    }else{
        checkoutList[key].quantity=quantity;
    }
    refreshCart();
}