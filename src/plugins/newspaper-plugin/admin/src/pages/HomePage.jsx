import React, { useState, useEffect } from "react";
import { SideMenu } from "../components/SideMenu";
import { NewsTable } from "../components/NewsTable";
import { Box, Flex } from "@strapi/design-system";

const HomePage = () => {
  const [component, setComponent] = useState(null);

  useEffect(() => {
    const socket = new WebSocket("ws://172.22.22.22:8001");

    socket.onopen = () => {
      console.log("WebSocket подключен");
    };

    socket.onmessage = (event) => {
      try {
        const messages = JSON.parse(event.data);
        if (!Array.isArray(messages)) return;

        messages.forEach(({ type, data }) => {
          if (type === "step_update") {
            console.log("step_update:", data);
          } else if (type === "process_update") {
            console.log("process_update:", data);
          } else {
            console.warn("Неизвестный тип сообщения:", type);
          }
        });
      } catch (error) {
        console.error("Ошибка обработки сообщения:", error);
      }
    };

    socket.onerror = (error) => {
      console.error("WebSocket ошибка:", error);
    };

    socket.onclose = () => {
      console.log("WebSocket закрыт");
    };

    return () => {
      socket.close();
    };
  }, []);

  return (
    <Flex style={{ width: "100%", height: "100vh", overflow: "hidden" }}>
      {/* Боковое меню */}
      <Box
        style={{ width: "10%", minWidth: "250px", height: "100vh", overflowY: "auto" }}
      >
        <SideMenu setComponent={setComponent} />
      </Box>

      {/* Контент (таблица) */}
      <Box
        style={{
          flex: 1,
          height: "100vh",
          width: "90%",
          overflow: "auto",
          padding: "20px",
        }}
      >
        {component || <NewsTable />}
      </Box>
    </Flex>
  );
};

export { HomePage };
