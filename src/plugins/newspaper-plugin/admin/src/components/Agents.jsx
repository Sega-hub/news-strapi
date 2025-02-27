import React, { useState, useEffect } from "react";
import { Box, Table, Thead, Tbody, Tr, Th, Td, Typography, Flex, Loader, Modal, Button, Field } from '@strapi/design-system';

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

    const handleSave = (uuid, field) => {
        console.log(`${field}:`, editedAgents[uuid]?.[field] || "");
    };

    return (
        <Flex style={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
            <Box gap={4}>
                <Typography style={{ fontSize: "40px", fontWeight: "bold" }}>Агенты</Typography>
            </Box>
            <Box gap={4} style={{ width: "1000px" }}>
                <Table colCount={3} rowCount={agents.length} style={{ width: "100%" }}>
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
                                                    <Flex style={{ padding: "20px", display: "flex", flexWrap: "wrap" }}>
                                                        {Object.keys(agent).map((key) => (
                                                            <Box key={key} style={{ padding: "4px", width: "100%" }}>
                                                                <Field.Root>
                                                                    <Field.Label>{key.replace(/_/g, " ")}</Field.Label>
                                                                    <Field.Input
                                                                        type="text"
                                                                        value={editedAgents[agent.uuid]?.[key] ?? agent[key] ?? ""}
                                                                        onChange={(e) => handleChange(agent.uuid, key, e.target.value)}
                                                                    />
                                                                </Field.Root>
                                                                <button
                                                                    onClick={() => handleSave(agent.uuid, key)}
                                                                    disabled={editedAgents[agent.uuid]?.[key] === undefined}
                                                                    style={{
                                                                        marginTop: "8px",
                                                                        padding: "8px 12px",
                                                                        backgroundColor: editedAgents[agent.uuid]?.[key] !== undefined ? "#007bff" : "#ccc",
                                                                        color: "white",
                                                                        border: "none",
                                                                        cursor: editedAgents[agent.uuid]?.[key] !== undefined ? "pointer" : "not-allowed",
                                                                        borderRadius: "4px",
                                                                    }}
                                                                >
                                                                    Сохранить
                                                                </button>
                                                            </Box>
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