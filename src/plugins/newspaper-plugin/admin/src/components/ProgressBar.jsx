import React from "react";
import { Flex, Box } from "@strapi/design-system";
import { Check, Loader, More, Cross } from '@strapi/icons';
const COLORS = ["#d1d5db", "#fdba74", "#34d399", "#f87171"]; // Серый, Оранжевый, Зеленый, Красный
const ICONS = [  
    <More />, // Серый
    <Loader />, // Оранжевый
    <Check />, // Зеленый
    <Cross />, // Красный
];

const data = [0, 1, 2, 3];

const ProgressBar = () => {
    return (
        <Flex gap={2}>
            {data.map((value, index) => (
                <Box 
                    key={index}
                    style={{
                        width: 30,
                        height: 30,
                        borderRadius: "50%",
                        backgroundColor: COLORS[value] || COLORS[0],
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    {ICONS[value] || ICONS[0]}
                </Box>
            ))}
        </Flex>
    );
};

export { ProgressBar };
