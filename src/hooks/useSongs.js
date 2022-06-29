import { useContext, useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom";
import { getSongs, getTracks } from "../services/actions";
import { SongsContext} from '../context/SongsContext'

export const useSongs = () => {

    const {songs, setSongs, setLoading} = useContext(SongsContext);
    const [track, setTrack] = useState({});

    const {id} = useParams();

    let currentId = id;

    let location = useLocation();
    const currentTrack = location.search.slice(3);

    const keywordToUse =
    currentTrack || localStorage.getItem('lastKeyword') || 'Ed%20Sheeran';

    const IdToUse = currentId || localStorage.getItem('lastId') || '142986206';

    //Hace peticiones de las canciones
    useEffect(() => {
        getSongs({
            artist: currentTrack ? currentTrack : keywordToUse,
        }).then((data) => {
            setSongs(data);
        });
        localStorage.setItem('lastKeyword', keywordToUse);
    }, [setSongs, currentTrack, keywordToUse, setLoading]);

    useEffect(() => {
        getTracks({ id: currentId ? currentId : IdToUse }).then((data) => {
            setTrack(data);
        });

        localStorage.setItem('lastId', IdToUse);
    }, [setTrack, songs, id, setLoading, currentId, IdToUse]);

    return { songs, track}
}

