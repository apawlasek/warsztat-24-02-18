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

    function makeMole(){
        var molePosX = Math.round(
            Math.random() * (window.innerWidth - window.innerHeight/10));

        var molePosY = Math.round(
            Math.random() * (window.innerHeight - window.innerHeight/10))

        var mole = document.createElement('div')

        mole.classList.add('mole')

        mole.style.left = molePosX + 'px';
        mole.style.top = molePosY +'px';

        document.querySelector('body').appendChild(mole)
    }
makeMole()

})()