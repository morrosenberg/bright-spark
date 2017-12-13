import jQuery from 'jquery';
window.$ = jQuery
import Rails from 'rails-ujs';
import Popper from 'popper.js';
// import Bootstrap from 'Bootstrap'
import Turbolinks from 'turbolinks';
import '../Styles/app.scss';

Rails.start();
// Modal
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
});

// Tooltip
$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

Turbolinks.start();
