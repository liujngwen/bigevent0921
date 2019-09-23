var categoryAll = {
    show: function (callback) {
        $.get(urlList.category, function (res) {
            callback(res);
        });
    },
    add_category: function(name, slug, callback) {
        $.post(urlList.add, {name:name, slug:slug}, function(res) {
            callback(res);
        });
    },
    delete_category: function(id, callback) {
        $.post(urlList.delete, {id:id}, function(res) {
            callback(res);
        });
    }

}