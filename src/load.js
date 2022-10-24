const loadPage = (() => {
    const contentId = document.querySelector('#content');

    const nav = document.createElement("header");

    nav.innerHTML = `
    <nav>
        <h2>Good Guys Pizza</h2>

        <a href="#" class="drop">
        <span class="line line1"></span>
        <span class="line line3"></span>
        <span class="line line2"></span>
        </a>
        
        <ul class="links">
        <li data-selection-target="#home" class="selection red">Home</li>
        <li data-selection-target="#menu" class="selection">Menu</li>
        <li data-selection-target="#contact" class="selection">Contact</li>
        </ul>
    </nav>
    `;
    contentId.appendChild(nav);
})();