import { Router, type Request, type Response } from 'express';

const router = Router();


router.get('/', (req: Request, res: Response) => {
  try {
    return res.status(200).json({ message: 'Hello World' });
  } catch (error) {
    console.log(error);
  }
})

export default router