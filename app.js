const express = require('express')
const app = express()
const port = 3001


const array =[
    {
       titolo :'titolo di prova',
       contenuto:  'contenuto di prova ',
       immagine :'immaginme di prova',
       tags : 'tags di prova '
    },

    {
        titolo :'titolo di prova',
        contenuto:  'contenuto di prova ',
        immagine :'immaginme di prova',
        tags : 'tags di prova '
     },

     {
        titolo :'titolo di prova',
        contenuto:  'contenuto di prova ',
        immagine :'immaginme di prova',
        tags : 'tags di prova '
     },

     {
        titolo :'titolo di prova',
        contenuto:  'contenuto di prova ',
        immagine :'immaginme di prova',
        tags : 'tags di prova '
     },

     {
        titolo :'titolo di prova',
        contenuto:  'contenuto di prova ',
        immagine :'immaginme di prova',
        tags : 'tags di prova '
     },
]


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



// console.log('provo 123')