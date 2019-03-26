function bombTimer(str, time) {
    let i = time;
    let timerId = setInterval(function() {
        if (i == 0) clearInterval(timerId);
        i--;
        if (time >= 1) {
            console.log(time);
            time--;
        } else {
            console.log(str);
        }
    }, 1000);
}

bombTimer(`Boooom`, 10)
