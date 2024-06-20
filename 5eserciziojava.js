 
//Traccia 1: Creare un programma che offre una interfaccia di comando all'utente (clicca 1 fai questo, clicca 2 fai questo ..etc .clicca 0 per chiudere).  I1 programma permette all'utente di creare una lista e offre le funzionalità sotto descritte:

let interfacciaUtente; 
let listaSpesa = [];


while ( interfacciaUtente != 0) {

interfacciaUtente= parseInt(prompt("Gentile Utente, digiti : \n1) per aggiungere un elemento dalla lista della spesa;  \n"+
"2) per eliminare un elemento dalla lista della spesa; \n"+"3) per ordinare gli elementi della lista in ordine alfabetico; \n"+
"4) modifica un elemento della lista; \n"+"5) per eliminare l'intera lista; \n0) per uscire."));


switch(interfacciaUtente) {

    case 1: // Aggiungere un elemento alla lista della spesa
        let aggiungiElemento = prompt("Inserisca l'elemento che vuole aggiungere alla lista: \n");
        listaSpesa.push(aggiungiElemento.toLowerCase());
        alert ( "La sua lista della spesa aggiornata è la seguente: \n" + listaSpesa);
        break;

    case 2: // Eliminare un elemento dalla lista della spesa
        let rimuoviElemento = prompt("Digiti l'elemento che vuole eleminare:");
        let rimuoviIndice = listaSpesa.indexOf(rimuoviElemento.toLowerCase());

        if(rimuoviIndice !=-1){
            listaSpesa.splice(rimuoviIndice,1);
            alert ("Hai rimosso " + rimuoviElemento.toLowerCase() + " dalla lista. Ora la lista della spesa aggiornata è la seguente: \n" + listaSpesa);
        } else{
            alert ("L'elemento digitato non è presente nella lista.");
        }
         break;

    case 3: // Ordinare la lista della spesa in ordine alfabetico 
        if (listaSpesa != 0) {
            let ordinaLista= listaSpesa.sort();
        alert ("La lista della spesa ordinata in ordine alfabetico è la seguente: \n" + listaSpesa);
        }else{
            alert("La lista della spesa è vuota. Nessun elemnto da ordinare.");
        }
        break;

    case 4: // Modifica un elemento della lista della spesa
        let modifica= prompt("Digiti l'elemento della lista che vuole modificare:");
        let elementoDaModificare= listaSpesa.indexOf(modifica.toLowerCase());

        if (elementoDaModificare != -1) {
            let inserireNuovoElemento= prompt("Digiti il nuovo elemento da inserire nella lista:");
            listaSpesa.splice(elementoDaModificare, 1, inserireNuovoElemento.toLowerCase());
            alert ("La lista della spesa modificata è la seguente: \n" + listaSpesa);
        }else{
            alert("L'elemento che vuole modificare non è presente nella lista della spesa.");
        }
        break;

    case 5: // Elimina l'intera lista della spesa

        if (listaSpesa !=0) {
            let eliminaLista= listaSpesa - listaSpesa.length;
            alert ("L'intera lista della spesa è stata eliminata.")
        }else{
            alert ("La lista è vuota. Non ci sono elementi da eliminare");
        }
        break;

    case 0: // Uscire dal loop
        alert ("Arrivederci e grazie.")
        break;
        

    default: //Per tutti i comandi non validi
        alert ("L'operazione non è valida. Si prega di riprovare utilizzando il comando corretto, grazie.")
        break;
}
}
 

// Traccia 2: Filtrare numeri pari da un array 

function filtraNumeriPari (arrayNumeri){
let arrayFiltrato = arrayNumeri.filter((number)=>number%2==0); // nella lista mi filtra tutti i numeri che divisi per due mi danno resto 0, e dunque sono pari
return arrayFiltrato;
}

let vediamoSePari= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("I numeri pari sono: " + filtraNumeriPari(vediamoSePari));

let listaNumeri= [-20, -79, 5, 44, 13, 26, -7, 30, 77, 1, 40];
console.log ( "I numeri pari sono: " + filtraNumeriPari(listaNumeri));



// Traccia 3: Unisci 2 array e filtra per lunghezza

    function filtraPerLunghezza(array1, array2, lunghezzaMinimaParola){
    let listaConcatenata = array1.concat(array2); // concatena l'array1 con l'array2
    let listaFiltrata = listaConcatenata.filter ((parola) => parola.length >= lunghezzaMinimaParola); // dalla lista concatenata le parole con lunghezza minima desiderata
    return listaFiltrata;
} 


let nomi1= ["Paolo", "Luigi", "Luca", "Giovanni", "Stefano", "Claudio", "Ugo"];
let nomi2= ["Nicole", "Alice", "Elisa", "Giulia", "Giada", "Carlotta"];
console.log ("Il risultato della lista unita e filtrata é: \n" + filtraPerLunghezza(nomi1, nomi2, 6));
console.log ("Il risultato della lista unita e filtrata é: \n" + filtraPerLunghezza(nomi1, nomi2, 7));
console.log ("Il risultato della lista unita e filtrata é: \n" + filtraPerLunghezza(nomi1, nomi2, 8));