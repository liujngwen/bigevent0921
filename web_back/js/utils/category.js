var category = {
    show: function (callback) {
        $.get(urlList.category, function (res) {
            callback(res);
        });
    },

}