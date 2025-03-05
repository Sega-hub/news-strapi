import React, { useState, useEffect } from "react";
import { Box, Table, Thead, Tbody, Tr, Th, Td, Typography, Flex, Loader, Modal, Button, Textarea, TextInput, Toggle } from '@strapi/design-system';
import { FileError } from '@strapi/icons';

const Agents = () => {
    const [agents, setAgents] = useState([]);
    const [editedAgents, setEditedAgents] = useState({});

    useEffect(() => {
        fetch("https://llm.cnnews.xplr.ru/v1/agent-profile/?page=1&page_size=20", {
            method: "GET",
            headers: { "Content-Type": "application/json" }
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

    const handleChange = (uuid, field, value) => {
        setEditedAgents(prev => ({
            ...prev,
            [uuid]: { ...prev[uuid], [field]: value }
        }));
    };

    const handleSaveAll = (uuid) => {
        console.log("Сохранение изменений для агента:", uuid, editedAgents[uuid]);
    };

    return (
        <Flex style={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
            <Box gap={4}>
                <Typography style={{ fontSize: "40px", fontWeight: "bold" }}>Агенты</Typography>
            </Box>
            <Box gap={4} style={{ width: "100%" }}>
                {agents.length > 0 ? (
                    <Table colCount={3} rowCount={agents.length} style={{ width: "100%" }}>
                        <Thead>
                            <Tr>
                                <Th><Typography variant="sigma">Agent</Typography></Th>
                                <Th><Typography variant="sigma">Name</Typography></Th>
                                <Th><Typography variant="sigma">uuid</Typography></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {agents.map((agent, index) => (
                                <Tr key={index}>
                                    <Td style={{ width: "25%" }}><Typography textColor="neutral800">{agent.agent}</Typography></Td>
                                    <Td style={{ width: "25%" }}><Typography textColor="neutral800">{agent.name}</Typography></Td>
                                    <Td style={{ width: "25%" }}><Typography textColor="neutral800">{agent.uuid}</Typography></Td>
                                    <Td>
                                        <Modal.Root>
                                            <Modal.Trigger>
                                                <Button>More Info</Button>
                                            </Modal.Trigger>
                                            <Modal.Content>
                                                <Modal.Header>
                                                    <Modal.Title>All agent info</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Flex wrap="wrap" gap={4} style={{ padding: "20px", display: "flex" }}>
                                                        {Object.keys(agent).map((key) => {
                                                            const value = editedAgents[agent.uuid]?.[key] ?? agent[key] ?? "";
                                                            const type = typeof value === "boolean" 
                                                                ? "boolean" 
                                                                : typeof value === "number" 
                                                                ? "number" 
                                                                : value.length > 50 
                                                                ? "textarea" 
                                                                : "text";

                                                            return (
                                                                <Box key={key} style={{ width: "45%", padding: "8px" }}>
                                                                    <Typography 
                                                                        variant="pi" 
                                                                        fontWeight="bold" 
                                                                        style={{ backgroundColor: "#f6f6f9", padding: "4px", display: "block" }}
                                                                    >
                                                                        {key.replace(/_/g, " ")}
                                                                    </Typography>

                                                                    {type === "boolean" ? (
                                                                        <Toggle
                                                                            onLabel="True"
                                                                            offLabel="False"
                                                                            checked={value}
                                                                            onChange={(e) => handleChange(agent.uuid, key, e.target.checked)}
                                                                        />
                                                                    ) : type === "textarea" ? (
                                                                        <Textarea 
                                                                            style={{ width: "100%" }} 
                                                                            value={value} 
                                                                            onChange={(e) => handleChange(agent.uuid, key, e.target.value)} 
                                                                        />
                                                                    ) : (
                                                                        <TextInput 
                                                                            type={type} 
                                                                            style={{ width: "100%" }} 
                                                                            value={value} 
                                                                            onChange={(e) => handleChange(agent.uuid, key, e.target.value)} 
                                                                        />
                                                                    )}
                                                                </Box>
                                                            );
                                                        })}
                                                    </Flex>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <Button
                                                        onClick={() => handleSaveAll(agent.uuid)}
                                                        disabled={!editedAgents[agent.uuid]}
                                                        style={{ marginTop: "16px" }}
                                                    >
                                                        Сохранить изменения
                                                    </Button>
                                                </Modal.Footer>
                                            </Modal.Content>
                                        </Modal.Root>
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                ) : (
                    <Box style={{ flex: 1, overflow: "auto" }}>
                      <Table colCount={3} rowCount={5} style={{ width: "90%" }}>
                        <Thead>
                            <Tr>
                                <Th><Typography variant="sigma">Agent</Typography></Th>
                                <Th><Typography variant="sigma">Name</Typography></Th>
                                <Th><Typography variant="sigma">uuid</Typography></Th>
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
                )}
            </Box>
        </Flex>
    );
};

export { Agents };
