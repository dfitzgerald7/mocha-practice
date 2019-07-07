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
        function preorderHelper(node){
            if (node){
                preorderHelper(node.left) 
                treeArr.push(node.id)
                preorderHelper(node.right) 
            }
        }
        const treeArr = []
        preorderHelper(node)
        return treeArr
    }

}

module.exports = BinaryTree