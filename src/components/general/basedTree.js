export function GetBasedTree(){
    const tree={
        name: 'Корень дерева',
        id: 1,
        children: [
            {
                name: 'узел 1',
                id: 2,
                children: [
                    {
                        name: 'узел 2',
                        id: 4,
                        children: []
                    },
                    {
                        name: 'узел 3',
                        id: 5,
                        children: []
                    }
                ]
            },
            {
                name: 'узел 4',
                id: 3,
                children: []
                
            }
            
        ]
    }
    return tree
}