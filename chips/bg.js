function createStars(type, quantity) {
    var documentHieght = window.innerHeight - 40;
    var documentWidth = window.innerWidth - 50;    

    for (let i = 0; i<quantity; i++) {
        var star = document.createElement('div');

        star.innerHTML = '';
        
        var randomSize = randomNumber(1, 4)

        var documentHieght = window.innerHeight - 40;
        var documentWidth = window.innerWidth - 50;

        star.classList.add('star', `type-${type}`);

        star.style.color = '#eee'
        star.style.left = Math.random() * documentWidth;;
        star.style.bottom = `${randomNumber(1, 99)}%`;
        star.style.position = 'absolute'
        star.style.animationDuration = `${randomNumber(50, 200)}s`;
        star.style.opacity = 0.9;

        document.body.appendChild(star);
    }
}

function deleteStars() {
    star.style.opacity = 0;
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * max) + min;
}

// createStars(1, 100);
// createStars(2, 85);
// createStars(3, 70);
// createStars(4, 4);
 

