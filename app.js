const express = require('express')
const app = express()
const port = 3001

app.use(express.static('public'))

const array = [
    {
        titolo: "Ciambellone",
        contenuto: "ricetta del dolce",
        tags: ["#economica"],
        img: "img/ciambellone.jpeg"
    },
    {
       titolo: "Craker Barbabietola",
       contenuto: "ricetta del dolce",
       tags: ["#croccante"],
       img: "img/cracker_barbabietola.jpeg"
   },
   {
       titolo: "Pane Fritto Dolce",
       contenuto: "ricetta del dolce",
       tags: ["#tradizionale"],
       img: "img/pane_fritto_dolce.jpeg"
   },
   {
       titolo: "Pasta alla Barbabietola",
       contenuto: "ricetta del dolce",
       tags: ["#colorata"],
       img: "img/pasta_barbabietola.jpeg"
   },
   {
       titolo: "Torta Paesana",
       contenuto: "ricetta del dolce",
       tags: ["#facile"],
       img: "img/torta_paesana.jpeg"
   }];


app.get("/", (req, res) => {
    console.log("Server del mio blog");
    res.send("Server del mio blog");
});

app.get('/bacheca', (req, res)=>{
    res.json(array)
})


app.listen(port, () =>{
    console.log(' sono in attesa nella porta ' + port)
})


