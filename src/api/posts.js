import axios from 'axios'

export default {
  all (state) {
    return axios.get('static/posts.json')
  }
}
