const elBoss = {

    nombre: "Jose Luis",
    edad: 194,
    poderes: [
        {
            nombre: "Paranoia",
            description: "intentandome escapar de esta paranoia",
            imagenes: [
                {
                    imagen: {
                       url: "has conseguido acceder a la primera imagen de la paranoia"
                    }
                },
                {
                    imagen: {
                        url: "has conseguido acceder a la segunda imagen de la paranoia"
                    }
                }
            ]
        },
        {
            nombre: "Petrificasió",
            description: "Te mira y te petrifica",
            imagenes: [
                {
                    imagen: {
                       url: "has conseguido acceder a la primera imagen de la petrificasió"
                    },
                },
                {
                    imagen: {
                        url: "has conseguido acceder a la segunda imagen de la petrificasió"
                    }
                }   
            ]
        },
        {
            nombre: "Fuego",
            description: "Pues eso, fuego",
            imagenes: [
                {
                    imagen: {
                       url: "has conseguido acceder a la primera imagen del fueguito"
                    }
                },
                {
                    imagen: {
                        url: "has conseguido acceder a la segunda imagen del fueguito"
                    }
                } 
            ]
        }
    ],
    familiares: [
        {
            nombre: "Julian",
            edad: 342,
            parentesco: "Primo"
        },
        {
            nombre: "Paquito",
            edad: 312,
            parentesco: "Tío"
        },
        {
            nombre: "Emma",
            edad: 13,
            parentesco: "Sobrina"
        },
        {
            nombre: "Julia",
            edad: 100,
            parentesco: "Hermana"
        }
    ],
    reto: [
        [
            {
                sigueElReto: [
                    {
                        sigueElReto2: {
                            sigueElReto3: {
                                pareceQueSabesBucearEntreObjetos: {
                                    definitivamenteSabes: [
                                        "Jose",
                                        "Luis,",
                                        "te",
                                        "miro",
                                        "y",
                                        23121,
                                        "te",
                                        "destruyo",
                                        {
                                            mensajeFinal: "Enhorabuena!, si has llegado hasta aquí te costará mucho menos tratar los datos de la pokeapi en el proyecto final de JavaScript!"
                                        }
                                    ]
                                }
                            }
                        }
                    }
                ]
            }
        ]
    ]
}


// EJERCICIO

// tenemos un objeto llamado elBoss, como hemos visto en clase con ejemplos muy sencillitos
// podemos recorrer arrays... bucear entre objetos... y tratar datos.
// Lo que tendrás que hacer a continuación solo es complicar un poco más lo que hemos visto antes,
// pero por mucho que te pueda asustar elBoss, es lo mismo!

// Requisitos para matar a elBoss

// vamos a imaginarnos que vamos a hablar con el mediante console.logs, cada vez que pongamos
// un console.log será como hablar con el.

// entonces: // le vamos a decir = console.log()
// 1: le vamos a decir "{su nombre}, te conozco y no me das ningún miedo!";

console.log(`${elBoss.nombre}, te conozco y no me das ningún miedo!`);

// 2: le vamos a decir "conozco tus poderes y lo que hacen!"
console.log(`conozco tus poderes y lo que hacen!`);

// 3: le vamos a decir "tu primer poder es {su primer poder} y hace {la descripción de su poder}"
console.log(`tu primer poder es ${elBoss.poderes[0].nombre} y hace ${elBoss.poderes[0].description}`);

//"tu segundo poder es {su segundo poder} y hace {la descripción de su poder}"
console.log(`tu segundo poder es ${elBoss.poderes[1].nombre} y hace ${elBoss.poderes[1].description}`);

//"tu tercero poder es {su tercero poder} y hace {la descripción de su poder}"
console.log(`tu tercer poder es ${elBoss.poderes[2].nombre} y hace ${elBoss.poderes[2].description}`);

// 4: le vamos a decir "También se tu punto más debil, tus familiares, y les conozco..."
console.log(`También se tu punto más debil, tus familiares, y les conozco...`);

// "conozco a tu {parentesco del primer familiar} {nombre del primer familiar}"
console.log(`conozco a tu ${elBoss.familiares[0].parentesco} ${elBoss.familiares[0].nombre}`);

// "conozco a tu {parentesco del segundo familiar} {nombre del segundo familiar}"
console.log(`conozco a tu ${elBoss.familiares[1].parentesco} ${elBoss.familiares[1].nombre}`);

// "conozco a tu {parentesco del tercero familiar} {nombre del tercero familiar}"
console.log(`conozco a tu ${elBoss.familiares[2].parentesco} ${elBoss.familiares[2].nombre}`);

// "y conozco a tu {parentesco del cuarto familiar} {nombre del cuarto familiar}"
console.log(`conozco a tu ${elBoss.familiares[3].parentesco} ${elBoss.familiares[3].nombre}`);

// 5: para matarlo tendrás que superar el reto y para ello tendrás que decirle las palabras
// mágicas para que el mensaje quede tal que así "Jose luis, te miro y te destruyo".
const mensaje = elBoss.reto[0][0].sigueElReto[0].sigueElReto2.sigueElReto3.pareceQueSabesBucearEntreObjetos.definitivamenteSabes;

const newLength = mensaje.splice(5,1);
const noLast = mensaje.pop();
const newSentence = mensaje.join(' ');

console.log(newSentence);
//EXISTE LA OPCION DE HACER LO MISMO EN UNA LINEA
//console.log(elBoss.reto[0][0].sigueElReto[0].sigueElReto2.sigueElReto3.pareceQueSabesBucearEntreObjetos.definitivamenteSabes.filter((word) => typeof word == "string").join(" "));

// Por último, como bonus, mostraremos por pantalla las urls de todas las imágenes de los poderes.
const imgPower = elBoss.poderes;
for (const poder of imgPower) {
   
   let newArray = poder.imagenes;   
    for (const image of newArray) {
        console.log(image.imagen.url); 
    } 
}

// haremos la media de las edades de los familiares de elBoss.

// y mostraremos por pantalla el mensajeFinal.