import express, { Request, Response } from 'express';
import cors from 'cors';
import { userRoutes } from './modules/user/user.route';
import { categoryRoutes } from './modules/category/category.route';
import { productRoutes } from './modules/product/product.route';

export const app = express();
export const port = process.env.PORT || 5000;
app.use(express.json());

app.use(cors({
  origin: ['https://bookworld-client.vercel.app', 'http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  credentials: true
}));




// ROUTES
app.use('/api', userRoutes);
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);
// ROUTES



app.get('/', (req: Request, res: Response) => {
    res.send('Hello from Express with TypeScript!');
});