var record = document.getElementById('record'); // record div 요소 선택
var card1 = document.getElementById('card1'); // card1 div 요소 선택
var card2 = document.getElementById('card2'); // card2 div 요소 선택
var platterLeft = document.getElementById('platter').offsetLeft; // platter div 요소의 위치

// record div 클릭 이벤트 핸들러 설정
card1.addEventListener('click', function() {
    // record를 rectangle에서 platter 위치로 이동하는 애니메이션 적용
    moveElement(record, platterLeft, 250); // 250ms 동안 이동
    document.querySelector('.record').classList.toggle('active');
    document.querySelector('.overlay').classList.toggle('active');
    document.querySelector('.inner2023').classList.toggle('active');
    setTimeout(function() {
        document.querySelector('.record').classList.toggle('webkit');
    }, 250);
});

card2.addEventListener('click', function() {
    // record를 rectangle에서 platter 위치로 이동하는 애니메이션 적용
    moveElement(record, platterLeft, 250); // 250ms 동안 이동
    document.querySelector('.record').classList.toggle('active');
    document.querySelector('.overlay').classList.toggle('active');
    document.querySelector('.inner2024').classList.toggle('active');
    setTimeout(function() {
        document.querySelector('.record').classList.toggle('webkit');
    }, 250);
});

// div를 이동시키는 함수
function moveElement(element, to, duration) {
    var start = element.offsetLeft,
        change = to - start,
        currentTime = 0,
        increment = 20;

    var animateScroll = function() {
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration);
        element.style.left = val + 'px';
        if (currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };
    animateScroll();
}

// Easing 함수 (선택사항): 움직임을 자연스럽게 만들기 위해 사용됩니다.
Math.easeInOutQuad = function (t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
};

document.querySelector('.container').addEventListener('scroll', function() {
    const container = this;
    const cards = document.querySelectorAll('.card');
    let closestCard = null;
    let closestDistance = Infinity;

    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const distance = Math.abs(rect.left - containerRect.left);
        if (distance < closestDistance) {
            closestDistance = distance;
            closestCard = card;
        }
    });

    if (closestCard) {
        container.scrollTo({
            left: closestCard.offsetLeft - containerRect.left + container.scrollLeft,
            behavior: 'smooth'
        });
    }
});
