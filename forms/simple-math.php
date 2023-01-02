<?php



$numOne = '';
$numTwo = '';
$multiply = null;
$add = null;
$subtract = null;
$divide = null;

$templateOne = "";
$templateTwo = "";
$templateThree = "";
$templateFour = "";

if (isset($_POST['submitted'])) {

    if (isset($_POST['numOne'])) {
        if ($_POST['numOne'] <= 0) {
            $numOne = 1;
        } else {
            $numOne = $_POST['numOne'];
        }
    }

    if (isset($_POST['numTwo'])) {
        if ($_POST['numTwo'] <= 0) {
            $numTwo = 1;
        } else {
            $numTwo = $_POST['numTwo'];
        }
    }

    $multiply = floatval($numOne) * floatval($numTwo);
    $divide = floatval($numOne) / floatval($numTwo);
    $add = floatval($numOne) + floatval($numTwo);
    $subtract = floatval($numOne) - floatval($numTwo);

    $templateOne = $numOne . " + " . $numTwo . " = " . "<strong>" . $add . "</strong>";
    $templateTwo = $numOne . " - " . $numTwo . " = " . "<strong>" . $subtract . "</strong>";
    $templateThree = $numOne . " x " . $numTwo . " = " . "<strong>" . $multiply . "</strong>";
    $templateFour = $numOne . " / " . $numTwo . " = " . "<strong>" . $divide . "</strong>";
} ?>

<form action="" method="post" id='math'>

    <field>

        <label for="">Enter a number.</label>
        <input type="number" inputmode=decimal name='numOne' value='<?= $numOne ?>' required min='1'>

    </field>

    <field>
        <label for="">Enter another number.</label>
        <input type="number" inputmode=decimal name='numTwo' value='<?= $numTwo ?>' required min='1'>

    </field>

    <button class='action-link' type="submit" name='submitted' formtarget="_blank">Calculate</button>


</form>

<div class='feedback'>
    <p><?= $templateOne ?></p>
    <p><?= $templateTwo ?></p>
    <p><?= $templateThree ?></p>
    <p><?= $templateFour ?></p>

</div>