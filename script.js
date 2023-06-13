$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;
let fongusHP = 100;
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
    
}
