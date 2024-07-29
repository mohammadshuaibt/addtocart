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
products = document.querySelector(".products");

let checkoutList = [];

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
    }
}