let init = () =>{
    let container = document.getElementsByClassName('jumbo-slider__container')[0],
    slides = document.getElementsByClassName('jumbo-slider__slide'),
    circles = document.getElementsByClassName('jumbo-slider__circle'),
    links = document.getElementsByClassName('jumbo-slider__link'),
    current = 1,
    time = 6000;

    // Add animation class to slide
    slides[0].classList.add('jumbo-slider__slide--active');
    links[current-1].classList.add('jumbo-slider__link--active');
    circles[current-1].classList.add('jumbo-slider__circle--filled');

    // Update elipsis and links
    let updateNav = (current) =>{
        // console.log(`update current: ${current}`)
        for(let index = 0; index < slides.length; index++){
            links[index].classList.remove('jumbo-slider__link--active');
            circles[index].classList.remove('jumbo-slider__circle--filled');
        }
        links[current-1].classList.add('jumbo-slider__link--active');
        circles[current-1].classList.add('jumbo-slider__circle--filled');
    }
    let startSliding = () => {
        setInterval(()=>{
            // console.log(`current: ${current}`)

            // remove active class from first slide, add to second slide, 2nd slide become first slide.
            slides[1].classList.add('jumbo-slider__slide--active');
            slides[0].classList.remove('jumbo-slider__slide--active');
            // clone first slide and move to last index.
            container.appendChild(slides[0].cloneNode([true]));
            // remove first slide after clone.
            container.removeChild(slides[0]);

            console.log(`slides: ${slides.length}`);
            if(current < slides.length){
                current++
                updateNav(current)
            } else {
                current = 1
                updateNav(current)
            }
           
        }, time);
    }
    startSliding();
}   
// init();