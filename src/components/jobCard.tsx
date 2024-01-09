import { useContext } from "react";
import { Job } from "../interface";
import FilterContext from "../context/FilterContext";
interface Props{
    job:Job;
    targets:string[];
}
export function JobCard({job,targets}:Props){
    const {
        id,
        company,
        new: isNew,
        featured,
        position,
        postedAt,
        contract,
        location,
        logo,
      }=job; 
     
    const updateFilters=useContext(FilterContext);
    return(
      <div className="job-card">
            
        <div className="logo-card">
          <img src={logo} alt="logo"/>
        </div>

        <div className="body-card">
          <div className="top-features">
            <div className="company">{company}</div>
            <div className="badges">
              {isNew && <div className="status-new">NEW!</div>}
              {featured && <div className="status-feat">FEATURED</div>}
            </div>
            
          </div>
          <div className="position">{position}</div>
          <div className="bottom-features">
            <div>{postedAt}</div>
            <div>.</div>
            <div>{contract}</div>
            <div>.</div>
            <div>{location}</div>
          </div>
          
        </div>
        <div className="categories">
           {targets.map(target=><div onClick={()=>updateFilters?.handleClickFilter(target)} key={target}>{target}</div>)}
        </div>

      </div>
    );
}