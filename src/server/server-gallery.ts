import {Router } from 'express';
import {renderPage} from './server';


const severApp: Router = Router();
export  = () => {
    severApp.get('/', (req, res) => {
        renderPage(req, res);
    });
    return severApp;
};
