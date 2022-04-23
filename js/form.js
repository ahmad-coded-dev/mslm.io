function activeSection(section) {
    section.classList.add('activeState');
    section.querySelector('input').focus();
}

function activeInput(inputField) {
    inputField.parentElement.classList.add('activeState');
}

function leaveInput(inputField) {
    if (inputField.value == '') {
        inputField.parentElement.classList.remove('activeState');
    }
}

function chkInput(inputField) {
    inputField.value = inputField.value.replace(/[^0-9+-]/, '');
}
