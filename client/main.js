//set up buttons/variables
const musesContainer = document.querySelector('#muses-container')
const form = document.querySelector('form')

const baseURL = `http://localhost:4000/api/muses`

const musesCallback = ({ data: muses }) => displayMuses(muses)
const errCallback = err => console.log(err)

const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById('randomFortuneButton')
const changeSceneryBtn = document.getElementById('backgroundImageButton')

//set up functions
const getAllMuses = () => axios.get(baseURL).then(musesCallback).catch(errCallback)
const createMuse = body => axios.post(baseURL, body).then(musesCallback).catch(errCallback)
const deleteMuse = id => axios.delete(`${baseURL}/${id}`).then(musesCallback).catch(errCallback)
const updateMuse = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(musesCallback).catch(errCallback)

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getRandomFortune = () => {
    axios.get("http://localhost:4000/api/fortunes/")
        .then(res => {
            const data = res.data;
            alert(data);
        })
}


function submitHandler(e) {
    e.preventDefault()

    let name = document.querySelector('#name')
    let quote = document.querySelector('#quote')
    let imageURL = document.querySelector('#img')

    let bodyObj = {
        name: name.value,
        quote: [quote.value], 
        imageURL: imageURL.value
    }

    createMuse(bodyObj)

    name.value = ''
    quote.value = ''
    imageURL.value = ''
    }

function createMuseCard(muses) {
    const museCard = document.createElement('div')
    museCard.classList.add('muse-card')

    museCard.innerHTML = `<img alt='muse cover image' src = ${muses.imageURL} class="muse-cover-image"/>
    <p class="name">${muses.name}</p>
    <div class="btns-container">
    <p class="muse-quote">${muses.quote[0]}</p>
    <button onclick="updateMuse(${muses.id}, 'plus')">More please</button>
</div>
    <button onclick="deleteMuse(${muses.id})">delete</button>
    `


    musesContainer.appendChild(museCard)
}

function displayMuses(arr) {
    musesContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createMuseCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

getAllMuses()

//combine steps 1 and 2 using Event listener
complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener("click", getRandomFortune)