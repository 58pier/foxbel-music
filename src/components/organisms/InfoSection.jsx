import { useContext } from "react";
import { FaPause, FaPlay } from 'react-icons/fa';
import styled from "styled-components"

import { SongsContext } from "../../context/SongsContext";
import { useSongs } from '../../hooks/useSongs';
import { MoreActionsButton } from "../atoms/MoreActionsButton";
import { breakpoints } from '../../styles/breakpoints'

const InfoSectionStyled = styled.section`
    display: flex;
    width: 100%;
    height: 250px;
    .artist-figure {
        position: relative;
        width: 25%;
        height: 100%;
        background: var(--main-red);

        ${breakpoints.tablet} {
            display: none;
        }

        img {
            width: 100%;
            height: 100%;
        }
        svg {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            width: 80px;
            height: 80px;
            fill: var(--white);
            cursor: pointer;
        }
    }
    .artist-description {
        width: 74%;
        position: relative;
        ${breakpoints.tablet} {
            width: 100%;
        }
        &__shadow {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--main-red);
            opacity: 0.4;
            z-index: 99;
        }
        &__content {
            padding: 0.8rem 1.5rem;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 999;
        }

        &__title {
            margin-top: 1.2rem;
            color: var(--white);
            font-size: 22px;
        }
        &__item {
            color: var(--white);
        p {
            span {
                padding-left: 1rem;
                font-size: 12px;
                color: var(--dark-red-second);
            }
        }
        summary {
            font-size: 13.5px;
            line-height: 20px;
            padding-top: 1rem;

            ${breakpoints.phone} {
                font-size: 11.5px;
            }
        }
        }
        .artist-btns {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            width: 100%;
            margin-top: 2.5rem;
            .btn {
                width: 140px;
                font-size: 14px;
                padding: 0.6rem 1.2rem;
                margin-right: 1.2rem;
                border-radius: 100px;
                border: 1px solid var(--main-red);
                color: var(--white);
                background: var(--main-red);
                cursor: pointer;
                transition: all 0.5s ease;
                &:hover {
                    background: transparent;
                    color: var(--main-red);
                }
                &.seguir {
                    background: transparent;
                    color: var(--main-red);
                    transition: all 0.5s ease;
                    &:hover {
                        color: var(--white);
                        background: var(--main-red);
                    }
                }

                ${breakpoints.phone} {
                    font-size: 12px;
                    width: 110px;
                }
            }
        }
    }
`;

export const InfoSection = () => {
    const { playing, setPlaying} = useContext(SongsContext);
    const {track} = useSongs();

    return (
        <InfoSectionStyled className="mb-3">
            <div
                className="artist-figure"
            >
                <img
                    src={track?.artist?.picture_medium}
                    alt={track?.artist?.name}
                    loading="lazy"
                />
                    {playing ? <FaPause /> : <FaPlay />}
            </div>
            <div
                className="artist-description"
                style={{
                    background: `url(${track?.album?.cover_xl}) center no-repeat`,
                }}
            >
                <div className="artist-description__shadow"></div>
                <div className="artist-description__content">
                    <h2 className="artist-description__title">{track?.artist?.name}</h2>
                    <div className="artist-description__item">
                        <p>
                            Lo mejor de {track?.artist?.name} <span>321, 123 seguidores</span>
                        </p>
                        <summary>
                            {track?.artist?.name} (Halifax, Reino Unido, 17 de febrero de
                            de 1991), es un músico y cantante británico.​
                        </summary>
                    </div>
                    <div className="artist-btns">
                        <button className="btn" onClick={() => setPlaying(!playing)}>
                        {playing ? 'Reproduciendo' : 'Pausado'}
                        </button>
                        <button className="btn seguir">Seguir</button>
                        <MoreActionsButton $position="relative" />
                    </div>
                </div>
            </div>
        </InfoSectionStyled>
    )
}

export default InfoSection