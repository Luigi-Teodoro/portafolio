import { Router } from "express";

const router = Router();

router.get('/', (req, res) => res.render('index',{title:"Portafolio" })); 
router.get('/sobremi', (req, res) => res.render('sobre_mi',{title:"Sobre Mi" })); 
router.get('/habilidades', (req, res) => res.render('habilidades',{title:"Habilidades" })); 


export default router;