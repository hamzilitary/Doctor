import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Doctor} from './doctor.js';

// let findDoctors = response => {
//   for (let i=0; i < response.data.length; i++) {
//     let name = response.data[i].profile.first_name + ' ' + resonse.data[i].profile.last_name;
//     let acceptsPatients;
//     if (response.data[i].practices[0].accepts_new_patients == true) {
//       acceptsPatients = "Accepting";
//     } else {
//       acceptsPatients = "Not Accepting";
//     }
//     $('#showDoctor').append('<li>' + 'Name:' + ' ' + name + ' ' + 'Accepting Patients:' + ' ' + acceptsPatients);
//
//   }
// };
//
// $(document).ready(() => {
//   let DoctorFinder = new Doctor();
//   $('#doctorSearch').click(function(){
//     event.preventDefault();
//     $('#showDoctor')
//   })
// })
//
//
//










$(document).ready(function(){
  $('#doctorFind').click(function() {
    event.preventDefault();
    let name = $('#doctorName').val();
    $('#doctorName').val("");
    let doctor = new Doctor();
    let promise = doctor.getDoctor(name);

    promise.then(function(response){
      let body = JSON.parse(response);
      let doctorArray = [""];
      // for (let i = 0; i < response.data.length; i++)

      body.data.forEach(function(doc){
        doctorArray.push(doc.profile.first_name + ' ' + doc.profile.last_name );
      });
      body.data.forEach(function(doc){
        if (doc.practices.accepts_new_patients == true){
          doctorArray.push("yes Accepting");
        } else {
          doctorArray.push("yes Accepting");
        }
      })


      // Object.keys(body.data[0].profile).forEach(function(element){
      //    doctorArray.push(body.data[0].profile[element]);


         // JUST REALIZED I SHOULD USE A FOR LOOP 4:42PM



        //  Object.keys(thisDoctor.bio).forEach(function(element){
        //   doctorArray.push(thisDoctor.bio);
        //  });

        console.log(body.data[0].profile);

              // doctorArray.push(thisDoctor);
      // });
      doctorArray.forEach(function(element){
        $(".showProvider").append("<p>" + element + "</p>");
      });
      // body.practices.name
      // $('.showProvider').text(`These are the doctors in your area: ${body.data.first_name}.`);
    },
     function(error){
      $('.errors').text(`There was an error processing your request: ${error.message}`);
    });
  });

});
