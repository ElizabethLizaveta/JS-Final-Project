function formvalid() {

    let tel = document.querySelectorAll('form input[name="user_phone"]');
 
    function validateTel(tel) {
        tel.addEventListener('keyup', function () {
            tel.value = tel.value.replace(/\D*$/,"");
        });
    }

    for (let i=0; i<tel.length; i++) {
         validateTel(tel[i])
    }
}
    
export {
    formvalid
};