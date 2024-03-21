function pingController(req, res) {
    res.send({ msg: "Ping controller checked" });
}

function addproblem(req, res) {
    return res.status(501).json({
        message: 'Not implemented'
    });
}

function getproblem(req, res) {
    return res.status(501).json({
        message: 'Not implemented'
    });
}

function getproblems(req, res) {
    return res.status(501).json({
        message: 'Not implemented'
    });
}

function deleteproblem(req, res) {
    return res.status(501).json({
        message: 'Not implemented'
    });
}

function updateproblem(req, res) {
    return res.status(501).json({
        message: 'Not implemented'
    });
}

module.exports = {
    addproblem,
    getproblem,
    getproblems,
    deleteproblem,
    updateproblem,
    pingController
}