function form() {

    let message = {
        loading: 'Идет отправка',
        success: 'Отправлено',
        failure: 'Ошибка'
    };

    let form = document.querySelectorAll('.main_form'),
        statusMessage = document.createElement('div');
        statusMessage.classList.add('formAlert');
        statusMessage.classList.add('fade');
        
        
    function sendForm(elem) {
       
            elem.addEventListener('submit', (event) => {
           
            event.preventDefault();
            elem.appendChild(statusMessage);

            let formData = new FormData(elem);

            function postData(data) {
                return new Promise(function(resolve, reject) {
                        
                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');
                    request.setRequestHeader('Content-type', 'application/json; charset = utf-8');

           
                    let obj = {};
                    data.forEach((value, key) => {
                    obj[key] = value;
                    });
                    let json = JSON.stringify(obj);
                    

                    request.addEventListener('readystatechange', () => {
                         if (request.readyState < 4) {
                        resolve();
                         } else if (request.readyState === 4 && request.status == 200) {
                        resolve();
                         } else {
                        reject();
                         }
                    });
                
                    request.send(json);
                });
            }  /* end postdata*/
        
            function clearInput() {
                let input = elem.getElementsByTagName('input');
            
                for (let i = 0; i < input.length; i++) {
                input[i].value = '';
                 }
            }

            
            postData(formData)
                .then(()=> statusMessage.innerHTML = message.loading)
                .then(()=> statusMessage.innerHTML = message.success)
                .catch(()=> statusMessage.innerHTML = message.failure)
                .then(clearInput)
                 
        });  
    }


   for (let i = 0; i<form.length;i++){
    sendForm(form[i]);
   }
     
}

export {form};
