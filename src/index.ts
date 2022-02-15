import "reflect-metadata";
import express from 'express';
import './database';

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server running at http://localhost${PORT}`));