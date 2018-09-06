// Identity loader
module.exports = function(source) {
    if(this.context.indexOf('client-logger') > 0) {
        console.log('############ writing logger ###### ')
        return JSON.stringify("export const timeToInteraction = { registerEvent: (name)=>{console.log('regisger event')}, unRegisterEvent: (name)=>{console.log('unresig event')} };")
    }
    return source;
};