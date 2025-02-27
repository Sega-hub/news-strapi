import React, { useState, useEffect } from "react";
import { Box, Table, Thead, Tbody, Tr, Th, Td, Typography, Flex, Loader, Button, Modal} from '@strapi/design-system';

const Process = () => {
    const [process, setProcess] = useState([]);
    const [processDetails, setProcessDetails] = useState(null); 
    const [loading, setLoading] = useState(false); 

    useEffect(() => {
        fetch("https://llm.cnnews.xplr.ru/v1/process/?page=1&page_size=50", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then(response => response.json())
        .then(data => {
            if (Array.isArray(data.data)) {
                setProcess(data.data);
            } else {
                console.error("Полученные данные не являются массивом:", data);
            }
        })
        .catch(error => console.error("Ошибка:", error));
    }, []);

    const fetchProcessDetails = (uuid) => {
        setLoading(true);
        fetch(`https://llm.cnnews.xplr.ru/v1/process-step/process/${uuid}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then(response => response.json())
        .then(data => {
            setProcessDetails(data); 
            setLoading(false); 
        })
        .catch(error => {
            console.error("Ошибка:", error);
            setLoading(false); 
        });
    };

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
                    Процессы
                </Typography>
            </Box>

            <Box gap={4}
            style={{
                width: "1000px"
            }}>
                <Table colCount={3} rowCount={process.length} style={{width: "100%"}}>
                    <Thead>
                        <Tr>
                            <Th><Typography variant="sigma">Name</Typography></Th>
                            <Th><Typography variant="sigma">Discription</Typography></Th>
                            <Th><Typography variant="sigma">Action</Typography></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {process.length > 0 ? (
                            process.map((proc, index) => (
                                <Tr key={index}>
                                    <Td style={{width: "25%"}}><Typography textColor="neutral800">{proc.name}</Typography></Td>
                                    <Td style={{width: "25%"}}><Typography textColor="neutral800"> {proc.description} </Typography></Td>
                                    <Td>                                        
                                        <Modal.Root>
                                            <Modal.Trigger>
                                                <Button onClick={() => fetchProcessDetails(proc.uuid)}>More info</Button>
                                            </Modal.Trigger>
                                            <Modal.Content style={{width: "100vw", height: "100vh"}}>
                                                <Modal.Header>
                                                <Modal.Title>Process details</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                {loading && <Loader>Loading process details...</Loader>} 
            
                                                {processDetails && (
                                                    <Box gap={4} style={{ marginTop: "20px", display: "flex", flexDirection: "column" }}>
                                                        <Typography style={{backgroundColor: "rgb(246, 246, 249)"}}>Name</Typography>
                                                        <Typography style={{marginTop: "10px"}}>{processDetails.process.name}</Typography>
                                                        <Typography style={{marginTop: "20px", backgroundColor: "rgb(246, 246, 249)"}}>Discriptionn</Typography>
                                                        <Typography style={{marginTop: "10px"}}>{processDetails.process.description}</Typography>
                                                        <Typography style={{marginTop: "20px", backgroundColor: "rgb(246, 246, 249)"}}>ID</Typography>
                                                        <Typography style={{marginTop: "10px"}}>{processDetails.process.uuid}</Typography>
                                                        <Typography variant="sigma" style={{ marginTop: "20px" }}>Steps:</Typography>
                                                        {processDetails.steps && processDetails.steps.length > 0 ? (
                                                            <Table colCount={4} rowCount={processDetails.steps.length}>                                                               
                                                                <Tbody>
                                                                    {processDetails.steps.map((step, index) => (
                                                                        <Tr key={index}>
                                                                            <Td style={{
                                                                                padding: "10px",
                                                                                backroundColor: "rgb(246, 246, 249)"
                                                                            }}><Typography textColor="neutral800">{`#${index+1} ${step.name}`}</Typography></Td>
                                                                        </Tr>
                                                                    ))}
                                                                </Tbody>
                                                            </Table>
                                                        ) : (
                                                            <Typography>Нет шагов в этом процессе.</Typography>
                                                        )}
                                                    </Box>
                                                )}
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

export { Process };
