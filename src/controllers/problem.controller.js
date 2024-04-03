const NotImplemented = require('../errors/notImplemented.error');
const { ProblemService } = require('../services')
const { ProblemRepo } = require('../repositories');
const { StatusCodes } = require('http-status-codes');

const problemService = new ProblemService(new ProblemRepo());

function pingProblemController(req, res) {
    return res.json({ message: 'Problem controller is up' });
}

async function addProblem(req, res, next) {
    try {
        const newproblem = await problemService.createProblem(req.body);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: 'Successfully created a new problem',
            error: {},
            data: newproblem
        })
    } catch (error) {
        next(error);
    }
}


function getProblem(req, res, next) {
    try {
        // nothing implemented
        throw new NotImplemented('Add Problem');
    } catch (error) {
        next(error);
    }
}

async function getProblems(req, res, next) {
    try {
        const response = await problemService.getAllProblems();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully fetched all problems',
            error: {},
            data: response
        })

    } catch (error) {
        next(error);
    }
}

function deleteProblem(req, res, next) {
    try {
        // nothing implemented
        throw new NotImplemented('Add Problem');
    } catch (error) {
        next(error);
    }
}

function updateProblem(req, res, next) {
    try {
        // nothing implemented
        throw new NotImplemented('add Problem');
    } catch (error) {
        next(error);
    }
}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingProblemController
}