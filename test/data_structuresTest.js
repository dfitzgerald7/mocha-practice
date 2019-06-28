const assert = require('chai').assert;
const nodeClass = require('../data_structures/node.js')
const binaryTreeClass = require('../data_structures/binaryTree')

console.log(nodeClass)

describe("Node", function(){
    it ('The test works', function(){
        assert.equal(1,1)
    })
    it ('A node can be instantiated', function(){
        let myNode = new nodeClass(1);
        assert.equal(myNode.id, 1)
        assert.equal(myNode.numDuplicated, 0)
    })
})

describe("BinaryTree", function(){

    let head = new nodeClass(50)
    let tree = new binaryTreeClass(head)
    
    it('A tree can be instantiated', function(){
        assert.equal(tree.head, head)
    })

    it('A node can be added', function(){
        assert.equal()
    })


})