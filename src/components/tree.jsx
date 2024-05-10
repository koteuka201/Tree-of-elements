import React,{ useState } from "react";
export const Tree=({ node,setSelectedNode, setNewNodeName, level = 0 })=>{
    return (
        <div className="ms-8">
            {node.children && (
                <ul>
                {node.children.map((child) => (
                    <li key={child.id}>
                    <div onClick={() => {setSelectedNode(child); setNewNodeName(child.name)}}>{child.name}</div>
                    <Tree node={child} setSelectedNode={setSelectedNode} setNewNodeName={setNewNodeName} level={level + 1} />
                    </li>
                ))}
                </ul>
            )}
        </div>
      );
}