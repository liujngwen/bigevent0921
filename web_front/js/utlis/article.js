var article = {
    /**
     *
     * @param {*} param  {key:'abc', type:1,state:'草稿'}
     * @param {*} callBack
     */
    show: function(param, callBack) {
      $.get(urlList.article_show, param, function(res) {
        callBack(res);
      });
    },
  };