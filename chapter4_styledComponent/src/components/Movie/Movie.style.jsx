import styled from 'styled-components';

export const MovieWrapper = styled.div`
  cursor: pointer;
  position: relative;
  margin: 7px;
  align-items: center;
  background-color: #373a69;
`;
export const ImageSection = styled.div`
  width: 140px;
  height: 230px;
`;

export const Image = styled.img`
  max-width: 155px;
  max-height: 250px;
  display: block;
  object-fit: contain;
`;

export const InfoSection = styled.div`
  width: 125px;
  height: 35px;
  display: flex;
  padding: 15px;
  font-weight: bold;
  font-size: 10px;
  color: white;
`;

export const Title = styled.div`
  width: 80%;
`;

export const VoteAverage = styled.div`
  width: 20%;
  text-align: end;
`;

export const OverviewWrapper = styled.div`
  position: absolute;
  width: 80%;
  height: 255px;
  overflow-y: scroll;
  padding: 10%;
  padding-top: 25px;
  top: 0;
  left: 0;
  font-weight: bold;
  font-size: 10px;
  color: white;
  background-color: rgba(0, 0, 0, 0.6);

  scrollbar-width: none;
  &::-webkit-scrollbar{
    width: 0;
  }
`;