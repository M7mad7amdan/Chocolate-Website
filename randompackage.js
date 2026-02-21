        let withoutcolor = document.querySelectorAll('.withoutcolor')
        let withcolor = document.querySelectorAll('.withcolor')
        let packs = document.querySelectorAll('.packs')
        let PackName = document.querySelectorAll('.PackName')
        let AddToList = document.getElementById('AddToList')
        let MakeLoop = function(){
            let  sum =0 
        for(let i = 0 ; i < packs.length;i++){
        let TheLoop = packs[i].querySelector('.withoutcolor').value
        let ConvTonum = parseInt(TheLoop)
            if(packs[i].querySelector('.withoutcolor').checked != false ){
            sum +=ConvTonum
        }
        else if(packs[i].querySelector('.withcolor').checked != false ) {
            let SecondLoop = packs[i].querySelector('.withcolor').value
            let ConvToNumber= parseInt(SecondLoop)
            sum +=ConvToNumber
        }
        }
        }
        let Loop = function(){
            let result = 0
            for(let x=0;x<packs.length;x++){
               let FirstLoop = packs[x].querySelector('.withoutcolor').value
                let ConvToNum = parseInt(FirstLoop)
                if(packs[x].querySelector('.withoutcolor').checked != false){
               const obj = {
                Price : ConvToNum,
                Title : PackName[x].innerText,
                    name : "random",
                    quality : 1 ,
                  option : {color :"without color"}

               }
              let Cart =  localStorage.getItem("cart")
               let CART = JSON.parse(Cart)
               if(CART == null)
                CART = []
            CART.push(obj)
            let cart = JSON.stringify(CART)
            localStorage.setItem("cart",cart)
            }

            else if(packs[x].querySelector('.withcolor').checked != false){
                 let SecondLoop = packs[x].querySelector('.withcolor').value
        let ConvToNumberr = parseInt(SecondLoop)
                const obj = {
                Price : ConvToNumberr,
                Title : PackName[x].innerText,
                name : "random",
                quality : 1 ,
                 option : {color :"with color"}

               }
         let Cart =  localStorage.getItem("cart")
let CART = Cart ? JSON.parse(Cart) : []
            CART.push(obj)
            let cart = JSON.stringify(CART)
            localStorage.setItem("cart",cart)
            }
            
        }
    }

                let AlertSucces = document.getElementById("AlertSucces")
        let AlertFail =  document.getElementById("AlertFail")

        let CheckPacks = function(){
            for(let z=0;z<packs.length;z++){
            if(withcolor[z].checked == true){
                return true;
            }
            else if(withoutcolor[z].checked == true){
                        return true;
            }
            
            }
                return false 
            
        }
        AddToList.addEventListener("click",function(){
           AddToList.addEventListener("click",function(e){
  e.preventDefault();

  if(CheckPacks() == true ){
    AlertSucces.classList.remove("d-none");
    setTimeout(function(){
      AlertSucces.classList.add("d-none")
    }, 2000);

    Loop();

    AddToList.classList.remove("btn", "btn-primary");
    AddToList.classList.add("btn", "btn-success");

    setTimeout(function(){
      AddToList.classList.add("btn", "btn-primary");
      AddToList.classList.remove("btn", "btn-success");
    }, 2000);

    window.scrollTo({ top: 0, behavior: "smooth" });

  } else {
    AlertFail.classList.remove("d-none");
    setTimeout(function(){
      AlertFail.classList.add("d-none")
    }, 2000);
  }
});

        }) 
document.querySelectorAll('.packs label').forEach(label => {
  label.addEventListener('click', (e) => {
    e.preventDefault(); 
    const id = label.getAttribute('for');
    const input = document.getElementById(id);
    if (input) {
      input.checked = true;
      input.dispatchEvent(new Event('change', { bubbles: true }));
    }
  });
});
