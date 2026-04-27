var productData = {
    iphone: {
        variants: [
            {
                tag: "New",
                variantName: "iPhone Pro",
                name: "iPhone Pro",
                model: "IP-15-PRO",
                price: "From $999",
                description: "A premium smartphone with a refined body, strong camera system, and smooth daily performance.",
                image: "https://commons.wikimedia.org/wiki/Special:FilePath/Apple%20iPhone%2015%20Pro.jpg",
                highlights: [
                    "Fast and stable flagship-level performance",
                    "Premium metal body and refined finish",
                    "Strong camera system for daily photography",
                    "Suitable for study, entertainment, and communication"
                ],
                options: "256GB / 512GB / 1TB. Finishes: Black, Natural, Silver."
            },
            {
                tag: "Premium",
                variantName: "iPhone Pro Max",
                name: "iPhone Pro Max",
                model: "IP-15-PRO-MAX",
                price: "From $1199",
                description: "A larger flagship phone with a more spacious screen and premium finish.",
                image: "https://commons.wikimedia.org/wiki/Special:FilePath/IPhone%2015%20Pro.jpeg",
                highlights: [
                    "Larger immersive display",
                    "Premium flagship appearance",
                    "Strong daily and entertainment performance",
                    "Suitable for users preferring larger phones"
                ],
                options: "256GB / 512GB / 1TB. Finishes: Black, Blue, Silver."
            }
        ]
    },

    ipad: {
        variants: [
            {
                tag: "New",
                variantName: "iPad Pro 11",
                name: "iPad Pro",
                model: "IPAD-PRO-11",
                price: "From $899",
                description: "A slim tablet with a sharp display and strong productivity potential for note-taking, drawing, and media use.",
                image: "https://commons.wikimedia.org/wiki/Special:FilePath/IPad%20Pro%20hello.jpeg",
                highlights: [
                    "Large and clear display experience",
                    "Convenient for notes, reading, and design",
                    "Portable body with modern appearance",
                    "Good balance between work and entertainment"
                ],
                options: "11-inch / 13-inch. 256GB / 512GB / 1TB."
            },
            {
                tag: "New",
                variantName: "iPad Pro 13",
                name: "iPad Pro 13",
                model: "IPAD-PRO-13",
                price: "From $1199",
                description: "A larger-screen tablet made for more spacious reading, working, and content creation.",
                image: "https://commons.wikimedia.org/wiki/Special:FilePath/IPad%20Pro%2013-inch%20backside.jpg",
                highlights: [
                    "Large-screen productivity",
                    "More spacious creative workspace",
                    "Modern and refined body",
                    "Suitable for design and multitasking"
                ],
                options: "13-inch. 256GB / 512GB / 1TB. Pencil and keyboard support."
            }
        ]
    },

    macbook: {
        variants: [
            {
                tag: "New",
                variantName: "MacBook Neo 13",
                name: "MacBook Neo",
                model: "MB-NEO-13",
                price: "From $849",
                description: "A modern laptop with a polished look, light body, and practical performance for everyday work and study.",
                image: "https://commons.wikimedia.org/wiki/Special:FilePath/Macbook%20Pro%202020%20color%20photography.jpg",
                highlights: [
                    "Clean and elegant laptop design",
                    "Suitable for documents, coding, and office use",
                    "Portable structure for daily carrying",
                    "Simple and premium visual style"
                ],
                options: "13-inch. 256GB / 512GB. Silver / Space Gray."
            },
            {
                tag: "New",
                variantName: "MacBook Neo 15",
                name: "MacBook Neo 15",
                model: "MB-NEO-15",
                price: "From $999",
                description: "A larger version designed for users who want more screen space and a broader working view.",
                image: "https://commons.wikimedia.org/wiki/Special:FilePath/Macbook%20Pro%202020%20color%20photography.jpg",
                highlights: [
                    "Larger display workspace",
                    "More comfortable visual layout",
                    "Elegant laptop appearance",
                    "Suitable for multitasking and study"
                ],
                options: "15-inch. 512GB / 1TB. Silver / Space Gray."
            }
        ]
    },

    ps5: {
        variants: [
            {
                tag: "Popular",
                variantName: "PS5 Standard",
                name: "PS5",
                model: "PS5-STD-01",
                price: "From $499",
                description: "A bold next-generation console with strong gaming focus and a distinctive hardware design.",
                image: "https://commons.wikimedia.org/wiki/Special:FilePath/Playstation%205%20base%20edition%20with%20controller%20%28original%29.jpg",
                highlights: [
                    "Modern console appearance",
                    "Smooth and immersive gameplay experience",
                    "Clear product identity and strong visual style",
                    "Suitable for home gaming setups"
                ],
                options: "Standard edition. Controller and bundle options available."
            },
            {
                tag: "Popular",
                variantName: "PS5 Digital",
                name: "PS5 Digital",
                model: "PS5-DIG-01",
                price: "From $449",
                description: "A cleaner digital version with a simplified setup for users who prefer online game purchases.",
                image: "https://commons.wikimedia.org/wiki/Special:FilePath/Playstation%205%20base%20edition%20with%20controller%20%28original%29.jpg",
                highlights: [
                    "Disc-free simplified design",
                    "Strong next-generation performance",
                    "Suitable for digital game users",
                    "Clean console setup"
                ],
                options: "Digital edition. Controller and game bundle options available."
            }
        ]
    },

    airpodspro: {
        variants: [
            {
                tag: "Popular",
                variantName: "AirPods Pro",
                name: "AirPods Pro",
                model: "AP-PRO-02",
                price: "From $249",
                description: "Compact wireless earbuds with a minimal look and convenient everyday use.",
                image: "https://commons.wikimedia.org/wiki/Special:FilePath/Apple%20airpods%20pro.jpg",
                highlights: [
                    "Compact and lightweight",
                    "Easy to carry and use every day",
                    "Clean wireless product design",
                    "Fits simple modern setups"
                ],
                options: "Charging case included."
            },
            {
                tag: "Popular",
                variantName: "AirPods Pro USB-C",
                name: "AirPods Pro USB-C",
                model: "AP-PRO-USBC",
                price: "From $269",
                description: "An updated charging version with the same compact wireless experience.",
                image: "https://commons.wikimedia.org/wiki/Special:FilePath/Apple%20airpods%20pro.jpg",
                highlights: [
                    "Updated charging interface",
                    "Portable and simple design",
                    "Convenient daily audio use",
                    "Compact wireless setup"
                ],
                options: "USB-C case version."
            }
        ]
    },

    airpodsmax: {
        variants: [
            {
                tag: "Premium",
                variantName: "AirPods Max",
                name: "AirPods Max",
                model: "AP-MAX-01",
                price: "From $549",
                description: "A premium over-ear audio product with a stylish appearance and more immersive listening feel.",
                image: "https://commons.wikimedia.org/wiki/Special:FilePath/Apple%20AirPods%20Max%207.jpg",
                highlights: [
                    "Premium over-ear design",
                    "More visually striking than small earbuds",
                    "Suitable for music and long listening sessions",
                    "Modern and recognizable appearance"
                ],
                options: "Multiple colors available."
            },
            {
                tag: "Premium",
                variantName: "AirPods Max Blue",
                name: "AirPods Max Blue",
                model: "AP-MAX-BLUE",
                price: "From $549",
                description: "A blue finish version with the same premium over-ear design and cleaner visual identity.",
                image: "https://commons.wikimedia.org/wiki/Special:FilePath/Apple%20AirPods%20Max%206.jpg",
                highlights: [
                    "Premium blue finish",
                    "Immersive over-ear style",
                    "Distinct color identity",
                    "Comfortable daily listening"
                ],
                options: "Blue finish."
            }
        ]
    },

    iphoneDetail: {
        variants: [
            {
                tag: "Premium",
                variantName: "iPhone Detail",
                name: "iPhone Detail",
                model: "IP-DETAIL-01",
                price: "From $1099",
                description: "A close-up presentation version focusing on finish quality, edges, and flagship feel.",
                image: "https://commons.wikimedia.org/wiki/Special:FilePath/IPhone%2015%20Pro.jpeg",
                highlights: [
                    "Strong industrial design detail",
                    "Premium finish and body feel",
                    "Flagship visual presentation",
                    "Suitable for users valuing appearance and quality"
                ],
                options: "Premium finishes and storage options."
            },
            {
                tag: "Premium",
                variantName: "iPhone Natural",
                name: "iPhone Natural",
                model: "IP-NATURAL-01",
                price: "From $1099",
                description: "A refined finish-focused version emphasizing premium colour and industrial detail.",
                image: "https://commons.wikimedia.org/wiki/Special:FilePath/Apple%20iPhone%2015%20Pro.jpg",
                highlights: [
                    "Refined natural finish",
                    "Premium exterior styling",
                    "Strong flagship feel",
                    "Suitable for users focused on industrial design"
                ],
                options: "Natural finish, premium storage options."
            }
        ]
    },

    ipad13: {
        variants: [
            {
                tag: "New",
                variantName: "iPad Pro 13",
                name: "iPad Pro 13",
                model: "IPAD-PRO-13",
                price: "From $1199",
                description: "A larger-screen tablet made for more spacious reading, working, and content creation.",
                image: "https://commons.wikimedia.org/wiki/Special:FilePath/IPad%20Pro%2013-inch%20backside.jpg",
                highlights: [
                    "Large-screen productivity",
                    "Good for design and visual work",
                    "Modern and refined body",
                    "Spacious display for multitasking"
                ],
                options: "13-inch display and stylus support."
            },
            {
                tag: "New",
                variantName: "iPad Creator",
                name: "iPad Creator",
                model: "IPAD-CREATOR-13",
                price: "From $1249",
                description: "A creator-focused version with a larger tablet workspace for design and media tasks.",
                image: "https://commons.wikimedia.org/wiki/Special:FilePath/IPad%20Pro%20hello.jpeg",
                highlights: [
                    "Creative workflow focus",
                    "Large and clean display area",
                    "Modern body design",
                    "Suitable for editing and drawing"
                ],
                options: "13-inch creator setup with accessory support."
            }
        ]
    }
};

var currentProductId = "iphone";
var currentVariantIndex = 0;

function getParams() {
    var params = new URLSearchParams(window.location.search);
    return {
        id: params.get("id"),
        variant: params.get("variant")
    };
}

function createVariantButtons(productId, activeIndex) {
    var bar = document.getElementById("variantBar");
    bar.innerHTML = "";

    var variants = productData[productId].variants;

    for (var i = 0; i < variants.length; i++) {
        var btn = document.createElement("button");
        btn.className = "variant-btn";
        btn.innerHTML = variants[i].variantName;

        if (i === activeIndex) {
            btn.classList.add("active");
        }

        (function (index) {
            btn.onclick = function () {
                loadProduct(productId, index);
                history.replaceState(null, "", "product.html?id=" + productId + "&variant=" + index);
            };
        })(i);

        bar.appendChild(btn);
    }
}

function loadProduct(productId, variantIndex) {
    if (!productData[productId]) {
        productId = "iphone";
    }

    var variants = productData[productId].variants;

    if (variantIndex === null || variantIndex === undefined || isNaN(variantIndex)) {
        variantIndex = 0;
    }

    variantIndex = parseInt(variantIndex);

    if (variantIndex < 0 || variantIndex >= variants.length) {
        variantIndex = 0;
    }

    var product = variants[variantIndex];
    currentProductId = productId;
    currentVariantIndex = variantIndex;

    document.getElementById("productTag").innerHTML = product.tag;
    document.getElementById("productName").innerHTML = product.name;
    document.getElementById("productModel").innerHTML = product.model;
    document.getElementById("productPrice").innerHTML = product.price;
    document.getElementById("productDescription").innerHTML = product.description;
    document.getElementById("productOptions").innerHTML = product.options;
    document.getElementById("productImage").src = product.image;
    document.getElementById("productImage").alt = product.name;

    document.getElementById("buyProductName").value = product.name;
    document.getElementById("buyVariantName").value = product.variantName;
    document.getElementById("buyProductPrice").value = product.price;

    var list = document.getElementById("productHighlights");
    list.innerHTML = "";

    for (var i = 0; i < product.highlights.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = product.highlights[i];
        list.appendChild(li);
    }

    createVariantButtons(productId, variantIndex);
}

function parsePriceNumber(priceText) {
    var match = String(priceText || "").match(/(\d+(\.\d+)?)/);
    return match ? Number(match[1]) : 0;
}

function addCurrentToBag() {
    var variant = productData[currentProductId].variants[currentVariantIndex];
    var bag = JSON.parse(localStorage.getItem("shop_bag")) || [];
    bag.push({
        id: currentProductId + "-" + currentVariantIndex + "-" + Date.now(),
        key: currentProductId,
        name: variant.name,
        category: "Product",
        price: parsePriceNumber(variant.price),
        img: variant.image
    });
    localStorage.setItem("shop_bag", JSON.stringify(bag));
    alert(variant.name + " added to your bag.");
}

function openBuyModal() {
    document.getElementById("buyModal").classList.add("show");
    document.body.style.overflow = "hidden";
}

function closeBuyModal(event) {
    if (event.target.id === "buyModal") {
        document.getElementById("buyModal").classList.remove("show");
        document.body.style.overflow = "auto";
    }
}

function closeBuyModalButton() {
    document.getElementById("buyModal").classList.remove("show");
    document.body.style.overflow = "auto";
}

function confirmPurchase() {
    var card = document.getElementById("bankCard").value.trim();
    var quantity = document.getElementById("buyQuantity").value.trim();
    var name = document.getElementById("receiverName").value.trim();
    var address = document.getElementById("receiverAddress").value.trim();

    if (card === "" || quantity === "" || name === "" || address === "") {
        alert("Please complete all purchase information.");
        return;
    }

    document.getElementById("buyModal").classList.remove("show");
    document.body.style.overflow = "auto";

    var success = document.getElementById("successMessage");
    success.classList.add("show");

    setTimeout(function () {
        success.classList.remove("show");
    }, 2200);
}

window.onload = function () {
    var params = getParams();
    loadProduct(params.id, params.variant);
};