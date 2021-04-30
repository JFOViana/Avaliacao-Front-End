import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 50px;

  section {
    h1,
    h2 {
      text-transform: uppercase;
    }

    .title {
      margin: 1em 0;
      padding: 10px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: solid 1px rgba(0, 0, 0, 0.3);

      h1 {
        font-size: 36px;
        font-weight: 400;
      }

      span {
      }
    }
  }

  .card {
    width: 250px;
    min-height: 300px;
    display: inline-block;
    vertical-align: top;
    margin: 20px;
    position: relative;
    z-index: 3;

    &::before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: -1;
      background-color: white;
    }

    &::after {
      content: '';
      width: 100%;
      height: 80%;
      top: 50%;
      transform: translateY(-50%);
      box-shadow: -3px 4px 15px rgba(0, 0, 0, 0.09),
        0px 4px 4px rgba(0, 0, 0, 0.05);
      position: absolute;
      z-index: -2;
    }

    .div-image {
      width: 100%;
      height: 200px;
      display: flex;
      justify-content: center;

      img {
        height: 100%;
        border-radius: 10px;
      }
    }

    h2 {
      font-size: 18px;
      margin: 24px 10px 22px 10px;
    }

    p {
      margin: 10px 10px 10px 16px;
    }
  }

  .button-default {
    background: none;
    border-width: 0 0 2px 0;
    border-bottom: solid #808080;
    color: #808080;
    margin-left: 10px;
    padding: 0.75em 1.5em;
    font-size: 0.8em;
    transition: all 0.5s;
    cursor: pointer;
    text-align: left;
    z-index: 2;
    position: relative;

    &:hover {
      color: #030303;
      font-weight: 600;
    }
  }
`;
