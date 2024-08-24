
    var typed = new Typed('#element', {
      strings: ['webdeveloper', 'Frontend Developer'],
      typeSpeed: 100,
      backSpeed:80,
      backDelay:2000,
      loop:true
    });

    

    ScrollReveal().reveal('.home-img', {
        delay: 375,
        duration: 1000,
        origin: 'right',
        distance:'800px',
        loop:true
    });
 
    ScrollReveal().reveal('.home-h1', {
        delay: 375,
        duration: 1000,
        origin: 'left',
        distance:'800px',
    });
 

    ScrollReveal().reveal('.home-h2', {
        delay: 475,
        duration: 1000,
        origin: 'left',
        distance:'800px',
    });
 
    ScrollReveal().reveal('.home-p', {
        delay: 475,
        duration:1000,
        origin: 'left',
        distance:'800px',
    });

    ScrollReveal().reveal('.down-cv', {
        delay: 475,
        duration: 1000,
        origin: 'left',
        distance:'800px',
    });

    ScrollReveal().reveal('.icons', {
        delay: 475,
        duration: 1000,
        origin: 'left',
        distance:'800px',
    });

    ScrollReveal().reveal('.about-h1', {
        delay: 475,
        duration: 2000,
        origin: 'left',
        distance:'800px',
    });

    ScrollReveal().reveal('.about-h2', {
        delay: 475,
        duration: 2000,
        origin: 'left',
        distance:'800px',
    });

    ScrollReveal().reveal('.about-p', {
        delay: 475,
        duration: 2000,
        origin: 'left',
        distance:'800px',
    });
    

    ScrollReveal().reveal('.about-image', {
        delay: 475,
        duration: 2000,
        origin: 'right',
        distance:'800px',
    });    

    ScrollReveal().reveal('.service-h1', {
        delay: 475,
        duration: 2000,
        origin: 'right',
        distance:'800px',
    });    


    ScrollReveal().reveal('.service-h2', {
        delay: 475,
        duration: 2000,
        origin: 'left',
        distance:'800px',
    });    

    ScrollReveal().reveal('.service-h3', {
        delay: 475,
        duration: 2000,
        origin: 'right',
        distance:'800px',
    });  
    ScrollReveal().reveal('.service-no1', {
        delay: 375,
        duration: 1000,
        origin: 'left',
        distance:'800px',
        loop:true
    });  
    ScrollReveal().reveal('.service-no2', {
        delay: 375,
        duration: 1000,
        origin: 'bottom',
        distance:'800px',
        loop:true
    });  
    ScrollReveal().reveal('.service-no3', {
        delay: 375,
        duration: 1000,
        origin: 'right',
        distance:'800px',
        loop:true
    });  

    
    ScrollReveal().reveal('.edu-h1', {
        delay: 375,
        duration: 1000,
        origin: 'right',
        distance:'800px',
        loop:true
    });
    ScrollReveal().reveal('.edu-h2', {
        delay: 375,
        duration: 1000,
        origin: 'left',
        distance:'800px',
        loop:true
    });
    ScrollReveal().reveal('.edu-clg-year', {
        delay: 375,
        duration: 1000,
        origin: 'right',
        distance:'800px',
        loop:true
    });
    ScrollReveal().reveal('.edu-clg-name', {
        delay: 375,
        duration: 1000,
        origin: 'left',
        distance:'800px',
        loop:true
    });
    ScrollReveal().reveal('.edu-clg-det', {
        delay: 375,
        duration: 1000,
        origin: 'right',
        distance:'800px',
        loop:true
    });

    ScrollReveal().reveal('.edu-html-year', {
        delay: 375,
        duration: 1000,
        origin: 'right',
        distance:'800px',
        loop:true
    });
    ScrollReveal().reveal('.edu-html-name', {
        delay: 375,
        duration: 1000,
        origin: 'left',
        distance:'800px',
        loop:true
    });
    ScrollReveal().reveal('.edu-html-det', {
        delay: 375,
        duration: 1000,
        origin: 'right',
        distance:'800px',
        loop:true
    });


    ScrollReveal().reveal('.edu-fs-year', {
        delay: 375,
        duration: 1000,
        origin: 'right',
        distance:'800px',
        loop:true
    });
    ScrollReveal().reveal('.edu-fs-name', {
        delay: 375,
        duration: 1000,
        origin: 'left',
        distance:'800px',
        loop:true
    });
    ScrollReveal().reveal('.edu-fs-det', {
        delay: 375,
        duration: 1000,
        origin: 'right',
        distance:'800px',
        loop:true
    });

    window.addEventListener('load', function() {
        const progressBars = document.querySelectorAll('.progress');
        progressBars.forEach(progressBar => {
            const width = progressBar.style.width;
            progressBar.style.width = 0;
            setTimeout(() => {
                progressBar.style.width = width;
            }, 500);
        });
      });

    ScrollReveal().reveal('.contact-h1', {
        delay: 375,
        duration: 1000,
        origin: 'top',
        distance:'800px',
        loop:true
    });
    ScrollReveal().reveal('.contact-add', {
        delay: 375,
        duration: 1000,
        origin: 'left',
        distance:'800px',
        loop:true
    });

    ScrollReveal().reveal('.contact-phn', {
        delay: 375,
        duration: 1000,
        origin: 'bottom',
        distance:'800px',
        loop:true
    });

    ScrollReveal().reveal('.contact-mail', {
        delay: 375,
        duration: 1000,
        origin: 'right',
        distance:'800px',
        loop:true
    });







