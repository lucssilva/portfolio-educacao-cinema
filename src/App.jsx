import React, { useEffect, useState } from 'react';
import { Jumbotron, Loading, Row } from './components';
import { JumbotronContext } from './Context';
import logo from './images/logo.png';
import * as repo from './api/repository';
import './App.css';

const App = () => {
    const PROFILE_URL = 'https://avatars.githubusercontent.com/u/70698819?v=4';
    const [headerBackground, setHeaderBackground] = useState(false);
    const [jumbotron, setJumbotron] = useState(null);
    const [movieList, setMovieList] = useState([]);
    const headerStyle = {
        position: 'fixed',
        zIndex: '1',
        top: '0px',
        left: '0px',
        right: '0px',
        height: '70px',
        display: 'flex',
        padding: '0 30px',
        alignItems: 'center',
        transition: 'all ease 0.5s',
        justifyContent: 'space-between',
        background: headerBackground ? '#141414' : 'transparent',
    }

    useEffect(() => {
        const loadAll = async () => {
            const list = await repo.getHomeList();
            setMovieList(list);
            setJumbotron(list[0].items[0]);
        }
        const scrollListener = () => {
            (window.scrollY > 10)
                ? setHeaderBackground(true)
                : setHeaderBackground(false);
        }
        loadAll();
        window.addEventListener('scroll', scrollListener);
        return () => window.removeEventListener('scroll', scrollListener);
    }, []);

    return (
        <JumbotronContext.Provider value={{ jumbotron, setJumbotron }}>
            <header className='header' style={headerStyle}>
                <div className='header--logo' style={{ height: '25px' }}>
                    <img src={logo} alt='Logo do Portfolio inspirado na Netflix' style={{ height: '100%' }} />
                </div>
                <div className='header--user' style={{ height: '35px' }}>
                    <img src={PROFILE_URL} alt='Foto de perfil' style={{ height: '100%', borderRadius: '3px' }} />
                </div>
            </header>
            {jumbotron && <Jumbotron />}
            <section className='lists' style={{ marginTop: '-150px' }}>
                {movieList.map((list, key) => (
                    <Row key={key}
                        title={list.title}
                        movies={list.items}
                    />))}
            </section>
            <footer style={{
                margin: '50px 0',
                textAlign: 'center',
            }}>
                Desenvolvido para a cadeira de Educação e Cinema do curso de Pedagogia da UFC.
                <br />Inspirado no layout da Netflix e ideia retirada de live feita por <a href="https://www.youtube.com/watch?v=tBweoUiMsDg"> Bonieky Larceda</a>
                <br />Dados Extraidos de <a href="https://www.themoviedb.org/">The Movie Database (TMDb)</a>
                <br />Orientação: <a href="https://ufc.academia.edu/LucianeGoldberg">Profa. Dra. Luciane Goldberg</a>. 2021
            </footer>

            {movieList.length <= 0 && <Loading />}
        </JumbotronContext.Provider>
    );
}

export default App;
