import React,{useState} from "react";
import { Tree } from "./components/tree"
import { GetBasedTree } from "./components/general/basedTree";

export const App=()=>{
    const [newNodeName, setNewNodeName] = useState("")
    const [treeData, setTreeData] = useState(GetBasedTree());
    const [selectedNode, setSelectedNode] = useState(treeData)
    const handleAddNode = () => {
        if (selectedNode) {
            const newNode = {
                name: newNodeName,
                id: Date.now(),
                children: []
            };
            selectedNode.children.push(newNode)
            forceUpdate()
        }
    }

    const handleDeleteNode=()=>{
        if (selectedNode!=null && selectedNode.id!=1){
            deleteNode(treeData, selectedNode.id)
            setSelectedNode(null)
        } 
        
    }
    const deleteNode=(node, id)=>{
        node.children = node.children.filter(child => child.id !== id);
        node.children.forEach(child => deleteNode(child, id));
    }

    const handleEditNode=()=>{
        if (selectedNode){
            selectedNode.name = newNodeName
            forceUpdate()
        }
    }

    const handleResetTree=()=>{
        setTreeData(GetBasedTree())
    }

    function forceUpdate(){
        setTreeData(prevState => ({ ...prevState }))
    }
    return(
        <div>
            
            <input
                type="text"
                value={newNodeName}
                onChange={(e) => setNewNodeName(e.target.value)}
                placeholder="ВВЕДИ УЗЕЛ"
            />

            <button onClick={handleAddNode}>Добавить узел</button>
            <button className='ms-4' onClick={handleDeleteNode}>Удалить узел</button>
            <button className="ms-4" onClick={handleEditNode}>Редактировать узел</button>
            <button className="ms-4" onClick={handleResetTree}>Сбросить дерево</button>

            <div onClick={()=>setSelectedNode(treeData)}>{treeData.name}</div>
            <Tree node={treeData} setSelectedNode={setSelectedNode} setNewNodeName={setNewNodeName}/>
        </div>
    )
}