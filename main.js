let email = document.querySelector(".email-value");
let btn = document.querySelector(".login");
let pass = document.querySelector(".password");
let passDiv = document.querySelector(".pass-input");
let emailDiv = document.querySelector(".email-input");
let a=0,b=0,c=0,d=0,flag=0;


btn.addEventListener("click",()=>{
    checkEmail();
    checkPassword();
})


function checkEmail()
{
    let exp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!email.value.match(exp))
    {
        if(flag===0)
        {
            let newDiv = document.createElement("div");
            newDiv.classList.add("message","email");
            let newInnerHtml = "Email is invalid";
            newDiv.innerHTML = newInnerHtml;
            emailDiv.append(newDiv);
            flag=1;
        }
    }
    else
    {
        if(flag===1){
            let getEmail = document.querySelector(".email");
            getEmail.remove();
            flag=0;
        }
    }

}




function checkPassword()
{
    if(!pass.value.match(/[0-9]/))
    {
        if(a===0)
        {
            let newDiv = document.createElement("div");
            newDiv.classList.add("message","number");
            let newInnerHtml = "Must conatin atleast one number";
            newDiv.innerHTML = newInnerHtml;
            passDiv.append(newDiv);
            a=1;
        }
    }
    else
    {
        if(a===1){
            let getEle = document.querySelector(".number");
            getEle.remove();
            a=0;
        }
    }



    if(!pass.value.match(/[A-Z]/))
    {
        if(b===0)
        {
            let newDiv = document.createElement("div");
            newDiv.classList.add("message","upper");
            let newInnerHtml = "Must conatin atleast one Upper Case Character";
            newDiv.innerHTML = newInnerHtml;
            passDiv.append(newDiv);
            b=1;
        }
    }
    else
    {
        if(b===1){
            let getupper = document.querySelector(".upper");
            getupper.remove();
            b=0;
        }
    }



    if((pass.value.length)<8 || (pass.value.length)>16)
    {
        if(c===0)
        {
            let newDiv = document.createElement("div");
            newDiv.classList.add("message","length");
            let newInnerHtml = "Must be betwween 8 to 16 characters";
            newDiv.innerHTML = newInnerHtml;
            passDiv.append(newDiv);
            c=1;
        }
    }
    else
    {
        if(c===1){
            let getlength = document.querySelector(".length");
            getlength.remove();
            c=0;
        }
    }



    if(!pass.value.match(/[@\%\#\&\$]/))
    {
        if(d===0)
        {
            let newDiv = document.createElement("div");
            newDiv.classList.add("message","special");
            let newInnerHtml = "Must conatin atleast one Special Character";
            newDiv.innerHTML = newInnerHtml;
            passDiv.append(newDiv);
            d=1;
        }
    }
    else
    {
        if(d===1){
            let getSpecial = document.querySelector(".special");
            getSpecial.remove();
            d=0;
        }
    }

}
