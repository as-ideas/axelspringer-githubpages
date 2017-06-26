import HttpService from './HttpService';

class GitHubService {
    constructor() {
        this.baseUrl = 'http://localhost:3000';
    }

    getStats(githubId) {
        return HttpService.get(this.baseUrl + '/gitHub/' + githubId);
    }
}

export default new GitHubService();