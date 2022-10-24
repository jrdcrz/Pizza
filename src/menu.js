const menuPage = (() => {
    const contentId = document.querySelector("#content");

    const menu = document.createElement('div');
    menu.setAttribute("id", "menu");
    menu.setAttribute("data-selection-content", "");
    menu.innerHTML = `
    <div class="sub-content">
        <h1>Menu</h1>

            <div class="menu-content">
                <img src="./images/images.jpeg">

                <div class="item-content">
                <h4>Pepperoni: PHP <span>499.75</span></h4>
                    <p>Pepperoni is one of our regular pizza orders</p>
                </div>
            </div>

            <div class="menu-content">
                
                <img src="./images/italian margherita.jpeg">

                <div class="item-content">
                <h4>Margherita: PHP <span>429.75</span></h4>
                    <p>Margherita is for our cheese overload pizzas</p>
                </div>
                
            </div>
            
            <div class="menu-content">
                
                <img src="./images/chicken.jpeg">

                <div class="item-content">
                <h4>Chicken (good for 4): PHP <span>399.75</span></h4>
                <h4>Chicken (good for 8): PHP <span>599.75</span></h4>
                    <p>Bucket of Chicken Barkada set</p>
                </div>
                
            </div>

    </div>`

    contentId.appendChild(menu);
})();

export { menuPage };