const NotFound = require('../errors/notFound.error');
const { Problem } = require('../models')

class ProblemRepo {
    async createProblem(problemData) {
        try {
            const problem = await Problem.create({
                title: problemData.title,
                description: problemData.description,
            });
            return problem;

        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getAllProblems() {
        try {
            const problems = await Problem.find({});
            return problems;
        } catch (error) {
            console.log(error);
            throw error;
        }

    }

    async getProblem(id) {
        try {
            const problem = await Problem.findById(id);
            if (!problem) {
                throw new NotFound("Problem", id)
            }
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async deleteProblem(id) {
        try {
            const deleted_Problem = await Problem.findByIdAndDelete(id)
            if (!deleted_Problem) {
                throw new NotFound("Problem", id)
            }
            return deleted_Problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async updateProblem(id, updatedData) {
        try {
            const update_Problem = await Problem.findByIdAndUpdate(id, updatedData, { new: true })
            if (!update_Problem) {
                throw new NotFound("Problem", id)
            }
            return update_Problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}

module.exports = ProblemRepo;