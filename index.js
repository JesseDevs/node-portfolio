import fs from 'node:fs';
import express from 'express';
import bodyParser from 'body-parser';
import homeData from './data/pages/home.json' assert {type: 'json'}
import projectsData from './data/projects.json' assert {type: 'json'}
import missingData from './data/pages/404.json' assert {type: 'json'}

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.static('css'));
app.use(express.static('scripts'));
app.use(bodyParser.urlencoded({ extended: false }))

app.listen(process.env.PORT || 3000, function () {
    console.log("Server starting... localhost:3000")
});

app.get('/', (req, res) => {
    res.render('pages/standard.ejs', { pageData: homeData });
});


app.get('/about', (req, res) => {
    let page = req.path.substring(1);

    fs.readFile('./data/pages/home.json', (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        const pageData = JSON.parse(data);
        res.render('pages/standard.ejs', { pageData: pageData });
    });

    const json = fs.readFileSync(`./data/pages/${page}.json`, function (err, data) {
        console.log(err);
    });
    const pageData = JSON.parse(json);

    res.render('pages/standard', { pageData })
});

app.get('/projects', (req, res) => {
    let page = req.path.substring(1);

    const json = fs.readFileSync(`./data/pages/${page}.json`, function (err, data) {
        console.log(err);
    });
    const pageData = JSON.parse(json);

    res.render('pages/standard', { pageData })
});

app.get('/projects/:id', (req, res) => {
    let page = req.path.substring(1);

    const json = fs.readFileSync(`./data/pages/${page}.json`, function (err, data) {
        console.log(err);
    });
    const pageData = JSON.parse(json);

    const project = projectsData.find(function (pro) {
        return pro.id == req.params.id
    })

    res.render('pages/standard', { project: project, pageData: pageData })
});


app.use(function (req, res) {
    res.status(404).render('pages/standard', { missingData });
})

