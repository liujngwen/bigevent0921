var articleAll = {
    show: function (param, callback) {
        $.get(urlList.show_list, param, function (res) {
            callback(res);
        });
    },
    delete: function (id, callback) {
        $.get(urlList.delete_list, {
            id: id
        }, function (res) {
            callback(res);
        });
    },
    add: function (fd, callback) {
        $.ajax({
            url: urlList.add_list,
            type: 'post',
            data: fd,
            processData: false, // 让jquery不要处理数据。它无法处理formData对象
            contentType: false, // 不要额外去设置请求头。它有自己的请求头
            success: function (res) {
                callback(res);
            }
        });
    }

}