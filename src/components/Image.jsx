import styled from 'styled-components';

const Image = styled.div`
  background-image: ${props => props.background};
  float: right;
  width: 60%;
  padding-bottom: 150px;
`;

export default Image;