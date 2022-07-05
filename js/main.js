function shuffle(a) {
    var jar, x, i
    for (i = a.length - 1; i > 0; i--) {
        jar = Math.floor(Math.random() * (i + 1))
        x = a[i]
        a[i] = a[jar]
        a[jar] = x
    }
    return a
}

var curHintID = -1

function nextHint() {
    var el = document.getElementById('hint')									
    el.classList.add('fade')
    setTimeout(function() {
        curHintID ++
        if (curHintID >= hints.length) curHintID = 0						
        el.innerHTML = hints[curHintID]
        el.classList.remove('fade')						
    }, 500)
}
var hints = shuffle([
    'Hello World, my lover <3',
    'Man, I havent come up with anything, but soon there will be something.',
    'I love you, pussy!',
    "It's russian web-page, yea, okey?",
    'There is a music player, two buttons under the time <3 .',
    'Lina? Hey, baby)'
])
    nextHint();
    setInterval(nextHint, 5000)

    