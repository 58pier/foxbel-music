/* import axios from 'axios'
import axiosConfig from './axiosConfig'


    const  getTracks =   ({ id = '142986206'} = {}) => {
        return  axios.get(`track/${id}`,axiosConfig)
            .then(({data}) => {return data})
            .catch((err) => console.warn(err))
    }

    const getSongs =  ({ artist = 'ed%20sheeran'}) => {
        return axios.get(`/search?q=${artist}`,axiosConfig)
                .then( function({data}) {
                    console.log(data);
                    return data;
                })
                .catch((err) => console.warn(err))
    } */
    const API_URL = 'https://deezerdevs-deezer.p.rapidapi.com';

export const getSongs = ({ artist = 'adele' } = {}) => {
    return fetch(`${API_URL}/search?q=${artist}`, {
        method: 'GET',
        headers: {
            'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
            'x-rapidapi-key': '2f1bb78983msh657490e84793a75p1f8b7djsn1cb8b0336caf',
        },
    })
        .then((response) => response.json())
        .then(({ data }) => {
            return data;
        })
        .catch((err) => console.error(err));
};


export const getTracks = async ({ id = '1557137102' } = {}) => {
    return fetch(`${API_URL}/track/${id}`, {
        method: 'GET',
        headers: {
        'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
        'x-rapidapi-key': 'e62864a679mshc5ee2dc5d725aa5p1636c4jsn4093a8c53f08',
        },
    })
        .then((response) => response.json())
        .then((data) => {
        return data;
        })
        .catch((err) => console.warn(err));
};
