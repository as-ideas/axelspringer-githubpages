var port = process.env.PORT || 3000;
var express = require('express');
var compression = require('compression');
var app = express();

app.use(compression());
app.use(express.static(__dirname + '/dist'));

const GitHubCache = require('./src/backend/gitHubCache');

app.get('/cached-api/:owner/:project', function (req, res) {
    let cache = new GitHubCache(listener.address().address, listener.address().port);  // use Mock-Api is on same host as Cached-Api
    //let cache = new GitHubCache('api.github.com', 443);  // original GitHub-Api

    cache.getStats(req.params.owner, req.params.project).then((stats) => {
        res.send(stats);
    }).catch((e) => {
        res.status(404).send(e);
    });
});




let stats = {
    'as-ideas': {
        'crowdsource': {
            name: "crowdsource",
            owner: {
                avatar_url: "https://avatars1.githubusercontent.com/u/6329093?v=3",
            },
            html_url: "https://github.com/as-ideas/crowdsource",
            stargazers_count: 5,
            forks_count: 3,
            watchers_count: 6
        }
    }
}

app.get('/repos/:owner/:project', function (req, res) {
    if (stats[req.params.owner] && stats[req.params.owner][req.params.project]) {
        res.send(stats[req.params.owner][req.params.project]);
    } else {
        res.status(404).send('id not found');
    }
});




let listener = app.listen(port, function () {
    console.log('server is now starting on port ', port);
});