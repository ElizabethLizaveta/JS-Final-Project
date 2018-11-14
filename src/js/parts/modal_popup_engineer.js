function modal_popup_engineer() {

    let headerbtn = document.querySelector('button.header_btn'),
    popup_engineer = document.querySelector('.popup_engineer'),
    close = document.querySelector('button.popup_engineer_close'); 

    headerbtn.addEventListener('click', function() {
        popup_engineer.style.display = 'block';   
    })

    close.addEventListener('click', function ()  {
        popup_engineer.style.display = 'none';   
    })
    
    document.addEventListener('click', function (e) {
        let  popup_engineer = document.querySelector('.popup_engineer');
        if (e.target == popup_engineer){
            popup_engineer.style.display = 'none';
        }   
    });

   



}

export {modal_popup_engineer};