// Product Quantity Increment and decrement 

var productCount1 = document.querySelector('#product-1 input');
var productCount2 = document.querySelector('#product-2 input');
var increase1 = document.querySelector('#plus-1');
var increase2 = document.querySelector('#plus-2');
var decrease1 = document.querySelector('#minus-1');
var decrease2 = document.querySelector('#minus-2');
var phonePrice = document.getElementById('phonePrice');
var coverPrice = document.getElementById('coverPrice');
var subTotal = document.getElementById('subTotal');
var total = document.getElementById('total');

function increment(incrementor,count,defaultPrice,updateZone){
    incrementor.addEventListener('click',function(){
        var currentValue = Number(count.value); 
        currentValue +=1; 
        count.value = currentValue;
        var updatedPrice = currentValue * defaultPrice;
        updateZone.textContent = updatedPrice;
        var subTotalNum = Number(subTotal.innerText);
        subTotalNum = defaultPrice + subTotalNum;
        subTotal.innerText = subTotalNum;
        total.innerText = subTotalNum;
    })
}
function decrement(decrementor , count,defaultPrice,updateZone){
    decrementor.addEventListener('click',function(){
        var currentValue = Number(count.value);
        currentValue -= 1;
        count.value = currentValue;
        if(count.value < 0){
            count.value = 0
            updatedPrice = 0;
            currentValue = 0;
        }
        var updatedPrice = currentValue * defaultPrice;
        updateZone.textContent = updatedPrice;
        var subTotalNum = Number(subTotal.innerText);
        subTotalNum = subTotalNum - defaultPrice;
        subTotal.innerText = subTotalNum;
        total.innerText = subTotalNum;
    })
}
increment(increase1,productCount1,1219,phonePrice);
increment(increase2,productCount2,59,coverPrice);
decrement(decrease1,productCount1,1219,phonePrice);
decrement(decrease2,productCount2,59,coverPrice);

// Subtotal

