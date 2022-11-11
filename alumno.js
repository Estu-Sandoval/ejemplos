import {Persona} from './persona'

class Alumno extends Persona{
    #curso; #division; #aula;
    constructor(nombre,dni,edad,nacionalidad,genero,peso,altura,curso,division,aula){
        super(nombre,dni,edad,nacionalidad,genero,peso,altura)
        this.#curso = curso;
        this.#division = division;
        this.#aula = aula;
    }
}

let alumno1 = new Alumno("Juan",46324234,17,"Argentino","Masculino",56,2,4,2,"Ala lateral derecha")

alert(alumno1.getNombre())

alumno1.setNombre("Roberto");

alert(alumno1.getNombre())

