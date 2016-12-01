'use strict';

const Joi = require('joi');

const Handlers = require('./handlers');

module.exports = [
    {
        path: 'institutions/',
        method: 'POST',
        handler: Handlers.createInstitution,
        config: {
            validate: {
                payload: Handlers.ValidatorInstitution
            }
        }
    },
    {
        path: 'institutions/{dbid}',
        method: 'PUT',
        handler: Handlers.updateInstitution,
        config: {
            validate: {
                payload: Handlers.ValidatorInstitution
            }
        }
    },
    {
        path: 'institutions/{dbid}',
        method: 'DELETE',
        handler: Handlers.deleteInstitution,
        config: {
            validate: {
                params: {
                    dbid: Joi.number().integer().min(1)
                }
            }
        }
    },
    {
        path: 'institutions/',
        method: 'GET',
        handler: Handlers.findAllInstitution,
        config: {
            validate: {
                query: {
                    limit: Joi.number().integer().min(1).max(100).default(0),
                    offset: Joi.number().integer().min(1).max(100).default(100)
                }
            }
        }
    },
    {
        path: 'institutions/{dbid}',
        method: 'GET',
        handler: Handlers.findInstitutionByDbid,
        config: {
            validate: {
                params: {
                    dbid: Joi.number().integer().min(1)
                }
            }
        }
    },
    {
        path: 'institutions/{institution}/file/',
        method: 'POST',
        handler: Handlers.createInstitutionFile,
        config: {
            validate: {
                payload: Handlers.ValidatorLicenseType
            }
        }
    },
    {
        path: 'institutions/{institution}/file/{dbid}',
        method: 'PUT',
        handler: Handlers.updateInstitutionFile,
        config: {
            validate: {
                payload: Handlers.ValidatorInstitutionFile
            }
        }
    },

    {
        path: 'institutions/{institution}/file/{dbid}',
        method: 'DELETE',
        handler: Handlers.deleteInstitutionFile,
        config: {
            validate: {
                params: {
                    dbid: Joi.number().integer().min(1)
                }
            }
        }
    },
    {
        path: 'institutions/{institution}/file/',
        method: 'GET',
        handler: Handlers.findAllInstitutionFile,
        config: {
            validate: {
                query: {
                    limit: Joi.number().integer().min(1).max(100).default(0),
                    offset: Joi.number().integer().min(1).max(100).default(100)
                }
            }
        }
    },
    {
        path: 'institutions/{institution}/file/{dbid}',
        method: 'GET',
        handler: Handlers.findInstitutionFileByDbid,
        config: {
            validate: {
                params: {
                    dbid: Joi.number().integer().min(1)
                }
            }
        }
    }
];