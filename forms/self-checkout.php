<?php


$priceOne = '';
$quantityOne = '';
$totalOne = null;

$priceTwo = '';
$quantityTwo = '';
$totalTwo = null;

$priceThree = '';
$quantityThree = '';
$totalThree = null;

$subTotal = '';
$tax = '';
$total = null;

$template = '';


if (isset($_POST['submitted'])) {

    if (isset($_POST['priceOne'])) {
        if ($_POST['priceOne'] >= 0) {
            $priceOne = $_POST['priceOne'];
        }
    }

    if (isset($_POST['priceTwo'])) {
        if ($_POST['priceTwo'] >= 0) {
            $priceTwo = $_POST['priceTwo'];
        }
    }

    if (isset($_POST['quantityOne'])) {
        if ($_POST['quantityOne'] >= 0) {
            $quantityOne = $_POST['quantityOne'];
        }
    }

    if (isset($_POST['quantityTwo'])) {
        if ($_POST['quantityTwo'] >= 0) {
            $quantityTwo = $_POST['quantityTwo'];
        }
    }

    $totalOne = floatval($priceOne) * floatval($quantityOne);
    $totalTwo = floatval($priceTwo) * floatval($quantityTwo);
    $totalThree = floatval($priceThree) * floatval($quantityThree);

    $subTotal = $totalOne + $totalTwo + $totalThree;
    $tax = $subTotal * .055;
    $total = $subTotal + $tax;

    $template = "<p>The subtotal of Apples is: " . $totalOne . "</p>
    <p>The subtotal of Oranges is: " .  $totalTwo . "</p>
    <p>The subtotal of all items is: " . $subTotal . "</p>
    <p>The tax on this purchase is: " . $tax . "</p>
    <strong>
        <p>The total is: " . $total . "</p>
    </strong>";
} ?>

<form action="" method="post" id="checkout">

    <field>
        <div class="container">
            <label for="">How many <em>Apples</em> are you taking?</label>
            <input type="number" name='quantityOne' value='<?= $quantityOne ?>' id='appleAmount' required min='0'>
        </div>

        <div class="container">
            <label for="">Whats the price of the <em>Apples</em>?</label>
            <input type="number" name='priceOne' value='<?= $priceOne ?>' required id='applePrice' min='0'>
        </div>
    </field>

    <field>
        <div class="container">
            <label for="">How many <em>Oranges</em> are you taking?</label>
            <input type="number" name='quantityTwo' value='<?= $quantityTwo ?>' id='orangeAmount' required min='0'>
        </div>

        <div class="container">
            <label for="">Whats the price of the <em>Oranges</em>?</label>
            <input type="number" id='orangePrice' name='priceTwo' value='<?= $priceTwo ?>' required min='0'>
        </div>

        <span> Tax is 5.5% in this equation</span>
    </field>



    <button class='action-link' type="submit" name='submitted'>Calculate</button>


</form>

<div class='feedback'>
    <?= $template ?>

</div>