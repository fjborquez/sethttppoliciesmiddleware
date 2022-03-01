const httppolicyfactory = require('@fjborquez/httppolicies');

(function() {
    var policy = {};

    function setPolicyHeader(options, req, res, next) {
        policy = httppolicyfactory(options);
        res.set(createHeader(options, policy));
        next();
    }

    function createHeader(options, policy) {
        const header = {};
        header[policy.getHeaderName()] = policy.getDirectiveOrDefault(options.directive);
        return header;
    }

    module.exports = (options) => {
        return (req, res, next) => setPolicyHeader(options, req, res, next)
    };
})();
