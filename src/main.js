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
      // let doctorArray = [];
      // body.practices.name
      $('.showProvider').text(`These are the doctors in your area: ${body.data.profile}.`);
    },
     function(error){
      $('.errors').text(`There was an error processing your request: ${error.message}`);
    });
  });

});
