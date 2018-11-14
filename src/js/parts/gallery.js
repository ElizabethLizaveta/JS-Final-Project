function gallery() {

    let img_href = document.querySelectorAll('.works a');


    for (let i = 0; i < img_href.length; i++) {

        img_href[i].addEventListener('click', function (e) {

            e.preventDefault();

            let href = img_href[i].getAttribute('href'),
                href_min = img_href[i].getElementsByTagName('img')[1].getAttribute('src'),
                iOverlay, body, iImg;

            if (document.querySelectorAll('.i_overlay').length == 0) {
                iOverlay = document.createElement('div');
                iOverlay.className = 'i_overlay';
                iOverlay.classList.add('visible');

                body = document.body;
                body.appendChild(iOverlay);

                iImg = document.createElement('img');
                iImg.className = 'i_img';
                iImg.classList.add('visible');
                body.appendChild(iImg);
            } else {
                iOverlay = document.querySelectorAll('.i_overlay')[0];
                iImg = document.querySelectorAll('.i_img')[0];
                iOverlay.classList.add('visible');
                iImg.classList.add('visible');
            }


            iImg.setAttribute('src', href);
            iImg.style.backgroundImage = 'url(' + href_min + ')';


            iOverlay.onclick = function () {
                iOverlay.classList.remove('visible');
                iImg.classList.remove('visible');
            }
        });
    }
}

export {gallery};