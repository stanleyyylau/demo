// Rewrite client logger so it can be run on node
export const timeToInteraction = {
    registerEvent: (name)=>{console.log('register event')},
    unRegisterEvent: (name)=>{console.log('unregister event')}
};


export const ga = {
    sendEvent: function (obj) {
        return;
    }
}