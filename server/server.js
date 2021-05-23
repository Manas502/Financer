const express = require('express');
const app = express();
const path = require('path');

app.get('/home', (req,res) => {
   res.render('/home')
})

app.get('/crypto', (req,res) => {
    res.render('/crypto')
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));