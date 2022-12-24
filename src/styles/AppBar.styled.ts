import styled from 'styled-components';

const AppBarStyled = styled.header`
  background-color: #2f2f2f;
  display: flex;
  align-items: center;
  height: 64px;
  padding: 16px;
  font-size: 1.5rem;
  color: #fbfbf9;
  position: sticky;
  top: 0;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  z-index: 10;
  span {
    font-size: 1.25rem;
  }
  .inner_links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 6rem;
    font-size: 1.5rem;
    display: flex;
    justify-items: center;
    .link {
      margin: 0 2rem;
      transition: 0.5s;
      &:hover {
        color: #ffc30d;
      }
    }
  }
  .outer_links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: auto;
    font-size: 1.5rem;
    display: flex;
    justify-items: center;
    .link {
      font-size: 1.8rem;
      padding-top: 8px;
      margin: 0 1rem;
      transition: 0.5s;
      &:hover {
        color: #ffc30d;
      }
    }
  }

  button {
    padding: 0.25rem 0.5rem;
    margin: 0 0 0 2rem;
    transition-duration: 0.5s;
    text-align: center;
    border-radius: 0.75rem;
    font-size: 1.5rem;
    border: none;
    background: none;
    color: #fbfbf9;
    cursor: pointer;
    &:hover {
      background: #ffc30d;
      color: #2f2f2f;
      box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
        0px 4px 5px 0px rgba(0, 0, 0, 0.14),
        0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    }
  }
`;

export default AppBarStyled;
