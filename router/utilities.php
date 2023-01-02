<?php

function showErrors()
{
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
}
showErrors();

function printQueryString()
{
    return $_SERVER['QUERY_STRING'];
}

function getProjectFile(){
    $json = file_get_contents('data/projects.json');
    return json_decode($json, true);

}
