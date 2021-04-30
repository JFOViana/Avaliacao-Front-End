import styled, { css } from 'styled-components';

export const Container = styled.div`
  header {
    width: ${(props) => (props.propsMenuSize ? '200px' : 'var(--defaultSize)')};
    height: 100%;
    background: white;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 1em rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    position: fixed;
    border-radius: 10px;
    padding: 50px 10px;
    z-index: 9;
    left: 0;
    top: 0;
  }

  .fix {
    position: relative;
    height: 100%;
    width: var(--defaultSize);
  }

  ul {
    display: none;
  }

  li {
    list-style: none;
    padding: 10px 20px;
    border-bottom: solid 0.5px rgba(0, 0, 0, 0.02);
  }

  .button-default {
    width: 100%;
    background: none;
    border: 0;
    color: #808080;
    font-size: 0.8em;
    transition: all 0.5s;
    cursor: pointer;
    text-align: left;
    position: relative;

    &::after {
      content: '';
      width: 0%;
      height: 1px;
      background: black;
      position: absolute;
      left: -2px;
      bottom: -1px;
      transition: 0.5s;
    }

    &:hover {
      color: #030303;
      font-weight: 600;

      &::after {
        width: 100%;
      }
    }
  }

  @media screen and (min-width: 900px) {
    header {
      left: 22px !important;
      top: 50% !important;
      height: 90% !important;
      transform: translateY(-50%);
    }
    .hamburguer-menu {
      display: none !important;
    }

    ul {
      display: unset;
    }
  }

  .hamburguer-menu {
    width: 32px;
    height: 20px;
    display: flex;
    position: relative;
    cursor: pointer;
    flex-direction: column;
    justify-content: space-between;
    background: none;
    border: 0;

    span {
      width: 100%;
      height: 3px;
      border-radius: 99px;
      background: black;
      transition: 0.5s;
    }
  }

  ${(props) => {
    if (props.propsMenuSize) {
      return css`
        .hamburguer-menu {
          span {
            position: absolute;
            top: 50%;
            left: 50%;

            transform: translate(-50%, -50%);

            &:nth-child(1) {
              transform: rotate(45deg);
            }

            &:nth-child(2) {
              opacity: 0;
            }
            &:nth-child(3) {
              transform: rotate(-45deg);
            }
          }
        }

        ul {
          display: unset !important;
        }
      `;
    }
  }}
`;
