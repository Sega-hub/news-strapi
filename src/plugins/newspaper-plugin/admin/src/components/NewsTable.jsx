import React from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td, Checkbox, Typography, Flex, TFooter, Button } from '@strapi/design-system';
import { Plus, More } from '@strapi/icons';
import { MyButtonPicture } from '../components/MyButtonPicture';
import { ProgressBar } from './ProgressBar';

const NewsTable = () => {
  const ROW_COUNT = 6;
  const COL_COUNT = 10;
  
  const entry = {
    status: 'Succesful',
    progress: <ProgressBar />,
    date: "2025-02-12",
  };

  const entries = [];
  for (let i = 0; i < 5; i++) {
    entries.push({
      ...entry,
      id: i + 1,
    });
  }

  return (
    <Flex       
      style={{ 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        width: "100%"}}     
    >
      <Box
      style={{ 
        display: 'flex',
        justifyContent: "space-between",
        alignItems: "end",
        width: "100%",
        marginBottom: "10px"
      }}  
        >
        <Typography fontSize="42px" fontWeight="bold">
          Переводы
        </Typography>
        <Button>новый Перевод</Button>
      </Box>
      <Box style={{ width: "100%"}} >
        <Table colCount={COL_COUNT} rowCount={ROW_COUNT} footer={<TFooter icon={<Plus />}
          style={{ width: "100%"}}
        >Add another field to this collection type</TFooter>}>
          <Thead>
            <Tr>
              <Th><Typography variant="sigma">ID</Typography></Th>
              <Th><Typography variant="sigma">progress</Typography></Th>
              <Th><Typography variant="sigma">status</Typography></Th>
              <Th><Typography variant="sigma">Date</Typography></Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {entries.map(entry => (
              <Tr key={entry.id}>
                <Td><Typography textColor="neutral800">{entry.id}</Typography></Td>
                <Td><Typography textColor="neutral800"> {entry.progress} </Typography></Td>
                <Td><Typography textColor="neutral800">{entry.status}</Typography></Td>
                <Td><Typography textColor="neutral800">{entry.date}</Typography></Td>
                <Td>
                  <Flex>
                    <Button style={{width:"100px", backgroundColor:"rgba(0, 0, 0, 0.5)", color:"white", border:"1px solid white"}}>Подробнее</Button>
                    <Box paddingLeft={1}>
                      <Button style={{width:"60px"}}>Открыть</Button>
                    </Box>
                  </Flex>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Flex>
  );
};

export { NewsTable };
