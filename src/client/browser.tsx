import * as React from 'react';
import { hydrate } from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Gallery from "../routes/gallery";

// @ts-ignore
import {timeToInteraction} from 'epc-logger';


hydrate(
    <BrowserRouter>
        <Gallery />
    </BrowserRouter>,
    document.getElementById('app')
);
