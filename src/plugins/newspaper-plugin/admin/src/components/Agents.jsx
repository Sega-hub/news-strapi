import React, { useState, useEffect } from "react";
import { Box, Table, Thead, Tbody, Tr, Th, Td, Typography, Flex, Loader, Modal, Button } from '@strapi/design-system';

const Agents = () => {
    const [agents, setAgents] = useState([]); 

    useEffect(() => {
        fetch("https://llm.cnnews.xplr.ru/v1/agent-profile/?page=1&page_size=20", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then(response => response.json())
        .then(data => {
            if (Array.isArray(data.data)) {
                setAgents(data.data); 
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
                    Агенты
                </Typography>
            </Box>

            <Box gap={4}>
                <Table colCount={3} rowCount={agents.length}>
                        <Thead>
                            <Tr>
                            <Th><Typography variant="sigma">Agent</Typography></Th>
                            <Th><Typography variant="sigma">Name</Typography></Th>
                            <Th><Typography variant="sigma">uuid</Typography></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {agents.length > 0 ? (
                                agents.map((agent, index) => (  
                                    <Tr key={index} >  
                                        <Td style={{width: "25%"}} ><Typography textColor="neutral800">{agent.agent}</Typography></Td>
                                        <Td style={{width: "25%"}}><Typography textColor="neutral800"> {agent.name} </Typography></Td>                                
                                        <Td style={{width: "25%"}}><Typography textColor="neutral800">{agent.uuid}</Typography></Td>
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
                                                    <Modal.Title>All agent info</Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body>
                                                    <Flex
                                                    style={{
                                                        top: "0",
                                                        left: "0",
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        justifyContent: "start",
                                                        alignItems: "start"
                                                    }}
                                                    >
                                                    {[
                                                        { label: "Agent", value: agent.agent },
                                                        { label: "Name", value: agent.name },
                                                        { label: "Responsibilities", value: agent.responsibilities },
                                                        { label: "Skills", value: agent.skills },
                                                        { label: "Personality", value: agent.personality },
                                                        { label: "Goals", value: agent.goals },
                                                        { label: "Tasks", value: agent.tasks },
                                                        { label: "Language", value: agent.language },
                                                        { label: "Tone", value: agent.tone },
                                                        { label: "Style", value: agent.style },
                                                        { label: "Instructions", value: agent.instructions },
                                                        { label: "keep_comments", value: agent.keep_comments },
                                                        { label: "llm_uuid", value: agent.llm_uuid },
                                                        { label: "uuid", value: agent.uuid }
                                                    ].map((item, index) => (
                                                        <Typography
                                                        key={item.label}
                                                        style={{
                                                            whiteSpace: "normal",
                                                            wordBreak: "break-word",
                                                            maxWidth: "500px",
                                                            padding: "8px",
                                                            backgroundColor: index % 2 === 0 ? "transparent" : "#f0f0f0" 
                                                        }}
                                                        >
                                                        {item.label} - {item.value}
                                                        </Typography>
                                                    ))}
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

export { Agents };
