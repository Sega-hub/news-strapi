import axios from 'axios';

// АГЕНТЫ

export const getAllAgents = async () => {
  try {
    const response = await axios.get('https://llm.cnnews.xplr.ru/v1/agent-profile/?page=1&page_size=30');
    return response.data;
  } catch (error) {
    console.error('Ошибка при получении агентов:', error);
  }
};

export const createAgentProfile = async (profileData) => {
  try {
    const response = await axios.post('https://llm.cnnews.xplr.ru/v1/agent-profile/', profileData, {
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
    });
    return response.data;
  } catch (error) {
    console.error('Ошибка при создании профиля:', error);
  }
};

export const getAgentProfile = async (agentId) => {
  try {
    const response = await axios.get(`https://llm.cnnews.xplr.ru/v1/agent-profile/${agentId}`);
    return response.data;
  } catch (error) {
    console.error('Ошибка при получении профиля:', error);
  }
};

export const updateAgentProfile = async (agentId, profileData) => {
  try {
    const response = await axios.put(`https://llm.cnnews.xplr.ru/v1/agent-profile/${agentId}`, profileData, {
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
    });
    return response.data;
  } catch (error) {
    console.error('Ошибка при обновлении профиля:', error);
  }
};

export const deleteAgentProfile = async (agentId) => {
  try {
    await axios.delete(`https://llm.cnnews.xplr.ru/v1/agent-profile/${agentId}`);
  } catch (error) {
    console.error('Ошибка при удалении профиля:', error);
  }
};

// LLM CONNECTION

export const getLlmPaginationC = async () => {
  try {
    const response = await axios.get('https://llm.cnnews.xplr.ru/v1/llm-connection/pagination?page=1&page_size=30');
    return response.data;
  } catch (error) {
    console.error('Ошибка при получении подключений:', error);
  }
};

export const getLlmC = async (uuid) => {
  try {
    const response = await axios.get(`https://llm.cnnews.xplr.ru/v1/llm-connection/${uuid}`);
    return response.data;
  } catch (error) {
    console.error('Ошибка при получении подключения:', error);
  }
};

export const createLlmConnection = async (llmData) => {
  try {
    const response = await axios.post('https://llm.cnnews.xplr.ru/v1/llm-connection/', llmData, {
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
    });
    return response.data;
  } catch (error) {
    console.error('Ошибка при создании LLM подключения:', error);
  }
};

export const deleteLlmConnection = async (uuid) => {
  try {
    await axios.delete(`https://llm.cnnews.xplr.ru/v1/llm-connection/${uuid}`);
  } catch (error) {
    console.error('Ошибка при удалении LLM подключения:', error);
  }
};

// LLM

export const getLlmPagination = async () => {
  try {
    const response = await axios.get('https://llm.cnnews.xplr.ru/v1/llm/pagination?page=1&page_size=30');
    return response.data;
  } catch (error) {
    console.error('Ошибка при получении LLM:', error);
  }
};

export const getLlm = async (uuid) => {
  try {
    const response = await axios.get(`https://llm.cnnews.xplr.ru/v1/llm/${uuid}`);
    return response.data;
  } catch (error) {
    console.error('Ошибка при получении LLM:', error);
  }
};

export const createLlm = async (llmData) => {
  try {
    const response = await axios.post('https://llm.cnnews.xplr.ru/v1/llm/', llmData, {
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
    });
    return response.data;
  } catch (error) {
    console.error('Ошибка при создании LLM:', error);
  }
};

export const deleteLlm = async (uuid) => {
  try {
    await axios.delete(`https://llm.cnnews.xplr.ru/v1/llm/${uuid}`);
  } catch (error) {
    console.error('Ошибка при удалении LLM:', error);
  }
};

// Получить процессы
export const getProcess = async () => {
    try {
      const response = await axios.get('https://llm.cnnews.xplr.ru/v1/process/?page=1&page_size=30');
      return response.data;
    } catch (error) {
      console.error('Ошибка при получении процессов:', error);
    }
  };
  
  // Создать процесс
  export const createProcess = async () => {
    try {
      const processData = {
        name: 'string',
        description: 'string',
        timeout: 1,
      };
  
      const response = await axios.post('https://llm.cnnews.xplr.ru/v1/process/', processData, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });
  
      return response.data;
    } catch (error) {
      console.error('Ошибка при создании процесса:', error.response?.data || error.message);
    }
  };
  
  // Получить конкретный процесс
  export const getUniqProcess = async (uuid) => {
    try {
      const response = await axios.get(`https://llm.cnnews.xplr.ru/v1/process/${uuid}`);
      return response.data;
    } catch (error) {
      console.error('Ошибка при получении процесса:', error);
    }
  };
  
  // Обновить процесс
  export const updateProcess = async (uuid) => {
    try {
      const processData = {
        name: 'string-update',
        description: 'string',
        timeout: 1,
      };
  
      const response = await axios.put(`https://llm.cnnews.xplr.ru/v1/process/${uuid}`, processData, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });
  
      return response.data;
    } catch (error) {
      console.error('Ошибка при обновлении процесса:', error.response?.data || error.message);
    }
  };
  
  // Удалить процесс
  export const deleteProcess = async (uuid) => {
    try {
      const response = await axios.delete(`https://llm.cnnews.xplr.ru/v1/process/${uuid}`);
      return response.data;
    } catch (error) {
      console.error('Ошибка при удалении процесса:', error);
    }
  };
  
  // Получить шаги процесса
  export const getStepProcess = async (uuidProcess) => {
    try {
      const response = await axios.get(`https://llm.cnnews.xplr.ru/v1/process-step/process/${uuidProcess}`);
      return response.data;
    } catch (error) {
      console.error('Ошибка при получении шагов процесса:', error);
    }
  };
  
  // Получить конкретный шаг процесса
  export const getStepProcessUniq = async (uuidProcessStep) => {
    try {
      const response = await axios.get(`https://llm.cnnews.xplr.ru/v1/process-step/${uuidProcessStep}`);
      return response.data;
    } catch (error) {
      console.error('Ошибка при получении шага процесса:', error);
    }
  };
  
  // Обновить шаг процесса
  export const updateProcessStep = async (uuidProcessStep) => {
    try {
      const processData = {
        name: 'string',
        description: 'string',
        process_uuid: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        position: 0,
        agent_profile_uuid: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        retry_limit: 0,
        segmentation: false,
        timeout: 1,
      };
  
      const response = await axios.put(`https://llm.cnnews.xplr.ru/v1/process/${uuidProcessStep}`, processData, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });
  
      return response.data;
    } catch (error) {
      console.error('Ошибка при обновлении шага процесса:', error.response?.data || error.message);
    }
  };
  
  // Создать шаг процесса
  export const createProcessStep = async () => {
    try {
      const processStepData = {
        name: 'newTest',
        description: 'new test step of process',
        process_uuid: 'b0b2872c-297b-4bb3-a9ed-791a030c3eb2',
        position: 0,
        agent_profile_uuid: 'c23af28d-d075-4800-a111-0204fe68534b',
        retry_limit: 0,
        segmentation: false,
        timeout: 1,
      };
  
      const response = await axios.post('https://llm.cnnews.xplr.ru/v1/process-step/', processStepData, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });
  
      return response.data;
    } catch (error) {
      console.error('Ошибка при создании шага процесса:', error.response?.data || error.message);
    }
  };
  
  // Удалить шаг процесса
  export const deleteProcessStep = async (uuidProcessStep) => {
    try {
      const response = await axios.delete(`https://llm.cnnews.xplr.ru/v1/process-step/${uuidProcessStep}`);
      return response.data;
    } catch (error) {
      console.error('Ошибка при удалении шага процесса:', error);
    }
  };

//OPERATIONS
  
  //Получить операции
export const getOperations = async () => {
    try {
      const response = await axios.get(`https://llm.cnnews.xplr.ru/v1/operations/?page=1&page_size=30`,  { headers: {
        'Accept': 'application/json',
      }}
       );
       console.log('✅ Полученные операции:\n', JSON.stringify(response.data, null, 2)); // Форматируем JSON красиво
    } catch (error) {
      console.error('Ошибка при получении операции:', error);
    }
};
  
  //Получить конкретную операцию
  export const getUniqOperation = async (uuidOperation) => {
      try {
        const response = await axios.get(`https://llm.cnnews.xplr.ru/v1/operations/${uuidOperation}`,  { headers: {
          'Accept': 'application/json',
        }}
         );
         console.log('Ответ:', response.data); // Вывод в командную строку
      } catch (error) {
        console.error('Ошибка при получении операции:', error);
      }
  };

  //ELASTICK
  //Получить индексы
  export const getAllElasticIndex = async () => {
      try {
        const response = await axios.get(`https://llm.cnnews.xplr.ru/v1/elastic/`,  { headers: {
          'Accept': 'application/json',
        }}
         );
         console.log('✅ Полученные индексы:\n', response.data); // Форматируем JSON красиво
      } catch (error) {
        console.error('Ошибка при получении индексов:', error);
      }
  };
  
  //Создать индекс
  export const createIndex = async () => {
      try {
          const indexName = {
              "index_name": "new-test"
            };
    
        const response = await axios.post(`https://llm.cnnews.xplr.ru/v1/elastic/`, indexName, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }
        });
    
        console.log('✅ Index создан:', response.data);
      } catch (error) {
        console.error('❌ Ошибка при создании index:', error.response?.data || error.message);
      }
  };
  
  //Удалить индекс
  export const deleteIndex = async (indexName) => {
      try {
        const response = await axios.delete(`https://llm.cnnews.xplr.ru/v1/elastic/${indexName}`); 
        console.log('Удалили:', response.data); // Вывод в командную строку
      } catch (error) {
          console.error('Ошибка удалении профиля:', error);
      }
  };
  
  
  //Создать запись в индексе
  export const createListIndex = async () => {
      try {
          const createListIndex = {
              "original": "string",
              "translation": "string",
              "checked": false,
              "index_name": "string"
            };
    
        const response = await axios.post(`https://llm.cnnews.xplr.ru/v1/elastic/index`, createListIndex, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }
        });
    
        console.log('✅ Запись создан:', response.data);
      } catch (error) {
        console.error('❌ Ошибка при создании записи:', error.response?.data || error.message);
      }
  };
  
  //Получить базу знаний по индексу
  export const getBaseOfIndex = async (idnexName) => {
      try {
        const response = await axios.get(`https://llm.cnnews.xplr.ru/v1/elastic/index?page=1&page_size=30&index_name=${idnexName}`,  { headers: {
          'Accept': 'application/json',
        }}
         );
         console.log('✅ Полученная база:\n', response.data);
      } catch (error) {
        console.error('Ошибка при получении базы:', error);
      }
  };
  
  //получить запись из базы по индексу 
  //listUuid - uuid конкретной записи из базы
  export const getListOfBase = async (idnexName, listUuid) => {
      try {
        const response = await axios.get(`https://llm.cnnews.xplr.ru/v1/elastic/index/${listUuid}?index_name=${idnexName}`,  { headers: {
          'Accept': 'application/json',
        }}
         );
         console.log('✅ Полученная база:\n', response.data);
      } catch (error) {
        console.error('Ошибка при получении базы:', error);
      }
  };
  
  //удалить запись в базе индекса
  //listUuid - uuid конкретной записи из базы
  export const deleteListOfBAse = async (idnexName, listUuid) => {
      try {
        const response = await axios.delete(`https://llm.cnnews.xplr.ru/v1/elastic/index/${listUuid}?index_name=${idnexName}`); 
        console.log('Удалили:', response.data); // Вывод в командную строку
      } catch (error) {
          console.error('Ошибка удаления:', error);
      }
  };
  
  //обновляем запись в базе выбранного индекса
  export const updateListOfBase = async (indexName, listUuid) => {
      try {
        const listData = {
          "original": "string",
          "translation": "string",
          "checked": true
        };
    
        const response = await axios.put(`https://llm.cnnews.xplr.ru/v1/elastic/index/${listUuid}?index_name=${indexName}`, listData, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }
        });
    
        console.log('✅ Process обновлен:', response.data);
      } catch (error) {
        console.error('❌ Ошибка при обновлении:', error.response?.data || error.message);
      }
  };
  
  //Создать связь шага процесса и базы знаний
  export const createConnectionStepandBase = async () => {
      try {
          const connectionData = {
              "process_step_uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
              "index_name": "string"
          };
    
        const response = await axios.post(`https://llm.cnnews.xplr.ru/v1/elastic/process`, connectionData, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }
        });
    
        console.log('✅ Связь создана:', response.data);
      } catch (error) {
        console.error('❌ Ошибка при создании связи:', error.response?.data || error.message);
      }
  };
  
  //Получить все связи шага процесса и индексов
  export const getAllConnectionsStepandIndex = async (processStepUuid) => {
      try {
        const response = await axios.get(`https://llm.cnnews.xplr.ru/v1/elastic/process?process_step_uuid=${processStepUuid}&page=1&page_size=30`,  { headers: {
          'Accept': 'application/json',
        }}
         );
         console.log('✅ Полученные связи:\n', response.data);
      } catch (error) {
        console.error('Ошибка при получении связей:', error);
      }
  };
  
  //Получить связь шага процесса и индекса
  export const getConnectionOfStepAndIndex = async (processUuid) => {
      try {
        const response = await axios.get(`https://llm.cnnews.xplr.ru/v1/elastic/process/${processUuid}`,  { headers: {
          'Accept': 'application/json',
        }}
         );
         console.log('✅ Полученные связи:\n', response.data);
      } catch (error) {
        console.error('Ошибка при получении связей:', error);
      }
  };
  
  //удалить связь шага процесса и индекса
  export const deleteConnectionOfStepAndIndex = async (processUuid) => {
      try {
        const response = await axios.delete(`https://llm.cnnews.xplr.ru/v1/elastic/process/${processUuid}`); 
        console.log('Удалили:', response.data); // Вывод в командную строку
      } catch (error) {
          console.error('Ошибка удаления:', error);
      }
  };
  
  