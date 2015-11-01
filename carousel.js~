
    function getCurrentSlide() {
        var activeSlides = document.getElementsByClassName("show");
        return activeSlides[0];
    }
    function hasPreviousSlides() {
        var currentSlide = getCurrentSlide();
        var previousElement = currentSlide.previousElementSibling;
        var returnVal = (previousElement && previousElement.classList.contains("slide"));
        return returnVal;
    }
    function hasNextSlides() {
        var currentSlide = getCurrentSlide();
        var nextElement = currentSlide.nextElementSibling;
        var returnVal = (nextElement && nextElement.classList.contains("slide"));
        return returnVal;
    }
    function setArrows() {
        var previousArrow = document.getElementsByClassName("left-arrow")[0];
        var nextArrow = document.getElementsByClassName("right-arrow")[0];

        if (hasNextSlides()) {
            nextArrow.classList.remove("inactive");
            nextArrow.classList.add("active");
        }
        else {
            nextArrow.classList.add("inactive");
            nextArrow.classList.remove("active");
        }
        if (hasPreviousSlides()) {
            previousArrow.classList.remove("inactive");
            previousArrow.classList.add("active");
        }
        else {
            previousArrow.classList.add("inactive");
            previousArrow.classList.remove("active");
        }
    }
    function previousSlide() {
        var currentSlide = getCurrentSlide();
        var previousElement = currentSlide.previousElementSibling;

        if (hasPreviousSlides()) {
            currentSlide.classList.remove("show");
            currentSlide.classList.add("hide");
            previousElement.classList.remove("hide");
            previousElement.classList.add("show");
        }
        setArrows();
    }
    function nextSlide() {
        var currentSlide = getCurrentSlide();
        var nextElement = currentSlide.nextElementSibling;
        if (hasNextSlides()) {
            currentSlide.classList.remove("show");
            currentSlide.classList.add("hide");
            nextElement.classList.remove("hide");
            nextElement.classList.add("show");
//            nextElement.classList.add("ease-in-out");
        }
        setArrows();
    }

