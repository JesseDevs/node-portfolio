<?php


$length = '';
$width = '';
$area = null;
$paint = null;
$template = '';

if (isset($_POST['submitted'])) {

    if (isset($_POST['length'])) {
        if ($_POST['length'] >= 0) {
            $length = $_POST['length'];
        }
    }

    if (isset($_POST['width'])) {
        if ($_POST['width'] >= 0) {
            $width = $_POST['width'];
        }
    }

    $area = floatval($length) * floatval($width);
    $paint = ceil($area / 350);

    $template = "<p> The ceiling of the room is: " . $area . " feet</p> <p> You'll need: <strong>" . $paint . "</strong> gallons to cover the entire ceiling</p>";
}
?>


<form action="" method="post" id='paint'>
    <field>

        <label for="">What is the length of the ceiling?</label>
        <input type="number" name='length' value='<?= $length ?>' required min='0'>

    </field>

    <field>

        <label for="">What is the width of the ceiling?</label>
        <input type="number" name='width' value='<?= $width ?>' required min='0'>

        <span>350 feet requires 1 gallon of paint.</span>

    </field>

    <button class='action-link' type="submit" name='submitted'>Calculate</button>


</form>

<div class='feedback'>
    <?= $template ?>

</div>