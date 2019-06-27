class BinaryTree {
    
    constructor(head){
        this.head = head;
    }    

    addNode(newNode){
        let node = this.head;
        while(node){
            if (newNode > node){
                if (node.right){
                    node = node.right;
                } else {
                    node.right = newNode;
                    return 
                }
            } else if(newNode < node){
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

}

module.export = {
    BinaryTree
}