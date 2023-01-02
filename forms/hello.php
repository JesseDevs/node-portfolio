<?php


$name = null;
$message = null;
$template = '';



if (isset($_POST['submitted'])) {
    $name = $_POST['name'];
    $message = "Hello " . htmlspecialchars($name) . "! Nice to meet you!";

    $template = 'You typed: ' . $name;
}

?>

<form method="post" id="hello">

    <field>
        <label for="">What is your name?</label>
        <input type="text" name='name' value='<?= $name ?>' id="name" required>
    </field>

    <button class='action-link' type="submit" name='submitted' id="calculate">Calculate</button>


</form>

<div class='feedback'>

    <p><strong> <?= $message ?></strong> </p>
</div>