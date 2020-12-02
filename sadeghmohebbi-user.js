const request = require('./request');

exports.getUserName = () => {
  return request('https://api.github.com/users/sadeghmohebbi').then((res) => res.json()).then((res) => res.login);
}