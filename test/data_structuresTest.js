const assert = require('chai').assert;
const expect = require('chai').expect;
const nodeClass = require('../data_structures/node.js')
const binaryTreeClass = require('../data_structures/binaryTree')

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
        let node70 = new nodeClass(70)
        let node30 = new nodeClass(30)
        tree.addNode(node70)
        tree.addNode(node30)
        assert.equal(head.right, node70)
        assert.equal(head.left, node30)
    })

    it('A tree can be traversed in preorder', function(){
        let node70 = new nodeClass(70)
        let node30 = new nodeClass(30)
        let node10 = new nodeClass(10)
        tree.addNode(node70)
        tree.addNode(node30)
        tree.addNode(node10)
        expect(tree.preorder(head)).to.eql([10,30,50,70]) 
    })


})