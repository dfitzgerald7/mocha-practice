const assert = require('chai').assert;
const nodeClass = require('../data_structures/node.js')
const binaryTreeClass = require('../data_structures/binaryTree')

console.log(nodeClass)

describe("Node", function(){
    it ('The test works', function(){
        assert.equal(1,1)
    })
    it ('A new can be instantiated', function(){
        let myNode = new nodeClass(1);
        assert.equal(myNode.id, 1)
    })
})