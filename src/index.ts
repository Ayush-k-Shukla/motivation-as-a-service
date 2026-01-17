import cors from 'cors';
import express from 'express';
import { getMotivation } from './controllers/motivationController';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Routes
app.get('/', getMotivation);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
