import axios from 'axios';

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
    params:{
        api_key:"a8e3abdab1182efabd3fd1f54d99f0dc",
        language:"ko-KR"
    }
})

export default instance;