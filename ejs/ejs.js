const express = require('express');
const path = require('path');

const app = express();
const port = 3300;

const publicPath = path.join(__dirname)
app.set('view Engine','ejs');

app.get('',(_,res)=>{
    res.sendFile(`${publicPath}/index.html`)
})

app.get('/profile',(_,res)=>{
    const user={
        name: 'Pinky',
        email:'mrfrontend@gmail.com',
        city:'Kanpur'
    }
    res.render(`${publicPath}/views/profile.ejs`,{user});
})


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
