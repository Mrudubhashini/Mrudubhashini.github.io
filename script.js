// ===============================
// DARK MODE TOGGLE
// ===============================
function toggleMode(){
    document.body.classList.toggle("light");
}

// ===============================
// SECTION REVEAL ON SCROLL
// ===============================
const sections = document.querySelectorAll(".section");

function revealSections() {
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        const trigger = window.innerHeight - 100;

        if(top < trigger){
            section.classList.add("show");
        }
    });
}

// ===============================
// GOLD SCROLL PROGRESS LINE
// ===============================
const scrollLine = document.querySelector(".scroll-line");

function updateScrollLine() {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    scrollLine.style.width = scrollPercent + "%";
}

// ===============================
// EVENT LISTENERS
// ===============================
window.addEventListener("scroll", () => {
    revealSections();
    updateScrollLine();
});

window.addEventListener("load", () => {
    revealSections();
    updateScrollLine();
});
