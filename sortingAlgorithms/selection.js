async function selection() {
    console.log("in selection sort");
    const ele =document.querySelectorAll(".bar");
    for(let i=0;i<ele.length;i++){
        console.log("int the ithe loop");
        let min_index =i;
        for(let j=i+1;j<ele.length;j++){
            console.log("in jth loop");
            ele[j].style.background='red';
            await waitforme(delay);
            if(parseInt(ele[j].style.height)<parseInt(ele[min_index].style.height)){
                console.log("height comparison with min idex");
                if(min_index !==i){
                    // we found a new minimum so chngig back the prev min index to mormal
                    ele[min_index].style.background='cyan';
                }
                min_index=j;
            }
            else{
                //cureent number is more than the min idex os it also change bakc to nromal
                ele[j].style.background='cyan';
            }
        }
        await waitforme(delay);
        swap(ele[min_index],ele[i]);
        //change the min element to normal as it is swapped
        ele[min_index].style.background='cyan';
        //cjhange the sorted coler to green
        ele[i].style.background='green';
    }
}

const selectionSortbtn =document.querySelector(".selectionSort");
selectionSortbtn.addEventListener('click',async function (){
    disableSortingBtn(),
    disableSizeSlider();
    disableNewArrayBtn();
    await selection();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
}     
);