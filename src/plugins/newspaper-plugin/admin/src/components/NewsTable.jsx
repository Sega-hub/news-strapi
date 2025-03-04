import React from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td, Typography, Flex, Button } from '@strapi/design-system';
import { ProgressBar } from './ProgressBar';
import { FileError } from '@strapi/icons';

const NewsTable = () => {
  const ROW_COUNT = 6;
  const COL_COUNT = 5;
  
  //не пусто
  // const entry = {
  //   status: 'Successful',
  //   progress: <ProgressBar />,
  //   date: "2025-02-12",
  // };

  //пустой
  const entry = {
    
  };

  return (
    <Flex
      direction="column"
      alignItems="centr"
      style={{ width: "100%", height: "100%" }}
    >
      {/* Заголовок */}
      <Box style={{ display: 'flex', justifyContent: "space-between", alignItems:"end", marginBottom: "10px", width: "100%", }}>
        <Typography fontSize="42px" fontWeight="bold">Переводы</Typography>
        <Button>Новый Перевод</Button>
      </Box>

      {/* Таблица */}
      {Object.keys(entry).length === 0 ? (
        <Box style={{ flex: 1, overflow: "auto" }}>
          <Table colCount={COL_COUNT} rowCount={ROW_COUNT} style={{ width: "90%" }}>
            <Thead>
              <Tr>
                <Th><Typography variant="sigma">ID</Typography></Th>
                <Th><Typography variant="sigma">Progress</Typography></Th>
                <Th><Typography variant="sigma">Status</Typography></Th>
                <Th><Typography variant="sigma">Date</Typography></Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td colSpan={5} style={{ textAlign: "center", padding: "20px" }}>
                  <Box
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "20px", 
                    }}
                  >
                    <Typography
                      style={{
                        fontSize: "50px",
                        fontWeight: "bold"
                      }}
                    >
                      No content found
                    </Typography>
                    <FileError
                      style={{
                        width: "100px",
                        height: "100px"
                      }}
                    />
                  </Box>
                </Td>
              </Tr>
            </Tbody>

          </Table>
        </Box>
      ) : (
        <Box style={{ flex: 1, overflow: "auto" }}>
          <Table colCount={COL_COUNT} rowCount={ROW_COUNT} style={{ width: "90%" }}>
            <Thead>
              <Tr>
                <Th><Typography variant="sigma">ID</Typography></Th>
                <Th><Typography variant="sigma">Progress</Typography></Th>
                <Th><Typography variant="sigma">Status</Typography></Th>
                <Th><Typography variant="sigma">Date</Typography></Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {entries.map(entry => (
                <Tr key={entry.id}>
                  <Td><Typography textColor="neutral800">{entry.id}</Typography></Td>
                  <Td>{entry.progress}</Td>
                  <Td><Typography textColor="neutral800">{entry.status}</Typography></Td>
                  <Td><Typography textColor="neutral800">{entry.date}</Typography></Td>
                  <Td>
                    <Flex>
                      <Button style={{ width: "100px", backgroundColor: "rgba(0, 0, 0, 0.5)", color: "white", border: "1px solid white" }}>Подробнее</Button>
                      <Box paddingLeft={1}>
                        <Button style={{ width: "60px" }}>Открыть</Button>
                      </Box>
                    </Flex>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      )}
    </Flex>
  );
};

export { NewsTable };
