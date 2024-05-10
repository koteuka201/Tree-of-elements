import React,{useState} from "react";
import { Tree } from "./components/tree"
export const App=()=>{
    const [newNodeName, setNewNodeName] = useState("")
    const [treeData, setTreeData] = useState({
        name: 'Root',
        id: 1,
        children: [
            {
                name: 'node 1',
                id: 2,
                children: [
                {
                    name: 'node 2',
                    id: 4,
                    children: []
                },
                {
                    name: 'node 3',
                    id: 5,
                    children: []
                }
                ]
            },
            {
                name: 'node 4',
                id: 3,
                children: []
            }
        ]
    });
    const [selectedNode, setSelectedNode] = useState(treeData)
    const handleAddNode = () => {
        if (!selectedNode) return
        const newNode = {
            name: newNodeName,
            id: Date.now(),
            children: []
        };
        selectedNode.children.push(newNode)
        setTreeData(prevState => ({ ...prevState }))
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
            <div onClick={()=>setSelectedNode(treeData)}>{treeData.name}</div>
            <Tree node={treeData} setSelectedNode={setSelectedNode} />
        </div>
    )
}