import styled from 'styled-components';

const SurfaceStyled = styled.div`
  background-color: #2f2f2f;
  height: 65vh;
  width: 20vw;
  margin: 32px 4px;
  border-radius: 0.125rem;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  transition: 0.5s;
  &:hover {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }
  img {
    width: 100%;
    border-radius: 0.125rem;
  }
  #mode_info {
    clip-path: polygon(0 0, 100% 0%, 80% 100%, 0% 100%);
    background-color: #ffc30d;
    width: fit-content;
    padding: 4px 64px 4px 8px;
    margin-top: -3.66rem;
    font-size: 1.125rem;
    display: flex;
    flex-direction: column;
    font-family: 'Audiowide';
    transition: 0.5s;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    &:hover {
      background-color: #ff8a00;
    }
    span {
      font-size: 0.9rem;
    }
  }
  .description {
    padding: 8px;
    color: #fbfbf9;
  }
`;

export default SurfaceStyled;
