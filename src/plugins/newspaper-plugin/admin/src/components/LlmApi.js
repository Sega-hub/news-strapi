//перепиши для фронта


//АГЕНТЫ
const axios = require('axios'); // Установите: npm install axios 

//получить всех агентов
const getAllAgents = async () => {
  try {
    const response = await axios.get(`https://llm.cnnews.xplr.ru/v1/agent-profile/?page=1&page_size=30`);
    console.log('Ответ API:', response.data); // Вывод в командную строку
  } catch (error) {
    console.error('Ошибка при получении профиля:', error);
  }
};

//создаем конкретного агента
const createAgentProfile = async () => {
  try {
    const profileData = {
      agent: "test-agent",
      name: "Test Name",
      responsibilities: "Testing API",
      skills: "JavaScript, API integration",
      personality: "Friendly",
      goals: "Ensure API works",
      tasks: "Send API requests",
      language: "English",
      tone: "Professional",
      style: "Formal",
      instructions: "",
      keep_comments: true,
      llm_uuid: "9939b7df-3de8-4a71-8cbf-ad912cababa3" // Проверьте этот UUID
    };

    const response = await axios.post(`https://llm.cnnews.xplr.ru/v1/agent-profile/`, profileData, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });

    console.log('✅ Профиль создан:', response.data);
  } catch (error) {
    console.error('❌ Ошибка при создании профиля:', error.response?.data || error.message);
  }
};

//получаем конкретного агента
const getAgentProfile = async (agentId) => {
    try {
      const response = await axios.get(`https://llm.cnnews.xplr.ru/v1/agent-profile/${agentId}`); 
      console.log('Получили профиль:', response.data); // Вывод в командную строку
    } catch (error) {
        console.error('Ошибка при получении профиля:', error);
    }
};

//обновляем конкретного агента
const updateAgentProfile = async (agentId) => {
    try {
      const profileData = {
        agent: "new-test-agent",
        name: "Test Name",
        responsibilities: "Testing API",
        skills: "JavaScript, API integration",
        personality: "Friendly",
        goals: "Ensure API works",
        tasks: "Send API requests",
        language: "English",
        tone: "Professional",
        style: "Formal",
        instructions: "",
        keep_comments: true,
        llm_uuid: "9939b7df-3de8-4a71-8cbf-ad912cababa3" // Проверьте этот UUID
      };
  
      const response = await axios.put(`https://llm.cnnews.xplr.ru/v1/agent-profile/${agentId}`, profileData, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      });
  
      console.log('✅ Профиль обновлен:', response.data);
    } catch (error) {
      console.error('❌ Ошибка при обновлении профиля:', error.response?.data || error.message);
    }
};

//удаляем конкретного агента
const deleteAgentProfile = async (agentId) => {
    try {
      const response = await axios.delete(`https://llm.cnnews.xplr.ru/v1/agent-profile/${agentId}`); 
      console.log('Удалили:', response.data); // Вывод в командную строку
    } catch (error) {
        console.error('Ошибка удалении профиля:', error);
    }
};


// Вызываем функции для теста
// getAllAgents();
//createAgentProfile();
// getAgentProfile('c23af28d-d075-4800-a111-0204fe68534b');
// updateAgentProfile('c23af28d-d075-4800-a111-0204fe68534b');
// deleteAgentProfile('c23af28d-d075-4800-a111-0204fe68534b');

//LLM_CONNECTION

//получить подключение  пагинацией
const getLlmPaginationC = async () => {
    try {
      const response = await axios.get(`https://llm.cnnews.xplr.ru/v1/llm-connection/pagination?page=1&page_size=30`);
      console.log('Ответ API:', response.data); // Вывод в командную строку
    } catch (error) {
      console.error('Ошибка при получении профиля:', error);
    }
};

//Получить конкретное подключение
const getLlmC = async (uuid) => {
    try {
      const response = await axios.get(`https://llm.cnnews.xplr.ru/v1/llm-connection/${uuid}`);
      console.log('Ответ API:', response.data); // Вывод в командную строку
    } catch (error) {
      console.error('Ошибка при получении профиля:', error);
    }
};

//создаем конкретное подключение
const createLlmConnection = async () => {
    try {
        const llmData = {
            "base_url": "string",
            "api_key": "string"
          };
  
      const response = await axios.post(`https://llm.cnnews.xplr.ru/v1/llm-connection/`, llmData, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      });
  
      console.log('✅ Llm создан:', response.data);
    } catch (error) {
      console.error('❌ Ошибка при создании профиля:', error.response?.data || error.message);
    }
};

//обновляем Llm соединение
const updateLlmConection = async (uuid) => {
    try {
      const llmData = {
        "base_url": "new-test-update-url",
        "api_key": "new-test-api-key"
      };
  
      const response = await axios.put(`https://llm.cnnews.xplr.ru/v1/llm-connection/${uuid}`, llmData, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      });
  
      console.log('✅ Профиль обновлен:', response.data);
    } catch (error) {
      console.error('❌ Ошибка при обновлении профиля:', error.response?.data || error.message);
    }
};

//удаляем конкретное соединение
const deleteLlmConection = async (uuid) => {
    try {
      const response = await axios.delete(`https://llm.cnnews.xplr.ru/v1/llm-connection/${uuid}`); 
      console.log('Удалили:', response.data); // Вывод в командную строку
    } catch (error) {
        console.error('Ошибка удалении профиля:', error);
    }
};

// getLlmPaginationC();
// getLlmC('abd1d59a-5026-4c6d-8506-604497016fd6');
// createLlmConnection();
// updateLlmConection('d4edecd9-e4fa-4272-86fa-e2f0c3403ef2');
// deleteLlmConection('2c5e9ea3-3f8c-4964-82d8-03d6a2bcebbd');

//LLM 

//получить подключение  пагинацией
const getLlmPagination = async () => {
    try {
      const response = await axios.get(`https://llm.cnnews.xplr.ru/v1/llm/pagination?page=1&page_size=30`);
      console.log('Ответ API:', response.data); // Вывод в командную строку
    } catch (error) {
      console.error('Ошибка при получении профиля:', error);
    }
};

//Получить конкретное подключение
const getLlm = async (uuid) => {
    try {
      const response = await axios.get(`https://llm.cnnews.xplr.ru/v1/llm/${uuid}`);
      console.log('Ответ API:', response.data); // Вывод в командную строку
    } catch (error) {
      console.error('Ошибка при получении профиля:', error);
    }
};

//создаем конкретное подключение
const createLlm = async () => {
    try {
        const llmData = {
            "name": "string",
            "use_tools": true,
            "max_temperature": 1,
            "llm_connection_uuid": "bc1466ac-15f4-4515-80c5-037171260986"
          };
  
      const response = await axios.post(`https://llm.cnnews.xplr.ru/v1/llm/`, llmData, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      });
  
      console.log('✅ Llm создан:', response.data);
    } catch (error) {
      console.error('❌ Ошибка при создании профиля:', error.response?.data || error.message);
    }
};

//обновляем Llm соединение put
const updateLlm = async (uuid) => {
    try {
      const llmData = {
        "name": "new-string",
        "use_tools": true,
        "max_temperature": 1,
        "llm_connection_uuid": "bc1466ac-15f4-4515-80c5-037171260986"
      };
  
      const response = await axios.put(`https://llm.cnnews.xplr.ru/v1/llm/${uuid}`, llmData, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      });
  
      console.log('✅ Профиль обновлен:', response.data);
    } catch (error) {
      console.error('❌ Ошибка при обновлении профиля:', error.response?.data || error.message);
    }
};

//обновляем Llm соединение patch
const updateLlmPatch = async (uuid) => {
    try {
      const llmData = {
        "name": "new-string",
        "use_tools": true,
        "max_temperature": 1,
        "llm_connection_uuid": "bc1466ac-15f4-4515-80c5-037171260986"
      };
  
      const response = await axios.patch(`https://llm.cnnews.xplr.ru/v1/llm/${uuid}`, llmData, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      });
  
      console.log('✅ Профиль обновлен:', response.data);
    } catch (error) {
      console.error('❌ Ошибка при обновлении профиля:', error.response?.data || error.message);
    }
};

//удаляем конкретное соединение
const deleteLlm = async (uuid) => {
    try {
      const response = await axios.delete(`https://llm.cnnews.xplr.ru/v1/llm/${uuid}`); 
      console.log('Удалили:', response.data); // Вывод в командную строку
    } catch (error) {
        console.error('Ошибка удалении профиля:', error);
    }
};

// getLlmPagination();
// getLlm('88313fe0-fec9-4377-aff8-93b55ba8e795');
// createLlm();
// updateLlm('66014ea2-9bfc-441f-812b-e012a8e4aae5');
// updateLlmPatch('66014ea2-9bfc-441f-812b-e012a8e4aae5');
// deleteLlm('66014ea2-9bfc-441f-812b-e012a8e4aae5');

//PROCESS

//Получить процессы
const getProcess = async () => {
    try {
      const response = await axios.get(`https://llm.cnnews.xplr.ru/v1/process/?page=1&page_size=30`);
      console.log('Ответ API:', response.data); // Вывод в командную строку
    } catch (error) {
      console.error('Ошибка при получении профиля:', error);
    }
};

//создаем процессы
const createProcess = async () => {
    try {
        const processData = {
            "name": "string",
            "description": "string",
            "timeout": 1
        };
  
      const response = await axios.post(`https://llm.cnnews.xplr.ru/v1/process/`, processData, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      });
  
      console.log('✅ Process создан:', response.data);
    } catch (error) {
      console.error('❌ Ошибка при создании Process:', error.response?.data || error.message);
    }
};

//Получить конкретный процесс
const getUniqProcess = async (uuid) => {
    try {
      const response = await axios.get(`https://llm.cnnews.xplr.ru/v1/process/${uuid}`);
      console.log('Ответ API:', response.data); // Вывод в командную строку
    } catch (error) {
      console.error('Ошибка при получении профиля:', error);
    }
};

//обновляем process
const updateProcess = async (uuid) => {
    try {
      const processData = {
        "name": "string-update",
        "description": "string",
        "timeout": 1
      };
  
      const response = await axios.put(`https://llm.cnnews.xplr.ru/v1/process/${uuid}`, processData, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      });
  
      console.log('✅ Process обновлен:', response.data);
    } catch (error) {
      console.error('❌ Ошибка при обновлении process:', error.response?.data || error.message);
    }
};

//удаляем процесс
const deleteProcess = async (uuid) => {
    try {
      const response = await axios.delete(`https://llm.cnnews.xplr.ru/v1/process/${uuid}`); 
      console.log('Удалили:', response.data); // Вывод в командную строку
    } catch (error) {
        console.error('Ошибка удалении профиля:', error);
    }
};

// getProcess();
// createProcess();
// getUniqProcess('b8d06326-7ef4-4ac0-aa36-7ee1a871e02b');
// updateProcess('da7ae3e3-08f3-4b79-ade9-c42ae055ed19');
// deleteProcess('da7ae3e3-08f3-4b79-ade9-c42ae055ed19');

//PROCESS STEP

//Получить шаги процесса
const getStepProcess = async (uuidProcess) => {
    try {
      const response = await axios.get(`https://llm.cnnews.xplr.ru/v1/process-step/process/${uuidProcess}`);
      console.log('Ответ API:', response.data); // Вывод в командную строку
    } catch (error) {
      console.error('Ошибка при получении step process:', error);
    }
};

//Получить конкретный шаг процесса
const getStepProcessUniq = async (uuidProcessStep) => {
    try {
      const response = await axios.get(`https://llm.cnnews.xplr.ru/v1/process-step/${uuidProcessStep}`);
      console.log('Ответ API:', response.data); // Вывод в командную строку
    } catch (error) {
      console.error('Ошибка при получении step process uniq:', error);
    }
};

//обновляем process step
const updateProcessStep = async (uuidProcessStep) => {
    try {
      const processData = {
        "name": "string",
        "description": "string",
        "process_uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "position": 0,
        "agent_profile_uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "retry_limit": 0,
        "segmentation": false,
        "timeout": 1
      };
  
      const response = await axios.put(`https://llm.cnnews.xplr.ru/v1/process/${uuidProcessStep}`, processData, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      });
  
      console.log('✅ Process обновлен:', response.data);
    } catch (error) {
      console.error('❌ Ошибка при обновлении process:', error.response?.data || error.message);
    }
};

//создаем шаг процесса
const createProcessStep = async () => {
    try {
        const processStepData = {
            "name": "newTest",
            "description": "new test step of rocess",
            "process_uuid": "b0b2872c-297b-4bb3-a9ed-791a030c3eb2", //обезательно uuid сущетсвующего процесса
            "position": 0,
            "agent_profile_uuid": "c23af28d-d075-4800-a111-0204fe68534b", //обезательно uuid сущетсвующего агента
            "retry_limit": 0,
            "segmentation": false,
            "timeout": 1
        };
  
      const response = await axios.post(`https://llm.cnnews.xplr.ru/v1/process-step/`, processStepData, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      });
  
      console.log('✅ Process step создан:', response.data);
    } catch (error) {
      console.error('❌ Ошибка при создании Process step:', error.response?.data || error.message);
    }
};

//удаляем шаг процесс
const deleteProcessStep = async (uuidProcessStep) => {
    try {
      const response = await axios.delete(`https://llm.cnnews.xplr.ru/v1/process-step/${uuidProcessStep}`); 
      console.log('Удалили:', response.data); // Вывод в командную строку
    } catch (error) {
        console.error('Ошибка удалении профиля:', error);
    }
};

// getStepProcess("b0b2872c-297b-4bb3-a9ed-791a030c3eb2");
// getStepProcessUniq("a527eefc-fe49-4701-86bd-f04da4f61b9c");
// createProcessStep();
// updateProcessStep("a527eefc-fe49-4701-86bd-f04da4f61b9c");
// deleteProcessStep("6748db21-9faf-4f4d-b2a9-50bd15a8d7de");


//OPERATIONS

//Получить операции
const getOperations = async () => {
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
const getUniqOperation = async (uuidOperation) => {
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

// getOperations();
// getUniqOperation("329a044e-4b55-47b7-b7e0-856da903bcf9");

//ELASTICK
//Получить индексы
const getAllElasticIndex = async () => {
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
const createIndex = async () => {
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
const deleteIndex = async (indexName) => {
    try {
      const response = await axios.delete(`https://llm.cnnews.xplr.ru/v1/elastic/${indexName}`); 
      console.log('Удалили:', response.data); // Вывод в командную строку
    } catch (error) {
        console.error('Ошибка удалении профиля:', error);
    }
};


//Создать запись в индексе
const createListIndex = async () => {
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
const getBaseOfIndex = async (idnexName) => {
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
const getListOfBase = async (idnexName, listUuid) => {
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
const deleteListOfBAse = async (idnexName, listUuid) => {
    try {
      const response = await axios.delete(`https://llm.cnnews.xplr.ru/v1/elastic/index/${listUuid}?index_name=${idnexName}`); 
      console.log('Удалили:', response.data); // Вывод в командную строку
    } catch (error) {
        console.error('Ошибка удаления:', error);
    }
};

//обновляем запись в базе выбранного индекса
const updateListOfBase = async (indexName, listUuid) => {
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
const createConnectionStepandBase = async () => {
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
const getAllConnectionsStepandIndex = async (processStepUuid) => {
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
const getConnectionOfStepAndIndex = async (processUuid) => {
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
const deleteConnectionOfStepAndIndex = async (processUuid) => {
    try {
      const response = await axios.delete(`https://llm.cnnews.xplr.ru/v1/elastic/process/${processUuid}`); 
      console.log('Удалили:', response.data); // Вывод в командную строку
    } catch (error) {
        console.error('Ошибка удаления:', error);
    }
};

// getAllElasticIndex();
// createIndex();
// deleteIndex("new-test");
// createListIndex();
// getBaseOfIndex("cheshi");
// getListOfBase("cheshi", "802fde30-da33-4b34-a1b2-fa4ca7771f5c");
//deleteListOfBAse("cheshi", "802fde30-da33-4b34-a1b2-fa4ca7771f5c");
//updateListOfBase("cheshi", "802fde30-da33-4b34-a1b2-fa4ca7771f5c");
// createConnectionStepandBase();
//getAllConnectionsStepandIndex("a527eefc-fe49-4701-86bd-f04da4f61b9c");
//getConnectionOfStepAndIndex("a527eefc-fe49-4701-86bd-f04da4f61b9c");
// deleteConnectionOfStepAndIndex("a527eefc-fe49-4701-86bd-f04da4f61b9c");