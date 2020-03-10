import styled from 'styled-components';

const Box = styled.div`
  display: block;
  background: ${props => (props.isOdd ? '#ECECEC' : '#FFFFFF')};
  overflow: hidden;

  &.top {
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    border-bottom: 5px solid #26b5eb;
  }

  &.right {
    float: right;
    width: 20%;
    img {
      max-width: 15%;
      margin: 10px;
    }
  }

  &.left {
    float: left;
    width: 20%;

    img {
      width: 75%;
    }
  }
`;

export default Box;
