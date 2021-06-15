import axios from 'axios';
const KEY = 'AIzaSyB7bf3AwX49vA1-b1mjVXi-qhm9CTovZMM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY
    }
})