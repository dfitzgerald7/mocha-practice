const assert = require("chai").assert;
const app = require("../app")
const sayHello = app.sayHello
const addNumbers = app.addNumbers 




describe('App', function(){
    it('sayHello should return hello', function(){
        assert.equal(sayHello(), 'Hello world');
    })
    it('sayHello should return a string', function(){
        assert.typeOf(sayHello(), 'string')
    })
    it('addNumbers should be above 5', function(){
        let result = addNumbers(5, 5);
        assert.isAbove(result, 5);
    })
    it('addNumbers should return a number', function(){
        assert.typeOf(addNumbers(4, 2), 'number')
    })
    
})

