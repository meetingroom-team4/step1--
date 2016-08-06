let commandMainPage=require('./mainpage');

const defalutMapping={
    "*":commandMainPage
};

let mapping=defalutMapping;
function route(input) {
    let command=mapping[input]||mapping['*'];
    let response=command(input);

    return {
        text:response.text
    }
}

module.exports=route;