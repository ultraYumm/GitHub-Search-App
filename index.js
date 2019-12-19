'use strict';

var userName = $('input').val();

function getRepo(userName) {
  
  let baseUrl = 'https://api.github.com/users/:username/repos';

  var newUrl = baseUrl.replace(':username',userName);

  console.log(newUrl);
  
    fetch(newUrl)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Sorry, something went wrong, please try later.'));
};

function displayResults(responseJson) {
    console.log(responseJson);
 
  if (responseJson.message === 'Not Found') {
    $('#results').addClass('hidden');
    $("h2").text("uh oh, handle not found!");
  } 
  
  else {
     $('#results-list').empty(); 
     for (let i = 0; i < responseJson.length; i++) {
      $('#results-list').append(
     `<li class="results-name">${responseJson[i].name}</li>
      <p class="results-name"><a href="${responseJson[i].html_url}">Link to repo</a></p>`
  ) 
  $("h3").text("Repo List!")
    }
  
  $("h2").text("");

  $('#results').removeClass('hidden');
 }

}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let userName = $('.input').val();
    debugger;
    getRepo(userName);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});