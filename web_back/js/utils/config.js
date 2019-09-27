var base_url = 'http://localhost:8000';
var urlList = {
  user_login : base_url + '/admin/login',
  user_logout : base_url + '/admin/logout',
  user_info: base_url + '/admin/getuser',
  
  show: base_url + '/admin/category_search',
  delete: base_url + '/admin/category_delete',
  edit: base_url + '/admin/category_edit',
  add: base_url + '/admin/category_add',

  show_list: base_url + '/admin/search',
  delete_list: base_url + '/admin/article_delete',
  add_list: base_url + '/admin/article_publish',
  edit_list: base_url + '/admin/article_edit'
};

