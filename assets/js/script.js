$(function () {

    $(document).on('click', '.question', function () {
        const question = $(this);
        const answer = question.closest('.Accordion__StyledAccordion-eco7vp-0').find('.answer');

        if (answer.hasClass('cgMPhl')) {
            answer.removeClass('cgMPhl').addClass('cgUOAn');
            question.find('.jsVEyg').removeClass('jsVEyg').addClass('idedHD');
        } else {
            answer.removeClass('cgUOAn').addClass('cgMPhl');
            question.find('.idedHD').removeClass('idedHD').addClass('jsVEyg');
        }
    })

    const blockInfo = {
        '9989': {
            Highlights: `<ul><li>Get direct access to Paris' most beloved landmark, the Eiffel Tower. </li><li>Grab the chance to visit Eiffel Tower's Summit, a rare experience that requires pre-booking. </li><li>After your 1.5-hr guided tour, explore the iconic Parisian landmark on your own for as long as you'd like (within the operating hours).</li><li>Take the lift to the highest point of the Eiffel tower for a panoramic view of Paris.</li><li>Upgrade your experience with a Seine River Cruise and enjoy seeing Paris from the waters (valid within 6 months of purchase).</li></ul>`
        },
    }

})

for (const tab of document.querySelectorAll('.tabs .TabWrapper__StyledTab-sc-1gkn6ck-1')) {
    tab.onclick = () => {
        let iTab = 0
        let iTabContent = 0
        let iTabContentLoop = 0
        for (const innerTab of document.querySelectorAll('.tabs .TabWrapper__StyledTab-sc-1gkn6ck-1')) {
            innerTab.classList.remove('gKtPqO')
            innerTab.classList.add('kSJJcT')
            if (innerTab == tab) {
                iTabContent = iTab
            }
            iTab++
        }
        for (const tabContent of document.querySelectorAll('.tab-content-wrap .Tab__StyledTabPanel-dp4sjy-0')) {
            if (iTabContentLoop == iTabContent) {
                tabContent.querySelector('.Tab__StyledTabContent-dp4sjy-1').classList.remove('fnvzTX')
                tabContent.querySelector('.Tab__StyledTabContent-dp4sjy-1').classList.add('ededfs')
            } else {
                tabContent.querySelector('.Tab__StyledTabContent-dp4sjy-1').classList.remove('ededfs')
                tabContent.querySelector('.Tab__StyledTabContent-dp4sjy-1').classList.add('fnvzTX')
            }
            iTabContentLoop++
        }
        tab.classList.remove('kSJJcT')
        tab.classList.add('gKtPqO')
    }
}


for (const item of document.querySelectorAll('.fJrwmi')) {
    for (const tab of item.querySelectorAll('.swiper-slide')) {
        tab.onclick = () => {
            let iTab = 0
            let iTabContent = 0
            let iTabContentLoop = 0
            for (const innerTab of item.querySelectorAll('.swiper-slide')) {
                innerTab.classList.remove('swiper-slide-active')
                innerTab.querySelector('div').classList.remove('lfkvZn')
                innerTab.querySelector('div').classList.add('dpjvcE')
                if (innerTab == tab) {
                    iTabContent = iTab
                }
                iTab++
            }
            for (const tabContent of item.querySelectorAll('.Product__TabPanel-sc-1dr1p6h-19')) {
                if (iTabContentLoop == iTabContent) {
                    tabContent.classList.remove('dgITSA')
                    tabContent.classList.add('ciINtn')
                } else {
                    tabContent.classList.remove('ciINtn')
                    tabContent.classList.add('dgITSA')
                }
                iTabContentLoop++
            }
            tab.classList.add('swiper-slide-active')
            tab.querySelector('div').classList.remove('dpjvcE')
            tab.querySelector('div').classList.add('lfkvZn')
        }
    }
}


// Timer
const seconds_objects = [$("#seconds"), $("#banner_seconds")],
    minutes_objects = [$("#minutes"), $("#banner_minutes")];
class Timer {
    constructor(t = 3600) {
        this.timeleft = t, console.log(this)
    }
    dec_second() {
        return this.timeleft -= 1, this.minutes = parseInt(this.timeleft / 60), this.seconds = this.timeleft - 60 * this.minutes, localStorage.setItem("timeleft", this.timeleft), !0
    }
    start() {
        let t = setInterval((() => {
            this.dec_second();
            for (let t in seconds_objects) this.seconds < 10 ? seconds_objects[t].text("0" + this.seconds) : seconds_objects[t].text(this.seconds);
            for (let t in minutes_objects) this.minutes < 10 ? minutes_objects[t].text("0" + this.minutes) : minutes_objects[t].text(this.minutes)
        }), 1e3);
        return setTimeout((() => {
            clearInterval(t)
        }), 1e3 * this.timeleft), !0
    }
}
$(document).ready((function () {
    var t;
    null === localStorage.getItem("timeleft") ? (t = 3600, localStorage.setItem("timeleft", t)) : t = parseInt(localStorage.getItem("timeleft")), new Timer(t).start()
}));

// Scroll
var scrollToTopBtn = $('.bhUtIO');
var header = $('.iIHGHT');
$(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
        scrollToTopBtn.addClass('show');
    } else {
        scrollToTopBtn.removeClass('show');
    }
    if ($(window).scrollTop() > 0) {
        header.addClass('box-shadow');
    } else {
        header.removeClass('box-shadow');
    }
});
scrollToTopBtn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});