import React, { useEffect, useContext } from 'react';
import { Context } from '../Store/App.Context.js';

export const Detail = (props) => {
const { store, actions } = useContext(Context);

useEffect(() => {
    actions.getSerie(props.match.params.id);
}, [])

return(
        <div className='Detail'>
            <h1>Detail</h1>
            <div>
                {
                    // Si usas un valor undefined para serieActive en la linea 11 de Flux.js tienes que usar !== null en lugar de solo store.serieActive ?...
                store.serieActive ? (
                    <h4>{store.serieActive.attributes.titles.en}</h4>
                ) : null
                }
            </div>
        </div>
)
}