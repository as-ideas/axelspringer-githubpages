import HttpService from './HttpService';

class GitHubService {
    constructor() {
    }

    getStats(owner, project) {
        return HttpService.get('/' + owner + '/' + project);
    }
}

export default new GitHubService();