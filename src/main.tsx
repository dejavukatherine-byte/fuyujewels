// 修复：图片不显示 + 网站不安全问题
window.processImage2 = function(url) {
  if (!url) return '';
  // 强制把 http 图片链接转为 https 安全链接
  return url.replace('http://', 'https://');
};
