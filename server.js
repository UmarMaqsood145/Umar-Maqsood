const express = require('express');
const app = express();
const port = 8000;
const path = require('path');
app.use(express.static('./portfolio'));

app.get('/', (req, res)=>{
	res.sendFile(index.html);
})

app.all('*', (req, res)=>{
	res.send('<h1>404 page not found</h1>');
})

app.listen(port, ()=>{
	console.log(`Server is running at http://localhost:${port}`)
})