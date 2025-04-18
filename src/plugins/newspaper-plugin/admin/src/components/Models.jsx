import React, { useState, useEffect } from "react";
import { Box, Table, Thead, Tbody, Tr, Th, Td, Typography, Flex, Loader, Modal, Button, Textarea, TextInput, Toggle  } from '@strapi/design-system';
import { FileError } from '@strapi/icons';

const Models = () => {
    const [models, setModels] = useState([]);
    const [editedModels, setEditedModels] = useState({});

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

    const handleChange = (uuid, field, value) => {
        setEditedModels(prev => ({
            ...prev,
            [uuid]: { ...prev[uuid], [field]: value }
        }));
    };

    const handleSaveAll = (uuid) => {
        console.log("Сохранение изменений для модели:", uuid, editedModels[uuid]);
    };

    return (
        <Flex style={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
            <Box gap={4}>
                <Typography style={{ fontSize: "40px", fontWeight: "bold" }}>Модели</Typography>
            </Box>
            <Box gap={4} style={{ width: "100%" }}>
                <Table colCount={3} rowCount={models.length} style={{ width: "100%" }}>
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
                                    <Td style={{ width: "25%" }}><Typography textColor="neutral800">{model.name}</Typography></Td>
                                    <Td style={{ width: "25%" }}><Typography textColor="neutral800">{model.use_tools ? "Yes" : "No"}</Typography></Td>
                                    <Td style={{ width: "25%" }}><Typography textColor="neutral800">{model.uuid}</Typography></Td>
                                    <Td>
                                        <Modal.Root>
                                            <Modal.Trigger>
                                                <Button>More Info</Button>
                                            </Modal.Trigger>
                                            <Modal.Content>
                                                <Modal.Header>
                                                    <Modal.Title>All models info</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Flex wrap="wrap" gap={4} style={{ marginTop: "20px", display: "flex" }}>
                                                        {Object.keys(model).map((key) => {
                                                            const value = editedModels[model.uuid]?.[key] ?? model[key] ?? "";
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
                                                                            onChange={(e) => handleChange(model.uuid, key, e.target.checked)}
                                                                        />
                                                                    ) : type === "number" ? (
                                                                        <TextInput
                                                                            type="text"
                                                                            style={{ width: "100%" }}
                                                                            value={value}
                                                                            onChange={(e) => {
                                                                            // Проверяем, чтобы введенное значение было числом
                                                                            const newValue = e.target.value;
                                                                            if (!isNaN(newValue) || newValue === "") { // Разрешаем пустое значение для очистки
                                                                            handleChange(model.uuid, key, newValue);
                                                                            }
                                                                        }}
                                                                        />
                                                                    ) : type === "textarea" ? (
                                                                        <Textarea
                                                                            style={{ width: "100%" }}
                                                                            value={value}
                                                                            onChange={(e) => handleChange(model.uuid, key, e.target.value)}
                                                                        />
                                                                    ) : (
                                                                        <TextInput
                                                                            type={type}
                                                                            style={{ width: "100%" }}
                                                                            value={value}
                                                                            onChange={(e) => handleChange(model.uuid, key, e.target.value)}
                                                                        />
                                                                    )}
                                                                </Box>
                                                            );
                                                        })}
                                                    </Flex>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <Button
                                                        onClick={() => handleSaveAll(model.uuid)}
                                                        disabled={!editedModels[model.uuid]}
                                                        style={{ marginTop: "16px" }}
                                                    >
                                                        Сохранить изменения
                                                    </Button>
                                                </Modal.Footer>
                                            </Modal.Content>
                                        </Modal.Root>
                                    </Td>
                                </Tr>
                            ))
                        ) : (
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
                        )}
                    </Tbody>
                </Table>
            </Box>
        </Flex>
    );
};

export { Models };
