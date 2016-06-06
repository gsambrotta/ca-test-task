var $ = require('jquery');
var Mustache = require('mustache');

// Load data
function loadData() {
  $.getJSON('../data.json', function(result){
  })
  // Call template on data fetch done
  .done(function(result){
    fillInTmp(result);
  });
}

// Mustache function to fill in template with dynamic data
function fillInTmp(result) {
  var template = $('#main-template').html();
  Mustache.parse(template);
  var rendered = Mustache.render(template, result);
  $('#target').html(rendered);
}

// Initialize
$(document).ready(function($){
  loadData();
});


