import type {AppSummary,Graph} from "./types";
const wait=(ms:number)=>new Promise(r=>setTimeout(r,ms));
export async function getApps():Promise<AppSummary[]>{await wait(300);return[{id:"app-1",name:"supertokens-golang",icon:"bulb"},{id:"app-2",name:"supertokens-java",icon:"gear"},{id:"app-3",name:"supertokens-python",icon:"rocket"},{id:"app-4",name:"supertokens-ruby",icon:"bag"},{id:"app-5",name:"supertokens-go",icon:"puzzle"}]}
const graph:Graph={nodes:[
{id:"app",type:"serviceCard",position:{x:250,y:120},data:{label:"App Server",status:"Success",cpu:2,memory:"0.05 GB",disk:"10.00 GB",region:"1",description:"Main application service",icon:"app"}},
{id:"postgres",type:"serviceCard",position:{x:820,y:210},data:{label:"Postgres",status:"Success",cpu:2,memory:"0.05 GB",disk:"10.00 GB",region:"1",description:"Primary relational database",icon:"postgres"}},
{id:"redis",type:"serviceCard",position:{x:370,y:570},data:{label:"Redis",status:"Error",cpu:2,memory:"0.05 GB",disk:"10.00 GB",region:"1",description:"Cache service",icon:"redis"}},
{id:"mongo",type:"serviceCard",position:{x:890,y:640},data:{label:"Mongodb",status:"Error",cpu:2,memory:"0.05 GB",disk:"10.00 GB",region:"1",description:"Document database",icon:"mongo"}}
],edges:[{id:"e1",source:"app",target:"postgres",animated:true},{id:"e2",source:"app",target:"redis",animated:true},{id:"e3",source:"app",target:"mongo"}]};
export async function getGraph(appId:string,error:boolean):Promise<Graph>{await wait(500);if(error)throw new Error("Mock API error enabled");const offset=appId==="app-1"?0:appId==="app-2"?25:appId==="app-3"?-25:15;return{nodes:graph.nodes.map(n=>({...n,position:{x:n.position.x+offset,y:n.position.y},data:{...n.data}})),edges:graph.edges.map(e=>({...e}))}}
