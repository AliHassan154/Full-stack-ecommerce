import express from 'express';
const route = express.Router();
import { forgotPasswordController, registerController } from '../controllers/authController.js';
import { loginController } from '../controllers/authController.js';
import { testController } from '../controllers/authController.js';
import { requireSignIn } from '../middlewares/authMiddleware.js';
import { isAdmin } from '../middlewares/authMiddleware.js';
// Register route | POST request


route.post('/register', registerController);


// Login route | POST request

route.post('/login', loginController);

//test route | GET request

route.get('/test', requireSignIn, isAdmin , testController);

route.get('/user', requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

route.get('/admin', requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

route.post('/forgot-password', forgotPasswordController);

export default route;

