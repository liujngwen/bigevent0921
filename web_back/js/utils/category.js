var categoryAll = {
    show_category: function (callback) {
        $.get(urlList.show, function (res) {
            callback(res);
        });
    },
    delete_category: function(id, callback) {
        $.post(urlList.delete, {id:id}, function(res) {
            callback(res);
        });
    },
    edit_category: function(id, name, slug, callback) {
        $.post(urlList.edit, {id:id, name:name, slug:slug}, function(res) {
            callback(res);
        });
    },
    add_category: function(name, slug, callback) {
        $.post(urlList.add, {name:name, slug:slug}, function(res) {
            callback(res);
        });
    }
}