import express from 'express';
import router from './router.mjs';

const app = express();
const PORT = 3001;

app.use(router);

app.listen(PORT, () => {
	console.log(`Servidor ejecutandose en el puerto ${PORT}`); 
});