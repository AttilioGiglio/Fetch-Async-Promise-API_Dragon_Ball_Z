import { getAllVideos, getSeriesAPI, getMoviesAPI } from '../Api/RequestHttp.js';
import { URL_API } from '../Api/Config.js';

const getState = ({ getStore, getActions, setStore }) => {
    return {

        store: {
            series: [],
            movies: [],
            specials: [],
            serieActive: undefined,
        },

        actions: {

            loadVideos: () => {
                getAllVideos().then(resp => resp.json()).then(data => { console.log('!!!Prueba de Fetch!!!', data) })
            },

            loadAllVideos: () => {
                console.log("Cargar getSeries, getMovies, getSpecial");
                getActions().getSeries();
                getActions().getMovies();
                getActions().getSpecials();
            },

            // getActions en Context es un This.
            // getStore en Context es un state pero global.
            // getStore en Context es un setstate pero global.

            getSeries: () => {
                getSeriesAPI().then((resp) => {
                    setStore({ series: resp });
                })
            },
            // getSeriesAPI solo devuelve una promesa cuando son promesas

            getMovies: async () => {
                const data = await getMoviesAPI();
                console.log(data);
                // si algo esta fallando aplicas console.log('al error') para revisar.
                setStore({ movies: data });
            },

            getSpecials: () => {
                fetch(`${URL_API}/edge/anime?filter[text]=dragon%20ball&filter[subtype]=special`)
                    .then(resp => resp.json())
                    .then(response => {
                        console.log('data de getSpecialsAPI', response);
                        setStore({ specials: response.data });
                    })
            },
//  Para no tener que repetir los fetch y en lugar usar store.
            getSerie: (id) => {
                const store = getStore();
                // console.log('Store id', id, store.series);
                if (store.series.length < 1) {
                    fetch(`${URL_API}/edge/anime/${id}`)
                        .then(resp => resp.json())
                        .then(response => {
                            console.log('Probando Fecth en Detail');
                            setStore({ serieActive: response.data });
                        })
                }
                else{
                    console.log('se busco en store serie');
                    const serie = store.series.find((item) => item.id ===id)
                    setStore({serieActive: serie});
                }
            },
        }
    }
};

export default getState;