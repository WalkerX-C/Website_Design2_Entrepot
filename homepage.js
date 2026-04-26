function goToSearch() {
    window.location.href = "search.html";
}

var currentProductKey = "";
var currentVariantIndex = 0;

var productData = {
    iphone: {
        variants: [
            {
                tab: "iPhone Pro",
                label: "Flagship Phone",
                title: "iPhone Pro",
                price: "From $999",
                desc: "A premium smartphone with a refined body, strong camera system, and smooth daily performance.",
                performance: "Fast chip performance, advanced imaging, and responsive operation for study, work, and entertainment.",
                options: "Storage options: 256GB / 512GB / 1TB. Finishes: Black, Natural, Silver.",
                bestFor: "Users who want a flagship phone, premium design, and strong camera quality.",
                image: "https://commons.wikimedia.org/wiki/Special:FilePath/Apple%20iPhone%2015%20Pro.jpg",
                buyLink: "product.html?id=iphone&variant=0"
            },
            {
                tab: "iPhone Max",
                label: "Large Flagship",
                title: "iPhone Pro Max",
                price: "From $1199",
                desc: "A larger flagship phone with premium finish, strong performance, and a more spacious screen experience.",
                performance: "Large display, flagship responsiveness, and stronger battery-oriented daily use.",
                options: "Storage options: 256GB / 512GB / 1TB. Finishes: Black, Blue, Silver.",
                bestFor: "Users who want a larger flagship phone and a more immersive display.",
                image: "https://commons.wikimedia.org/wiki/Special:FilePath/IPhone%2015%20Pro.jpeg",
                buyLink: "product.html?id=iphone&variant=1"
            }
        ]
    },

    ipad: {
        variants: [
            {
                tab: "iPad Pro 11",
                label: "Creative Tablet",
                title: "iPad Pro",
                price: "From $899",
                desc: "A slim tablet with a sharp display and strong productivity potential for note-taking, drawing, and media use.",
                performance: "Smooth multitasking, high-quality display performance, and portable productivity.",
                options: "Sizes: 11-inch / 13-inch. Storage: 256GB / 512GB / 1TB.",
                bestFor: "Students, designers, and users who want a balance of creativity and portability.",
                image: "https://commons.wikimedia.org/wiki/Special:FilePath/IPad%20Pro%20hello.jpeg",
                buyLink: "product.html?id=ipad&variant=0"
            },
            {
                tab: "iPad Pro 13",
                label: "Large Display Tablet",
                title: "iPad Pro 13",
                price: "From $1199",
                desc: "A larger-screen tablet made for more spacious reading, working, and content creation.",
                performance: "Large display area, strong multitasking potential, and good creative flexibility.",
                options: "13-inch display, different storage capacities, stylus and keyboard support.",
                bestFor: "Users who prefer a large-screen tablet for productivity and creative work.",
                image: "https://commons.wikimedia.org/wiki/Special:FilePath/IPad%20Pro%2013-inch%20backside.jpg",
                buyLink: "product.html?id=ipad&variant=1"
            }
        ]
    },

    macbook: {
        variants: [
            {
                tab: "MacBook 13",
                label: "Professional Laptop",
                title: "MacBook Pro",
                price: "From $1599",
                desc: "A modern laptop with a clean metal design and a polished professional look.",
                performance: "Strong productivity performance for office work, editing, coding, and long study sessions.",
                options: "Screen sizes: 13-inch / 15-inch. Memory and storage options available.",
                bestFor: "Users needing a premium laptop for work, study, and creative production.",
                image: "https://commons.wikimedia.org/wiki/Special:FilePath/Macbook%20Pro%202020%20color%20photography.jpg",
                buyLink: "product.html?id=macbook&variant=0"
            },
            {
                tab: "MacBook 15",
                label: "Larger Laptop",
                title: "MacBook Pro 15",
                price: "From $1799",
                desc: "A larger-screen premium laptop with elegant design and more spacious visual working area.",
                performance: "Better large-screen productivity and a stronger long-session work experience.",
                options: "15-inch display, expanded storage, and productivity-oriented configuration.",
                bestFor: "Users preferring a larger laptop for multitasking and creative work.",
                image: "https://commons.wikimedia.org/wiki/Special:FilePath/Macbook%20Pro%202020%20color%20photography.jpg",
                buyLink: "product.html?id=macbook&variant=1"
            }
        ]
    },

    ps5: {
        variants: [
            {
                tab: "PS5 Standard",
                label: "Gaming Console",
                title: "PS5",
                price: "From $499",
                desc: "A bold next-generation console with a distinctive shape and strong gaming focus.",
                performance: "Fast loading, smooth gameplay, and a more immersive console experience.",
                options: "Console edition, bundle edition, and controller accessories.",
                bestFor: "Players who want modern console gaming with strong visual identity.",
                image: "https://commons.wikimedia.org/wiki/Special:FilePath/Playstation%205%20base%20edition%20with%20controller%20%28original%29.jpg",
                buyLink: "product.html?id=ps5&variant=0"
            },
            {
                tab: "PS5 Digital",
                label: "Digital Console",
                title: "PS5 Digital",
                price: "From $449",
                desc: "A cleaner and more minimal version of the console for users who prefer digital purchases.",
                performance: "Strong next-generation gaming performance with a simplified disc-free setup.",
                options: "Digital edition, controller accessories, and game bundles.",
                bestFor: "Players who mainly buy digital games and want a cleaner console setup.",
                image: "https://commons.wikimedia.org/wiki/Special:FilePath/Playstation%205%20base%20edition%20with%20controller%20%28original%29.jpg",
                buyLink: "product.html?id=ps5&variant=1"
            }
        ]
    },

    airpodspro: {
        variants: [
            {
                tab: "AirPods Pro",
                label: "Wireless Earbuds",
                title: "AirPods Pro",
                price: "From $249",
                desc: "Compact wireless earbuds with a modern and minimal appearance.",
                performance: "Convenient everyday audio, easy carrying, and a clean wireless setup.",
                options: "Standard charging case and wireless charging case options.",
                bestFor: "Users who want compact and convenient audio for daily use.",
                image: "https://commons.wikimedia.org/wiki/Special:FilePath/Apple%20airpods%20pro.jpg",
                buyLink: "product.html?id=airpodspro&variant=0"
            },
            {
                tab: "USB-C Case",
                label: "Updated Audio Setup",
                title: "AirPods Pro USB-C",
                price: "From $269",
                desc: "A refreshed version of compact earbuds with a cleaner and more updated charging setup.",
                performance: "Portable wireless audio with practical daily convenience and a simple setup.",
                options: "USB-C charging case, compact storage, and light carrying experience.",
                bestFor: "Users who want a cleaner charging standard and compact wireless earbuds.",
                image: "https://commons.wikimedia.org/wiki/Special:FilePath/Apple%20airpods%20pro.jpg",
                buyLink: "product.html?id=airpodspro&variant=1"
            }
        ]
    },

    airpodsmax: {
        variants: [
            {
                tab: "AirPods Max",
                label: "Premium Headphones",
                title: "AirPods Max",
                price: "From $549",
                desc: "A premium over-ear audio product with a strong visual presence and modern finish.",
                performance: "Comfortable over-ear experience with a more immersive and premium feel.",
                options: "Multiple color choices and premium headband design.",
                bestFor: "Users who prefer larger headphones with a more distinctive look.",
                image: "https://commons.wikimedia.org/wiki/Special:FilePath/Apple%20AirPods%20Max%207.jpg",
                buyLink: "product.html?id=airpodsmax&variant=0"
            },
            {
                tab: "Blue Finish",
                label: "Colour Variant",
                title: "AirPods Max Blue",
                price: "From $549",
                desc: "A softer colour-focused version of premium over-ear headphones with a clean visual identity.",
                performance: "Immersive listening feel with the same premium over-ear structure.",
                options: "Blue finish, premium headband, and modern large-size headphone design.",
                bestFor: "Users who want premium headphones with a more distinct visual personality.",
                image: "https://commons.wikimedia.org/wiki/Special:FilePath/Apple%20AirPods%20Max%206.jpg",
                buyLink: "product.html?id=airpodsmax&variant=1"
            }
        ]
    },

    iphoneDetail: {
        variants: [
            {
                tab: "Close-Up",
                label: "Premium Detail",
                title: "iPhone Detail",
                price: "From $1099",
                desc: "A close-up presentation version focusing on body detail, edges, and finish quality.",
                performance: "Strong daily responsiveness with a premium flagship feel.",
                options: "Different colors, storage sizes, and premium finish options.",
                bestFor: "Users who care about both technical feel and industrial design details.",
                image: "https://commons.wikimedia.org/wiki/Special:FilePath/IPhone%2015%20Pro.jpeg",
                buyLink: "product.html?id=iphoneDetail&variant=0"
            },
            {
                tab: "Natural Finish",
                label: "Finish Variant",
                title: "iPhone Natural",
                price: "From $1099",
                desc: "A refined finish-focused version that emphasizes premium metal color and industrial detail.",
                performance: "Flagship daily performance with a cleaner and more design-led presentation.",
                options: "Natural finish, large storage choices, and premium exterior detailing.",
                bestFor: "Users who value premium finish, clean visuals, and industrial design style.",
                image: "https://commons.wikimedia.org/wiki/Special:FilePath/Apple%20iPhone%2015%20Pro.jpg",
                buyLink: "product.html?id=iphoneDetail&variant=1"
            }
        ]
    },

    ipad13: {
        variants: [
            {
                tab: "13-inch",
                label: "Large Display Tablet",
                title: "iPad Pro 13",
                price: "From $1199",
                desc: "A larger-screen tablet made for more spacious reading, working, and content creation.",
                performance: "Large display area, strong multitasking potential, and good creative flexibility.",
                options: "13-inch display, different storage capacities, stylus and keyboard support.",
                bestFor: "Users who prefer a large-screen tablet for productivity and creative work.",
                image: "https://commons.wikimedia.org/wiki/Special:FilePath/IPad%20Pro%2013-inch%20backside.jpg",
                buyLink: "product.html?id=ipad13&variant=0"
            },
            {
                tab: "Creator View",
                label: "Creative Tablet",
                title: "iPad Pro Creator",
                price: "From $1249",
                desc: "A large creative tablet version for users who focus more on drawing, editing, and media workflows.",
                performance: "Spacious visual area and smooth creative-oriented portable productivity.",
                options: "13-inch screen, stylus support, and keyboard accessories.",
                bestFor: "Designers and creators who want a bigger and cleaner tablet workspace.",
                image: "https://commons.wikimedia.org/wiki/Special:FilePath/IPad%20Pro%20hello.jpeg",
                buyLink: "product.html?id=ipad13&variant=1"
            }
        ]
    }
};

function fillModal(productKey, variantIndex) {
    var variant = productData[productKey].variants[variantIndex];

    document.getElementById("modalLabel").innerHTML = variant.label;
    document.getElementById("modalTitle").innerHTML = variant.title;
    document.getElementById("modalPrice").innerHTML = variant.price;
    document.getElementById("modalDesc").innerHTML = variant.desc;
    document.getElementById("modalPerformance").innerHTML = variant.performance;
    document.getElementById("modalOptions").innerHTML = variant.options;
    document.getElementById("modalBestFor").innerHTML = variant.bestFor;
    document.getElementById("modalImage").src = variant.image;
    document.getElementById("modalImage").alt = variant.title;

    var buyBtn = document.getElementById("modalBuyBtn");
    buyBtn.onclick = function () {
        window.location.href = variant.buyLink;
    };
}

function setVariantButtons(productKey, activeIndex) {
    var bar = document.getElementById("modalVariantBar");
    bar.innerHTML = "";

    var variants = productData[productKey].variants;

    for (var i = 0; i < variants.length; i++) {
        var btn = document.createElement("button");
        btn.className = "modal-variant-btn";
        btn.innerHTML = variants[i].tab;

        if (i === activeIndex) {
            btn.classList.add("active");
        }

        (function (index) {
            btn.onclick = function () {
                currentVariantIndex = index;
                fillModal(productKey, index);
                setVariantButtons(productKey, index);
            };
        })(i);

        bar.appendChild(btn);
    }
}

function openProductModal(productKey) {
    currentProductKey = productKey;
    currentVariantIndex = 0;

    fillModal(productKey, currentVariantIndex);
    setVariantButtons(productKey, currentVariantIndex);

    document.getElementById("productModal").classList.add("show");
    document.body.style.overflow = "hidden";
}

function closeProductModal(event) {
    if (event.target.id === "productModal") {
        document.getElementById("productModal").classList.remove("show");
        document.body.style.overflow = "auto";
    }
}

function closeProductModalButton() {
    document.getElementById("productModal").classList.remove("show");
    document.body.style.overflow = "auto";
}

document.addEventListener("DOMContentLoaded", function () {
    var islands = document.querySelectorAll(".floating-island");

    islands.forEach(function (island) {
        island.dataset.fadeCount = "0";
        island.dataset.maxFade = "2";
    });

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            var element = entry.target;
            var delay = parseFloat(element.getAttribute("data-delay")) || 0;
            var fadeCount = parseInt(element.dataset.fadeCount) || 0;
            var maxFade = parseInt(element.dataset.maxFade) || 2;

            if (entry.isIntersecting) {
                if (fadeCount < maxFade && !element.classList.contains("show")) {
                    setTimeout(function () {
                        if (element.getBoundingClientRect().top < window.innerHeight * 0.92 &&
                            element.getBoundingClientRect().bottom > window.innerHeight * 0.08) {
                            element.classList.add("show");
                            element.dataset.fadeCount = String(fadeCount + 1);
                        }
                    }, delay * 1000);
                }
            } else {
                if (fadeCount < maxFade) {
                    element.classList.remove("show");
                }
            }
        });
    }, {
        threshold: 0.25,
        rootMargin: "-6% 0px -6% 0px"
    });

    islands.forEach(function (island) {
        observer.observe(island);
    });
});