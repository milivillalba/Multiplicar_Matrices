import express from 'express';
const app = express();
const port = 5800;
app.use(express.static('public'));

app.listen(port, ()=>{
    console.log(`Servidor corriendo en http://localhost:${port}`);
});