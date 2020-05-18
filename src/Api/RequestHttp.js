import {URL_API} from './Config.js';

export const getAllVideos = () => {
    return fetch(`${URL_API}/edge/anime?filter[text]=dragon%20ball`);
}
 
export const getSeriesAPI = () => {
    return new Promise((resolve,reject)=>{
    fetch(`${URL_API}/edge/anime?filter[text]=dragon%20ball&filter[subtype]=TV`).then(resp => resp.json()).then(response => {resolve(response.data);})
    .catch(() => reject())
})
}

// Otra opción de call API, relacionado con linea 39 de de Flux.js
// export const getSeriesAPI = () => {
//     fetch(`${URL_API}/edge/anime?filter[text]=dragon%20ball&filter[subtype]=TV`)
//     .then(resp => resp.json())
//     .then(data => console.log('data de getSeriesAPI',data))
//     }


export const getMoviesAPI = async () => {
    const resp = await fetch(`${URL_API}/edge/anime?filter[text]=dragon%20ball&filter[subtype]=movie`)
    const data = await resp.json();
    return data.data; 
}


