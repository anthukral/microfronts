//createOrRegisterContext
//getContextValue
if(!window.contexts)
 window.contexts={};


const {createContext} =require("react");


const createOrRegisterContext=(contextName)=>{
    console.log("Context", contextName);
    contexts[contextName]=createContext();

}


const getContext=(ctxName)=>{
    if(ctxName==="ALL"){
        return contexts;
    }
    return contexts[ctxName]
}


module.exports={getContext, createOrRegisterContext};

