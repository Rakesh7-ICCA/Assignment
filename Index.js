let members = [];

const container = document.querySelector('.container')

function closeModal()
{
    container.style.display = 'none'
}

document.addEventListener("DOMContentLoaded", () => {
  const keys = Object.keys(localStorage);
  // debugger
  if (!keys.length) {
    let Defaultmembers = [
      { Kishor: { age: 25, job: "Engineer" } },
      { Kallesh: { age: 22, job: "Designer" } },
      { Shivprasad: { age: 28, job: "Manager" } },
      { Indushree: { age: 24, job: "Artist" } },
      { Shifanaz: { age: 26, job: "Writer" } },
      { Rakesh: { age: 20, job: "Developer" } },
      { Dharnendra: { age: 27, job: "Architect" } },
      { Venkat: { age: 23, job: "Consultant" } },
      { Harish: { age: 29, job: "Entrepreneur" } },
      { Kadambari: { age: 21, job: "Researcher" } },
      { Ethan: { age: 32, job: "Software Engineer" } },
      { Landon: { age: 29, job: "Data Analyst" } },
      { Julian: { age: 35, job: "Product Owner" } },
      { Ava: { age: 28, job: "UX Researcher" } },
      { Liam: { age: 26, job: "Marketing Manager" } },
      { Noah: { age: 30, job: "Full Stack Developer" } },
      { Lucas: { age: 27, job: "Business Development" } },
      { Mason: { age: 33, job: "Cybersecurity Specialist" } },
      { Logan: { age: 31, job: "IT Project Manager" } },
      { Alexander: { age: 34, job: "Artificial Intelligence Researcher" } },
      { Gabriel: { age: 29, job: "DevOps Engineer" } },
      { Michael: { age: 36, job: "Solutions Architect" } },
      { Sophia: { age: 28, job: "Data Scientist" } },
      { William: { age: 33, job: "Product Manager" } },
      { Olivia: { age: 27, job: "UX Designer" } },
      { Benjamin: { age: 30, job: "Software Developer" } },
      { Charlotte: { age: 29, job: "Marketing Specialist" } },
      { Elijah: { age: 31, job: "IT Consultant" } },
      { Abigail: { age: 28, job: "Business Analyst" } },
      { James: { age: 35, job: "Cybersecurity Manager" } },
    ];



    for (const ele of Defaultmembers) {
      let name = Object.keys(ele);

      let age = ele[name].age;
      let job = ele[name].job;
      // debugger
      localStorage.setItem(name, JSON.stringify({ age: age, job: job }));
    }
  }
  for (let key in keys) {
    key = localStorage.key(key);
    members.push({ [key]: JSON.parse(localStorage.getItem(key)) });
  }
  loadCards(members);
});

function loadCards(mem) {
  for (const ele of mem) {
    let name = Object.keys(ele);

    let age = ele[name].age;
    let job = ele[name].job;
    createCard(name, age, job);
  }
}

function addBtn() {
  let name = prompt("Enter the Name : ");

  if (members[name]) {
    alert("The Name already exists....!!");
    return;
  }
  let age = Number(prompt("Enter the Age : "));
  let job = prompt("Enter the Job : ");

  debugger;
  if (!(age && name))
  {
    alert("Give a valid values...!")
    return;
  } 
  localStorage.setItem(name, JSON.stringify({ age: age, job: job }));
  createCard(name, age, job);
}
// section access
const section = document.querySelector("section");

// card creation
function createCard(name, age, job) {
  let colors = [
    "#4169E1", // Azul real
    "#DC143C", // Carmesí
    "#8B0A1A", // Rojo oscuro
    "#FF0033", // Rojo brillante
    "#1E90FF", // Azul cobalto
    "#FF69B4", // Rosa caliente
    "#8B008B", // Magenta
    "#4B0082", // Azul índigo
    "#FFA07A", // Naranja quemado
    "#008000", // Verde oscuro
    "#9400D3", // Violeta
    "#FFC400", // Oro
    "#F5DEB3", // Light brown
    "#A8D7F5", // Pale taupe
    "#BCE3C5", // Soft sage
    "#A0522D", // Light sienna
    "#F2F2F2", // Pale sand
  ];

  const card = document.createElement("div");

  card.setAttribute("id", "card");
  const cardName = document.createElement("p");
  cardName.innerText = `${name}`;
  cardName.classList.add("name");
  card.append(cardName);

  // card name
  const cardAge = document.createElement("p");
  cardAge.innerText = `Age : ${age}`;
  cardAge.classList.add("age");
  card.style.backgroundColor = `${colors[Math.floor(Math.random() * 15)]}`;
  card.append(cardAge);

  // card Job
  const cardJob = document.createElement("p");
  cardJob.innerText = `Job : ${job}`;
  cardJob.classList.add("job");
  card.append(cardJob);

  section.appendChild(card);
}
