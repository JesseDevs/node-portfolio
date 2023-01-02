<?php


$phrase = null;
$message = null;
$template = null;
$characterCount = 0;


function countString($string)
{
    $counter = 0;

    for ($i = 0; $i < strlen($string); $i++) {

        $character = $string[$i]; // 

        if ($character != ' ') {
            $counter++;
        }
    }

    return $counter;
}

if (isset($_POST['submitted'])) {

    $phrase = $_POST['phrase'];
    $characterCount = countString($phrase);

    if ($phrase == '') {
        $message = "That phrase has... nothing..";
    }

    $template = "You entered: ";
    $message = 'That phrase has: ' . $characterCount . ' characters.';
}

?>



<form action="" method="post" id="count-characters">

    <field>

        <label for="">Type a word? Or phrase?</label>
        <input type="text" name='phrase' id="phrase">
    </field>

    <button class='action-link' type=" submit" name='submitted'>Calculate</button>


</form>
<div class='feedback'>

    <p><?= $template ?><strong> <?= $phrase ?></strong> </p>
    <p><strong> <?= $message ?></strong> </p>
</div>