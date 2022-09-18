function init () {
	/**
	 * Define Global Variables
	 * 
	*/
    const fragment = document.createDocumentFragment();
    const sections = document.querySelectorAll("section").length;
	/**
	 * End Global Variables
	 * Start Helper Functions
	 * 
	*/
	// build the nav
	// Build menu
    for (let num = 1; num <= sections; num++ ) {
		//Define Variables
        const liElement = document.createElement("li");
        const aEl = document.createElement("a");
        const ulEl = document.getElementById("navbar__list");
        const classToA = document.createAttribute("class");
        const  idToA = document.createAttribute("id");
        const hrefToA = document.createAttribute("href");
		// append as a child
        fragment.appendChild(liElement)
        ulEl.appendChild(fragment);
        liElement.appendChild(aEl);
		//make content or value
        classToA.value = 'menu__link';
        idToA.value = 'menu__link--id' + num;
        aEl.textContent = "section" + num;
        hrefToA.value = "#section" + num;
        //run a class, id and  href to the link
        aEl.setAttributeNode(classToA);
        aEl.setAttributeNode(idToA);
        aEl.setAttributeNode(hrefToA);
        //make event listen when the link clicked to make the scroll smooth
        aEl.addEventListener("click", smooth);
    }
    // Scroll to anchor ID using scrollTO event
    function smooth(evt) {
            "use strict";
            console.log("test3");
            evt.preventDefault();
            const selected = document.getElementById(evt.target.getAttribute("href").substring(1));
            selected.scrollIntoView({
                behavior: "smooth",
                block: "center"
        })
            console.log("test4");

    }
	// Add class 'active' to section when near top of viewport
    // Set sections as active
	window.addEventListener("scroll", toggleActivestate);
    function toggleActivestate() {
        "use strict";
        console.log("test5");
        for (let num = 1; num <= sections; num++) {
            let activeSection = document.getElementById("section" + num);
            // if the client on the section (-300 : 300 ) make this section blue on nave bar 
            if (document.getElementById("section" + num).getBoundingClientRect().top >= -300 &&
                document.getElementById("section" + num).getBoundingClientRect().top <= 300)
                {document.getElementById("menu__link--id" + num).classList.add("active-link");  
                 document.getElementById("section" + num).classList.add("your-active-class");  
                 console.log("test6");}
            else {document.getElementById("menu__link--id" + num).classList.remove("active-link"); 
                  document.getElementById("section" + num).classList.remove("your-active-class");
                  console.log("test7");
                  continue; }
    }}
    }
init();