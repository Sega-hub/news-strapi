import React from "react";
import { Flex } from "@strapi/design-system";

const COLORS = ["#B0B0B0", "#FFD700", "#008000", "#FF0000"]; // Серый, Желтый, Зеленый, Красный
const data = [0, 2, 1];

const ProgressBar = () => {
    return (
        <Flex gap={2}>
            {data.map((value, index) => (
                <div
                    key={index}
                    style={{
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        backgroundColor: COLORS[value] || COLORS[0],
                    }}
                ></div>
            ))}
        </Flex>
    );
};

export { ProgressBar };
