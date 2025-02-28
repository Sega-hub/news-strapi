import React, { useState } from 'react';
import { SideMenu } from '../components/SideMenu';
import { NewsTable } from '../components/NewsTable';
import { Typography, Box, Flex } from '@strapi/design-system';

const HomePage = () => {
  const [component, setComponent] = useState(null);

  return (   
    <Flex
      style={{
        display: "flex",
        alignItems: "start",
        justifyContent: "start",
        width: '100%',
        maxWidth: '100%', // Таблица на всю ширину экрана
        marginTop: '-20px', // Поднятие выше
        
      }}
    >        
       <Box
        style = {{
          width: '21%'
        }}
       >
          <SideMenu setComponent={setComponent}/> 
       </Box>

       <Box 
        style = {{
          width: '75%',
          maxWidth: "1000px",
          marginTop: "25px",
        }}
       >
          {component || <NewsTable/>}
       </Box>
    </Flex>
  );
};

export { HomePage };
