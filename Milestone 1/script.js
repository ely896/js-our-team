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


//document.getElementById("team").innerHTML = JSON.stringify(memberTeam);
//MILESTONE 1:
//Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

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

//console.log(memberTeam);

//console.log(memberTeam[0].nome);

for (let i = 0; i < memberTeam.length; i++) {
    const member = memberTeam[i];

    console.log(member.nome);
    console.log(member.work);
    console.log(member.image);
    
}

*/
//MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe


const memberTeam = [
    {
        nome: 'Wayne Barnett',
        work: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        nome: 'Angela Caroll',
        work: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        nome: 'Walter Gordon',
        work: 'Office Manager',
        image: 'walter-gordon-office-managero.jpg',
    },
    {
        nome: 'Angela Lopez',
        work: 'Office Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        nome: 'Scott Estrada',
        work: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        nome: 'Barbara Ramos',
        work: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
]


const rowDomElement = document.querySelector('.member .row')
console.log(rowDomElement);


for (let i = 0; i < memberTeam.length; i++) {
    const member = memberTeam[i];

    const markup = `
    <div class="col-12 col-md-4">			
        <div class="card">
          <div class="card-body">
                <h4>${member.image}</h4>
                <h4>${member.nome}</h4>
                <h4>${member.work}</h4>
          </div>
        </div>
      </div>`
    rowDomElement.insertAdjacentHTML('beforeend', markup)
}
