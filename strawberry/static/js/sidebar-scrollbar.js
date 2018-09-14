window.onload = function() {
  var sidebar = document.getElementById('sidebar');
  var scrollbarwidth  = sidebar.offsetWidth - sidebar.clientWidth;
  sidebar.style.width = sidebar.offsetWidth + scrollbarwidth + "px";
}
