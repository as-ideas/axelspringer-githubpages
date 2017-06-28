const http = require('http');
const https = require('https');
const url = require('url');

const NodeCache = require("node-cache");

class GitHubCache {
    constructor(options) {
        this.options = options;
        this.cache = new NodeCache({ stdTTL: 360 }); // time to live in seconds -> 60 min
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
                            .catch((err) => {
                                console.error(err);
                                reject(err);
                            });
                    } else {
                        resolve(value);
                    }
                } else {
                    console.error(err);
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
                        console.error(err);
                        reject(err);
                    }
                });
            }).catch((err) => {
                console.error(err);
                reject(err);
            });
        })
    }

    getStatsFromGithub(owner, project) {
        return new Promise((resolve, reject) => {
            let gitHubApiUrl = this.options.url;

            console.log('GET %s//%s:%s%s', gitHubApiUrl.protocol, gitHubApiUrl.hostname, gitHubApiUrl.port, '/repos/' + owner + '/' + project);

            let headers = {
                'user-agent': 'node.js'
            }

            if (this.options.user && this.options.pw) headers['Authorization'] = 'Basic ' + new Buffer(this.options.user + ':' + this.options.pw).toString('base64');

            let protocol = gitHubApiUrl.protocol == 'https:' ? https : http;
            protocol.request({
                hostname: gitHubApiUrl.hostname,
                port: gitHubApiUrl.port,
                path: '/repos/' + owner + '/' + project,
                method: 'GET',
                headers: headers
            }, function (res) {
                var body = '';
                res.on('data', function (chunk) {
                    body += chunk;
                });

                res.on('end', function () {
                    if (res.statusCode == 200) {
                        console.log('Remaining requests:', res.headers['x-ratelimit-remaining'] + ' of ' + res.headers['x-ratelimit-limit']);
                        resolve(body)
                    } else {
                        console.error(res.statusCode, res.statusMessage);
                        reject({
                            statusCode: res.statusCode,
                            statusMessage: res.statusMessage
                        });
                    }
                });
            }).on('error', function (err) {
                console.error(err);
                reject(err);
            }).end();
        })
    }
}
module.exports = GitHubCache;