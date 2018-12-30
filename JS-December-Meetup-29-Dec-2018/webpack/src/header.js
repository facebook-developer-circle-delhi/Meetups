// export const foo1="cat";
// export const foo2="dog";

const createButton=(label)=>{
    buttonlabel=`button label ${label}`;
    const button=document.createElement("div");
    button.innerText=buttonlabel;
    return button;

}

export {button};