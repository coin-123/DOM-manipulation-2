// for(let count = 1; count <=10; count++){
//     console.log(count)
// }
// for(let coun = 1; coun <=10; coun++){
//     console.log(coun)
// }
// function count(){
//     for(let count = 1; count <=10; count++){
//             console.log(count)
//      }
// }
// count()
// count()
// count()
// count()
// count()
// count()


// 



//  function to add two numbers

// function addTwoNumbers(num1, num2){
//     // var num1="obed"
//     // var num1="david"

//     console.log(num1 + num2)
// }
// addTwoNumbers(7,28)

// 


// function showOne(){
//     console.log(1)
// }
// function showTwo(){
//     console.log(2)
// }
// function showThree(){
//     console.log(3)
// }
// function showFour(){
//     console.log(4)
// }
// function showFive(){
//     console.log(5)
// }
// function showSix(){
//     console.log(6)
// }
// function showSeven(){
//     console.log(7)
// }
// function showEight(){
//     console.log(8)
// }
// function showNine(){
//     console.log(9)
// }




const screen = document.querySelector(".top-screen");
const operators = document.querySelectorAll(".btn-operator");
// const rbtn = document.
// const backSpace = document.querySelector(".righ")
// console.log(operators)

operators.forEach((item) => {
   
    // console.log(item);
    item.addEventListener("click", () =>{
        
        if (screen.innerHTML.slice(-1) == "+" ||   
        screen.innerHTML.slice(-1) == "-" ||
        screen.innerHTML.slice(-1) == "*" ||
        screen.innerHTML.slice(-1) == "/"
    ){
           
            item.classList.add("Is-depressed")
            //  console.log("+")
        } else{
            screen.innerHTML += item.innerHTML;
        }
            
    })
})

// screen.innerHTML = screen.innerHTML.substring(0, screen.innerHTML.lenght -1)
function backSpace(){
    if(screen.innerHTML.length > 1){
        screen.innerHTML = screen.innerHTML.substring(0, screen.innerHTML.length-1)

    }
}
// FOR EQUALS 
function eqauls(){
    // screen.innerHTML = eval(screen.innerHTML)
    if( screen.innerHTML.slice(-1) == "+" ||   
        screen.innerHTML.slice(-1) == "-" ||
        screen.innerHTML.slice(-1) == "*" ||
        screen.innerHTML.slice(-1) == "/"
){
        screen.innerHTML = screen.innerHTML.substring(0, screen.innerHTML.length-1)
    }else{
        screen.innerHTML= eval(screen.innerHTML)
    }
} 

// FOR AC

function resetbtn(num){
    if(screen.innerHTML = num){
        screen.innerHTML == num
    }else{
       screen.innerHTML ="0" 
    }
}

// console.log(screen)    
function show(num){
    if (screen.innerHTML == 0){
         screen.innerHTML = num;

    }else{
        screen.innerHTML += num;
    }

}


