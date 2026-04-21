const menuItems = [
    { name: "Pork Belly", price: "$28" },
    { name: "Marinated Short Rib", price: "$42" },
    { name: "Thin-sliced Brisket", price: "$28" },
    { name: "Ribeye", price: "$48" },
    { name: "Shrimp", price: "$28" },
    { name: "Kimchi Stew", price: "$15" },
    { name: "Soju", price: "$12" }
];

const menuSection = document.getElementById('menu');

function displayMenu() {
    menuItems.forEach((item, index) => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.style.animationDelay = `${index * 0.2}s`;
        
        menuItem.innerHTML = `
            <span class="item-name">${item.name}</span>
            <span class="item-dots"></span>
            <span class="item-price">${item.price}</span>
        `;
        
        menuSection.appendChild(menuItem);
    });
}

window.addEventListener('load', displayMenu);
