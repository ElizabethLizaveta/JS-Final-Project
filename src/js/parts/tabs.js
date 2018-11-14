function tabs() {
    
    let tab = document.querySelectorAll('div.no_click a'),
        tabwrap = document.querySelectorAll('.no_click'),
        info = document.querySelector('.decoration_slider'),
        tabContent = document.querySelectorAll('#dec_content');
    
    function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
    }
    }
    
    hideTabContent(1);
    
    function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
    }
    
    function hideBorder(a) {
        for (let i = a; i < tabwrap.length; i++) {
            tabwrap[i].classList.remove('after_click');
        }
        }
        
    hideBorder(1);
        
    function showBorder(b) {
        tabwrap[b].classList.add('after_click');
    }
        

    info.addEventListener('click', function (event) {
        let target = event.target;
    
        if (target) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                   hideBorder(0);
                   showBorder(i);
                   hideTabContent(0);
                   showTabContent(i);
                   break;
                }
            }
        }
    });    

}

export {tabs};

 