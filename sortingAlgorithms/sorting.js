//swap function to swap the heights of the bar while sorting (input 2 dom element with style.height feature)
function swap (el1,el2){
    let temp= el1.style.height;
    el1.style.height=el2.style.height;
    el2.style.height=temp;
}
//disabling the sorting buttons during the sorting process and enabling them after the the completion in conjuction with enable
function disableSortingBtn (){
document.querySelector(".bubbleSort").disabled =true;
document.querySelector(".mergeSort").disabled =true;
document.querySelector(".quickSort").disabled =true;
document.querySelector(".selectionSort").disabled =true;
document.querySelector(".insertionSort").disabled =true;
}

function enableSortingBtn(){
document.querySelector(".bubbleSort").disabled =false;
document.querySelector(".mergeSort").disabled =    false;
document.querySelector(".quickSort").disabled =  false;
document.querySelector(".selectionSort").disabled =false;
document.querySelector(".insertionSort").disabled =false;
}

//disable size slider used in conjunction with enable , disable during sorting
function disableSizeSlider(){
    document.querySelector("#arr_sz").disabled=true;
}
function enableSizeSlider (){
    document.querySelector("#arr_sz").disabled=false;
}

function disableNewArrayBtn(){
    document.querySelector(".newArray").disabled=true;
}

function enableNewArrayBtn(){
    document.querySelector(".newArray").disabled=false;
}

function waitforme(milisec){
    return new Promise(resolve =>{
        setTimeout(() => {
            resolve('')
        }, milisec);
    })
}
//array size settign from the size slider from dom
let arraySize =document.querySelector('#arr_sz');

//adding a event listener to update the bars in the UI
arraySize.addEventListener('input',function(){
    console.log(arraySize.value ,typeof(arraySize.value));
    createNewArray(parseInt(arraySize.value));
});


//default input for delay function
let delay =260;
//  select the speed slider from dom
let delayElement =document.querySelector('#speed_input');

// event listner to upate the delay time
delayElement.addEventListener('input',function(){
    delay =320 - parseInt(delayElement.value);
});


// create an array to store the random numbers
let array=[];
 
// call to bars when the page loads
createNewArray();

function createNewArray(noOfBars = 60){
    // calling the helper funciton to delete old bars from dom
    deleteChild();
    array=[];
    for(let i=0;i<noOfBars;i++){
        array.push(Math.floor(Math.random()*250)+1);
    }

    console.log(array);

// sleect div #bar element
const bars =document.querySelector("#bars");
// create multiople div using loop nf class bar col
for (let i=0;i<noOfBars;i++){
    const bar = document.createElement("div");
    bar.style.height= `${array[i]*2}px`;
    bar.classList.add('bar');
    bar.classList.add('flex-item');
    bar.classList.add(`barNo${i}`);
    bars.appendChild(bar);
}}

// helper fucntion tio delete the all the previous bars so that new can be AAadded
function deleteChild(){
    const bar = document.querySelector("#bars");
    bar.innerHTML='';
}

// selecting new array from dom and adding event listener
const newArray = document.querySelector(".newArray");
newArray.addEventListener("click", function(){
    console.log("from new array "+ arraySize.value);
    console.log("from new array "+ delay);
    enableSortingBtn();
    enableSizeSlider();
    createNewArray(arraySize.value);
});

