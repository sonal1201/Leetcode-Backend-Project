class BaseError extends Error {
    constructor(name, status, description, details) {
        super(description);
        this.name = name;
        this.status = status;
        this.details = details;

    }
}

module.exports = BaseError; 