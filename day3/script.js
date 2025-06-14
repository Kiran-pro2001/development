// Using custom JS 

// const element = document.createElement('h1'); 
// element.textContent = 'Hello, World!';
// element.style.color = 'blue';
// element.style.textAlign = 'center';
// element.style.backgroundColor = 'lightgray';
// element.style.fontSize = '2em';

// same if I want to create multiple element, I need to write the same code again and again

// const element2 = document.createElement('h2'); 
// element2.textContent = 'Welcome to Codingmuggers!';
// element2.style.color = 'blue';
// element2.style.textAlign = 'center';
// element2.style.backgroundColor = 'lightgray';
// element2.style.fontSize = '2em';


// Append the element to the root div
// document.getElementById('root').append(element);
// document.getElementById('root').append(element2);




// ======================================= ======================================= =======================================


// to create 10 elements, I have to again write the same code 10 times, which is not efficient
// So, I will use a function to create the element


// function createElement(tag, attribute, children){
//     const element = document.createElement(tag);
//     for (let key in attribute){
//         element.style[key] = attribute[key];
//     }
//     element.textContent = children; 
//     return element

// }
//attribute - {color:'blue', textAlign: 'center', backgroundColor : 'lightgray', fontSize : '2em'}

// const element = createElement("h1",{color:'blue', textAlign: 'center', backgroundColor : 'lightgray', fontSize : '2em'}, "Hello, World!")
// const element2 = createElement("h2",{color: 'blue', textAlign: 'center', backgroundColor: 'lightgray', fontSize : '2em'}, "Welcome to Codingmuggers"  )
// const element3 = createElement("h3",{color: 'blue', textAlign: 'center', backgroundColor: 'lightgray', fontSize : '2em'}, "I am building my own React.js")

// document.getElementById('root').append(element);
// document.getElementById('root').append(element2);
// document.getElementById('root').append(element3);










// ======================================= ======================================= =======================================
// same can also be converted as library -- that is your react. 
// react walo ne aapke function ko ek object me wrap kar diya hai  

// At the end, your react is just a JavaScript object or a JS Library 
const React = {
    createElement: function(tag, attribute, children){
    const element = document.createElement(tag);
    for (let key in attribute){
        element.style[key] = attribute[key];
    }
    element.textContent = children; 
    return element;

    }
}

const ReactDOM = {
    render : function (child, parent){
        parent.append(child)
    }
}

const element = React.createElement("h1",{color:'blue', textAlign: 'center', backgroundColor : 'lightgray', fontSize : '2em'}, "Hello, World!")
const element2 = React.createElement("h2",{color: 'blue', textAlign: 'center', backgroundColor: 'lightgray', fontSize : '2em'}, "Welcome to Codingmuggers")
const element3 = React.createElement("h3",{color: 'blue', textAlign: 'center', backgroundColor: 'lightgray', fontSize : '2em'}, "I am building my own React.js")


ReactDOM.render(element, document.getElementById('root'))
ReactDOM.render(element2, document.getElementById('root'))
ReactDOM.render(element3, document.getElementById('root'))


// JSX is not a part of React, it later added in React. 
// go to react cdn link, and see the whole code -- full library is written in js. 

// react dom -- manipulate my dom 


// further we can do optimization 


// Deploy on Netlify -  https://myfirstreactlibrary.netlify.app/