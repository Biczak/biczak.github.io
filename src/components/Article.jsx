import styled from 'styled-components';

const Article = styled.article`
  display: block;
  overflow: hidden;
  background: ${props => (props.isOdd ? '#ECECEC' : '#FFFFFF')};

  &.project-title-image {
    
  }
`;

export default Article;