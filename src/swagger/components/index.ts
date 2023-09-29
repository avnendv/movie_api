import user from './user.json';
import actor from './actor.json';

const schemas = {
  ...user,
  ...actor,
};

export default {
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
    schemas,
    parameters: {
      skipParam: {
        name: 'skip',
        in: 'query',
        description: 'number of items to skip',
        required: true,
        schema: {
          type: 'integer',
          format: 'int32',
        },
      },
      limitParam: {
        name: 'limit',
        in: 'query',
        description: 'max records to return',
        required: true,
        schema: {
          type: 'integer',
          format: 'int32',
        },
      },
    },
    responses: {
      NotFound: {
        description: 'Entity not found.',
      },
      IllegalInput: {
        description: 'Illegal input for operation.',
      },
      GeneralError: {
        description: 'General Error',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/GeneralError',
            },
          },
        },
      },
    },
  },
};
