import express from 'express'
import { login, register } from '../controllers/user.contoller.js';


const app=express();
const router=express.Router();
router.post('/',register)
router.post('/login',login)

export default router
