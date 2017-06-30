var port = process.env.PORT || 3000;
var apiUrl = process.env.API_URL;

const url = require('url');
var express = require('express');
var compression = require('compression');
var app = express();

app.use(compression());
app.use(express.static(__dirname + '/dist'));

const GitHubCache = require('./src/backend/gitHubCache');

let cache = null;

app.get('/cached-api/:owner/:project', function (req, res) {
    cache.getStats(req.params.owner, req.params.project).then((stats) => {
        res.send(stats);
    }).catch((err) => {
        res.status(err.statusCode).send(err.statusMessage);
    });
});




// #######  MOCK API  ##########

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
        },
        'bla-bla-bla': {
            name: "bla-bla-bla",
            owner: {
                avatar_url: "https://avatars1.githubusercontent.com/u/6329093?v=3",
            },
            html_url: "https://github.com/as-ideas/crowdsource",
            stargazers_count: 9,
            forks_count: 2,
            watchers_count: 3
        }
    },
    'bild-de': {
        'videoplayer': {
            name: "videoplayer",
            owner: {
                avatar_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Logo_BILD.svg/2000px-Logo_BILD.svg.png",
            },
            html_url: "https://github.com/as-ideas/crowdsource",
            stargazers_count: 12,
            forks_count: 23,
            watchers_count: 16
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

// ###########################



app.listen(port, function () {
    console.log('server is now starting on port ', port);

    let gitHubApiUrl = apiUrl || 'http://' + this.address().address + ':' + this.address().port; // Use mock API on dev

    // initialize GitHubCache
    cache = new GitHubCache({
        url: url.parse(gitHubApiUrl),
        apiToken: process.env.API_TOKEN
    });
});