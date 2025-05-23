import express from 'express';
import {dirname,join} from 'path';
import {fileURLToPath} from 'url';
import router from './router/index.js';

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url)); 
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(router);
app.use(express.static(join(__dirname, 'public')));
app.listen(5000) 
console.log('Server is running on htpp://localhost:5000');