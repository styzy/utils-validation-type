const isHTMLElement = function(o) {
    if (!o) {
        return false
    }
    if (typeof o !== 'object') {
        return false
    }
    var el = document.createElement('div');
    try {
        el.appendChild(o.cloneNode(true));
        return o.nodeType === 1
    } catch (e) {
        return false
    }
}

export default isHTMLElement