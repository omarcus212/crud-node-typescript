import { Router, Request, Response } from 'express';

const routers = Router();

routers.get('/hello', (req: Request, res: Response) => {
    res.json({ message: 'Olá, mundo!' });
});


export default routers;
