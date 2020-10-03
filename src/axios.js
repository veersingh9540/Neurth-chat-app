import axios from 'axios'

const instance = axios.create({
    baseURL: "https://chat-app-neurth.herokuapp.com",
});
export default instance