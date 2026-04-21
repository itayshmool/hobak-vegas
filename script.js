const menuItems = [
    { name: "Pork Belly", price: "$28", image: "https://source.unsplash.com/random/150x150/?pork-belly" },
    { name: "Marinated Short Rib", price: "$42", image: "https://source.unsplash.com/random/150x150/?galbi" },
    { name: "Thin-sliced Brisket", price: "$28", image: "https://source.unsplash.com/random/150x150/?brisket" },
    { name: "Ribeye", price: "$48", image: "https://source.unsplash.com/random/150x150/?ribeye-steak" },
    { name: "Shrimp", price: "$28", image: "https://source.unsplash.com/random/150x150/?grilled-shrimp" },
    { name: "Kimchi Stew", price: "$15", image: "https://source.unsplash.com/random/150x150/?kimchi-stew" },
    { name: "Soju", price: "$12", image: "https://source.unsplash.com/random/150x150/?soju" }
];

const menuSection = document.getElementById('menu');

function displayMenu() {
    menuItems.forEach((item, index) => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.style.animationDelay = `${index * 0.2}s`;
        
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="item-image">
            <div class="item-details">
                <span class="item-name">${item.name}</span>
                <span class="item-dots"></span>
                <span class="item-price">${item.price}</span>
            </div>
        `;
        
        menuSection.appendChild(menuItem);
    });
}

window.addEventListener('load', displayMenu);
