import React, { useState } from 'react';
import { SideMenu } from '../components/SideMenu';
import { NewsTable } from '../components/NewsTable';
import { Box, Flex } from '@strapi/design-system';

const HomePage = () => {
  const [component, setComponent] = useState(null);

  return (   
    <Flex style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>        
      {/* Боковое меню */}
      <Box style={{ width: '10%', minWidth: '250px', height: '100vh', overflowY: 'auto' }}>
        <SideMenu setComponent={setComponent}/> 
      </Box>

      {/* Контент (таблица) */}
      <Box 
        style={{
          flex: 1,  // Занимает всю доступную ширину
          height: '100vh',
          width: '90%',
          overflow: 'auto', // Добавляем скролл при необходимости
          padding: '20px'
        }}
      >
        {component || <NewsTable />}
      </Box>
    </Flex>
  );
};

export { HomePage };
