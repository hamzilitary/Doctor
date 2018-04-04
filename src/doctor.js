
export class Doctor{
  constructor(){}
  getDoctor(query) {
    let request = new XMLHttpRequest();

    let url =

    `https://api.betterdoctor.com/2016-03-01/doctors?query=${query}&location=or-portland&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;

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

  getCondition(query) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${doctorName}&location=or-portland&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;
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
