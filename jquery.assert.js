(function($) {

    $.fn.assertOne = function() {
        assert.jQueryOne(this);
        return this;
    };

    $.fn.assertAny = function() {
        assert.jQueryAny(this);
        return this;
    };

})(jQuery);
