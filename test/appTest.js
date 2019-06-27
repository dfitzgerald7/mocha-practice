const assert = require("chai").assert;
const app = require("../app")
const sayHello = app.sayHello

describe('App', function(){
    it('sayHello should return hello', function(){
        assert.equal(sayHello(), 'Hello world');
    })
    it('sayHello should return a string', function(){
        assert.typeOf(sayHello(), 'string')
    })
})

