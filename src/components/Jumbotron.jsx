import React, {useContext} from 'react';
import { IMG_URL_BASE } from '../api/consts';
import { JumbotronContext } from '../Context';

export const Jumbotron = () => {
    const { jumbotron } = useContext(JumbotronContext);
    const buttonStyle = {
        display: 'inline-block',
        fontSize: '20px',
        fontWeight: 'bold',
        padding: '12px 25px',
        borderRadius: '5px',
        textDecoration: 'none',
        marginRight: '10px',
    }
    
    const movie = jumbotron;
    const genres = [];
    for (let i in movie.genres) {
        genres.push(movie.genres[i].name);
    }

    return (<section className='jumbotron' style={{
        height: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${IMG_URL_BASE}/original${movie.backdrop_path})`,
    }}>
        <div className='jumbotron--vertical' style={{
            width: 'inherit',
            height: 'inherit',
            background: 'linear-gradient(to top, #111 10%, transparent)',
        }}>
            <div className='jumbotron--horizontal' style={{
                width: 'inherit',
                height: 'inherit',
                background: 'linear-gradient(to right, #111 25%, transparent)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '30px 150px 70px 30px',
            }}>
                <div className='jumbotron--name' style={{
                    fontSize: '48px',
                    fontWeight: 'bold',
                    maxWidth: '60%',
                }}>
                    {movie.title}
                </div>
                <div className='jumbotron--info' style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    marginTop: '15px',
                }}>
                    <div className='jumbotron--year'>{movie.release_date.substring(0, 4)}</div>
                </div>
                <div className='jumbotron--description' style={{
                    marginTop: '15px',
                    fontSize: '16px',
                    color: '#999',
                    maxWidth: '50%',
                }}>
                    {movie.overview}
                </div>
                <div className='jumbotron--buttons' style={{ marginTop: '15px' }}>
                    <a href={`${movie.watch_link}`}
                        className='jumbotron--watchbutton'
                        style={{ backgroundColor: '#fff', color: '#000', ...buttonStyle }}
                    >► Assistir
                    </a>
                    <a href={`/list/add/${movie.id}`}
                        className='jumbotron--mylistbutton'
                        style={{ backgroundColor: '#333', color: '#fff', ...buttonStyle }}
                    >+ Apreciação
                    </a>
                </div>
                <div className='jumbotron--genres' style={{
                    marginTop: '15px',
                    fontSize: '14px',
                    color: '#999',
                }}>Gêneros: <strong> {genres.join(', ')} </strong></div>
            </div>
        </div>
    </section >);
}
