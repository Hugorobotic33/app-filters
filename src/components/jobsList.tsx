import { Job } from "../interface";
import { JobCard } from "./jobCard";
import { filteredAccepted } from "../helpers/helper";
interface Props {
  jobs: Job[];
  filters:string[];
}
export function JobsList({jobs,filters}: Props) {
  return (
    <div className="list">
      {jobs.map(job=>{
         const {role,level,languages}=job;
         const targets=[role,level,...languages];
         if(filters.length==0||filteredAccepted(targets,filters)){             
           return(<JobCard key={job.id} job={job} targets={targets}/>)
         }

        } 
        
      )}
    </div>
  );
}
