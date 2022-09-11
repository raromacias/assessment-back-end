const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { updateMuse, deleteMuse, createMuse, getMuses, getCompliment, getRandomFortune } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortunes", getRandomFortune);
app.get(`/api/muses`, getMuses)
app.post(`/api/muses`, createMuse)
app.delete(`/api/muses/:id`, deleteMuse)
app.put(`/api/muses/:id`, updateMuse)


app.listen(4000, () => console.log("Server running on 4000"));
