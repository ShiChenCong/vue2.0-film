/**
 * Created by cql-cql-cql on 2016/12/19 0027
 */
var jsonp = function (url, data, callback) {
    //jsonp
    if (typeof data == 'function') {
        callback = data
    }
    var querystring = url.indexOf('?') == -1 ? '?' : '&';
    for (var key in data) {
        querystring += key + '=' + data[key] + '&';
    }
    var fnSuffix = Math.random().toString().replace('.', '');
    var cbFuncName = 'my_json_cb_' + fnSuffix;
    // 不推荐
    querystring += 'callback=' + cbFuncName;

    var scriptElement = document.createElement('script');
    scriptElement.src = url + querystring;
    window[cbFuncName] = function (data) {
        callback(data);
        document.body.removeChild(scriptElement);
    };;

    document.body.appendChild(scriptElement);
};
export default jsonp;
