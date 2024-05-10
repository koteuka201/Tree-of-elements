import React,{ useState } from "react";
export const Tree=({ node,setSelectedNode, level = 0 })=>{
    return (
        <div className="ms-8">
            {node.children && (
                <ul>
                {node.children.map((child) => (
                    <li key={child.id}>
                    <div onClick={() => setSelectedNode(child)}>{child.name}</div>
                    <Tree node={child} setSelectedNode={setSelectedNode} level={level + 1} />
                    </li>
                ))}
                </ul>
            )}
        </div>
      );
}