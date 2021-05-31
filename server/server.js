import express from "express";
const app = express();
// const path = require('path');
// import path from "path";
import userRouter from "./routes/users.js";
app.get('/home', (req,res) => {
   res.render('/home')
})

app.get('/crypto', (req,res) => {
    res.render('/crypto')
})

app.use('/user', userRouter)


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));