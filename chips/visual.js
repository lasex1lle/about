function startVisual() {

    // The number of bars that should be displayed
    const NBR_OF_BARS = 200;

    // Get the audio element tag
    const audio = document.getElementById("audio");

    // Create an audio context
    const ctx = new AudioContext();

    // Create an audio source
    const audioSource = ctx.createMediaElementSource(audio);

    // Create an audio analyzer
    const analayzer = ctx.createAnalyser();

    // Connect the source, to the analyzer, and then back the the context's destination
    audioSource.connect(analayzer);
    audioSource.connect(ctx.destination);

    // Print the analyze frequencies
    const frequencyData = new Uint8Array(analayzer.frequencyBinCount);
    analayzer.getByteFrequencyData(frequencyData);
    console.log("frequencyData", frequencyData);

    // Get the visualizer container

    const visualizerContainer = document.querySelector(".visualizer-container");
    var documentHieght = window.innerHeight - 40;
    var documentWidth = window.innerWidth - 50;

    // Create a set of pre-defined bars
    for( let i = 0; i < NBR_OF_BARS; i++ ) {

        const bar = document.createElement("DIV");
        bar.setAttribute("id", "bar" + i);
        bar.classList.add('star', `type-1`);
        bar.style.left = Math.random() * documentWidth;;
        bar.style.bottom = `${randomNumber(1, 99)}%`;
        bar.style.animationDuration = `${randomNumber(50, 200)}s`;
        bar.style.opacity = 0.8

        document.body.appendChild(bar);

    }

    // This function has the task to adjust the bar heights according to the frequency data
    function renderFrame() {

        // Update our frequency data array with the latest frequency data
        analayzer.getByteFrequencyData(frequencyData);

        for( let i = 0; i < NBR_OF_BARS; i++ ) {

            // Since the frequency data array is 1024 in length, we don't want to fetch
            // the first NBR_OF_BARS of values, but try and grab frequencies over the whole spectrum
            const index = (i + 10) * 2;
            // fd is a frequency value between 0 and 255
            const fd = frequencyData[index];

            // Fetch the bar DIV element
            const bar = document.querySelector("#bar" + i);
            if( !bar ) {
                continue;
            }

            // If fd is undefined, default to 0, then make sure fd is at least 4
            // This will make make a quiet frequency at least 4px high for visual effects
            const barHeight = Math.max(3, fd / 30 || 0);

            const rR = Math.max(255, fd * 55 || 0);
            const rB = Math.max(255, fd * 55 || 0);
            const rG = Math.max(255, fd * 55 || 0);

            bar.style.height = barHeight + "px";
            bar.style.width = barHeight + "px";
        }

        // At the next animation frame, call ourselves
        window.requestAnimationFrame(renderFrame);

    }

    renderFrame();
};

