import React, { useState, useContext } from 'react';
import { JumbotronContext } from '../Context';
import { NavigateBefore, NavigateNext } from '@material-ui/icons';
import { IMG_URL_BASE } from '../api/consts';


export const Row = ({ title, movies }) => {
    const { setJumbotron } = useContext(JumbotronContext)
    const MOVIE_WIDTH = 156;
    const [scrollX, setScrollX] = useState(0);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if (x > 0) x = 0;

        setScrollX(x);
    }
    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = movies.length * MOVIE_WIDTH;
        if (window.innerWidth - listW > x)
            x = (window.innerWidth - listW) - 60;

        setScrollX(x);
    }

    const arrowStyle = {
        cursor: 'pointer',
        overflow: 'hidden',
        position: 'absolute',
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '225px',
        backgroundColor: 'rgba(0,0,0,0.6)',
    }

    return (
        <div className='row' style={{ marginBottom: '30px' }}>
            <h2 style={{ margin: '0px 0px 0px 30px' }}>{title}</h2>

            <div className='row--arrow-left'
                onClick={handleLeftArrow}
                style={{ left: 0, ...arrowStyle }}>
                <NavigateBefore style={{ fontSize: 50 }} />
            </div>
            <div className='row--arrow-right'
                onClick={handleRightArrow}
                style={{ right: 0, ...arrowStyle }}>
                <NavigateNext style={{ fontSize: 50 }} />
            </div>

            <div className='row--listarea' style={{
                overflowX: 'hidden',
                paddingLeft: '30px',
                whiteSpace: 'nowrap',
            }}>
                <div className='row--list' style={{
                    marginLeft: scrollX,
                    width: movies.length * MOVIE_WIDTH,
                    transition: 'all ease 0.2s'
                }}>
                    {movies.map((movie, key) => (
                        <div key={key} className='row--item'
                            onClick={() => {
                                setJumbotron(movie);
                                document.documentElement.scrollTo({
                                    top: 0,
                                    behavior: 'smooth',
                                })
                            }}
                            style={{
                                width: `${MOVIE_WIDTH}px`,
                                cursor: 'pointer',
                                display: 'inline-block',
                            }}>
                            <img src={`${IMG_URL_BASE}/w300${movie.poster_path}`}
                                alt={movie.title} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
