import styled from 'styled-components';

export const Body = styled.div`
    background-color: #242756;
`;

export const AppContainer = styled.div`
    display : flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const MovieContainer = styled.div`
    margin: 18px;
    background-color: #474c79;
    color :white;
    border-radius: 5px;
`;

export const MovieContainerImg = styled.img`
    max-width: 100%;
`;

export const MovieInfo = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    align-items: center;
`;

export const MovieInfoH5 = styled.h5`
    margin: 0;
    color: white;
`;

export const MovieInfoSpan = styled.span`
    color: white;
    margin-left: auto;
`;

export default{
    Body, AppContainer, MovieContainer, MovieContainerImg, MovieInfo, MovieInfoH5, MovieInfoSpan,
};