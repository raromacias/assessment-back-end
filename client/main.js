//set up buttons/variables


const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById('randomFortuneButton')


//set up functions

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

//combine steps 1 and 2 using Event listener
complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener("click", getRandomFortune)