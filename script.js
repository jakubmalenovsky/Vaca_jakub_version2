
let langs = document.getElementById("language-big-selector"),
    link = document.querySelectorAll("#language-big-selector a"),
    title = document.querySelector("h1"),
    descr = document.querySelectorAll("#where-eat-card h2");

let data = {
    en: {
        title: "Where would you like to eat?",
        descriptions: ["Dine in", "Take out"] 
    },
    dk: {
        title: "Hvor vil du gerne spise?",
        descriptions: ["Spis inde", "Tag med"] 
    }
};

link.forEach(el => {
    el.addEventListener("click", (event) => {
        event.preventDefault(); 
        langs.querySelector(".active")?.classList.remove("active"); 
        el.classList.add("active"); 

        let attr = el.getAttribute("language"); 
        title.textContent = data[attr].title;
        
       
        descr.forEach((h2, index) => {
            h2.textContent = data[attr].descriptions[index];
        });
    });
});
