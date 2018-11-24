$(function () {
  $('[data-toggle="tooltip"]').tooltip();
  var year = new Date().getFullYear();
  document.getElementById('year').innerText = year.toString();
});
