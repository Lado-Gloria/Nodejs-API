const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Node API Documentation',
      version: '1.0.0',
      description: 'Documentation for your Node.js API',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server',
      },
    ],
  },
  apis: ['./server.js'], 
};

module.exports = options;
