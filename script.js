/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
Consigli del giorno: Ragioniamo come sempre a step. Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg
*/

console.log('funziona');

//MILESTONE 0:Creare l’array di oggetti con le informazioni fornite.
/*

const memberTeam = [
    {
        nome: 'Wayne Barnett',
        work: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        nome: 'Angela Caroll',
        work: 'Chief Editor',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        nome: 'Walter Gordon',
        work: 'Office Manager',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        nome: 'Angela Lopez',
        work: 'Office Manager',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        nome: 'Scott Estrada',
        work: 'Developer',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        nome: 'Barbara Ramos',
        work: 'Graphic Designer',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
]
*/


//MILESTONE 1:
//Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto


const memberTeam = [
    {
        nome: 'Wayne Barnett',
        work: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        nome: 'Angela Caroll',
        work: 'Chief Editor',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        nome: 'Walter Gordon',
        work: 'Office Manager',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        nome: 'Angela Lopez',
        work: 'Office Manager',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        nome: 'Scott Estrada',
        work: 'Developer',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        nome: 'Barbara Ramos',
        work: 'Graphic Designer',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
]

console.log(memberTeam);

memberTeam.forEach((element) => {
    console.log(`nome: ${element.nome} 
    lavoro: ${element.work} 
    ${element.image}`);
})



