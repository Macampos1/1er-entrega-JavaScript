let edadUsuario = prompt('ingrese sucursal')

if (edadUsuario >= 1 && edadUsuario < 100 ) {
    console.log('Puede pasar')
} else {
    console.log ('No puede pasar')
}


let nombreUsuario = prompt ('Ingrese su numero de legajo')

const username = document.getElementById ('username')
const password = document.getElementById ('password')
const button = document.getElementById ('button')

button.addEventListener('click' , (e) => {
e.preventDefault()
const data = {
    username: username.value,
    password: password.value 
}
console.log(data)
})
