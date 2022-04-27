import { Router } from "express";

const router = Router();

router.post('/login', (req, res) => {
	res.status(200).json({ res: true, msj: 'Correcto' });
});

router.use('/', (req, res, next) => {
	res.status(404).json({ error: 'Página no encontrada' });
});

export default router;