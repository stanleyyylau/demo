// Rewrite client logger so it can be run on node
export const timeToInteraction = {
    registerEvent: (name)=>{console.log('regisger event')},
    unRegisterEvent: (name)=>{console.log('unresig event')}
};


export const ga = {
    sendEvent: function (obj) {
        return;
    }
}