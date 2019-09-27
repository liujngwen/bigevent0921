var comment = {
    get: function(article_id, callBack) {
      $.get(urlList.comment_show, { article_id: article_id }, function(res) {
        callBack(res);
      });
    },
    /**
     *
     * @param {*} param  { name,content,article_id}
     * @param {*} callBack
     */
    add: function(param, callBack) {
      $.post(urlList.comment_add, param, function(res) {
        callBack(res);
      });
    }
  };