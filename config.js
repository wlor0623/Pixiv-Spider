module.exports = {
  username: '',
  password: '',
  mode: 'star', // star: 下载收藏夹, author: 下载作者列表, follow: 下载我关注的作者
  display:true,// 是否为公开收藏
  date: '', // 限定日期之内, 可以留空, 注意格式: '2018/01/01'
  // 以下是 mode 为 author 或 follow 才有的选项
  author: [], // 下载的作者列表
  tags: [], // 筛选标签
  rated: 0, // 最低点赞数筛选
  R18: false,// 是否禁止 R18
}
