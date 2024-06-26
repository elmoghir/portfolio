/*  toggle style switcher */

const StyleSwitcherToggle = document.querySelector(".style-switcher-toggler");
StyleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})

/* hide style - switcher o scroll */
window.addEventListener('scroll', () =>
{
    if( document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})
/* theme colors */
const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color)
{
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled","true");
        }
    })
}
/* theme light and dark */
const DayNight = document.querySelector(".day-night");
DayNight.addEventListener("click",() => {
    DayNight.querySelector("i").classList.toggle("fa-sun");
    DayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})

window.addEventListener("load", () => {
    if(document.body.classList.contains("dark"))
    {
        DayNight.querySelector("i").classList.add("fa-sun");
    }
    else
    {
        DayNight.querySelector("i").classList.add("fa-moon");

    }
})