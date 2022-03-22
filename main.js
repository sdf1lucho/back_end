//Desafio clase 01


class Usuario{
    
    constructor(nombre,apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros; 
        this.mascotas = mascotas; 
    }

    getFullName () {
        return `${this.nombre} ${this.apellido}`;
    }

    addMascota(nombreMascota){
        this.mascotas.push(nombreMascota);
    }

    countMascotas(){
        return this.mascotas.length;
    }

    addBook(nombreNuevo, autorNuevo){
        this.libros.push({nombre: nombreNuevo, autor: autorNuevo});
    }

    getBookNames(){
        let nombresLibros = [];
        this.libros.forEach(libro => nombresLibros.push(libro.nombre));
        return nombresLibros;
    }

}

//Testing
const users = new Usuario("Luciano", "Fanego", [{nombre:"Ficciones", autor: "Jorge Luis Borges"}], ["Mishu"]);
console.log(users);
console.log(users.getFullName());
users.addMascota("Bianca");
console.log(users.mascotas);
console.log(users.countMascotas());
users.addBook("El Aleph", "Jorge Luis Borges");
console.log(users.libros);
console.log(users.getBookNames());
