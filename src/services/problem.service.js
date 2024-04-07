const sanitizeMarkdownContent = require("../utils/markdownSanitizer");

class ProblemService {

    constructor(problemRepository) {
        this.problemRepository = problemRepository;
    }

    async createProblem(problemData) {
        // 1. Sanitize the markdown for description
        problemData.description = sanitizeMarkdownContent(problemData.description);

        const problem = await this.problemRepository.createProblem(problemData);

        return problem;
    }

    async getAllProblems() {
        const problems = await this.problemRepository.getAllProblems();
        return problems;
    }

    async getProblem(problemId) {
        const problem = await this.problemRepository.getProblem(problemId);
        return problem;
    }

    async deleteProblem(problemId) {
        const deleted_Problem = await this.problemRepository.deleteProblem(problemId);
        return deleted_Problem;
    }

    async updateProblem(problemId, updatedData) {

        // 1. Sanitize the markdown for updated description
        updatedData.description = sanitizeMarkdownContent(updatedData.description);
        const updated_Problem = await this.problemRepository.updateProblem(problemId, updatedData);
        return updated_Problem;
    }

}

module.exports = ProblemService;