
export class Doctor{
  constructor(){}
  getDoctor(query) {
    let request = new XMLHttpRequest();
var process = { env: { exports: {apiKey : 'b31152f926f686ef9570a34b03a33afe'}}};
    //  process.env.exports.apiKey = "b31152f926f686ef9570a34b03a33afe";

    let url =    // https://api.betterdoctor.com/2016-03-01/doctors?query=${query}&location=or-portland&skip=0&limit=10&user_key=${process.env.exports.apiKey}
    `https://api.betterdoctor.com/2016-03-01/doctors?query=${query}&location=or-portland&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;
    //  https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=or-portland&skip=0&limit=10&user_key=${process.env.exports.apiKey}
    return new Promise(function(resolve, reject){
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  };
  }
