function showTab(tabId) {
  // 删除所有tab-link的active类
  const tabLinks = document.querySelectorAll('.tab-link');
  tabLinks.forEach(link => link.classList.remove('active'));

  // 隐藏所有的tab-content
  const tabContents = document.querySelectorAll('.tab-content');
  tabContents.forEach(content => content.classList.remove('active'));

  // 显示指定的tab-content
  const tabLink = document.querySelector(`a[href="#${tabId}"]`);
  tabLink.classList.add('active');
  const tabContent = document.querySelector(`#${tabId}`);
  tabContent.classList.add('active');
}