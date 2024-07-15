async function heroDetails() {
    const url = 'https://raw.githubusercontent.com/RouseX1/RouseX1.github.io/main/superheroes.json';
    const request = new Request(url);

    try {
        const response = await fetch(request);
        const superHero = await response.json(); // Парсинг JSON з відповіді

        populateHeader(superHero); 
        populateSection(superHero); 
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function populateHeader(obj) {
    const header = document.querySelector('header');

    const myH1 = document.createElement('h1');
    myH1.textContent = obj.squadName;

    const myH3 = document.createElement('h3');
    myH3.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`;

    header.appendChild(myH1);
    header.appendChild(myH3);
}

function populateSection(obj) {
    const section = document.querySelector('section');

    for (const member of obj.members) {
        const article = document.createElement('article');
        article.classList.add('hero'); 

        const name = document.createElement('h2');
        name.classList.add('hero-name'); 
        name.textContent = member.name;

        const secretName = document.createElement('p');
        secretName.textContent = `Secret identity: ${member.secretIdentity}`;

        const age = document.createElement('p');
        age.textContent = `Age: ${member.age}`;

        const listHeading = document.createElement('p');
        listHeading.textContent = 'Superpowers:';
        const list = document.createElement('ul');

        for (const power of member.powers) {
            const myLi = document.createElement('li');
            myLi.textContent = power;
            list.appendChild(myLi);
        }

        article.appendChild(name);
        article.appendChild(secretName);
        article.appendChild(age);
        article.appendChild(listHeading);
        article.appendChild(list);

        section.appendChild(article);
    }
}

heroDetails();
