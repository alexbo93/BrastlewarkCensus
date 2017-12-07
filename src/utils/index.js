let Utils = {};

/**
 * Performs an AJAX request
 * @param String {url}
 * @retuns {Promise}
 */
Utils.AjaxHTTPRequest = (url) => {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      resolve(this.responseText);
    };
    xhr.onerror = reject;
    xhr.open('GET', url);
    xhr.send();
  });
}

Utils.getMatchBySearch = (search, original_list) => {
  let new_display = original_list.filter((item) => {
    return item.name.toLowerCase().indexOf(query.toLowerCase()) > -1 || item.id.toLowerCase().indexOf(query.toLowerCase()) > -1;
  })
  return new_display;
}

export default Utils;
