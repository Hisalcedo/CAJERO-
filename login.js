let login = document.querySelector("#login");
console.log(login);

const formhandler =(event) => {
    event.preventDefault();
    let Usuario = document.querySelector("#Usuario"); 
    let Contraseña = document.querySelector("#Contraseña");
    let messagediv =document.querySelector("#loginmessage");
    messagediv.innerHTML =`<H2>${verifylogin(Usuario.value, Contraseña.value)}</H2>`;
    let btndepositar = document.querySelector("#depositame");
    btndepositar.innerHTML = `<button id="depositar >depositar</button>`;
    let btnretirar = document.querySelector("#retirar");
    btndepositar.innerHTML = `<button id="retirar" >retirar</button>`;
    



    
}

const registredUsers = [
    {
        Usuario: "a@gmail.com",
        Contraseña: "123",
        saldo: 400,
        nickname: "José",
    },
    {
        Usuario: "diego@gmail.com",
        Contraseña: "321",
        saldo: 350,
        nickname:"Diego",
    },
    { Usuario: "hisalcedo@hotmail.com",
        Contraseña: "258",
        saldo: 900,
        nickname: "Humberto",
    }]

    login.addEventListener("submit", (event) => formhandler (event));

    const verifylogin = (Usuario,Contraseña) => {
        for (let i = 0; i < registredUsers.length; i++){
            if(Usuario === registredUsers[i].Usuario && Contraseña === registredUsers[i].Contraseña) {
                return `Bienvenido ${Usuario}`;
                
            }
            return "El usuario o contraseña incorrectos";
        }
    }
    
    const clearhijos = (element) => {while (element.firstchild) {element.removechild(element.firstchild);}
        
    }
    c