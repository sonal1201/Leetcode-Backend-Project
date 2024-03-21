const express = require('express');

const { problemController } = require('../../controllers');

const problemRouter = express.Router();

// If any request comes and route continues with /ping, we map it to pingController
problemRouter.get('/ping', problemController.pingController);

problemRouter.get('/:id', problemController.getproblem);

problemRouter.get('/', problemController.getproblems);

problemRouter.post('/', problemController.addproblem);

problemRouter.delete('/:id', problemController.deleteproblem);

problemRouter.put('/:id', problemController.updateproblem);


module.exports = problemRouter;