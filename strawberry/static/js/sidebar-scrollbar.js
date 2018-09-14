document.addEventListener("DOMContentLoaded", function(e){
  var sidebar = document.getElementById('sidebar');
  var scrollbarwidth  = sidebar.offsetWidth - sidebar.clientWidth;
  sidebar.style.width = sidebar.offsetWidth + scrollbarwidth + "px";
});
