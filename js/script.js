        var sideMenuToggler = document.querySelector(".sidemenu-toggler");
        var sidemenu = document.querySelector(".sidemenu");
        var close = document.querySelector(".close");
        close.addEventListener("click", () => {
            sidemenu.classList.remove('active')
        })
        sideMenuToggler.addEventListener("click", () => {
            sidemenu.classList.add("active");
        })

        var main = document.querySelector(".header");
        console.log(main)
        document.addEventListener('scroll', () => {
            var scrollp = window.scrollY;
            console.log(scrollp);
            if (scrollp >= 120) {
                main.classList.add('sticky');
            } else {
                main.classList.remove('sticky');
            }
        });