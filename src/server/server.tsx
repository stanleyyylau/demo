import * as React from 'react';
import {StaticRouter} from 'react-router';
import {Request, Response} from 'express';
import {renderToNodeStream, renderToString} from 'react-dom/server';
import Gallery from '../routes/gallery';


interface PageProps {
    req: Request;
}

const Page = ({req}: PageProps) => {
    const context = {};
    return (
        <StaticRouter context={context} location={req.url}>
            <Gallery/>
        </StaticRouter>
    );
};

export const renderPage = (req: Request, res: Response): void => {

    res.contentType('text/html');
    res.write('');

    const pageInfo = new PageInfo();
    res.write(pageInfo.head);

    const reactStream = renderToNodeStream(<Page req={req} />);
    reactStream.pipe(res, {end: false});
    reactStream.on('end', () => {
        res.write(pageInfo.tail);
        res.end();
    });


};

class PageInfo {

    public staticAssets;

    constructor() {
        this.staticAssets = './assets';
    }

    get head(): String {
        return `
        <!DOCTYPE html>
        <html class="no-js" data-version="v2.163.0.e1665cecd5a4f8129b192c685b419424d7ed74ba"  data-language="en_US"
         lang="en">
        <head>
            <title>demo</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta http-equiv="content-type" content="text/html; charset=UTF-8"/>
            <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport"/>
        </head>
        <body>
        <div id='app'>`;
    }

    get tail(): String {
        return `</div>
        <script src="${this.staticAssets}/browser.js"></script>
        </body>
        </html>`;
    }

}
