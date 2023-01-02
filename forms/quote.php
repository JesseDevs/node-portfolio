<?php

$quote = '';
$author = '';
$message = '';


if (isset($_POST['submitted'])) {

    $quote = htmlspecialchars($_POST['quote']);
    $author = htmlspecialchars($_POST['author']);

    $message = $author . ' said “ ' . $quote . ' ”';


    if ($quote == '' & $author == '') {
        $message = "Someone must have said nothing once. Maybe.";
    } else if ($quote == '') {
        $message = $author . ' must have said something, right?';
    } else if ($author == '') {
        $message = 'Someone must have said "' . $quote . '"! Maybe.';
    }
}
?>



<form method="post" id="quote">

    <field>
        <label for="">Who is the author?</label>
        <input type="text" name='author' value='<?= $author ?>' id="author" required>
    </field>

    <field>
        <label for="">What is your quote?</label>
        <input type="text" name='quote' value='<?= $quote ?>' id="quote" required>
    </field>


    <button class='action-link' type="submit" name='submitted' id="calculate">Calculate</button>


</form>

<div class='feedback'>

    <p> <?= $message ?></p>
</div>