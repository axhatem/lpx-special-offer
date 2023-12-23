const showScrollClass = "scroll-show";

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting){
            console.log(`Intersect ${entry}`);
            entry.target.classList.add(showScrollClass);
        }else{
            console.log(`Not Intersect ${entry}`);
            entry.target.classList.remove(showScrollClass);

        }
    });
});

const scrollHiddenElements = document.querySelectorAll('.scroll-hidden');
scrollHiddenElements.forEach((element) => {
    observer.observe(element);
});