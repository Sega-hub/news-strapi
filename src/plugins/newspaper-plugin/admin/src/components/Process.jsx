import React, { useState, useEffect } from "react";
import { Box, Table, Thead, Tbody, Tr, Th, Td, Typography, Flex, Loader, Modal, Button, Textarea } from '@strapi/design-system';

const Process = () => {
    const [process, setProcess] = useState([]);
    const [processDetails, setProcessDetails] = useState(null);
    const [editedProcess, setEditedProcess] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch("https://llm.cnnews.xplr.ru/v1/process/?page=1&page_size=50", {
            method: "GET",
            headers: { "Content-Type": "application/json" }
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
        fetch(`https://llm.cnnews.xplr.ru/v1/process-step/process/${uuid}`)
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

    const handleChange = (uuid, field, value) => {
        setEditedProcess(prev => ({
            ...prev,
            [uuid]: { ...prev[uuid], [field]: value }
        }));
    };

    const handleSave = (uuid, field) => {
        console.log(`${field}:`, editedProcess[uuid]?.[field] || "");
    };

    return (
        <Flex style={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
            <Box gap={4}>
                <Typography style={{ fontSize: "40px", fontWeight: "bold" }}>Процессы</Typography>
            </Box>
            <Box gap={4} style={{ width: "1000px" }}>
                <Table colCount={3} rowCount={process.length} style={{ width: "100%" }}>
                    <Thead>
                        <Tr>
                            <Th><Typography variant="sigma">Name</Typography></Th>
                            <Th><Typography variant="sigma">Description</Typography></Th>
                            <Th><Typography variant="sigma">Action</Typography></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {process.length > 0 ? (
                            process.map((proc, index) => (
                                <Tr key={index}>
                                    <Td><Typography textColor="neutral800">{proc.name}</Typography></Td>
                                    <Td><Typography textColor="neutral800">{proc.description}</Typography></Td>
                                    <Td>
                                        <Modal.Root>
                                            <Modal.Trigger>
                                                <Button onClick={() => fetchProcessDetails(proc.uuid)}>More Info</Button>
                                            </Modal.Trigger>
                                            <Modal.Content>
                                                <Modal.Header>
                                                    <Modal.Title>Process Details</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    {loading && <Loader>Loading process details...</Loader>}
                                                    {processDetails && (
                                                        <Box gap={4} style={{ marginTop: "20px", display: "flex", flexDirection: "column" }}>
                                                            {Object.keys(processDetails.process).map((key) => (
                                                                <Box key={key} style={{ padding: "4px" }}>
                                                                    <Typography variant="pi" fontWeight="bold" style={{ backgroundColor: "rgb(246, 246, 249)", padding: "4px" }}>{key.replace(/_/g, " ")}</Typography>
                                                                    <Textarea
                                                                        value={editedProcess[proc.uuid]?.[key] ?? processDetails.process[key] ?? ""}
                                                                        onChange={(e) => handleChange(proc.uuid, key, e.target.value)}
                                                                    />
                                                                    <button
                                                                        onClick={() => handleSave(proc.uuid, key)}
                                                                        disabled={editedProcess[proc.uuid]?.[key] === undefined}
                                                                        style={{
                                                                            marginTop: "8px",
                                                                            padding: "8px 12px",
                                                                            backgroundColor: editedProcess[proc.uuid]?.[key] !== undefined ? "#007bff" : "#ccc",
                                                                            color: "white",
                                                                            border: "none",
                                                                            cursor: editedProcess[proc.uuid]?.[key] !== undefined ? "pointer" : "not-allowed",
                                                                            borderRadius: "4px",
                                                                        }}
                                                                    >
                                                                        Сохранить
                                                                    </button>
                                                                </Box>
                                                            ))}
                                                            <Typography variant="sigma" style={{ marginTop: "20px" }}>Steps:</Typography>
                                                            {processDetails.steps && processDetails.steps.length > 0 ? (
                                                                <Table colCount={1} rowCount={processDetails.steps.length}>
                                                                    <Tbody>
                                                                        {processDetails.steps.map((step, index) => (
                                                                            <Tr key={index}>
                                                                                <Td style={{padding:"10px"}}>
                                                                                    <Typography textColor="neutral800" >{`#${index + 1} ${step.name}`}</Typography>
                                                                                </Td>
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
