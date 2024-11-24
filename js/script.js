
const form = document.getElementById("form");
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password");
const passwordconfirmation  = document.getElementById("password-confirmation");


form.addEventListener("submit", (event) => {
    event.preventDefault();

    chekInputUsername();
})

    function chekInputUsername(){
        const usernameValue = username.value;
        console.log(usernameValue);

        if(username==="" ){
            errorInput(username,"preencha um usernane!")

        }
        }
        function errorInput(input, messsage){
         const formitem = input.parentElment;
         const textmessage = formitem.queryselector("a")
         textmessage.innerText = messsage;
         formitem.className = "form-content error"
        }
