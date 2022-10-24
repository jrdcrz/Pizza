const homePage = (() => {

    const contentId = document.querySelector("#content");

    const home = document.createElement('div');
    home.classList.add("selection-content")
    home.innerHTML = `
    <div id="home" class="active" data-selection-content>
        <div class="sub-content">
            <div class="info-graph">
            <h1>Eat Chill Sleep</h1>
            <h2>If it ain't hot, It's free</h2>
            <div class="order-btn">
            <a data-selection-target="#menu" class="order">Order Now</a>
            </div>
            </div>

            <div class="shop-info">
            <p>Makati, Metro Manila</p>
            <p>0912-345-6789</p>
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3862.033103895454!2d121.03722421494919!3d14.540099189841033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c8e75592adcb%3A0x34667b329191ab3d!2s47-41%20Tamarind%20Rd%2C%20Makati%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1665991550029!5m2!1sen!2sph" 
            width="300" 
            height="250" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
            </iframe>
            </div>

        </div>
    </div>`;

    contentId.appendChild(home);
})();

export { homePage };