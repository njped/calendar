
function onPageLoad() {
    let date = new Date();
    let monthName = date.toLocaleDateString(
        'default', {
            month: 'long'
        }
    )
    let header = document.getElementById('monthName')
    header.textContent = monthName;
}

window.onload = onPageLoad;