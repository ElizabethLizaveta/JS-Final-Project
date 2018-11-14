function timer() {

    let deadline = '2019-06-04';

    function getTimeRemaining(endtime) {
        let today = new Date();
        let y = today.getFullYear();
        let m = today.getMonth();
        let d = today.getDate();
        let h = today.getHours();
        let min = today.getMinutes();
        let s = today.getSeconds();
        let todayUTC = new Date(Date.UTC(y, m, d, h, min, s));

        let t = Date.parse(endtime) - Date.parse(todayUTC),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60))% 24),
            days = Math.floor((t / (1000 * 60 * 60 * 24)));

        if (t < 0) {
                days = 0,
                seconds = 0,
                minutes = 0,
                hours = 0
        }
        if (days < 10) days = "0" + days;
        if (hours < 10) hours = "0" + hours;
        if (minutes < 10) minutes = "0" + minutes;
        if (seconds < 10) seconds = "0" + seconds;

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.querySelector('.eTimer'),
            days = timer.querySelector('.days'),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);


        function updateClock() {
            let t = getTimeRemaining(endtime);
            days.textContent = t.days;
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }
    setClock('timer', deadline);
}

export {timer};