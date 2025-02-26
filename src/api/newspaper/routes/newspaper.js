module.exports = {
    routes: [
      {
        method: "POST",
        path: "/newspapers",
        handler: "newspaper.create",
        config: {
          policies: [],
          auth: false // Если нужна авторизация, поставь true
        }
      },
      {
        method: "GET",
        path: "/newspapers",
        handler: "newspaper.find",
        config: {
          auth: false // Если нужна авторизация, поменяй на true
        }
      }
    ]
  };
  