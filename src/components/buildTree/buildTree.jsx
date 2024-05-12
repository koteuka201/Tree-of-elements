import React,{ useState } from "react";
import './buildTree.css'
export const BuildTree=({ node,setSelectedNode, setNewNodeName, selectedNode, level = 0 })=>{
    
    return (
        <div className="nodeContainer">
            {node.children && (
                <ul>
                    {node.children.map((child) => (
                        <li key={child.id}>
                            <div>
                                <p  
                                    className={`node ${child === selectedNode ? 'nodeActive' : ''}`} 
                                    onClick={() => {setSelectedNode(child); setNewNodeName(child.name)}}
                                >
                                    {child.name}
                                </p>
                            </div>
                            
                            <BuildTree node={child} setSelectedNode={setSelectedNode} setNewNodeName={setNewNodeName} selectedNode={selectedNode} level={level + 1} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
      );
}