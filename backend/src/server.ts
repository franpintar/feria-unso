import express from 'express';
import notesRoutes from './routes/notesRoutes.ts';
import { connectDB } from './config/db.ts';
import dotenv from 'dotenv';
import rateLimiter from './middleware/rateLimiter.ts';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;


app.use(express.json());
app.use(rateLimiter);

app.use('/api/notes', notesRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log('Server started on PORT:', PORT + '.');
  });
})
