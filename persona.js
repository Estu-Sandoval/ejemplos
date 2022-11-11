export class Persona{
    #nombre;#peso;#dni;#edad;#nacionalidad;#genero;#altura;
    constructor(nombre,dni,edad,nacionalidad,genero,peso,altura){
        this.#nombre = nombre;
        this.#dni = dni;
        this.edad = edad;
        this.#nacionalidad = nacionalidad;
        this.genero = genero;
        this.peso = peso;
        this.#altura = altura;
    }

    getNombre(){
        return this.#nombre;
    }

    getEdad(){
        return this.#edad;
    }
    getDNI(){
        return this.#dni;
    }

    getNacionalidad(){
        return this.#nacionalidad;
    }

    getPeso(){
        return this.#peso;
    }

    getAltura(){
        return this.#altura;
    }

    getGenero(){
        return this.#genero;
    }

    setNombre(nuevoNombre){
        if(this.#edad>=18){
            this.#nombre = nuevoNombre;
        }
        else{
            alert("Eres menor de edad, por lo que no puedes cambiar nombre")
        }
    }

    setEdad(nuevaEdad){
        this.#edad = nuevaEdad;
    }

    setGenero(nuevoGenero){
        this.#genero = nuevoGenero;
    }

    setGenero(nuevoPeso){
        this.#peso = nuevoPeso;
    }

    setGenero(nuevoAltura){
        this.#altura = nuevoAltura;
    }

    caminar(){
        alert("Está caminado")
    }

    hablar(){
        alert("Está hablando")
    }

    comer(){
        alert("Está comiendo")
    }
}