// el usuario seleccionara un filtro en funcion de ciertos parametros para luego elegir la cantidad de noches a hospedarse para luego cotizar dichas noches y si esta todo bien, reserva confirmada.

//Variables del precio por noche
let precioAmetza = 2000;
let precioBidean = 1800;
let precioRoma = 2500; 
let descuento = 500;
let cochera = true;

//1 Indico variables login
let nombreUsuario = prompt ("Hola, con quien tengo el gusto?");
   alert (`Mucho gusto ${nombreUsuario},  procededa a registrarse en nuestro sistema para lo cual le solicitaremos datos `);

// Filtro para que el cliente pueda elegir en funcion del nombre, precio y la cantidad de huespedes. 
let departamentos = [
    {nombre:"ametzaroom",precio: 2000, personas:4, cochera: false },
    {nombre:"bideanroom",precio: 1800, personas:2, cochera: false },
    {nombre: "romaroom", precio: 2500, personas:3, cochera: true  },
    
]
let filtrado = prompt ("Puede buscar en funcion de:nombre, precio, cantidad de personas a hospedarse.")
const hotelElegido = [];
if (filtrado === "nombre"){
    let filtroNombre =prompt ("ingrese nombre del lugar ");

    let resultadoN = departamentos.filter(elemento => elemento.nombre.includes(filtroNombre));
    hotelElegido.push (resultadoN);
    console.log(resultadoN);
}else if (filtrado === "precio") {
    let filtroPrecio = parseInt(prompt ("Ingrese el menor precio "));

    let resultadoP = departamentos.filter(elemento => elemento.precio > filtroPrecio);
    console.log(resultadoP);
}else if (filtrado === "cantidadPersonas"){
    let filtroPersonas = parseInt(prompt ("ingrese la cantidad de personas"));

    let resultado = departamentos.filter(elemento => elemento.cantidadPersonas === filtroPersonas);
    console.log(resultado);
}

const consultarCantidadDeNoches = () => {
	let cantidadNoches = parseInt(
		prompt("Ingrese la cantidad de noches que quiere hospedarse")
	);
	return cantidadNoches;
};
const calculadora = (noche, precio) => {
	return noche * precio;
};

const mensajePrecioFinal = (precio) => {
	alert(`El precio por las ${noches} noches, es de $${precio}`);
};

const precioPorNoche = 2800;
const valorDescuento = 10;
let noches = consultarCantidadDeNoches();


while (noches < 3) {
	alert("Solo se toman reservas por un mínimo de 3 noches");
	noches = consultarCantidadDeNoches();
}

if (3 <= noches <= 5) {
	alert("cantidad de noches ok, se procede a cotizar");
	const precioFinal = calculadora(noches, precioPorNoche);
	mensajePrecioFinal(precioFinal);
	alert("Reserva confirmada");
} else {
	alert(
		`Reservando por más de 6 noches, recibe un descuento del ${valorDescuento}%`
	);
	const precioFinal =
		(1 - valorDescuento) * calculadora(noches, precioPorNoche);
	mensajePrecioFinal(precioFinal);
	alert("Reserva confirmada");
}




