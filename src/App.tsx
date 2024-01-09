import React, { useState } from 'react';
import './App.css';
import { JobsHeader } from './components/jobsHeader';
import { JobsList } from './components/jobsList';
import  getData  from './service';
import FilterContext from './context/FilterContext';


function App() {
  const [filters,setFilters]=useState<string[]>([]);
  const jobs=getData();

  function handleClickFilter(filter:string){
    if(!filters.includes(filter)){
      setFilters([...filters,filter]);
    }
  }
  function handleDeleteFilter(filter:string){
    let result=filters.filter(item=>item !==filter);
    setFilters(result);
  }
  function handleDeleteAll(){
    setFilters([]);
  }
  

  return (
    <div className="App">
      <JobsHeader filters={filters} onDeleteFilter={handleDeleteFilter} onDeleteAll={handleDeleteAll}/>
      <FilterContext.Provider value={{handleClickFilter}}>
        <JobsList jobs={jobs} filters={filters}/>        
      </FilterContext.Provider>
    </div>
  );
}

export default App;
