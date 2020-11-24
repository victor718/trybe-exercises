const sum = () => {
    const getH1 = document.getElementById('countClicks');
    const getBtn = document.getElementById('btn-1');
    let clickCount = 0;
    getBtn.addEventListener('click', () => {
        getH1.innerText = clickCount += 1;
    })
}

sum();