var user = {
  login: function(userName, password, callBack) {
    console.log(userName, password);
    $.post(urlList.user_login,{user_name: userName,password:password}, function(res) {
      callBack(res);
    });
  },
  logout: function(callBack) {
    $.post(urlList.user_logout,function(res) {
      callBack(res);
    });
  },
  getInfo: function(callBack) {
    $.get(urlList.user_info, function(res) {
      callBack(res);
    });
  }
};
