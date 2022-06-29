import { createContext, useRef, useState } from "react";

export const SongsContext = createContext({});

export const SongsContextProvider = ({ children }) => {
    const [songs, setSongs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [playing, setPlaying] = useState(false);
    const [autoPlay, setAutoPlay] = useState(false);
    const trackAudio = useRef(null);

    return(
        <SongsContext.Provider
            value = {{
                songs,
                setSongs,
                loading,
                setLoading,
                playing,
                setPlaying,
                autoPlay,
                setAutoPlay,
                trackAudio
            }}
        >
            {children}
        </SongsContext.Provider>
    );

};
