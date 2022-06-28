
function snow(time) {

    // 1. Определим шаблон снежинки
    var flake = document.createElement('div');
    
    // Символ снежинки ❄❉❅❆✻✼❇❈❊✥✺
    flake.innerHTML = '❇';
    flake.style.cssText = 'position:absolute;color:#fff;';

    // Получаем высоту страницы, которая эквивалентна положению оси Y при падении снежинок
    var documentHieght = window.innerHeight - 40;
    // Получаем ширину страницы, используем это число для вычисления, значение слева, когда снежинка начинается
    var documentWidth = window.innerWidth - 50;

    // Определяем количество миллисекунд для создания снежинки
    var millisec = 50;
    // 2, установить первый таймер, периодический таймер и каждый раз генерировать снежинку (миллисекунды);
    var interval = setInterval(function() { // После загрузки страницы таймер начинает работать
        // Произвольно генерируем значение left в начале падения снежинки, что эквивалентно положению оси X в начале
        var startLeft = Math.random() * documentWidth;

        // Произвольно генерируем значение left в конце падающих снежинок, что эквивалентно положению оси X в конце
        var endLeft = Math.random() * documentWidth;

        // Произвольно генерируем размер снежинки
        var flakeSize = 5 + 20 * Math.random();

        // Произвольно генерируем время падения снежинок
        var durationTime = 4000;

        // Произвольно генерируем прозрачность в начале падения снежинки
        var startOpacity = 0.7 + 0.3 * Math.random();

        // Произвольно генерируем прозрачность в конце падающей снежинки
        var endOpacity = 0;

        // Клонируем шаблон снежинки
        var cloneFlake = flake.cloneNode(true);

        // Изменяем стиль впервые, определяем стиль клонированной снежинки
        cloneFlake.style.cssText += `
                left: ${startLeft}px;
                opacity: ${startOpacity};
                font-size:${flakeSize}px;
                top:-25px;
                    transition:${durationTime}ms;
            `;

        // Встраивается в страницу
        document.body.appendChild(cloneFlake);

        // Устанавливаем второй таймер, одноразовый таймер,
        // Когда первый таймер генерирует снежинки и отображает их на странице, измените стиль снежинок, чтобы они двигались;
        setTimeout(function() {
            // Изменяем стиль во второй раз
            cloneFlake.style.cssText += `
                        left: ${endLeft}px;
                        top:${documentHieght}px;
                        opacity:${endOpacity};
                    `;

            // 4. Установить третий таймер и удалить снежинку, когда она упадет.
            setTimeout(function() {
                cloneFlake.remove();
            }, 6000);
        }, 0);        
    }, 50);
    
    audio.onended = function() {
        clearInterval(interval)
    };
    
}
