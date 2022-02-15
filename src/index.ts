import "reflect-metadata";
import express from 'express';
import './database';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server running at http://localhost${PORT}`));