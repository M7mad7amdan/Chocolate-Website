    let PriceInputs = document.querySelectorAll('.price-input')
        let FlavorName = document.querySelectorAll('.flavor-name')
let AddToList = document.getElementById("AddToList")
    let btnforup = document.getElementById('btnforup')
        let sum =0; 
        for(let i =0 ; i<PriceInputs.length;i++){
        PriceInputs[i].addEventListener("change",function(){
        CalculatePrice()
    })
        } 

        let CalculatePrice = function(){
            sum=0
            for(let j =0 ; j<PriceInputs.length;j++){
            let PriceInputsNumber = parseInt(PriceInputs[j].value)
            if(isNaN(PriceInputsNumber))
            {
                PriceInputsNumber  = 0
            }
            else {
            sum += PriceInputsNumber 
            }
            }
        }
    let btnposition = function(){
        if(window.scrollY > 300){
            btnforup.style.visibility = "visible"
        
        }
        else{
            btnforup.style.visibility = "hidden"
            
        }
    }
    btnforup.addEventListener("click",function(){
        scrollTo({top:0,behavior:"smooth"})
    
    })

    window.addEventListener("scroll", btnposition);
        btnposition();


let result = 0
let  SaveTypes = function(){
    for(let x= 0 ; x<PriceInputs.length;x++){
        let PriceInputsNumber = parseInt(PriceInputs[x].value)
        if(PriceInputsNumber > 0){

            const obj = {
                Price : PriceInputsNumber,
                Title : FlavorName[x].innerText,
                    name : "as_you_like",
                    quality : 1

            }
           let cart = localStorage.getItem('cart');
let CART = cart ? JSON.parse(cart) : [];

CART.push(obj);

localStorage.setItem("cart", JSON.stringify(CART)); 
        }
    }
}
                let AlertSucces = document.getElementById("AlertSucces")
        let AlertFail =  document.getElementById("AlertFail")

        let CheckPacks = function(){
            for(let z=0;z<PriceInputs.length;z++){
            let PriceInputsNumber = parseInt(PriceInputs[z].value)
            if(PriceInputsNumber > 0){
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
        SaveTypes()
setTimeout(function(){
        //location.reload()
        }, 2000) 
           AddToList.classList.remove("btn", "btn-primary");
AddToList.classList.add("btn", "btn-success");
       setTimeout(function(){
       AddToList.classList.remove("btn", "btn-primary");
AddToList.classList.add("btn", "btn-success");
        }, 2000) 
    }
        else{
        AlertFail.classList.remove("d-none");
        setTimeout(function(){
            AlertFail.classList.add("d-none")
        }, 2000) 
        }
        }) 
