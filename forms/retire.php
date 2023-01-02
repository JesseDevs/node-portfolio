<?php
$currentYear = date("Y");
$currentAge = '';
$retireAge = '';
$ageDifference = 0;
$retireYear = 0;

$template = "";

if (isset($_POST['submitted'])) {

    if ((isset($_POST['currentAge'])) && (isset($_POST['retireAge']))) {



        if (($_POST['currentAge'] != '') && ($_POST['retireAge'] != '')) {

            $currentAge = floatval($_POST['currentAge']);
            $retireAge = floatval($_POST['retireAge']);
            $ageDifference = $retireAge - $currentAge;
            $retireYear = $currentYear + $ageDifference;




            $template = "<strong>$ageDifference</strong> years left until you can retire.<br> It's <strong>$currentYear</strong>, so you can retire in <strong>$retireYear</strong>.";

            if ($ageDifference <= 0) {
                $template = "DING! DING! Retire time.";
            }
        }
    }
} ?>


<form method="POST" id='retire'>

    <field>
        <label for="">What is your age?</label>
        <input type="number" inputmode=decimal required name="currentAge" value="<?= $currentAge ?>" min="0">

    </field>

    <field>
        <label for="">What age would you like to retire?</label>
        <input type="number" inputmode=decimal required name="retireAge" value="<?= $retireAge ?>" min="0">

    </field>

    <button class='action-link' type="submit" name='submitted' id="calculate">Calculate</button>

</form>

<div class='feedback'>
    <p> <?= $template ?> </p>
</div>