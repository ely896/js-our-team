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
        image: 'walter-gordon-office-manager.jpg',
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
];

const containerDomElement = document.getElementById('team');

memberTeam.forEach(member => {
    const memberDiv = document.createElement('div');
    memberDiv.classList.add('member-card');

    const memberImage = document.createElement('img');
    memberImage.src = `./img/${member.image}`;
    memberImage.alt = member.nome;

    const memberInfo = document.createElement('div');
    memberInfo.innerHTML = `<h4>${member.nome}</h4><h4>${member.work}</h4>`;

    memberDiv.appendChild(memberImage);
    memberDiv.appendChild(memberInfo);
    containerDomElement.appendChild(memberDiv);
});

