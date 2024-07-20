import axios from 'axios'
const baseUrl = '/api/users'

const signup = async newObject => {
  const request = await axios.post(baseUrl, newObject)
  return request.data
}

export default { signup }