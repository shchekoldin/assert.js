assert.js
=========

Wrapper for [expect.js](https://github.com/LearnBoost/expect.js) library.

**Please, see http://chaijs.com =)**

Add following scripts to your HTML page:

```html
<script src="./expect.js"></script>
<script src="./assert.js"></script>

<!-- If you use JQuery add this script -->
<script src="./jquery.assert.js"></script>
```

After that in your JavaScript code you can use

```javascript
/**
 * @param {Object} o
 * @param {Number} o.entityId
 * @param {CommentWidgetContext} o.context
 * @param {String} o.socialNetworkEntityUid
 * @param {Boolean} o.allowedMediaAttachments
 * @constructor
 */
this.initialize = function(o) {
    var Context = /* some enum */;
 
    assert.object(o);
    assert.number(o.entityId);
    assert.boolTrue(o.context in Context);
    assert.string(o.socialNetworkEntityUid);
    assert.numberPositive(o.socialNetworkEntityUid.length);
    assert.bool(o.allowedMediaAttachments);
  
    ...
}
```

instead of

```javascript
/**
 * @param {Object} o
 * @param {Number} o.entityId
 * @param {CommentWidgetContext} o.context
 * @param {String} o.socialNetworkEntityUid
 * @param {Boolean} o.allowedMediaAttachments
 * @constructor
 */
this.initialize = function(o) {
    var Context = /* some enum */;
 
    expect(o).to.be.an('object');
    expect(o.entityId).to.be.a('number');
    expect(o.context in Context).to.be.ok();
    expect(o.socialNetworkEntityUid).to.be.a('string');
    expect(o.socialNetworkEntityUid.length).to.be.greaterThan(0);
    expect(o.allowedMediaAttachments).to.be.ok();
 
    ...
}
```

Also you can do conditional asserts (assert will be evaluated only if condition is true):

```javascript
// In your code

/**
 * @param {Number} commentId
 * @param {Number|Null} commentLastChildId
 * @private
 */
this._prepareToShowAsReplyToCommentForm = function(commentId, commentLastChildId) {
    assert.number(commentId);
    assert.number(commentLastChildId, assert.conditionIfDefined);
    
    ...
};

// In assert.js

/**
 * @param {Mixed} value
 * @return {Boolean}
 */
conditionIfDefined : function(value) {
    return (value !== null) && (typeof value !== 'undefined');
}
```

You can use any function or expression which returns boolean value.

If you use JQuery, you may find it useful to use special plugin to check JQuery results:

```javascript
this.hideExternalServicesInMediaBrowserUnsafe = function() {
    var frameContainerJq = $('#mediaBrowserFrameContainer').assertOne();
    frameContainerJq.find('.js_imageBrowserButtonField').assertOne().hide();
    frameContainerJq.find('.js_videoBrowserButtonField').assertOne().hide();
    frameContainerJq.find('.videoServicesIcons').assertOne().hide();
};
```
