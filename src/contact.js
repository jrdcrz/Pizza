const contactPage = (() => {

    const contentId = document.querySelector("#content");

    const contact = document.createElement('div');
    contact.setAttribute("id", "contact");
    contact.setAttribute("data-selection-content", "");
    contact.innerHTML = `
    <div class="sub-content">
        <h1>Contact Us!</h1>

            <div class="contact-box">
                <div class="contact-form>
                    <p>Makati Metro Manila</p>
                    <p>0912-345-6789</p>

                    <form action="#" method="post">
                        <label for"first_name">First Name:</label>
                        <input type="tex"
                                id="first_name"
                                placeholder="First Name"
                                required>
                        <label for"last_name">Last Name:</label>
                        <input type="text"
                                id="last_name"
                                placeholder="Last Name"
                                required>
                        <label for"email">Email:</label>
                        <input type="email"
                                id="email"
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
                                placeholder="Email Address"
                                required>
                        <label for"phone">Phone Number:</label>
                        <input type="tel"
                                id="phone"
                                pattern="(\d{2}\)|(\{4})-?(\{3})-?(\{4})$"
                                Placeholder="Phone Number"
                                required>
                        <textarea type="input" placeholder="Write a comment"></textarea>
                        <input type="submit">
                    </form>
                    
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
    </div>`

    contentId.appendChild(contact);
})();

export { contactPage };