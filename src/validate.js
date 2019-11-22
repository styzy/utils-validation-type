import isHTMLElement from './isHTMLElement'
/**
 * 参数类型检查
 * @param {*} value 
 * @param {*} types 
 */
const validate = function(value, types) {
    if (!types) {
        return false
    }
    if (!(types instanceof Array)) {
        types = [types]
    }
    let valueType = ''
    if (isHTMLElement(value)) {
        valueType = 'HTMLElement'
    } else {
        valueType = Object.prototype.toString.call(value).substr(8).replace(']', '')
    }
    return types.some(type => {
        if (type === HTMLElement) {
            return valueType === 'HTMLElement'
        } else {
            let name = type.name || getFnName(type)
            return name === valueType
        }
    })

    function getFnName(fn) {
        return fn.toString().match(/^\s*function (\w+)/)[1]
    }
}

export default validate