import React, { useEffect, useContext } from 'react';
import { Context } from '../Store/App.Context.js';
import '../App.css';
import { Link } from 'react-router-dom';

export const Home = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        // console.log('Componentdidmount');
        actions.loadAllVideos();
    }, [])
    //1
    return (
        <div className='home'>
            <div>
                <h1>DRAGON BALL Z</h1>
            </div>
            <div className='series'>
                <div>
                    <h2>Series TV</h2>
                </div>
                <div className='container'>
                    {
                        store.series.map((item, index) => (
                            <div className='box' key={index}>
                                <Link to={`/series/${item.id}`}>
                                    <p>{item.attributes.titles.en}</p>
                                    <img src={item.attributes.posterImage.original} />
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='movies'>
                <div>
                    <h2>Peliculas</h2>
                </div>
                {
                    <div className='container2'>
                        {
                            store.movies.map((item, index) => (
                                <div className='box2' key={index}>
                                    <p>{item.attributes.titles.en}</p>
                                    <img src={item.attributes.posterImage.original} />
                                </div>
                            ))
                        }
                    </div>
                }
            </div>
            <div className='specials'>
                <div>
                    <h2>Especiales</h2>
                </div>
                <div className='container3'>
                    {
                        store.specials.map((item, index) => (
                            <div className='box3' key={index}>
                                <p>{item.attributes.titles.en}</p>
                                <img src={item.attributes.posterImage.original} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}