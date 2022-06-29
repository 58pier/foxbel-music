import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { breakpoints } from '../../styles/breakpoints';
import logo from '../../assets/foxbel-music.png'

export const LeftSectionStyled = styled.aside`
    background: var(--dark-red-second);
    color: var(--white);
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;

    ${breakpoints.tablet} {
        position: fixed;
        height: 100vh;
        content: '';
        right: ${(props) => (props.show ? '-55%' : '-100%')};
        z-index: 9999;
        transition: all 0.3s ease;
    }

    ${breakpoints.phone} {/
        right: ${(props) => (props.show ? '-45%' : '-100%')};
    }

    .sticky{
        position: sticky;
        width: 100%;
        left: 0;
        top: 0;

        ${breakpoints.tablet}{
        position: relative;
        }
        .logo {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 6rem;
            cursor: pointer;
            ${breakpoints.tablet} {
            justify-content: start;
            padding: 0 1.5rem;
            }
            ${breakpoints.phone} {
            justify-content: start;
            padding: 1.2rem 1.5rem;
            }
            img {
            width: 250px;
            height: 60px;
            margin: 2rem 0;
            ${breakpoints.tablet} {
                width: 220px;
                height: 60px;
            }
            ${breakpoints.phone} {
                width: 110px;
                height: 35px;
            }
            }
        }
        .list {
        display: flex;
        flex-direction: column;
        width: 100%;
        text-align: left;
        margin-bottom: 2rem;
        &__title {
        padding: 0.5rem 2rem;
        font-size: 22px;
        font-weight: bold;
        }
        &__item {
        font-size: 16px;
        padding: 0.4rem 2rem;
        font-weight: 400;
        color: var(--white);
        cursor: pointer;
        transition: color 0.3s ease;
        position: relative;
        &.active {
            color: var(--main-red);
            &::before {
            position: absolute;
            content: '';
            top: 3px;
            bottom: 2px;
            left: 0;
            background: var(--main-red);
            width: 0.3rem;
            height: 80%;
            }
        }

        &:hover {
            color: var(--main-red);
        }
        }
    }
    }
`;


export const LeftSection = ({ show }) => {

    const [itemActive, setItemActive] = useState(1);

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };

    return (
        <LeftSectionStyled show={show}>
            <div className="sticky">
                <div className="logo" onClick={handleClick}>
                    <img src={logo} alt="foxbel-music" loading="lazy" />
                </div>
                <div className="list">
                    <h3 className="list__title">Mi Librería</h3>
                    <Link
                        to="/?q=recientes"
                        className={`list__item ${itemActive === 1 ? 'active' : ''}`}
                        onClick={() => setItemActive(1)}
                    >
                        Recientes
                    </Link>
                    <Link
                        to="/?q=artistas"
                        className={`list__item ${itemActive === 2 ? 'active' : ''}`}
                        onClick={() => setItemActive(2)}
                    >
                        Artistas
                    </Link>
                    <Link
                        to="/?q=albums"
                        className={`list__item ${itemActive === 3 ? 'active' : ''}`}
                        onClick={() => setItemActive(3)}
                    >
                        Álbums
                    </Link>
                    <Link
                        to="/?q=canciones"
                        className={`list__item ${itemActive === 4 ? 'active' : ''}`}
                        onClick={() => setItemActive(4)}
                    >
                        Canciones
                    </Link>
                    <Link
                        to="/?q=estaciones"
                        className={`list__item ${itemActive === 5 ? 'active' : ''}`}
                        onClick={() => setItemActive(5)}
                    >
                        Estaciones
                    </Link>
                </div>
                <div className="list">
                    <h3 className="list__title">Playlist</h3>
                    <Link
                        to="/?q=metal"
                        className={`list__item ${itemActive === 6 ? 'active' : ''}`}
                        onClick={() => setItemActive(6)}
                    >
                        Metal
                    </Link>
                    <Link
                        to="/?q=dance"
                        className={`list__item ${itemActive === 7 ? 'active' : ''}`}
                        onClick={() => setItemActive(7)}
                    >
                        Para bailar
                    </Link>
                    <Link
                        to="/?q=rock"
                        className={`list__item ${itemActive === 8 ? 'active' : ''}`}
                        onClick={() => setItemActive(8)}
                    >
                        Rock 90s
                    </Link>
                    <Link
                        to="/?q=baladas"
                        className={`list__item ${itemActive === 9 ? 'active' : ''}`}
                        onClick={() => setItemActive(9)}
                    >
                        Baladas
                    </Link>
                </div>
            </div>
        </LeftSectionStyled>
    )
}
