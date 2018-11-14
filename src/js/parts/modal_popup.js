function modal_popup() {

    let popup = document.querySelector('.popup'),
        close = document.querySelector('button.popup_close');

    document.body.addEventListener('click', function (event) {
        if (event.target && event.target.classList.contains('phone_link')) {
            event.preventDefault();
            popup.style.display = 'block';
        }
    });

    close.addEventListener('click', function () {
        popup.style.display = 'none';
    })

    document.addEventListener('click', function (e) {
        let popup = document.querySelector('.popup');
        if (e.target == popup) {
            popup.style.display = 'none';
        }
    });
}

export {
    modal_popup
};