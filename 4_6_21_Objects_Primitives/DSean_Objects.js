
let timeoutID;

function showAlert() {
    timeoutID = setTimeout(alert, 3000, 'setTimeout test!');
    }

function clearAlert() {
    clearTimeout(timeoutID);
}