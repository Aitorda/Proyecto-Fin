
function validar (e){
	let nombre, apellido, correo, usuario, clave, telefono, expresion;
	 nombre = document.getElementById ("nombre").value;
	 apellido = document.getElementById ("apellido").value;
	 correo = document.getElementById ("correo").value;
	 usuario = document.getElementById ("usuario").value;
	 clave = document.getElementById ("clave").value;
	 telefono = document.getElementById ("telefono").value;

if(nombre === "" || apellido ==="" || correo === "" || usuario === "" || clave === "" || telefono ===""){
	alert("Todos los campos son obligatorios");
		e.preventDefault (e);
}else if (nombre.length > 10) {
	alert ("El nombre es muy largo");
	 e.preventDefault (e);
}else if (apellido.length !== 8){
	alert ("clave debe ser de 8 caracteres");
	e.preventDefault (e);
}else if (isNan (telefono)) {
	alert ("El telefono ingresado no es un numero");
	e.preventDefault (e);
}
}
formulario.addEventListener ("submit",validar);

let precio = 2800;
let calculo = document.getElementById ("calcular");
let noches = document.getElementById ("cantidad");

calculo.addEventListener ("click", () => {
	function total  (){
		precio*noches
	};

})

total ();