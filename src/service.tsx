import datos from "./data.json"
import { Job } from "./interface"


const data:Job[]=datos.jobs;

export default function getData(){
    return data;
}
