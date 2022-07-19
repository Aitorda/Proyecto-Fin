
guardarLocalstorage (); 
obtenerLocalstorage ();

function obtenerLocalstorage (){

	if (localStorage.getItem ("nombre")){
		// Se que existe en el local storage
		let nombre = localStorage.getItem ("nombre");
	let persona = JSON.parse (localStorage.getItem ("persona"));

	console.log(nombre);
	console.log(persona);

	}else {
		console.log("no hay entradas en el local storage");
	}
}

function guardarLocalstorage (){
	let persona = {
		nombre : "Fernando",
		edad : 31, 
		correo : "xyz@xyz.com ", 
	}
	let nombre = "juan";

	localStorage.setItem ("nombre", nombre);
	localStorage.setItem ("nombre", JSON.stringify(persona))
}

let departamentos = [
    {nombre:"ametzaroom",precio: 2000, personas:4, cochera: false },
    {nombre:"bideanroom",precio: 1800, personas:2, cochera: false },
    {nombre: "romaroom", precio: 2500, personas:3, cochera: true  },
    
]



const precioPorNoche = 2800;
let noches = consultarCantidadDeNoches();

const consultarCantidadDeNoches = () => {
	let cantidadNoches = document.getElementById ("n1");
	return cantidadNoches;
};
const calculadora = (noche, precio) => {
	return noche * precio;
};

const mensajePrecioFinal = (precio) => {
	alert(`El precio por las ${noches} noches, es de $${precio}`);
};

const calcular = () => {
    let dpto = document.querySelector ("dptos").value;

    let calcular = {dptos};
}

calculadora ();











 





let op;



document.querySelector ("calcular").addEventListener ("click", () => {
	const n1 = parseInt(document.querySelector ("n1").value);
	const n2 = parseInt(document.querySelector ("n2").value);
	const op = document.querySelector ("op").value;
	let resultado;
	if (op == "*"){
		resultado = n1*n2;
	}
})
