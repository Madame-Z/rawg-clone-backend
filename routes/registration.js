import { Router } from 'express';
import bcrypt from 'bcrypt'; 

import { User } from '../models/User.js'

export const router = Router()


router.post('/register', async (request, response) => {
    const salt = 15;
    const hashedPassword = await bcrypt.hash(request.body.password, salt);

    const createUser = await new User( {
        username : request.body.username,
        email : request.body.email,
        password: hashedPassword
    });

    try {
        await createUser.save();
        response.send('New user')  
    } catch (error) {
        response.send(error)     
    }
    
})