//console.log("abc");

//catch the element//
const eightGbMemory = document.getElementById("memory-1");
const sixteenGbMemory = document.getElementById("memory-2");
const storageOne = document.getElementById("storage-1");
const storageTwo = document.getElementById("storage-2");
const storageThree = document.getElementById("storage-3");
const deliveryOne = document.getElementById("delivery-1");
const deliveryTwo = document.getElementById("delivery-2");
const bestCost = document.getElementById("best-price")
const memoryCost = document.getElementById("memory-cost");
const storageCost = document.getElementById("storage-cost");
const deliveryCost = document.getElementById("delivery-cost");
const totalCost = document.getElementById("total-price");
const total = document.getElementById("total");

const pomoButton = document.getElementById("pomo-apply");
const pomoInput = document.getElementById("pomo-input");




//function//

eightGbMemory.addEventListener("click",function()
{
    memoryCost.innerText = 0;
    upTotal();

})

sixteenGbMemory.addEventListener("click",function()
{
    memoryCost.innerText = 180;
    upTotal();
    
})



storageOne.addEventListener("click",function()
{
    storageCost.innerText = 0;
    upTotal();
})

storageTwo.addEventListener("click",function()
{
    storageCost.innerText = 100;
    upTotal();

})
storageThree.addEventListener("click",function()
{
    storageCost.innerText = 180;

    upTotal();
})
deliveryOne.addEventListener("click",function()
{
    deliveryCost.innerText = 0;
    upTotal();
})
deliveryTwo.addEventListener("click",function()
{
    deliveryCost.innerText = 20;
    upTotal();
})


pomoButton.addEventListener('click',function()
{

   
    upTotal();
})



function upTotal(){

    const bestPrice = parseInt(bestCost.innerText);
    const memoryPrice = parseInt(memoryCost.innerText);
    const storagePrice = parseInt(storageCost.innerText);
    const deliveryPrice = parseInt(deliveryCost.innerText);
    const totalPrice = (bestPrice+memoryPrice+storagePrice+deliveryPrice);

    totalCost.innerText = totalPrice;
    if (pomoInput.value == 'amiValoPula') {

        const tenpersent = totalPrice*20/100;

        total.innerText =Math.round( totalPrice - tenpersent);

        
    }
    else{
        total.innerText = totalPrice;
    }

    



    

  

  
}