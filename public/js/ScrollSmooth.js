let sections = document.querySelectorAll('section');
let links = document.querySelectorAll('nav a');
console.log(links)
console.log(sections)

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            links.forEach(linksa =>{
                linksa.classList.remove('active');
                document.querySelector('nav a [href*=' + id + ']').classList.add('active');
            });
        }
    })
}