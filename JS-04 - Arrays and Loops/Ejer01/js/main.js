console.log("++++++++++PARTE 1++++++++++");
let persons = ["Sofía","David","Juan"];

let divAlert = document.getElementById("divAlert");

let index=0;//Se declara variable para iniciar con un nuevo valor
for (index = 0; index < persons.length; index++) { //muestra la lista de libros en forma inversa
    console.log(persons[index]);
}//for index

console.log("++++++++++PARTE 2++++++++++");
persons.push("Sara","Augustin");//Agrega un elemento al arreglo hasta el final
console.log(persons);
console.log(persons.shift());

console.log("++++++++++PARTE 3++++++++++");
persons.splice(1, 0, "Renata");
persons.push("Elena");
console.log(persons);

divAlert.innerHTML = persons.length + " Personas formadas en el banco: ";

