const menuItems = [
    {
        name: "Family Combo",
        description: "A feast for the whole pack! Warning: may cause food comas and uncontrollable happiness."
    },
    {
        name: "Kalbi Ribs",
        description: "So tender, they'll fall off the bone and right into your heart."
    },
    {
        name: "Spicy Pork Belly",
        description: "For those who like it hot. Not responsible for any sweat, tears, or sudden declarations of love."
    },
    {
        name: "Kimchi Stew",
        description: "A warm, spicy hug in a bowl. Perfect for soothing the soul (and your sinuses)."
    },
    {
        name: "Bean Paste Stew",
        description: "Don't let the name fool you. This stew is a flavor explosion that's both comforting and complex."
    },
    {
        name: "Soju",
        description: "The official drink of 'one more bottle.' Let the good times roll!"
    }
];

const menuSection = document.getElementById('menu');

function displayMenu() {
    menuItems.forEach((item, index) => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.description}</p>
        `;
        menuItem.style.animationDelay = `${index * 0.2}s`;
        menuSection.appendChild(menuItem);
    });
}

window.addEventListener('load', displayMenu);
