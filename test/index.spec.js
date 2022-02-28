const expect = require('chai').expect;
const sinon  = require('sinon');
const middleware = require('../index');

describe('setHttpPoliciesMiddleware', function() {
    describe('request handler creation', function() {
        it('should return a function()', function() {
            expect(middleware).to.be.a('function');
        });
    });

    describe('request handler calling', function() {
        it('should call next() and res.set() once', function() {
            const option = {
                policy: 'coep',
            };
            const nextSpy = sinon.spy();
            const res = {
                'set': sinon.spy(),
            };
            
            const factory = middleware(option)({}, res, nextSpy);
            expect(nextSpy.calledOnce).to.be.true;
            expect(res.set.calledOnce).to.be.true;
        });
    });
});
