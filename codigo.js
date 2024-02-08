 let alummnos = [{
	nombre:"sofia",
	email:"valed@dgxd.com",
	materia:"lengua 2"
},{
	nombre:"mejias",
	email:"mexic@dgxd.com",
	materia:"calculo 2"
},{
	nombre:"pedro",
	email:"pedri@dgxd.com",
	materia:"desarrolo 2"
},{
	nombre:"clai",
	email:"clai@dgxd.com",
	materia:"verga 2"
}];

const boton = document.querySelector(".boton-confirmar");



for (let alummno in alummnos){

	let datos = alummnos[alummno];
	let nombre = datos["nombre"];
	let email = datos["email"]
	let materia = datos["materia"]
	let htmlCode = `

	<div class = "grid-container">
		<div class="grid-item nombre">${nombre}</div>
		<div class="grid-item email">${email}</div>
		<div class="grid-item materia">${materia}</div>
		<div class="grid-item semana">
	
			<select class="semana-elegida">
				<option value="1">semana 1</option>
				<option value="2">semana 2</option>
	
			</select>
		</div>
	
	  
	</div>`
	document.querySelector(".grid-container").innerHTML += htmlCode;
}


boton.addEventListener("click",() =>{

	let confirmar =  confirm("quieres confirmar de una wn?")
	if (confirmar){
		document.body.removeChild(boton)
	
	let elementos = document.querySelector(".semana");
	let semanasElegidas = document.querySelectorAll(".semana-elegida")

	for ( let elemento in elementos){
		semana = elementos[elemento];
		semana.innerHTML = semanasElegidas[elemento].value;
	}
	}
})