class BinaryTree {
    
    constructor(head){
        this.head = head;
    }    

    addNode(newNode){
        let node = this.head;
        while(node){
            if (newNode.id > node.id){
                if (node.right){
                    node = node.right;
                } else {
                    node.right = newNode;
                    return 
                }
            } else if(newNode.id < node.id){
                if (node.left){
                    node = node.left;
                } else {
                    node.left = newNode; 
                    return 
                }
            } else {
                node.numDuplicates++;
                return; 
            }
        }
    }


    inorder(node){
        function inorderHelper(node){
            if (node){
                inorderHelper(node.left) 
                treeArr.push(node.id)
                inorderHelper(node.right) 
            }
        }
        const treeArr = []
        inorderHelper(node)
        return treeArr
    }

    search(nodeId, node){
        if (node){
            if (nodeId === node.id){
                return node.id;
            } else if (nodeId > node.id){
                if (node.right){
                    return this.search(nodeId, node.right)
                } else {
                    return "Id is not in tree."
                }
            } else {
                if (node.left){
                    return this.search(nodeId, node.left)
                } else {
                    return "Id is not in tree."
                }
            }
        } else {
            return 'Id is not in tree.'
        }
    }
}

module.exports = BinaryTree