import React, { useState, useEffect } from "react";
import { Box, Table, Thead, Tbody, Tr, Th, Td, Typography, Flex, Loader, Modal, Button } from '@strapi/design-system';

const Models = () => {
    const [models, setModels] = useState([]); 

    useEffect(() => {
        fetch("https://llm.cnnews.xplr.ru/v1/llm/pagination?page=1&page_size=50", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then(response => response.json())
        .then(data => {
            if (Array.isArray(data.data)) {
                setModels(data.data); 
            } else {
                console.error("Полученные данные не являются массивом:", data);
            }
        })
        .catch(error => console.error("Ошибка:", error));
    }, []); 
    return (
        <Flex
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "start"
            }}
        >
            <Box gap={4}>
                <Typography
                    style={{
                        fontSize: "40px",
                        fontWeight: "bold"
                    }}
                >
                    Модели
                </Typography>
            </Box>

            <Box gap={4}>
                <Table colCount={3} rowCount={models.length}>
                        <Thead>
                            <Tr>
                            <Th><Typography variant="sigma">Name</Typography></Th>
                            <Th><Typography variant="sigma">Max Temperature</Typography></Th>
                            <Th><Typography variant="sigma">uuid</Typography></Th>
                            <Th><Typography variant="sigma">Action</Typography></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                           {models.length > 0 ? (
                             models.map((model, index) => (
                                <Tr key={index}>
                                    <Td style={{width: "25%"}}><Typography textColor="neutral800">{model.name}</Typography></Td>
                                    <Td style={{width: "25%"}}><Typography textColor="neutral800"> {model.use_tools ? "Yes" : "No"} </Typography></Td>                                
                                    <Td style={{width: "25%"}}><Typography textColor="neutral800">{model.uuid}</Typography></Td>
                                    <Td>                                          
                                        <Modal.Root>
                                            <Modal.Trigger>
                                                <Button>More Info</Button>
                                            </Modal.Trigger>
                                            <Modal.Content
                                                style={{
                                                    widht: "100vw",
                                                    height: "100vh"
                                                }}
                                            >
                                                <Modal.Header>
                                                <Modal.Title>All models info</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Flex>
                                                        <Box gap={4} style={{ marginTop: "20px", display: "flex", flexDirection: "column" }}>
                                                            <Typography style={{backgroundColor: "rgb(246, 246, 249)"}}>Name</Typography>
                                                            <Typography style={{marginTop: "10px"}}>{model.name}</Typography>
                                                            <Typography style={{marginTop: "20px", backgroundColor: "rgb(246, 246, 249)"}}>Tools</Typography>
                                                            <Typography style={{marginTop: "10px"}}>{model.use_tools ? "Yes" : "No"}</Typography>
                                                            <Typography style={{marginTop: "20px", backgroundColor: "rgb(246, 246, 249)"}}>Temperature</Typography>
                                                            <Typography style={{marginTop: "10px"}}>{model.max_temperature}</Typography>
                                                            <Typography style={{marginTop: "20px", backgroundColor: "rgb(246, 246, 249)"}}>Llm id</Typography>
                                                            <Typography style={{marginTop: "10px"}}>{model.llm_connection_uuid}</Typography>
                                                            <Typography style={{marginTop: "20px", backgroundColor: "rgb(246, 246, 249)"}}>Id</Typography>
                                                            <Typography style={{marginTop: "10px"}}>{model.uuid}</Typography>
                                                        </Box>
                                                    </Flex>
                                                </Modal.Body>                                                   
                                            </Modal.Content>
                                        </Modal.Root>
                                    </Td>
                                </Tr>
                                ))
                           ) : (
                            <Loader>Loading content...</Loader>
                           )}
                        </Tbody>
                </Table>
            </Box>
        </Flex>
    );
};

export { Models };

