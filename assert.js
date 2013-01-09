(function() {

    'use strict';

    /**
     * @param {Function} func
     * @param {Mixed} value
     * @param {Function|Boolean} [condition]
     */
    function internalAssert(func, value, condition) {
        expect(func).to.be.a('function');

        var conditionType = typeof condition;
        var conditionResult = condition;

        if (conditionType !== 'undefined') {
            if (conditionType === 'function') {
                conditionResult = condition(value);
            }

            expect(conditionResult).to.be.a('boolean');

            if (!conditionResult) {
                return;
            }
        }

        func();
    }

    /**
     * Wrapper for "expect.js" library.
     */
    window.assert = {

        //
        // ASSERTS
        //

        /**
         * @param {Mixed} value
         * @param {Mixed} expectedValue
         * @param {Function|Boolean} [condition]
         */
        equal : function(value, expectedValue, condition) {
            internalAssert(function() {
                expect(value).to.equal(expectedValue);
            }, value, condition);
        },

        /**
         * @param {Mixed} value
         * @param {Function|Boolean} [condition]
         */
        number : function(value, condition) {
            internalAssert(function() {
                expect(value).to.be.a('number');
            }, value, condition);
        },

        /**
         * @param {Mixed} value
         * @param {Function|Boolean} [condition]
         */
        numberPositive : function(value, condition) {
            internalAssert(function() {
                expect(value).to.be.greaterThan(0);
            }, value, condition);
        },

        /**
         * @param {Mixed} value
         * @param {Number} minValue
         * @param {Number} maxValue
         * @param {Function|Boolean} [condition]
         */
        numberRange : function(value, minValue, maxValue, condition) {
            internalAssert(function() {
                expect(value).to.be.within(minValue, maxValue);
            }, value, condition);
        },

        /**
         * @param {Mixed} value
         * @param {Function|Boolean} [condition]
         */
        bool : function(value, condition) {
            internalAssert(function() {
                expect(value).to.be.a('boolean');
            }, value, condition);
        },

        /**
         * @param {Mixed} value
         * @param {Function|Boolean} [condition]
         */
        boolTrue : function(value, condition) {
            internalAssert(function() {
                expect(value).to.be.ok();
            }, value, condition);
        },

        /**
         * @param {Mixed} value
         * @param {Function|Boolean} [condition]
         */
        object : function(value, condition) {
            internalAssert(function() {
                expect(value).to.be.an('object');
            }, value, condition);
        },

        /**
         * @param {Mixed} value
         * @param {Function|Boolean} [condition]
         */
        func : function(value, condition) {
            internalAssert(function() {
                expect(value).to.be.a('function');
            }, value, condition);
        },

        /**
         * @param {Mixed} value
         * @param {Function|Boolean} [condition]
         */
        string : function(value, condition) {
            internalAssert(function() {
                expect(value).to.be.a('string');
            }, value, condition);
        },

        /**
         * @param {Mixed} value
         * @param {Function|Boolean} [condition]
         */
        array : function(value, condition) {
            internalAssert(function() {
                expect(value).to.be.a('array');
            }, value, condition);
        },

        /**
         * Checks for value to contain a single jQuery element.
         *
         * @param {Mixed} value
         * @param {Function|Boolean} [condition]
         */
        jQueryOne : function(value, condition) {
            internalAssert(function() {
                assert.jQuery(value);
                expect(value.length).to.be(1);
            }, value, condition);
        },

        /**
         * Checks for value to contain at least one jQuery element.
         *
         * @param {Mixed} value
         * @param {Function|Boolean} [condition]
         */
        jQueryAny : function(value, condition) {
            internalAssert(function() {
                assert.jQuery(value);
                expect(value.length).to.be.greaterThan(0);
            }, value, condition);
        },

        /**
         * Checks for value to be a jQuery element.
         *
         * @param {Mixed} value
         * @param {Function|Boolean} [condition]
         */
        jQuery : function(value, condition) {
            internalAssert(function() {
                expect(value).to.be.a(jQuery);
            }, value, condition);
        },

        //
        // CONDITIONS
        //

        /**
         * @param {Mixed} value
         * @return {Boolean}
         */
        conditionIfDefined : function(value) {
            return (value !== null) && (typeof value !== 'undefined');
        }

    };

})();
