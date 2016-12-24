// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require jquery
//= require bootstrap-sprockets

$(document).ready(function(){
  $(document).on('click', 'li', function(){
    var id = $(this).attr('data-id')
    $.get('/users/' + id, function(response){
      $('.details').html(response);
    }, 'html');
  });

  $('#newish_user').submit(function(){
    $.post('/users/', $(this).serialize(), function(response){
      console.log(response)
      if (response.status){
        $('#users').append('<li data-id="' + response.user_id + '">' + response.name + '</li>' )
      }
      else {

      }
    }, 'json');

    return false;
  })

  $(document).on('click', '#profile', function(){
    var id = $(this).attr('data-id')
    $.get('/users/' + id + '/edit', function(response){
      $('.details').html(response);
    }, 'html');
  });

  $('#update_user').submit(function(){
    var id = $(this).children('#user_id').attr('value')
    $.post('/users/' + id, $(this).serialize(), function(response){
      console.log("This ran, goddamnit")
      console.log(response);
      $('.details').html(response);
    }, 'html');

    return false;
  })

});
