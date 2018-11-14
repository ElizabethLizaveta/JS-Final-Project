function tabs_glazing() {
    
    let tab = document.querySelectorAll('.glazing_block a'),
        tabwrap = document.querySelectorAll('.glazing_block'),
        info = document.querySelector('.glazing_slider'),
        tabContent = document.querySelectorAll('div#tab_content');
    
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
    
    function linkdesactive(a) {
        for (let i = a; i < tab.length; i++) {
            tab[i].classList.remove('active');
        }
        }
        
    linkdesactive(1);
        
    function linkactive(b) {
        tab[b].classList.add('active');
    } 

    info.addEventListener('click', function (event) {
        let target = event.target;
    
        if (target) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                   linkdesactive(0);
                   linkactive(i);
                   hideTabContent(0);
                   showTabContent(i);
                   
                   break;
                }
            }
        }
    });    

}

export {tabs_glazing};

 