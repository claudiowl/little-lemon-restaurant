// src/api.js
const seededRandom = function (seed) {
    const m = 2**35 - 31;
    const a = 185852;
    let s = seed % m;
    return function () {
      return (s = s * a % m) / m;
    };
  };
  
export const fetchAPI = function(date) {
    const result = [];
    const random = seededRandom(date.getDate());
  
    for(let i = 17; i <= 23; i++) {
      if(random() < 0.5) {
        result.push(i + ':00');
      }
      if(random() < 0.5) {
        result.push(i + ':30');
      }
    }
    return Promise.resolve(result); // Return as promise to match async behavior
  };
  
  export const submitAPI = function(formData) {
    console.log('Form submitted:', formData);
    return Promise.resolve(true);
  };