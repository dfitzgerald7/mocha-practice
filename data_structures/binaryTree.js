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

    preorder(node){
        const treeArr = []
        preorderHelper(node)
        return treeArr
    }

    preorderhelper(node){
        if (node !== null){
            treeArr.push(node.id)
            this.preorder(node.left) 
            this.preorder(node.right) 
        }
    }

}

module.exports = BinaryTree