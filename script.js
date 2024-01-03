document.addEventListener('DOMContentLoaded', function () {
    // Scrolling functionality
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Calculate the target position, offset by a certain amount (adjust as needed)
                const targetPosition = targetElement.offsetTop - 80;

                // Scroll to the target position
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Slide-in animation on scroll
    const slideInParagraph = document.querySelector('.about-left-col');
    function checkSlide() {
        const slideInAt = window.scrollY + window.innerHeight - slideInParagraph.clientHeight / 4;
        const isHalfShown = slideInAt > slideInParagraph.offsetTop;
        const isNotScrolledPast = window.scrollY < slideInParagraph.offsetTop + slideInParagraph.clientHeight;

        if (isHalfShown && isNotScrolledPast) {
            slideInParagraph.classList.add('slide-in');
        } else {
            slideInParagraph.classList.remove('slide-in');
        }
    }
    window.addEventListener('scroll', checkSlide);

    // // Heartbeat animation on scroll
    // const heartbeatParagraph = document.querySelector('.signup-right-col');
    // function fadeInOnScroll() {
    //     const elementTop = heartbeatParagraph.getBoundingClientRect().top;
    //     const elementBottom = heartbeatParagraph.getBoundingClientRect().bottom;

    //     const isVisible = (elementTop < window.innerHeight) && (elementBottom >= 0);

    //     if (isVisible) {
    //         heartbeatParagraph.classList.add('heartbeat-animation');
    //     }
    // }
    // function handleScroll() {
    //     fadeInOnScroll();
    // }
    // window.addEventListener('scroll', handleScroll);
    // handleScroll(); // Trigger on page load

    // Hamburger menu functionality
    document.getElementById('hamburger-icon').addEventListener('click', function () {
        var menu = document.querySelector('.menu');
        menu.classList.toggle('show');
        document.querySelectorAll('.bar').forEach(function (bar) {
            bar.classList.toggle('active');
        });
        // Prevent the click event from propagating to the document body
        event.stopPropagation();
    });
    
    // Add a click event listener to the document body
    document.body.addEventListener('click', function () {
        var menu = document.querySelector('.menu');
        
        // Check if the menu is open before closing it
        if (menu.classList.contains('show')) {
            menu.classList.remove('show');
            document.querySelectorAll('.bar').forEach(function (bar) {
                bar.classList.remove('active');
            });
        }
    });

     // Toggle Read More functionality
     const readMoreButton = document.getElementById('readMoreBtn');
     readMoreButton.addEventListener('click', toggleReadMore);
 
     function toggleReadMore() {
         const additionalContent = document.getElementById('additionalContent');
         const buttonText = readMoreButton.textContent.trim();

         additionalContent.classList.toggle('show');

          // Check the current state and update the button text
    if (additionalContent.classList.contains('show')) {
        readMoreButton.textContent = 'Read Less';
    } else {
        readMoreButton.textContent = 'Read More';
    }
     }

     // Count from zero functionality
     const squareFootageCounter = document.getElementById('squareFootage');
     const membersCounter = document.getElementById('members');
     const daysAWeekCounter = document.getElementById('daysAWeek')
 
     function startCountingAnimation(target, endValue) {
         let currentValue = 0;
         const animationInterval = setInterval(function () {
             currentValue += Math.ceil(endValue / 100); // Increment by a fraction of the end value
             target.textContent = currentValue;
 
             if (currentValue >= endValue) {
                 target.textContent = endValue;
                 clearInterval(animationInterval);
             }
         }, 15); // Adjust the interval duration as needed
     }
 
     function checkIfInViewport() {
         const gymInfoSection = document.getElementById('gym-info');
         const rect = gymInfoSection.getBoundingClientRect();
         const isInViewport = rect.top <= window.innerHeight && rect.bottom >= 0;
 
         if (isInViewport) {
             startCountingAnimation(squareFootageCounter, 1100);
             startCountingAnimation(membersCounter, 50);
             startCountingAnimation(daysAWeekCounter, 6);
             window.removeEventListener('scroll', checkIfInViewport);
         }
     }
 
     window.addEventListener('scroll', checkIfInViewport);
 
     // Trigger the function initially
     checkIfInViewport();


      // Slide-in animation on scroll for mobile in services section
    const servicesBoxes = document.querySelectorAll('.services-box');
    function checkSlideMobile() {
        servicesBoxes.forEach(box => {
            const slideInAt = window.scrollY + window.innerHeight - box.clientHeight / 4;
            const isHalfShown = slideInAt > box.offsetTop;
            const isNotScrolledPast = window.scrollY < box.offsetTop + box.clientHeight;

            if (isHalfShown && isNotScrolledPast) {
                box.classList.add('slide-in');
            } else {
                box.classList.remove('slide-in');
            }
        });
    }
    window.addEventListener('scroll', checkSlideMobile);

});