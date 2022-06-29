import React from 'react'
import styled from 'styled-components'
import { SongsGrid } from '../molecules/SongsGrid';

const ResultsStyled = styled.section`
    width: 100%;
    h2 {
        color: var(--main-red);
        font-weight: bold;
    }
`;

const ResultsSection = () => {
    return (
        <>
            <ResultsStyled>
                <h2 className='mb-2' >Resultados</h2>
                <SongsGrid/>
            </ResultsStyled>
        </>
    )
};

export default ResultsSection