$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;
let fungusHp = 100;
let apBar = 100;

function onReady() {
    $('.arcane-scepter').on('click', acAttack)
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

    if(apBar > 12) {
        apBar -= 12;
        fungusHp -=14;
        console.log('New AP bar value', apBar);
        console.log('New Fungus HP is: ', fungusHp);
        $('.hp-text').text(fungusHp);
        $('#hp-meter').val(fungusHp);
        $('.ap-text').text(apBar);
        $('#ap-meter').val(apBar);
    } else {
        
    }
    checkStatus();
}

function acAttack() {
    console.log('entangle');
    // - **AP Cost:** 23
    // - **HP Damage:** 9

    if(apBar > 12) {
        apBar -= 12;
        fungusHp -=14;
        console.log('New AP bar value', apBar);
        console.log('New Fungus HP is: ', fungusHp);
        $('.hp-text').text(fungusHp);
        $('#hp-meter').val(fungusHp);
        $('.ap-text').text(apBar);
        $('#ap-meter').val(apBar);
    } else {
        
    }
    checkStatus();
}

function checkStatus() {
    if(apBar <= 0) {
        $('.freaky-fungus').removeClass('.walk');
        $('.freaky-fungus').addClass('jump');
    }
    if(fungusHp <= 0) {
        $('.freaky-fungus').removeClass('.walk');
        $('.freaky-fungus').addClass('dead');
    }

}