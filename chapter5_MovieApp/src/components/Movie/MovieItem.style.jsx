import styled from 'styled-components';

export const MovieWrapper = styled.div`
  width: 251px;
  cursor: pointer;
  position: relative;
  margin: 12px;
  background-color: #373a69;
  border-radius: 10px;
`;

export const Image = styled.img`
  width: 100%;
  display: block;
  object-fit: contain;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

export const InfoSection = styled.div`
  width: transparants;
  height: 50px;
  display: flex;
  padding: 15px;
  font-weight: bold;
  font-size: 16px;
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
  top: 0;
  left: 0;
  width: 80%;
  height: calc(100% - 10% - 5px);
  overflow-y: scroll;
  padding: 10%;
  padding-top: 25px;
  font-weight: bold;
  font-size: 14px;
  line-height: 1.5;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;

  scrollbar-width: none;
  &::-webkit-scrollbar{
    width: 0;
  }
`;