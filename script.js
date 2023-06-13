$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;
let fungusHp = 100;
let apBar = 100;
let regenInterval = null;

function onReady() {
    $('.arcane-scepter').on('click', acAttack);
    $('.entangle').on('click', entangleAttack);
    $('.dragon-blade').on('click', dragonbladeAttack);
    $('.star-fire').on('click', starfireAttack);
    $('.attack-btn').on('click', disableButtons);
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}

function acAttack() {
    console.log('arcane scepter attack');
    // - **AP Cost:** 12
    // - **HP Damage:** 14
    apBar -= 12;
    fungusHp -=14;
    negativeBar();
    damageapStatus();
    checkStatus();
}

function entangleAttack() {
    console.log('entangle');
    // - **AP Cost:** 23
    // - **HP Damage:** 9
    apBar -= 23;
    fungusHp -=9;
    negativeBar();
    console.log('New AP bar value', apBar);
    console.log('New Fungus HP is: ', fungusHp);
    damageapStatus();
    checkStatus();
}

function dragonbladeAttack() {
    console.log('dragon blade attack');
    // -- **AP Cost:** 38
    // - **HP Damage:** 47
    apBar -= 38;
    fungusHp -=47;
    negativeBar();
    console.log('New AP bar value', apBar);
    console.log('New Fungus HP is: ', fungusHp);
    damageapStatus()
    checkStatus();
}

function starfireAttack() {
    console.log('starfire attack attack');
    // - **AP Cost:** 33
    // - **HP Damage:** 25
    apBar -= 33;
    fungusHp -=25;
    negativeBar();
    console.log('New AP bar value', apBar);
    console.log('New Fungus HP is: ', fungusHp);
    damageapStatus();
    checkStatus();
}

function negativeBar() {
    if(apBar <=0) {
        apBar=0;
    }
    if(fungusHp <= 0) {
        fungusHp = 0;
    }
}

function damageapStatus() {
    $('.hp-text').text(fungusHp);
    $('#hp-meter').val(fungusHp);
    $('.ap-text').text(apBar);
    $('#ap-meter').val(apBar);
}

function checkStatus() {
    console.log(`Checking status of AP Bar: ${apBar} and HP bar: ${fungusHp}`)
    // disableButtons()
    
    if(apBar == 0) {
        disableButtons();
        $('.freaky-fungus').removeClass('walk');
        $('.freaky-fungus').addClass('jump');
        console.log('out of energy, disabling buttons')
    }
    if(regenInterval === null && fungusHp <= 50) {
        regenInterval = setInterval(regen, 1000)
    }
    if(fungusHp <= 0) {
        $('.freaky-fungus').removeClass('walk');
        $('.freaky-fungus').addClass('dead');
        stopRegen();
    }
}

function regen() {
    fungusHp += 1;
    damageapStatus();
}

function stopRegen(){
    clearInterval(regenInterval);
}

function disableButtons() {
    if(apBar === 0) {
        $('.attack-btn').attr("disabled", "true")
    }
}

