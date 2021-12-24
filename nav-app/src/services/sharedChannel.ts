class SharedResource {
    private state;
    private events;
    constructor(){
        this.state={};
        this.events={};    
    }
    public  get=(key)=>{
        return this.state[key]
    }
    public  put=(key,value)=>{
        console.log("put",key, value)
        this.state[key]=JSON.parse(JSON.stringify(value))
       if(this.events[key]){
        this.events[key].forEach(i=>i({key,value}));
    }
}

     public addEvents=(e,key)=>{
         this.events[key]=this.events[key]?this.events[key].push(e):[e];
     }

    
}


const sharedResource=new SharedResource();
export default function getSharedResouces(){
return sharedResource;
}


