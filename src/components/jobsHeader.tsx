
interface Props{
    filters:string[];
    onDeleteFilter:(filter:string)=>void;
    onDeleteAll:()=>void;

}
export function JobsHeader({filters,onDeleteFilter,onDeleteAll}:Props){
    return(
        <div className="header">
            <div className="header-background">                    
            </div>
            {
              filters.length!==0&&(
              <div className="header-container">
                <div className="header-badges">
                    {
                        filters.map(filter=>(
                           <div className="badge" key={filter}>                              
                              <p>{filter}</p>                                                              
                                 <div className="remove" onClick={()=>onDeleteFilter(filter)}>
                                  <img src="/images/icon-remove.svg" alt="" height="12" width="12" />
                                 </div>
                            </div>
                           ))
                    }
                </div>
                <div className="badge-button" onClick={onDeleteAll}>
                    Clear
                </div>
            </div>
            )   
            }
        </div>

    );
}