import express from 'express';

const registerRouter = express.Router();

registerRouter.get('/', async (req, res) => {
    res.render('register');
})

export default registerRouter;