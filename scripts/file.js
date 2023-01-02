// window size add class --- - -
// window.addEventListener('resize', function () {
//     if (window.innerWidth > 2000) {
//     }
// });

var toggle = document.querySelector('#switch');
const $formBox = document.querySelector(".form-box")
const $form = document.querySelector('form');
const $feedback = document.querySelector(".feedback");
const $calculate = document.querySelector('#calculate');
var header = document.querySelector("header");

const numberFormatter = Intl.NumberFormat('en-US');

// converting first letter to uppercase
function capitalizeFirstLetter(str) {
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

    return capitalized;
}

window.addEventListener('click', function (event) {


    if (event.target.matches('[rel="hamburger"]')) {
        event.preventDefault();

        header.classList.toggle("display-menu");
    }

    if (event.target.matches("#switch")) {
        validateform();
        $formBox.scrollIntoView({
            behavior: 'smooth'
        });
    }
    if (header.classList.contains("display-menu")) {
        if (!event.target.matches("header *")) {

            header.classList.remove("display-menu");
        }
    }

});

validateform = function () {
    if (toggle.checked) {
        $form.classList.add("none");

        if ($helloForm) {
            promptHello();
        }

        if ($countForm) {
            promptString();
        }

        if ($quoteForm) {
            promptQuote();
        }

        if ($madlibForm) {
            promptMadlib();
        }

        if ($retireForm) {
            promptRetire();
        }

        if ($mathForm) {
            promptMath();
        }

        if ($drivingForm) {
            promptDrivingAge();
        }

        if ($interestForm) {
            promptInterest();
        }

        if ($passwordForm) {
            promptPassword();
        }

        if ($paintForm) {
            promptPaint();
        }

        if ($areaForm) {
            calculateArea();
        }

        if ($checkoutForm) {
            promptCheck();
        }


    } else {
        $form.classList.remove("none");
    }

}

const $helloForm = document.querySelector('#hello');
const $areaForm = document.querySelector('#area');
const $countForm = document.querySelector('#count-characters');
const $quoteForm = document.querySelector('#quote');
const $madlibForm = document.querySelector('#madlib');
const $retireForm = document.querySelector('#retire');
const $mathForm = document.querySelector('#math');
const $drivingForm = document.querySelector('#driving');
const $interestForm = document.querySelector('#interest');
const $passwordForm = document.querySelector('#password');
const $paintForm = document.querySelector('#paint');
const $checkoutForm = document.querySelector('#checkout');

function promptCheck() {
    const $appleAmount = $checkoutForm.querySelector("#appleAmount");
    const $applePrice = $checkoutForm.querySelector("#applePrice");

    const $orangeAmount = $checkoutForm.querySelector("#orangeAmount");
    const $orangePrice = $checkoutForm.querySelector("#orangePrice");

    $checkoutForm.addEventListener('input', function (event) {
        var apples = parseInt($appleAmount.value, 10);
        var aPrice = parseInt($applePrice.value, 10);

        var oranges = parseInt($orangeAmount.value, 10);
        var oPrice = parseInt($orangePrice.value, 10);

        var aTotal = numberFormatter.format(apples * aPrice);
        var oTotal = numberFormatter.format(oranges * oPrice);

        var subTotal = numberFormatter.format(parseInt(aTotal, 10) + parseInt(oTotal, 10));
        var tax = .055;

        var taxAmount = numberFormatter.format(subTotal * tax);
        var total = numberFormatter.format(subTotal + taxAmount);

        if (isNaN(parseInt(aTotal), 10)) {
            aTotal = "X";
        }

        if (isNaN(parseInt(oTotal), 10)) {
            oTotal = "X";
            console.log('er')
        }

        if (isNaN(parseInt(subTotal), 10)) {
            subTotal = "X";
        }

        if (isNaN(parseInt(taxAmount), 10)) {
            taxAmount = "X";
        }

        if (isNaN(parseInt(total), 10)) {
            total = "X";
        }

        template = ` <p>The subtotal of Apples is: ${aTotal}</p>
        <p>The subtotal of Oranges is: ${oTotal}</p>
        <p>The subtotal of all items is: ${subTotal}</p>
        <p>The tax on this purchase is:  ${taxAmount}</p>
        <strong>
        <p>The total is: ${total}</p>
        </strong>`;

        $feedback.innerHTML = `${template}`;

    })
}

function promptPaint() {
    const $lengthInput = $paintForm.querySelector("field:nth-of-type(1) input");
    const $widthInput = $paintForm.querySelector("field:nth-of-type(2) input");

    $paintForm.addEventListener('input', function (event) {
        var length = parseInt($lengthInput.value, 10);
        var width = parseInt($widthInput.value, 10);

        var area = length * width;
        var paint = Math.ceil(area / 350);

        var displayArea = numberFormatter.format(area);

        if (isNaN(paint)) {
            paint = "X";
        }

        if (isNaN(parseInt(displayArea), 10)) {
            displayArea = "X";
        }

        console.log(displayArea)

        template = `<p>The ceiling of the room is: <strong>${displayArea}</strong><br>
        You'll need: <strong>${paint}</strong> gallons to cover the entire ceiling </p>`;

        $feedback.innerHTML = `${template}`;

    })
}

function promptPassword() {
    const $usernameInput = $passwordForm.querySelector("field:nth-of-type(1) input")
    const $passwordInput = $passwordForm.querySelector("field:nth-of-type(2) input")

    $passwordForm.addEventListener('input', function (event) {
        const name = "JohnDoe";
        const pass = "1020World";
        let username = $usernameInput.value;
        let password = $passwordInput.value;
        let template = ``;

        if (username) {
            template = `Typing...<br>
            Username: ${username} <br>
            Password: ${password} `;
        }

        if (username == name && password == pass) {
            template = `You're logged in! Welcome!`;
        }

        $feedback.innerHTML = `<p>${template}</p>`;

    })
}

function calculateArea() {

    const $lengthInput = $paintForm.querySelector("field:nth-of-type(1) input");
    const $widthInput = $paintForm.querySelector("field:nth-of-type(2) input");

    $areaForm.addEventListener('input', function (event) {
        var length = parseInt($lengthInput.value, 10);
        var width = parseInt($widthInput.value, 10);


        $feedback.querySelector("p:first-of-type").textContent = `The length is: ${length}`;
        $feedback.querySelector("p:nth-of-type(2)").textContent = `The length is: ${width}`;

        var area = parseInt(length) * parseInt(width);
        var displayArea = numberFormatter.format(area);

        if (isNaN(parseInt(displayArea), 10)) {
            displayArea = "X";
        }

        let meters = area * .09290304;

        meters = numberFormatter.format(meters.toFixed(2));

        let message = `You entered a dimensions of ${length} feet by ${width} feet. The area is ${displayArea} square feet. That is ${meters} square meters`;

        if (length == '' & width == '') {
            message = "Can't calculate..."
        } else if (length == '') {
            message = "Missing a length.."
        } else if (width == '') {
            message = "Missing a width.."
        }

        $feedback.querySelector("p:last-of-type strong").textContent = `${message}`;


    });
}

function promptInterest() {

    const $principal = $interestForm.querySelector("field:nth-of-type(1) input");
    const $rate = $interestForm.querySelector("field:nth-of-type(2) input");
    const $years = $interestForm.querySelector("field:nth-of-type(3) input");


    $interestForm.addEventListener('input', function (event) {

        let principal = $principal.value;
        let interest = $rate.value;
        let rate = interest / 100;

        let years = $years.value;

        if (years.length == 0) {
            years = 5;
        }

        var amount = parseFloat(principal).toFixed(2).replace(/[.,]00$/, "") * (1 + (parseFloat(rate).toFixed(2).replace(/[.,]00$/, "") * parseFloat(years).toFixed(2).replace(/[.,]00$/, "")));

        if (isNaN(amount)) {
            amount = 0;
        }

        var template = `<p>After ${years} years at ${interest}% interest, the investment will be worth <strong>${amount}</strong>.</p> `;

        $feedback.innerHTML = `${template}`;
    })
}

function promptHello() {
    const $nameInput = document.querySelector('#name');
    $helloForm.addEventListener('input', function (event) {

        var name = $nameInput.value;
        let message = '';

        if (name) {
            message = `<p>Hello, <strong>${name}</strong>. Nice to meet you!</p>`;
        } else if (name == '') {
            message = `<p>Oh wait.. we're missing something..</p>`;
        };

        $feedback.innerHTML = `${message}`;

    });
}

function promptDrivingAge() {
    const $ageInput = $drivingForm.querySelector("field input")
    $drivingForm.addEventListener('input', function (event) {

        var age = $ageInput.value;
        let message = age >= 16 ? `<p>You <strong>are</strong> old enough to legally drive.</p>` : `<p>You <strong>can not</strong> legally drive.</p>`;

        $feedback.innerHTML = `${message}`;

    });
}

function promptString() {
    const $phraseInput = document.querySelector('#phrase');
    $countForm.addEventListener('input', function (event) {

        let string = $phraseInput.value;
        let counter = 0
        if (string == '') {
            message = 'nothing'
        }

        for (i = 0; i < string.length; i++) {
            character = string[i]; //

            if (character != ' ') {
                counter++;
            }
        }

        var template = `You entered: `;
        var message = 'That phrase has: ';

        $feedback.innerHTML = `
        <p> ${template} <strong> ${string} </strong> </p>
        <p> ${message} <strong> ${counter} </strong> characters. </p>

        `
    });
};

function promptQuote() {
    const $quoteInput = $quoteForm.querySelector("field:nth-of-type(2) input")
    const $authorInput = $quoteForm.querySelector("field:nth-of-type(1) input")

    $quoteForm.addEventListener('input', function (event) {
        let quote = $quoteInput.value;
        let author = $authorInput.value;
        author = capitalizeFirstLetter(author);

        $feedback.innerHTML = `
        <p><strong>${author}</strong> said <strong>“${quote}”</strong> </p>
        `

    })
}

function promptMadlib() {

    const $noun = $madlibForm.querySelector("field:nth-of-type(1) input");
    const $verb = $madlibForm.querySelector("field:nth-of-type(2) input");
    const $adjective = $madlibForm.querySelector("field:nth-of-type(3) input");
    const $adverb = $madlibForm.querySelector("field:nth-of-type(4) input");

    $madlibForm.addEventListener('input', function (event) {

        let noun = $noun.value;
        let verb = $verb.value;
        let adjective = $adjective.value;
        let adverb = $adverb.value;

        if (noun.length == 0) {
            noun = "X"
        }
        if (verb.length == 0) {
            verb = "X"
        }
        if (adjective.length == 0) {
            adjective = "X"
        }
        if (adverb.length == 0) {
            adverb = "X"
        }

        $feedback.innerHTML = `<p><strong>${noun}</strong> is <strong>${verb}</strong> <strong>${adverb}</strong>  while maintaining <strong>${adjective}</strong> poise! </p>`;
    })

}

function promptRetire() {

    let date = new Date();
    var currentYear = date.getFullYear();

    const $age = $retireForm.querySelector("field:nth-of-type(1) input");
    const $retire = $retireForm.querySelector("field:nth-of-type(2) input");

    $retireForm.addEventListener('input', function (event) {
        var age = $age.value;
        var retire = $retire.value;

        var ageDifference = parseFloat(retire) - parseFloat(age);
        var retireYear = currentYear + ageDifference;

        let template = `<p>
        <strong>${ageDifference}</strong> years left until you can retire.<br> It's <strong>${currentYear}</strong>, so you can retire in <strong>${retireYear}</strong>.
        </p>
        `;

        if (age == '') {
            template = `<p>No age. No retirement.</p>`
        } else if (retire == '') {
            template = `<p>We need to plan...</p>`
        }

        $feedback.innerHTML = template;
    })
}

function promptMath() {

    const $numOne = $mathForm.querySelector("field:nth-of-type(1) input");
    const $numTwo = $mathForm.querySelector("field:nth-of-type(2) input");


    $mathForm.addEventListener('input', function (event) {

        let numOne = $numOne.value;
        let numTwo = $numTwo.value;

        numOne = parseFloat(numOne).toFixed(2).replace(/[.,]00$/, "");
        numTwo = parseFloat(numTwo).toFixed(2).replace(/[.,]00$/, "");

        if (isNaN(numOne)) {
            numOne = 0;
        }

        if (isNaN(numTwo)) {
            numTwo = 0;
        }
        var multiply = parseFloat(numOne) * parseFloat(numTwo);
        var divide = parseFloat(numOne) / parseFloat(numTwo);
        var add = parseFloat(numOne) + parseFloat(numTwo);
        var sub = parseFloat(numOne) - parseFloat(numTwo);

        multiply = parseFloat(multiply).toFixed(2).replace(/[.,]00$/, "");
        add = parseFloat(add).toFixed(2).replace(/[.,]00$/, "");
        sub = parseFloat(sub).toFixed(2).replace(/[.,]00$/, "");
        divide = parseFloat(divide).toFixed(2).replace(/[.,]00$/, "");

        var template = `
        <p>${numOne} + ${numTwo} = <strong>${add}</strong></p>
        <p>${numOne} - ${numTwo} = <strong>${sub}</strong></p>
        <p>${numOne} x ${numTwo} = <strong>${multiply}</strong></p>
        <p>${numOne} / ${numTwo} = <strong>${divide}</strong></p>
        `;

        $feedback.innerHTML = template;
    })
}


// GSAP

const showAnim = gsap.from('.main-tool-bar', {
    yPercent: -100,
    paused: true,
    duration: 0.2
}).progress(1);

ScrollTrigger.create({
    start: "top top",
    end: 99999,
    onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse()
    }
});

function animateFrom(elem, direction) {
    direction = direction || 1;
    var x = 0,
    y = direction * 100;
    if (elem.classList.contains("gs_reveal_fromLeft")) {
        x = -100;
        y = 0;
    } else if (elem.classList.contains("gs_reveal_fromRight")) {
        x = 100;
        y = 0;
    }
    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";
    gsap.fromTo(elem, { x: x, y: y, autoAlpha: 0 }, {
        duration: 2,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: "expo",
        overwrite: "auto"
    });
}

function hide(elem) {
    gsap.set(elem, { autoAlpha: 0 });
}

document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".gs_reveal").forEach(function (elem) {
        hide(elem); // assure that the element is hidden when scrolled into view

        ScrollTrigger.create({
            trigger: elem,
            onEnter: function () { animateFrom(elem) },
            onEnterBack: function () { animateFrom(elem, -1) },
            onLeave: function () { hide(elem) } // assure that the element is hidden when scrolled into view
        });
    });
});
