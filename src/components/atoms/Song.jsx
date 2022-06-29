import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import { FaPlay } from 'react-icons/fa';

import { SongsContext } from '../../context/SongsContext';
import { breakpoints } from '../../styles/breakpoints';
import { MoreActionsButton } from './MoreActionsButton';

const SongStyled = styled.div`
    ${breakpoints.phone} {
    margin: 0 auto;
    }
    .figure {
    cursor: pointer;
    position: relative;
    width: 160px;
    height: 160px;
    background: var(--main-red);

    img {
        object-fit: cover;
    }
    svg {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        margin: auto;
        width: 45px;
        height: 45px;
        fill: var(--white);
    }
    }
    .song {
    padding: 0.5rem 0 0;
    }
`;


const Song = ({artist, title, album, id}) => {
    const navigate = useNavigate();
    const { setPlaying, trackAudio, playing} = useContext(SongsContext);

    const track = () => {
        navigate(`/track/${id}`);
        setPlaying(true);
        trackAudio.current.setAttribute('autoPlay','true');
    }

    return (
        <SongStyled>
            <div className="figure" onClick={track}>
                <img
                src={album.cover_medium}
                alt={title}
                onClick={() => setPlaying(!playing)}
                loading="lazy"
                />
                <FaPlay />
                <MoreActionsButton $rotate="-90deg" $position="absolute" rotate="true" />
            </div>
            <h4 className="song">{title}</h4>
            <p className="artist">{artist.name}</p>
        </SongStyled>
    )
};

export default React.memo(Song, (prevProps, nextProps) => {
    return prevProps.id === nextProps.id;
});