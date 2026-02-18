 let DatesPack = document.querySelectorAll(".DatesPack")
let DatesPackName = document.querySelectorAll(".DatesPackName")
let AddToList = document.getElementById("AddToList")
let TheLoop = function(){
    let result =0 
    for (let i =0;i<DatesPack.length;i++){
        let DatesPackNumber = parseInt(DatesPack[i].value)
        if(DatesPack[i].checked == true){
        const obj = {
            Price : DatesPackNumber,
            Title : DatesPackName[i].innerText,
            name : "dates",
            quality : 1 
        }
       let cart = localStorage.getItem("cart")
           let Cart = JSON.parse(cart)
    if(Cart == null){
        Cart = []
    }
    Cart.push(obj)
    let CART = JSON.stringify(Cart)
    localStorage.setItem("cart",CART) 
    }
    }
    
        }
        AddToList.addEventListener("click",function(){
            TheLoop()
        }) 

        let AlertSucces = document.getElementById("AlertSucces")
        let AlertFail =  document.getElementById("AlertFail")

        let CheckPacks = function(){
            for(let z=0;z<DatesPack.length;z++){
            if(DatesPack[z].checked == true){
                return true;
            }
            
            }
                return false 
            
        }
        AddToList.addEventListener("click",function(){
            if(CheckPacks() == true ){
        AlertSucces.classList.remove("d-none");
        setTimeout(function(){
            AlertSucces.classList.add("d-none")
        }, 2000) 
setTimeout(function(){
        location.reload()
        }, 2000) 
     AddToList.classList.remove("btn btn-primary")
        AddToList.classList.add("btn btn-success")
       setTimeout(function(){
        AddToList.classList.add("btn btn-primary")
        AddToList.classList.remove("btn btn-success")
        }, 2000) 
    }
        else{
        AlertFail.classList.remove("d-none");
        setTimeout(function(){
            AlertFail.classList.add("d-none")
        }, 2000) 
        }
        }) 

