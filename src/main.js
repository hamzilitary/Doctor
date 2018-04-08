import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Doctor} from './doctor.js';

$(document).ready(function(){
  $('#doctorFind').click(function() {
    event.preventDefault();
    let name = $('#doctorName').val();
    $('#doctorName').val("");
    let doctor = new Doctor();
    let promise = doctor.getDoctor(name);

    promise.then(function(response){
      let body = JSON.parse(response);
      let doctorArray = [];
    body.data.forEach(function(doc){
        doctorArray.push(doc.profile.first_name + ' ' + doc.profile.last_name + ' ' + doc.practices[0].phones[0].number + ' ' + doc.practices[0].visit_address.street + ' ' + doc.practices[0].accepts_new_patients );
      });
      doctorArray.forEach(function(element){
    $(".showProvider").append("<p>" + element + "</p>");

  },


  function(error){
    $(".errors").text(`There was an error processing your request: ${error.message}`);

    });

    });
  });
});
