import styled, { keyframes } from 'styled-components';

const SlideOut = keyframes`
0% {
  opacity: 0;
  left: -6rem;
}
100% {
  opacity: 1;
  left: 6rem;
}
`;

const MainPageStyled = styled.div<{ offsetY: number }>`
  .intro {
    font-family: 'Audiowide';
    display: flex;
    position: absolute;
    left: 6rem;
    top: 12rem;
    padding-left: 2rem;
    padding-right: 2rem;
    text-align: left;
    flex-direction: column;
    align-items: flex-start;
    color: #fbfbf9;
    font-size: 2.8rem;
    transition: 2s;
    animation: ${SlideOut} 2s ease-in-out;

    a {
      padding: 0.25rem 0.5rem;
      transition-duration: 0.5s;
      text-align: center;
      border-radius: 0.25rem;
      font-size: 1.5rem;
      background: #ffc30d;
      color: #2f2f2f;
      box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
        0px 4px 5px 0px rgba(0, 0, 0, 0.14),
        0px 1px 10px 0px rgba(0, 0, 0, 0.12);
      &:hover {
        background: #ff8a00;
      }
    }
  }
  .modes_container {
    padding: 3rem;
    width: 100%;
    max-width: 100%;
    background: #363636;
    margin-top: 100vh;
    .about_us {
      font-family: 'Audiowide', 'Source Sans Pro';
      font-size: 1.8rem;
      line-height: 2rem;
      color: #fbfbf9;
      span {
        font-size: 1.125rem;
        line-height: 1.75rem;
      }
    }
    .modes {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

export default MainPageStyled;
