let route=require('./route');

function sendToRoute() {
    let response=route(1);
    console.log(response.text);
}
sendToRoute();
module.exports=function () {
    sendToRoute();
};
