import React, {useState, useEffect} from "react";
import { BuildTree } from "../buildTree/buildTree";
import { GetBasedTree } from "../general/basedTree";
import { CustomButton } from "../general/customButton/customButton";
import './treeAction.css'

export const TreeAction=()=>{
    const [newNodeName, setNewNodeName] = useState("")
    const [treeData, setTreeData] = useState(GetBasedTree());
    const [selectedNode, setSelectedNode] = useState('')
    const [isTree, setIsTree]=useState(false)

    useEffect(() => {
        setSelectedNode(treeData)
    }, [isTree]);


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
            setNewNodeName('')
        } 
        
    }
    const deleteNode=(node, id)=>{
        node.children = node.children.filter(child => child.id !== id);
        node.children.forEach(child => deleteNode(child, id));
    }

    const handleEditNode=()=>{
        if (selectedNode && selectedNode.id!=1){
            selectedNode.name = newNodeName
            forceUpdate()
        }
    }

    const handleResetTree=()=>{
        setTreeData(GetBasedTree())
        setNewNodeName('')
        setIsTree(!isTree)
    }

    function forceUpdate(){
        setTreeData(prevState => ({ ...prevState }))
        
    }
    return(
        <main className="container">
            <header className="controls">
                <input
                    type="text"
                    value={newNodeName}
                    className='input'
                    onChange={(e) => setNewNodeName(e.target.value)}
                    placeholder="Ваш узелок"
                />
                <CustomButton handleFunction={handleAddNode} name={'Добавить узел'}/>
                <CustomButton handleFunction={handleDeleteNode} name={'Удалить узел'}/>
                <CustomButton handleFunction={handleEditNode} name={'Редактировать узел'}/>
                <CustomButton handleFunction={handleResetTree} name={'Сбросить дерево'}/>
            </header>
            <div className="content">
                
                <div className={`rootStyle ${selectedNode.name === treeData.name ? 'rootStyleActive' : ''}`} onClick={()=>setSelectedNode(treeData)}>{treeData.name}</div>
                <BuildTree node={treeData} setSelectedNode={setSelectedNode} setNewNodeName={setNewNodeName} selectedNode={selectedNode}/>
                
                
            </div>
            
            
        </main>
    )
}