import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Doctor} from './doctor.js';

$(document).ready(function(){
  $('#doctorFind').click(function() {
    event.preventDefault();
    let name = $('#doctorName').val();
    if (name.length == 0) {
      $(".showProvider").html("<p>No doctor or condition specified.</p>");
      return;
    }
    $('#doctorName').val("");
    let doctor = new Doctor();
    let promise = doctor.getDoctor(name);

    $(".showProvider").html("<p>Searching...</p>");
    promise.then(function(response){
      let body = JSON.parse(response);
      if (body.data && body.data.length > 0) {
        let doctorArray = [];
      body.data.forEach(function(doc){
        let website = doc.practices[0].website ? doc.practices[0].website : '';
          doctorArray.push(doc.profile.first_name + ' ' + doc.profile.last_name + ' ' + doc.practices[0].phones[0].number + ' ' + doc.practices[0].visit_address.street + ' ' + doc.practices[0].accepts_new_patients + ' ' + website );
        });
        doctorArray.forEach(function(element){
            $(".showProvider").append("<p>" + element + "</p>");

          }); // end foreach
    }
    else {
      $(".showProvider").append("<p>No results found!</p>");
    }
},
  function(error){
    $(".errors").text(`There was an error processing your request: ${error.message}`);

    });

    });
  });
//});
