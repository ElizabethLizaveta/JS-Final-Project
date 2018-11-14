function timeout() {

    let popup = document.querySelector('.popup');  

    setTimeout (function () {
        popup.style.display = 'block';
    }, 60000);
}

export {timeout};