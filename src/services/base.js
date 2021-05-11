import axios from "axios";

const get = (url) => {
  return axios({
    method: 'GET',
    url: url
  }).catch(err => {
    console.log(err)
  })
}

export {
  get
};
