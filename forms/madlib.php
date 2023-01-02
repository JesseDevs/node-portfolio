<?php

$noun = '';
$verb = '';
$adjective = '';
$adverb = '';

$message = "";

if (isset($_POST['submitted'])) {
    $noun = $_POST['noun'];
    $verb = $_POST['verb'];
    $adjective = $_POST['adjective'];
    $adverb = $_POST['adverb'];

    $message = "<strong>" . $noun . "</strong> <strong>" . $verb . "</strong> <strong>" . $adverb . "</strong>  while maintaining <strong>" . $adjective . "</strong> poise!";
}

?>

<form method="POST" id="madlib">

    <field>
        <label for="">Enter a noun.</label>
        <input type="text" required name="noun" value="<?= $noun ?>">
    </field>

    <field>
        <label for="">Enter a verb.</label>
        <input type="text" required name="verb" value="<?= $verb ?>">

    </field>


    <field>
        <label for="">Enter an adverb.</label>
        <input type="text" required name="adverb" value="<?= $adverb ?>">

    </field>

    <field>
        <label for="">Enter an adjective.</label>
        <input type="text" required name="adjective" value="<?= $adjective ?>">

    </field>



    <button class='action-link' type="submit" name='submitted' id="calculate">Calculate</button>


</form>

<div class='feedback'>

    <p><?= $message ?></p>
</div>