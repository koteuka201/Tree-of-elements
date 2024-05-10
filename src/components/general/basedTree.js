export function GetBasedTree(){
    const tree={
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
    }
    return tree
}