import React from 'react';
import Box from './Box';
import AlexBiczak from 'Logos/AlexBiczak.svg';
import GitHub from 'Logos/GitHub.svg';
import LinkedIn from 'Logos/LinkedIn.svg';
import Gmail from 'Logos/Gmail.svg';
const TopBar = () => (
  <Box className="top">
    <Box className="left">
      <img src={AlexBiczak} />
    </Box>
    <Box className="right">
      <img src={GitHub} />
      <img src={LinkedIn} />
      <img src={Gmail} />
      
    </Box>
  </Box>
);

export default TopBar;