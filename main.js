let griglia = document.getElementById("grid");
let gameover = false;
let punteggio = 0
let bombe = [ 5, 8, 10, 13, 17, 20, 22, 24, 25, 27, 30 ]

for (let i = 1; i <= 100; i++) {
	
	// Con Virtual-DOM e append
	let elemento = creaQuadrato(i);
	let bomba = bombaEsplosa();
	let gameover = false;
	let punteggio = 0
	
	griglia.append(elemento);
}


function creaQuadrato(contenuto) {

	//Crea un quadrato in virtual DOM con del contenuto
	let square = document.createElement("div");
	square.classList.add("square");
	

	// Aggiungi un event-listener
	square.addEventListener("click", function() {
		console.log("cliccato", this); //in questo caso this = square
		this.classList.toggle("evidenziata");
        
		punteggio++;
		console.log ("Punteggio attuale: ", punteggio)
	}, {once: true});


	//restituisci il quadrato al chiamante
	return square;
}            

function bombaEsplosa (contenuto) {
	bombe.classList.add(bomba)

	bomba.addEventListener("click", function() {
		console.log("BOOM!")
		alert("hai perso!") 
	})
}

