<?php

$username = 'JohnDoe';
$inputUsername = null;
$password = '1020World';
$inputPassword = null;
$template = null;


if (isset($_POST['submitted'])) {

    if (isset($_POST['username'])) {
        if (strlen($_POST['username']) > 0) {
            $inputUsername = $_POST['username'];
        }
    }

    if (isset($_POST['password'])) {
        if (strlen($_POST['password']) > 0) {
            $inputPassword = $_POST['password'];
        }
    }

    if ($inputUsername == $username && $inputPassword = $password) {
        $template =  "You're logged in! Welcome!";
    } else {
        $template = "Username or Password is incorrect. Try again.";
    }
} ?>

<form action="" method="post" id='password'>

    <field>

        <label for="">Enter username:</label>
        <input type="text" name='username' autocomplete="off" value='<?= $inputUsername ?>' required min='0'>

        <span>*Hint: <em>JohnDoe </em></span>

    </field>

    <field>

        <label for="">Enter password:</label>
        <input type="password" name='password' autocomplete="off" value='<?= $inputUsername ?>' required min='0'>

        <span>*Hint: <em>1020World</em></span>

    </field>

    <button class='action-link' type="submit" name='submitted'>Calculate</button>


</form>

<div class='feedback'>
    <p><?= $template ?></p>
</div>