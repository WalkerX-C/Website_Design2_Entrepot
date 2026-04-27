const detailPageBase = "product.html";

const products = [
    {
        id: 1,
        key: "iphone",
        name: "iPhone Pro",
        category: "Phone",
        price: 999,
        popularity: 98,
        dateAdded: new Date("2026-04-20").getTime(),
        img: "https://commons.wikimedia.org/wiki/Special:FilePath/Apple%20iPhone%2015%20Pro.jpg"
    },
    {
        id: 2,
        key: "ipad",
        name: "iPad Pro",
        category: "Tablet",
        price: 899,
        popularity: 94,
        dateAdded: new Date("2026-04-19").getTime(),
        img: "https://commons.wikimedia.org/wiki/Special:FilePath/IPad%20Pro%20hello.jpeg"
    },
    {
        id: 3,
        key: "macbook",
        name: "MacBook Pro",
        category: "Laptop",
        price: 1599,
        popularity: 96,
        dateAdded: new Date("2026-04-18").getTime(),
        img: "https://commons.wikimedia.org/wiki/Special:FilePath/Macbook%20Pro%202020%20color%20photography.jpg"
    },
    {
        id: 4,
        key: "ps5",
        name: "PS5",
        category: "Console",
        price: 499,
        popularity: 92,
        dateAdded: new Date("2026-04-17").getTime(),
        img: "https://commons.wikimedia.org/wiki/Special:FilePath/Playstation%205%20base%20edition%20with%20controller%20%28original%29.jpg"
    },
    {
        id: 5,
        key: "airpodspro",
        name: "AirPods Pro",
        category: "Earbuds",
        price: 249,
        popularity: 90,
        dateAdded: new Date("2026-04-16").getTime(),
        img: "https://commons.wikimedia.org/wiki/Special:FilePath/Apple%20airpods%20pro.jpg"
    },
    {
        id: 6,
        key: "airpodsmax",
        name: "AirPods Max",
        category: "Headphones",
        price: 549,
        popularity: 88,
        dateAdded: new Date("2026-04-15").getTime(),
        img: "https://commons.wikimedia.org/wiki/Special:FilePath/Apple%20AirPods%20Max%207.jpg"
    },
    {
        id: 7,
        key: "iphoneDetail",
        name: "iPhone Detail",
        category: "Phone",
        price: 1099,
        popularity: 86,
        dateAdded: new Date("2026-04-14").getTime(),
        img: "https://commons.wikimedia.org/wiki/Special:FilePath/IPhone%2015%20Pro.jpeg"
    },
    {
        id: 8,
        key: "ipad13",
        name: "iPad Pro 13",
        category: "Tablet",
        price: 1199,
        popularity: 87,
        dateAdded: new Date("2026-04-13").getTime(),
        img: "https://commons.wikimedia.org/wiki/Special:FilePath/IPad%20Pro%2013-inch%20backside.jpg"
    }
];

// Shopping Bag Management
let bag = JSON.parse(localStorage.getItem('shop_bag')) || [];

function updateBagCount() {
    const counts = document.querySelectorAll('#nav-bag-count');
    counts.forEach(el => el.innerText = bag.length);
}

function addToBag(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        bag.push(product);
        localStorage.setItem('shop_bag', JSON.stringify(bag));
        updateBagCount();
        alert(`${product.name} added to your bag.`);
    }
}

function removeFromBag(index) {
    bag.splice(index, 1);
    localStorage.setItem('shop_bag', JSON.stringify(bag));
    renderBag();
    updateBagCount();
}

function openCheckoutModal() {
    if (bag.length === 0) {
        alert("Your bag is empty.");
        return;
    }
    document.getElementById("checkoutTotal").value = "$" +
        bag.reduce((sum, item) => sum + Number(item.price || 0), 0).toFixed(2);
    document.getElementById("checkoutModal").classList.add("show");
    document.body.style.overflow = "hidden";
}

function closeCheckoutModal(event) {
    if (event.target.id === "checkoutModal") {
        document.getElementById("checkoutModal").classList.remove("show");
        document.body.style.overflow = "auto";
    }
}

function closeCheckoutModalButton() {
    document.getElementById("checkoutModal").classList.remove("show");
    document.body.style.overflow = "auto";
}

function confirmCheckout() {
    const card = document.getElementById("checkoutCard").value.trim();
    const name = document.getElementById("checkoutName").value.trim();
    const address = document.getElementById("checkoutAddress").value.trim();
    if (!card || !name || !address) {
        alert("Please complete all payment information.");
        return;
    }

    bag = [];
    localStorage.setItem('shop_bag', JSON.stringify(bag));
    closeCheckoutModalButton();
    renderBag();
    updateBagCount();
    alert("Payment successful. Order submitted.");
}

// ----------------------------------------------------
// Search Page Logic
// ----------------------------------------------------
const grid = document.getElementById('resultsGrid');

function renderProducts(items) {
    if (!grid) return;
    grid.innerHTML = items.map(product => `
        <a class="product-card" href="${detailPageBase}?id=${encodeURIComponent(product.key)}&variant=0">
            <img src="${product.img}" alt="${product.name}">
            <div class="product-title">${product.name}</div>
            <div class="product-price">$${product.price.toFixed(2)}</div>
        </a>
    `).join('');
}

function applyFiltersAndSort() {
    if (!grid) return;

    const searchTerm = document.getElementById('searchInput').value.toLowerCase();

    // Get checked categories
    const checkedBoxes = Array.from(document.querySelectorAll('.type-filter:checked')).map(cb => cb.value);

    // Filter
    let filtered = products.filter(p => {
        const matchesSearch =
            p.name.toLowerCase().includes(searchTerm) ||
            p.category.toLowerCase().includes(searchTerm);
        const matchesCategory = checkedBoxes.length === 0 || checkedBoxes.includes(p.category);
        return matchesSearch && matchesCategory;
    });

    // Sort
    const sortVal = document.getElementById('sortSelect').value;
    if (sortVal === 'priceLH') filtered.sort((a, b) => a.price - b.price);
    if (sortVal === 'priceHL') filtered.sort((a, b) => b.price - a.price);
    if (sortVal === 'topSellers') filtered.sort((a, b) => b.popularity - a.popularity);
    if (sortVal === 'newest') filtered.sort((a, b) => b.dateAdded - a.dateAdded);
    // 'relevancy' just defaults to standard order or search scoring.

    renderProducts(filtered);
}

// ----------------------------------------------------
// Bag Page Logic
// ----------------------------------------------------
function renderBag() {
    const container = document.getElementById('bag-items-container');
    const totalEl = document.getElementById('bag-total-price');
    if (!container) return;

    if (bag.length === 0) {
        container.innerHTML = '<p>Your bag is empty.</p>';
        totalEl.innerText = '0.00';
        const checkoutBtn = document.getElementById('checkoutBtn');
        if (checkoutBtn) {
            checkoutBtn.style.display = 'none';
        }
        return;
    }

    container.innerHTML = bag.map((item, index) => `
        <div class="bag-item">
            <img src="${item.img}" alt="${item.name}" onerror="this.onerror=null;this.src='${item.fallbackImg || "https://loremflickr.com/800/800/electronics?lock=1"}';">
            <div class="bag-item-info">
                <div class="bag-item-title">${item.name}</div>
                <button class="remove-btn" onclick="removeFromBag(${index})">Remove</button>
            </div>
            <div class="bag-item-price">$${item.price.toFixed(2)}</div>
        </div>
    `).join('');

    const total = bag.reduce((sum, item) => sum + item.price, 0);
    totalEl.innerText = total.toFixed(2);

    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.style.display = 'inline-block';
    }
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    updateBagCount();

    // Initialize Search Page
    if (grid) {
        renderProducts(products);

        document.getElementById('searchInput').addEventListener('input', applyFiltersAndSort);
        document.getElementById('sortSelect').addEventListener('change', applyFiltersAndSort);

        document.querySelectorAll('.type-filter').forEach(cb => {
            cb.addEventListener('change', applyFiltersAndSort);
        });
    }

    // Initialize Bag Page
    if (document.getElementById('bag-items-container')) {
        renderBag();
    }
});
