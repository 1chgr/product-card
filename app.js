const products=[
    {
        id:1,
        name:'Air Jordan',
        price:96,
        img:'images/snaeker 12.png'
    },

    {
        id:2,
        name:'adidas',
        price:90,
        img:'images/snaeker 9.png'
    },

    {
        id:3,
        name:'Yeezy 350',
        price:89,
        img:'images/pngegg (11).png'
    },
    {
        id:3,
        name:'Air Jordan',
        price:79,
        img:'images/snaeker 1.png'
    }

]

//set starting product
let currentProduct= 0;
// add quantity
let count=1;

//get elements by id
const productImg=document.getElementById('product-img');
const productName=document.getElementById('product-name')
const price=document.getElementById('price')
const quantity=document.getElementById('quantity')

//get elements by class
const prevBtn = document.querySelector('.btn-prev')
const nextBtn = document.querySelector('.btn-next')
const randomBtn = document.querySelector('.btn-buy')
const plusBtn=document.querySelector('.btn-plus')
const minusBtn=document.querySelector('.btn-minus')


//load initial item
window.addEventListener('DOMContentLoaded', function () {
    showProduct()
})


//set quantity buttons

//plus 1 every time you press on the plus button and the price increses
plusBtn.addEventListener('click', function(){
    count++
    quantity.innerHTML=count
    price.innerHTML=count*products[currentProduct].price
})

//minus 1 on quantity every time you press on the minus button also the price decrease
minusBtn.addEventListener('click', function(){
    if (count>1){
        count--
        quantity.innerHTML=count
        price.innerHTML-=products[currentProduct].price
    }
})


//show product based on item
function showProduct(product){
    const item=products[currentProduct]
    productName.textContent=item.name
    productImg.src=item.img;
    price.textContent=item.price
}


//show next product
nextBtn.addEventListener('click', function(){
    currentProduct++
    if(currentProduct>products.length-1){
        currentProduct=0
    }
    count=1
    quantity.innerHTML=count
    showProduct()
})


//show previous product
prevBtn.addEventListener('click', function(){
    currentProduct--
    if (currentProduct<0){
        currentProduct=products.length-1
    }
    count=1
    quantity.innerHTML=count
    showProduct()
})




