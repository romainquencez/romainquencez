import axios from 'axios'

export default {
  all (state) {
    // return axios.get('static/posts.json')
    return axios.get('https://medium.com/@romainquencez/latest?format=json')
  }
}
