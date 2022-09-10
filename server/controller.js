module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getRandomFortune: (req, res) => {
        const fortunes = ["A faithful friend is a strong defense.", "Be careful what you wish for.", "Expect much of yourself and little of others.", "Follow the middle path. Neither extreme will make you happy.", "Go take a rest; you deserve it."]

        //choose random fortune
        let randomNum = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomNum];

        res.status(200).send(randomFortune);
    }

}