<?php
if (isset($_GET['page'])) {
    $page = $_GET['page'];
} else {
    $page = "home";
}

function renderPage()
{
    if (isset($_GET['page'])) {
        $page = $_GET['page'];
    } else {
        $page = "home";
    }

    if (file_exists("data/pages/" . $page . ".json")) {
        // Great!
    } else {
        $page = '404';
    }

    $json = file_get_contents("data/pages/" . $page . ".json");
    $pageData = json_decode($json, true);
    $projectsData = getProjectFile();

    if ($page == 'project') {

        foreach ($projectsData as $project) {
            if ($project['id'] == $_GET['id']) {
                $projectData = $project;
            }
        }

        $metaImage = $project['thumbnail'];
    }

    if ($page == 'form') {
        $json = file_get_contents('data/form.json');
        $formFile = json_decode($json, true);
        foreach ($formFile as $form) {
            if ($form['id'] == $_GET['id']) {
                $formThing = $form;
            }
        }
    }


    if ($page == 'style') {

        $resume = file_get_contents('data/filler-resume.json');
        $resumeData = json_decode($resume, true);

        $goals = file_get_contents('data/filler-goals.json');
        $goalsData = json_decode($goals, true);

        $json = file_get_contents('data/form.json');
        $formData = json_decode($json, true);

        $projects = file_get_contents('data/filler-projects.json');
        $projectsData = json_decode($projects, true);

        $projectData = $projectsData[0];
    }

    include('templates/pages/standard.php');
}




function currentPage()
{
    if (isset($_GET['page'])) {
        $page = $_GET['page'];
    } else {
        $page = "home";
    }
}

function activePage($name)
{
    if (isset($_GET['page'])) {
        if ($_GET['page'] == $name) {
            echo "active";
        }
    }
}

function filterArrayByType($array, $type)
{
    $filteredArray = [];
    foreach ($array as $item) {
        if ($item["type"] == $type) {
            array_push($filteredArray, $item);
        }
    }
    return $filteredArray;
}


function renderList($array, $type)
{
    $list = filterArrayByType($array, $type);
    foreach ($list as $item) {
        include("templates/modules/resume-card/template.php");
    }
}
