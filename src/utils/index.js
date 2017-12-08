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
      resolve(this);
    };
    xhr.onerror = reject;
    xhr.open('GET', url);
    xhr.send();
  });
}

Utils.getMatchBySearch = (search, original_list) => {
  let new_display = original_list.filter((item) => {
    return item.name.toLowerCase().indexOf(search.toLowerCase()) > -1 || item.name.toLowerCase().indexOf(search.toLowerCase()) > -1;
  })
  return new_display;
}

export default Utils;
