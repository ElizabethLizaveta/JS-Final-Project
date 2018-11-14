function calc() {
    
    let calcbtn = document.querySelectorAll('.popup_calc_btn'),
    popup_calc_button = document.querySelector('.popup_calc_button'),
    popup_calc_profile_button = document.querySelector('.popup_calc_profile_button'),
    popup_calc = document.querySelector('.popup_calc'),
    close = document.querySelector('button.popup_calc_close'),
    popup_calc_profile = document.querySelector('.popup_calc_profile'),
    popup_calc_end = document.querySelector('.popup_calc_end'),
    popup_calc_profile_close = document.querySelector('.popup_calc_profile_close'),
    popup_calc_end_close = document.querySelector('.popup_calc_end_close'),
    popup_calc_end_btn = document.getElementById('popup_calc_end_button');
    

    let formObject = {};
    
    function clearInput() {
        let input = document.getElementsByTagName('input');
        for (let i = 0; i < input.length; i++) {
        input[i].value = '';
        input[i].checked = false;
        }
    }
    
    document.addEventListener('click', function (e) {
        for(let i = 0; i<calcbtn.length; i++){
            if (e.target == calcbtn[i]){
                popup_calc.style.display = 'block';
            }   
        }
    });


   popup_calc.addEventListener('click', function (e) {
        if (e.target == popup_calc){
            popup_calc.style.display = 'none';
            clearInput();
        } 
    });

    popup_calc_profile.addEventListener('click', function (e) {
        if (e.target == popup_calc_profile){
            popup_calc_profile.style.display = 'none';
            clearInput();
        } 
    });

    popup_calc_end.addEventListener('click', function (e) {
        if (e.target == popup_calc_end){
            popup_calc_end.style.display = 'none';
            clearInput();
        } 
    });

    close.addEventListener('click', function ()  {
        popup_calc.style.display = 'none';  
        clearInput();
    });

    let icons = document.querySelectorAll('div.balcon_icons a img'),
        preview = document.querySelector('.balcon_icons'),
        bigimg = document.querySelectorAll('div.big_img img');

    function hideBigImg(a) {
        for (let i = a; i < bigimg.length; i++) {
            bigimg[i].style.display = 'none';
        }
    }
            
        hideBigImg(1);
            
    function showBigImg(b) {
        if (bigimg[b].style.display === 'none') {
            bigimg[b].style.display = 'inline-block';
        }
    }

    function smallPreview (a) {
        for (let i = a; i < icons.length; i++) {
            icons[i].style.transform = 'none';
        }
    }
            
    smallPreview(1);
            
    function bigPreview(b) {
        if ( icons[b].style.transform === 'none') {
            icons[b].style.transform = 'scale(1.1)';
            icons[b].style.transition = 'all .2s ease-in-out';
        }
    }
   
    preview.addEventListener('click', function(event){
        let target = event.target;
        event.preventDefault();
        if (target) {
            for (let i = 0; i < icons.length; i++) {
                if (target == icons[i]) {
                    smallPreview (0);
                    bigPreview(i);
                    hideBigImg(0);
                    showBigImg(i);
                    break;
                }   
            }
        }
    });  
    

    popup_calc_button.addEventListener('click', function() { 
        popup_calc.style.display = 'none';   
        popup_calc_profile.style.display = 'block';  
        calc("calc_form1"); 
       
    });

    popup_calc_profile_button.addEventListener('click', function(e) {

        if(!coldcheckbox.checked && !warmcheckbox.checked){
            e.preventDefault();
        } else {
        popup_calc_profile.style.display = 'none';   
        popup_calc_end.style.display = 'block';  
        calc("calc_form2");
        }
    });

    popup_calc_end_btn.addEventListener('click', function() {
        calc("calc_form3");
    });

    popup_calc_profile_close.addEventListener('click', function ()  {
        popup_calc_profile.style.display = 'none'; 
        clearInput(); 
    });

    popup_calc_end_close.addEventListener('click', function ()  {
        popup_calc_end.style.display = 'none';  
        clearInput();
    });

    
   let width = document.getElementById('width'),
       height = document.getElementById('height'); 
   
    width.addEventListener('keyup', function() {
        popup_calc_button.disabled = width.value && height.value && width.value != 0 && height.value != 0  ? false : "disabled";
    })

    height.addEventListener('keyup', function() {
        popup_calc_button.disabled = width.value && height.value && width.value != 0 && height.value != 0 ? false : "disabled";
    })
       
    function check_calc_input(input) {
        let value = input.value;
        value = value.replace(/[\D\s\-]+/, "");
        input.value = value; 
    };

    popup_calc.addEventListener('keyup', function(event){
        let target = event.target;
        if (target&&target==width||target&&target==height) {
            check_calc_input(target);
            }
        
    });  

    let coldcheckbox = document.querySelector('input#cold'),
        warmcheckbox = document.querySelector('input#warm');
    
        

    coldcheckbox.addEventListener('click', function() {
        warmcheckbox.checked = false;       
    }); 
      
    warmcheckbox.addEventListener('click', function() {
       coldcheckbox.checked = false;
    }); 


    function calc(form_name) {
        let form = document.forms[form_name];
        let elements = Array.from(form.elements);
    
        elements.filter(element => filter_inputs(element)).forEach(input => {
            if(input.type == "checkbox") {
                formObject[input.name] = get_value_from_checkbox(input);
            } else {
                formObject[input.name] = input.value;
            }
        });
    
        console.log(formObject);
    }
    
    function get_value_from_checkbox(checkbox) {
        let checkboxes = document.getElementsByName(checkbox.name);
        console.log('checkboxes:' + checkboxes)
        for(let i=0; checkboxes.length; ++i) {
          if(checkboxes[i].checked){
               return checkboxes[i].value;
          }
        }
    }
    
    function filter_inputs(element) {
        return element.nodeName !== "BUTTON" && element.name !== "";
    }

        
    let message = {
        loading: 'Идет отправка',
        success: 'Отправлено',
        failure: 'Ошибка'
    };

    let statusMessage = document.createElement('div');
    statusMessage.classList.add('formAlert');
    statusMessage.classList.add('fade');
    
    
     
       
    popup_calc_end_btn.addEventListener('click', () => {
       
        let popup_form = document.querySelector('form[name="calc_form3"]');
        popup_form.appendChild(statusMessage);
        
        

        function postData(obj) {
            return new Promise(function(resolve, reject) {
                    
                let request = new XMLHttpRequest();
                request.open('POST', 'server.php');
                request.setRequestHeader('Content-type', 'application/json; charset = utf-8');

       
                let json = JSON.stringify(obj);

                console.log(json);
                

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
        }   
    
        postData(formObject)
            .then(()=> statusMessage.innerHTML = message.loading)
            .then(()=> statusMessage.innerHTML = message.success)
            .catch(()=> statusMessage.innerHTML = message.failure)
            .then(clearInput)
             
    });  
 
} 

export {calc};