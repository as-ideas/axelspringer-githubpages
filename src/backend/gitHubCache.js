const http = require('http');
const url = require('url');

const NodeCache = require("node-cache");

class GitHubCache {
    constructor(host, port) {
        this.host = host;
        this.port = port;
        this.cache = new NodeCache({ stdTTL: 360 }); // time to live in seconds
    }

    getStats(owner, project) {
        return new Promise((resolve, reject) => {
            const self = this;
            this.cache.get('github/' + owner + '/' + project, function (err, value) {
                if (!err) {
                    if (value == undefined) {
                        console.log('Key github/' + owner + '/' + project + ' not found');
                        console.log('Start sync for github/' + owner + '/' + project);

                        self.syncStats(owner, project)
                            .then((stats) => resolve(stats))
                            .catch((e) => reject(e));
                    } else {
                        resolve(value);
                    }
                } else {
                    reject(err)
                }
            });
        });
    }

    syncStats(owner, project) {
        return new Promise((resolve, reject) => {
            this.getStatsFromGithub(owner, project).then((body) => {
                this.cache.set('github/' + owner + '/' + project, body, function (err, success) {
                    if (!err && success) {
                        console.log('Sync done for github/' + owner + '/' + project);
                        resolve(body);
                    } else {
                        reject(err);
                    }
                });
            }).catch((e) => reject(e));
        })
    }

    getStatsFromGithub(owner, project) {
        return new Promise((resolve, reject) => {
            http.get({
                host: this.host,
                port: this.port,
                path: '/repos/' + owner + '/' + project
            }, function (res) {
                var body = '';
                res.on('data', function (chunk) {
                    body += chunk;
                });

                res.on('end', function () {
                    if (res.statusCode == 200) {
                        resolve(body)
                    } else {
                        reject(res.statusMessage);
                    }
                });
            }).on('error', function (err) {
                reject(err);
            });

        })
    }
}
module.exports = GitHubCache;