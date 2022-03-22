/* Desafio clase 01
1) Declarar una clase Usuario

2) Hacer que Usuario cuente con los siguientes atributos:
nombre: String
apellido: String
libros: Object[]
mascotas: String[]

Los valores de los atributos se deberán cargar a través del constructor, al momento de crear las instancias.

3) Hacer que Usuario cuente con los siguientes métodos:
getFullName(): String. Retorna el completo del usuario. Utilizar template strings.
addMascota(String): void. Recibe un nombre de mascota y lo agrega al array de mascotas.
countMascotas(): Number. Retorna la cantidad de mascotas que tiene el usuario.
addBook(String, String): void. Recibe un string 'nombre' y un string 'autor' y debe agregar un objeto: { nombre: String, autor: String } al array de libros.
getBookNames(): String[]. Retorna un array con sólo los nombres del array de libros del usuario.

4) Crear un objeto llamado usuario con valores arbitrarios e invocar todos sus métodos.
*/

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

    getBookNames_v2(){
        let arrNombresLibros = this.libros.map(function(obj){
            let rObj = {};
            rObj["nombre"] = obj.nombre;
            return rObj;
         });
         return arrNombresLibros;
    }

    getBookNames_v3(){
            return this.libros.map(function(libro){
                return libro.nombre;
            })
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
console.log(users.getBookNames_v2());
console.log(users.getBookNames_v3());