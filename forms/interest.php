<?php

$principal = '';
$interest = '';
$time = '';
$amount = null;
$template = '';

if (isset($_POST['submitted'])) {

    if (isset($_POST['principal'])) {
        if ($_POST['principal'] >= 0) {
            $principal = $_POST['principal'];
        }
    }

    if (isset($_POST['interest'])) {
        if ($_POST['interest'] >= 0) {
            $interest = $_POST['interest'];
        }
    }

    if (isset($_POST['time'])) {
        if ($_POST['time'] >= 0) {
            $time = $_POST['time'];
        }
    };

    $percent = floatval($interest) / 100;
    $rate = round($percent, 3, PHP_ROUND_HALF_UP);
    $amount = floatval($principal) * (1 + (floatval($rate) * floatval($time)));

    $template = 'After ' . $time . ' years at ' . $interest . '% interest, the investment will be worth <strong>' . $amount . '</strong>.';
}
?>

<form action="" method="post" id='interest'>


    <field>
        <label for="">What's the principal investment?</label>
        <input type="number" name='principal' required min='0' placeholder="$1000">
    </field>


    <field>

        <label for="">What is the yearly interest?</label>
        <input type="number" name='interest' required min='0' placeholder="10%" step=".01">
    </field>


    <field>

        <label for="">How long do you want to invest for?</label>
        <input type="number" name='time' required min='0' placeholder="5">
    </field>


    <button class='action-link' type="submit" name='submitted'>Calculate</button>


</form>

<div class='feedback'>

    <p><?= $template ?> </p>

</div>