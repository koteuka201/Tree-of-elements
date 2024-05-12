import React from "react";
import { TreeAction } from "./components/treeAction/treeAction";
import { Header } from "./components/header/header";

export const App=()=>{
    
    return(
        <div>
            <Header/>
            <TreeAction/>
        </div>
    )
}