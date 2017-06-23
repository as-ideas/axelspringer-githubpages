var data = require('json-loader!../data/projects.json');

class ProjectService {
    constructor() {

    }

    getProjects() {
        return data;
    }
}

export default new ProjectService();