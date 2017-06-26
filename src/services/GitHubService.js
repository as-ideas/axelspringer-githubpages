class GitHubService {
    constructor() {

    }

    getStats() {
        return Promise.resolve({
            stars: 6,
            contributors: 4,
            forks: 2
        });
    }
}

export default new GitHubService();