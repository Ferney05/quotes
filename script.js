
// Mostrar opciones

function elemento(e) { return document.getElementById(e) }

const plusButton = elemento('plus')
const optionsDiv = elemento('code-options')

let mostrandoOptions = false;

plusButton.addEventListener("click", function() {
    mostrandoOptions = !mostrandoOptions; 

    if(mostrandoOptions) {
        optionsDiv.style.display = "block";
    } else {
        optionsDiv.style.display = "none";
    }
});

// Ocultar opciones

const editOptions = elemento('editar')
const downloadOptions = elemento('descargar')

editOptions.addEventListener("click", function() {
    optionsDiv.style.display = "none";
});

downloadOptions.addEventListener("click", function() {
    optionsDiv.style.display = "none";
});



// Generar citas

const citas = [
    "La vida es un viaje, no un destino. - Ralph Waldo Emerson",
    "La creatividad es la inteligencia divirtiéndose. - Albert Einstein",
    "El amor es la fuerza más poderosa del mundo. - Mahatma Gandhi",
    "La perseverancia es el camino al éxito. - Charles Chaplin",
    "La paciencia es amarga, pero su fruto es dulce. - Jean-Jacques Rousseau",
    "El conocimiento es el único tesoro que nadie puede robar. - Frank Tyger",
    "La felicidad es cuando lo que piensas, lo que dices y lo que haces están en armonía. - Mahatma Gandhi",
    "La sabiduría es el poder de poner nuestro tiempo y nuestro conocimiento en uso adecuado. - Thomas J. Watson",
    "El cambio es la ley de la vida. - John F. Kennedy",
    "La libertad es el oxígeno del alma. - Moshe Dayan",
    "La vida es como una bicicleta, para mantener el equilibrio, debes seguir adelante. - Albert Einstein",
    "La creatividad es la inteligencia divirtiéndose. - Albert Einstein",
    "La sabiduría no es el producto de la educación, sino de la vida a través de la experiencia. - Albert Einstein",
    "La vida es un sueño, y los sueños son solo sueños. - Pedro Calderón de la Barca",
    "La única manera de hacer un gran trabajo es amar lo que haces. - Steve Jobs",
    "La educación es el arma más poderosa que puedes usar para cambiar el mundo. - Nelson Mandela",
    "La alegría en el trabajo es la perfección de la vida. - Aristóteles",
    "La vida es lo que pasa mientras estás ocupado haciendo otros planes. - John Lennon",
    "La verdadera riqueza es la salud. - Virgilio",
    "La simplicidad es la máxima sofisticación. - Leonardo da Vinci",
    "La verdadera grandeza radica en la simplicidad. - William Wordsworth",
    "La educación es el pasaporte hacia el futuro, el mañana pertenece a aquellos que se preparan para él hoy. - Malcolm X",
    "La vida es lo que pasa mientras estás ocupado haciendo otros planes. - John Lennon",
    "La creatividad nace de la angustia, como el día nace de la noche oscura. - Isaac Bashevis Singer",
    "La verdadera medida de un hombre no se ve en los momentos de comodidad, sino en los momentos de desafío. - Martin Luther King Jr.",
    "La paciencia es amarga, pero su fruto es dulce. - Jean-Jacques Rousseau",
    "La gratitud es la llave que abre la puerta a la plenitud de la vida. - Melody Beattie",
    "La vida es como una bicicleta, para mantener el equilibrio, debes seguir adelante. - Albert Einstein",
    "La felicidad es cuando lo que piensas, lo que dices y lo que haces están en armonía. - Mahatma Gandhi",
    "La perseverancia es el camino al éxito. - Charles Chaplin",
    "La verdadera sabiduría está en reconocer la propia ignorancia. - Sócrates",
    "La vida es un sueño, y los sueños son solo sueños. - Pedro Calderón de la Barca",
    "La única manera de hacer un gran trabajo es amar lo que haces. - Steve Jobs",
    "La educación es el arma más poderosa que puedes usar para cambiar el mundo. - Nelson Mandela",
    "La creatividad es la inteligencia divirtiéndose. - Albert Einstein",
    "La paciencia es amarga, pero su fruto es dulce. - Jean-Jacques Rousseau",
    "La alegría en el trabajo es la perfección de la vida. - Aristóteles",
    "La vida es lo que pasa mientras estás ocupado haciendo otros planes. - John Lennon",
    "La verdadera riqueza es la salud. - Virgilio",
    "La simplicidad es la máxima sofisticación. - Leonardo da Vinci",
    "La verdadera grandeza radica en la simplicidad. - William Wordsworth",
    "La educación es el pasaporte hacia el futuro, el mañana pertenece a aquellos que se preparan para él hoy. - Malcolm X",
    "La vida es lo que pasa mientras estás ocupado haciendo otros planes. - John Lennon",
    "La creatividad nace de la angustia, como el día nace de la noche oscura. - Isaac Bashevis Singer",
    "La verdadera medida de un hombre no se ve en los momentos de comodidad, sino en los momentos de desafío. - Martin Luther King Jr.",
    "La paciencia es amarga, pero su fruto es dulce. - Jean-Jacques Rousseau",
    "La gratitud es la llave que abre la puerta a la plenitud de la vida. - Melody Beattie",
    "La vida es como una bicicleta, para mantener el equilibrio, debes seguir adelante. - Albert Einstein",
    "La felicidad es cuando lo que piensas, lo que dices y lo que haces están en armonía. - Mahatma Gandhi",
    "La perseverancia es el camino al éxito. - Charles Chaplin",
    "La verdadera sabiduría está en reconocer la propia ignorancia. - Sócrates",
    "La vida es un sueño, y los sueños son solo sueños. - Pedro Calderón de la Barca",
    "La única manera de hacer un gran trabajo es amar lo que haces. - Steve Jobs",
    "La educación es el arma más poderosa que puedes usar para cambiar el mundo. - Nelson Mandela",
    "La creatividad es la inteligencia divirtiéndose. - Albert Einstein",
    "La paciencia es amarga, pero su fruto es dulce. - Jean-Jacques Rousseau",
    "La alegría en el trabajo es la perfección de la vida. - Aristóteles",
    "La vida es lo que pasa mientras estás ocupado haciendo otros planes. - John Lennon",
    "La verdadera riqueza es la salud. - Virgilio",
    "La simplicidad es la máxima sofisticación. - Leonardo da Vinci"
];

const botonGenerarCita = elemento('boton');
const cita = elemento('cita');

function generarCitaAleatoria() {
    const citaAleatoria = citas[Math.floor(Math.random() * citas.length)];
    cita.textContent = citaAleatoria;
}

botonGenerarCita.addEventListener("click", generarCitaAleatoria);

generarCitaAleatoria();

// Editar

elemento('editar').addEventListener("click", function() {
    const citaElement = elemento("cita")
    const citaInput = elemento("cita-edit")
    
    citaInput.style.display = "block"
    citaInput.value = citaElement.textContent;
    citaElement.style.display = "none"
});


// Agregar evento para guardar la cita editada

const citaInput = elemento("cita-edit");
citaInput.addEventListener("blur", function() {
    const citaElement = elemento("cita");
    citaElement.textContent = citaInput.value;
    citaInput.style.display = "none";
    citaElement.style.display = "block";
});


// Descargar

window.onload = function() {
    document.getElementById('descargar').addEventListener("click", function() {
        const showCitas = document.getElementById("options-citas");
        
        html2canvas(showCitas).then(function(canvas) {
            const link = document.createElement("a");
            link.href = canvas.toDataURL("image/png");
            link.download = "cita.png";
            link.click();
        });
    });
}
