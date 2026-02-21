        let YourOcassion = document.getElementById('YourOcassion')
         let TheOcassions = document.getElementsByClassName('TheOcassions')
         let ChooseOcassion = document.querySelectorAll('.ChooseOcassion')
         let other = document.getElementById('other')
         let NumberOfPiece = document.getElementById('NumberOfPiece')
         YourOcassion.style.display = "none"
         let price =3 
         let Theloop = function(){
             for(let i =0 ; i<ChooseOcassion.length;i++){
                let Theresult = 0 
               ChooseOcassion[i].addEventListener("change",function(){
                  for(let j = 0;j<ChooseOcassion.length;j++){
                   if(other.checked == true ){
                        YourOcassion.style.display = "block"

                            }
                else {
                      YourOcassion.style.display = "none"

                    }
                        }
                    })
                }
            }
        Theloop()
        let PrintOnChocolate = document.getElementById('PrintOnChoco')
        let ImgToPrint = document.getElementById('ImgToPrint')
        PrintOnChocolate.style.display = "none"
        ImgToPrint.style.display = "none"
        let PrintChocolate = document.querySelectorAll('.PrintChocolate')
        let SecondLoop = function(){
            let result = 0
            for(let i =0 ; i <PrintChocolate.length;i++){
                PrintChocolate[i].addEventListener("change",function(){
                    if(this.value == 'yes')
                    {
                    PrintOnChocolate.style.display = "block"
                    ImgToPrint.style.display= "block"
                    }
                    else {
                        PrintOnChocolate.style.display = "none"
                        ImgToPrint.style.display = "none"
                    }
                })
            }
        }
        SecondLoop()
         let Theresult =""
        let ResultOcassion = function(){
            for(let A = 0; A<ChooseOcassion.length; A++)
            {
                if(ChooseOcassion[A].checked == true )
                {
                     Theresult = ChooseOcassion[A].value
                }
            }
        }
let Secondresult = ""
let ResultPrint = function(){
    for(let M=0 ; M< PrintChocolate.length;M++){
        if(PrintChocolate[M].checked == true )
        {
            Secondresult = PrintChocolate[M].value
        }
    }
}
let AddToList = document.getElementById("AddToList")
        let AlertSucces = document.getElementById("AlertSucces")
        let AlertFail =  document.getElementById("AlertFail")

        let CheckPacks = function(){
            for(let z=0;z<ChooseOcassion.length;z++){
            if(ChooseOcassion[z].checked == true){
                return true;
            }
            
            }
                return false 
            
        }
        AddToList.addEventListener("click",function(){
            if(CheckPacks() == true ){
                   let TheNumberOfQuality = parseInt(NumberOfPiece.value) || 0
        let OcassionDescription = document.getElementById('OcassionDescription').value
        let PrintIdea = document.getElementById('PrintIdea').value
        let ImgPrint = document.getElementById('ImgPrint').files.length
        ResultPrint()
        ResultOcassion()
        const order = {
            Title : "Ocassion Chocolate",
        name : "occasion" ,
        quality : TheNumberOfQuality,
        Price : 3,
        Total : 3*TheNumberOfQuality,
        option : {
            OcassionDescription : OcassionDescription ,
        PrintIdea :PrintIdea,
        ImgPrint : ImgPrint,
        occasionType : Theresult,
        printChoice : Secondresult,
        }

        };
     let cart = localStorage.getItem('cart')
             let CART = ""
     if( cart == null){
        CART = [] 
    }
    else {
 CART =  JSON.parse(cart)

    }
        CART.push(order)
       cart = JSON.stringify(CART)
       localStorage.setItem("cart", cart)

        AlertSucces.classList.remove("d-none");
        setTimeout(function(){
            AlertSucces.classList.add("d-none")
        }, 2000) 
        Theloop()
        setTimeout(function(){
        location.reload()
        }, 3000) 
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