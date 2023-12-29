function customRender(customElement,container){
    // const domElement = document.createElement(customElement.type);
    // domElement.innerHTML = customElement.children;
    // domElement.setAttribute('href',customElement.props.href);
    // domElement.setAttribute('target',customElement.props.target);
    
    // container.appendChild(domElement);

    //Or-----------
    const domElement = document.createElement(customElement.type);
    domElement.innerHTML = customElement.children;
    for(let prop  in customElement.props){
        if(prop == 'chilren')continue
        domElement.setAttribute(prop, customElement.props[prop]);
    }
    container.appendChild(domElement);
}

// This is how react works and render component on screen 
//here declared userDefined
 

const customElement = {
    type : 'a',
    props:{
        href:"https://www.google.com",
        target:'_parent'
    },
    children:'click here to click on  google'
}

const mainContainer = document.getElementById('root');

customRender(customElement,mainContainer);

