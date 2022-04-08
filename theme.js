'use strict'

let opMode = localStorage.getItem('opMode');
const opModeToggle = document.querySelector('.theme-button');

const enableOpMode = () => {
    document.body.classList.add('opMode');
    localStorage.setItem('opMode', 'enabled' );
};

const disableOpMode = () => {
    document.body.classList.remove('opMode');
    localStorage.setItem('opMode', null );
};

if (opMode === "enabled") {
    enableOpMode();
}

opModeToggle.addEventListener('click', () => {
    opMode = localStorage.getItem('opMode');
    if (opMode !== "enabled") {
        enableOpMode();
    } else {
        disableOpMode();
    }
});