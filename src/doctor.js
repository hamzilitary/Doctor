import $ from 'jquery';

export class Doctor{
  constructor(){}
  getDoctor(doctorName, searchDoctors) {
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${doctorIssue}&location=or-portland&skip=0&limit=10&user_key=b31152f926f686ef9570a34b03a33afe`)
    .then(response => {
      if ( response.data.length === 0) {
        $('#showSymptom').text('No Result Found')
      } else {
        searchDoctors(response);
      }
    })



  }

  getCondition(){

  }

}













// let request = new XMLHttpRequest();

// let url = 'https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=10&user_key=b31152f926f686ef9570a34b03a33afe';
//
// return new Promise(function(resolve, reject){
//   request.onload = function() {
//     if (this.status === 200) {
//       resolve(request.response);
//     } else {
//       reject(Error(request.statusText));
//     }
//   };
//   request.open("GET", url, true);
//   request.send();
// });
// };
