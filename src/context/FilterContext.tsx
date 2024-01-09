import React,{SetStateAction,Dispatch} from "react";
import { MiContextoData } from "../interfaces/interface";

// interface MiContextoData {
//     setFilters:Dispatch<SetStateAction<string[]>>;
//   }
// const FilterContext=React.createContext<MiContextoData | undefined>(undefined);


const FilterContext=React.createContext<MiContextoData| undefined>(undefined);

export default FilterContext;