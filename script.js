function toggleMode(){
    document.body.classList.toggle("light");
}

const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", ()=>{
    sections.forEach(section=>{
        const top = section.getBoundingClientRect().top;
        const trigger = window.innerHeight - 100;
        if(top < trigger){
            section.classList.add("show");
        }
    });
});
