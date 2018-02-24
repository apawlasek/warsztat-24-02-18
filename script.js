// var  body = document.querySelector('body');

// cons
// //przyjm. dwa arg: 1- rodzaj, 2-wywołanie f

// body.addEventListener(
//     'click',
//     function() {
//         console.log('klik')
//     }

// )


(function () {
    var points
    var gameIntervalId
    var mole
    var time

    function addPoint() {
        points++
        displayPoints(points);
        flashBackground();
    }

    function reduceTime() {
        time--
        displayTime(time)
        if (time === 0) {
            endGame()
        }
    }


    function displayPoints(pointsParam) {
        var pointsContainer = document.querySelector('.points');
        pointsContainer.innerText = 'SCORE: ' + pointsParam
    }

    function displayTime(timeParam) {
        var timeContainer = document.querySelector('.time');
        timeContainer.innerText = 'TIME: ' + timeParam
    }

    function makeMole() {
        var molePosX = Math.round(
            Math.random() * (window.innerWidth - window.innerHeight / 5));

        var molePosY = Math.round(
            Math.random() * (window.innerHeight - window.innerHeight / 5))

        var mole = document.createElement('div')

        mole.classList.add('mole')

        mole.style.left = molePosX + 'px';
        mole.style.top = molePosY + 'px';
        mole.addEventListener(
            'click',
            function () {
                mole.remove();
                addPoint();
            }
        )
        document.querySelector('body').appendChild(mole)
        return mole
    }

    function flashBackground() {
        var body = document.querySelector('body');
        body.style.backgroundColor = 'Chartreuse'
        setTimeout (
            function(){
                body.style.backgroundColor = 'green'
            },100
        )
    }
    function endGame() {
        clearInterval(gameIntervalId)
        mole.remove();
        alert('Game has ended! Your score is: ' + points + '!')
    }
    function init() {
        points = 0
        time = 10
        mole = makeMole()
        displayTime(time)
        displayPoints(points)
        gameIntervalId = setInterval(
            function () {
                mole.remove();
                mole = makeMole();
                reduceTime();
            },
            1500
        )


    }
    init()


})()