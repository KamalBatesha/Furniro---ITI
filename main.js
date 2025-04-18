const products=[
    {
        image:"./assets/products/1.png",
        title:"Syltherine",
        des:"Stylish cafe chair",
        price:"2.500.000",
        oldPrice:"3.500.000",
        badgeContent:"- 30%",
        badgeColor:"#E97171"

    },
    {
        image:"./assets/products/2.png",
        title:"Leviosa",
        des:"Stylish cafe chair",
        price:" 2.500.000",

    },
    {
        image:"./assets/products/3.png",
        title:"Lolito",
        des:"Luxury big sofa",
        price:" 7.000.000",
        oldPrice:" 14.000.00",
        badgeContent:"- 50%",
        badgeColor:"#E97171"

    },
    {
        image:"./assets/products/4.jfif",
        title:"Respira",
        des:"Outdoor bar table and stool",
        price:" 500.000",
        badgeContent:"New",
        badgeColor:"#2EC1AC"

    },
    {
        image:"./assets/products/5.png",
        title:"Grifo",
        des:"Night lamp",
        price:"1.500.000",

    },
    {
        image:"./assets/products/6.png",
        title:"Muggo",
        des:"Small mug",
        price:"150.000",
        badgeContent:"New",
        badgeColor:"#2EC1AC"

    },
    {
        image:"./assets/products/7.jfif",
        title:"Pingky",
        des:"Cute bed set",
        price:"7.000.000",
        oldPrice:"14.000.000",
        badgeContent:"- 50%",
        badgeColor:"#E97171"

    },
    {
        image:"./assets/products/8.jfif",
        title:"Potty",
        des:"Minimalist flower pot",
        price:"500.000",
        badgeContent:"New",
        badgeColor:"#2EC1AC"

    },
]
document.getElementById("products_container").innerHTML=products.map((product)=>{
    return `
    <div class="col-xl-3 col-lg-4 col-md-6 col-12 p-3 justify-content-center">
        <div class="product-item position-relative">
          <div class="product-img">
            <img class="w-100 object-fit-cover h-100" src="${product.image}" alt=${product.title}>
          </div>
          <div class="product-content p-3">
            <h4 class="fw-bold text-capitalize">${product.title}</h4>
            <p class="text-capitalize mb-2">${product.des}</p>
            <div class="product-price d-flex align-items-center justify-content-between">
              <span class="text-uppercase fs-5 fw-bold">Rp${product.price}</span>
             ${product.oldPrice ? ` <span class="text-uppercase text-decoration-line-through text-secondary">Rp ${product.oldPrice}</span>`:""}
            </div>
          </div>
          ${product.badgeContent ? `<div style="background-color:${product.badgeColor} ;" class="badge position-absolute rounded-circle text-white d-flex align-items-center justify-content-center ">${product.badgeContent}</div>`:""}
          <div class="overlay position-absolute d-flex flex-column align-items-center justify-content-center w-100 h-100 top-0 start-0">
            <button class="border-0 px-5 py-2 bg-white">add to cart</button>
            <ul class="list-unstyled d-flex align-items-center justify-content-between mt-3 w-100 px-3 text-white">
              <li><a href="#"><i class="me-1 fas fa-share-nodes"></i>Share</a></li>
              <li><a href="#"><i class="me-1 fas fa-arrow-right-arrow-left"></i>Compare</a></li>
              <li><a href="#"><i class="me-1 fa-regular fa-heart"></i>Like</a></li>
            </ul>
          </div>
          
        </div>

      </div>
    `
}).join("")


let sliderIndex=0;

function move(index){
  checkbottons()
  checkDots()
    sliderIndex=index;
    document.querySelector(".slider-imgs").style.transform=`translateX(${-sliderIndex*100}%)`

}
function next(){
  if(sliderIndex>=3) return;
    sliderIndex++;
    move(sliderIndex);
}
function prev(){
  if(sliderIndex<=0) return;
    sliderIndex--;
    move(sliderIndex);
}

let prevButton=document.getElementById("slider_prev");
let nextButton=document.getElementById("slider_next");

function checkbottons(){
  
  if(sliderIndex<=0){
    prevButton.classList.add("disabled" ,"d-none");
  }else{
    prevButton.classList.remove("disabled" ,"d-none");
  }
  
  if(sliderIndex>=3){
    nextButton.classList.add("disabled" ,"d-none");
  }else{
    nextButton.classList.remove("disabled" ,"d-none");
  }
}
checkbottons()

function checkDots(){

  document.querySelectorAll(".dots>span").forEach((span)=>{
    span.classList.remove("active");
  })
  document.querySelectorAll(".dots>span")[sliderIndex].classList.add("active");
}

prevButton.addEventListener("click",prev);
nextButton.addEventListener("click",next);

document.querySelectorAll(".dots span").forEach((span)=>{
    span.addEventListener("click",()=>{
        sliderIndex=Number(span.getAttribute("sliderIndex"));
        move(sliderIndex);

})
})
