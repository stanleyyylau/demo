import * as React from 'react';
import {isClientSideRendering} from "../utils/env";


// @ts-ignore
import {timeToInteraction} from 'client-logger';


class Gallery extends React.Component<any, {}> {

    public showScoreBar: boolean = false;

    constructor(props: any) {
        super(props);

        if (isClientSideRendering()) {
            //     // Register TTI
            const eventsToRegister = [];
            // this tti first
            eventsToRegister.push("photoAppPWA");
            timeToInteraction.registerEvent(eventsToRegister);
        }
    }

    componentDidMount() {
        if(isClientSideRendering()){
            console.log('Component mounted on client side already')
        }
    }



    public render() {

        if(isClientSideRendering()){
        // log tti here
             timeToInteraction.unRegisterEvent('photoAppPWA')
        }

        return (
            <div id="pwa-div" className="pwa-div">
                this is the gallery component
            </div>
        );
    }

}

export default Gallery;