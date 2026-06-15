import type { Edge, Node } from "@xyflow/react";
export type Status="Success"|"Error"|"Warning";
export type AppSummary={id:string;name:string;icon:"bulb"|"gear"|"rocket"|"bag"|"puzzle"};
export type ServiceData={label:string;status:Status;cpu:number;memory:string;disk:string;region:string;description:string;icon:"postgres"|"redis"|"mongo"|"app"};
export type ServiceNode=Node<ServiceData>;
export type Graph={nodes:ServiceNode[];edges:Edge[]};
