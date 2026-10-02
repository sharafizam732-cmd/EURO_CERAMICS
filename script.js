/* =========================================
   EURO CERAMICS
   MAIN JAVASCRIPT
========================================= */


/* =========================================
   CONFIG — fill these in once available
========================================= */

const businessName = "Euro Ceramics";
const whatsappNumber = "94767227372"; // e.g. "94XXXXXXXXX" — leave empty until provided
const businessEmail = ""; // e.g. "info@euroceramics.lk" — leave empty until provided
const googleMapsUrl = "";  // paste the exact Google Maps share link once available


/* =========================================
   PRODUCT / CATEGORY DATA
   PLACEHOLDER CONTENT — replace with real products
========================================= */

const productCategories = [

    {
        name: "Floor Tiles",
        icon: "fa-solid fa-border-all",
        image: "assets/products/floor_tiles/07.jpg",
        offer: true
    },

    {
        name: "Floor Tiles",
        icon: "fa-solid fa-border-all",
        image: "assets/products/floor_tiles/15.jpg",
        offer: true
    },

    {
        name: "Floor Tiles",
        icon: "fa-solid fa-border-all",
        image: "assets/products/floor_tiles/03.jpg",
        offer: false
    },
    
    {
        name: "Floor Tiles",
        icon: "fa-solid fa-border-all",
        image: "assets/products/floor_tiles/04.jpg",
        offer: false
    },

    {
        name: "Floor Tiles",
        icon: "fa-solid fa-border-all",
        image: "assets/products/floor_tiles/05.jpg",
        offer: false
    },

    {
        name: "Floor Tiles",
        icon: "fa-solid fa-border-all",
        image: "assets/products/floor_tiles/06.jpg",
        offer: false
    },

    {
        name: "Floor Tiles",
        icon: "fa-solid fa-border-all",
        image: "assets/products/floor_tiles/01.jpg",
        offer: false
    },


    {
        name: "Floor Tiles",
        icon: "fa-solid fa-border-all",
        image: "assets/products/floor_tiles/08.jpg",
        offer: false
    },

    {
        name: "Floor Tiles",
        icon: "fa-solid fa-border-all",
        image: "assets/products/floor_tiles/09.jpg",
        offer: false
    },

    {
        name: "Floor Tiles",
        icon: "fa-solid fa-border-all",
        image: "assets/products/floor_tiles/10.jpg",
        offer: false
    },

    {
        name: "Floor Tiles",
        icon: "fa-solid fa-border-all",
        image: "assets/products/floor_tiles/11.jpg",
        offer: false
    },

    {
        name: "Floor Tiles",
        icon: "fa-solid fa-border-all",
        image: "assets/products/floor_tiles/12.jpg",
        offer: false
    },

    {
        name: "Floor Tiles",
        icon: "fa-solid fa-border-all",
        image: "assets/products/floor_tiles/13.jpg",
        offer: false
    },

    {
        name: "Floor Tiles",
        icon: "fa-solid fa-border-all",
        image: "assets/products/floor_tiles/14.jpg",
        offer: false
    },

    {
        name: "Floor Tiles",
        icon: "fa-solid fa-border-all",
        image: "assets/products/floor_tiles/02.jpg",
        offer: false
    },

    {
        name: "Floor Tiles",
        icon: "fa-solid fa-border-all",
        image: "assets/products/floor_tiles/16.jpg",
        offer: false
    },

    {
        name: "Floor Tiles",
        icon: "fa-solid fa-border-all",
        image: "assets/products/floor_tiles/17.jpg",
        offer: false
    },

    {
        name: "Floor Tiles",
        icon: "fa-solid fa-border-all",
        image: "assets/products/floor_tiles/18.jpg",
        offer: false
    },

    





    {
        name: "Wall Tiles",
        icon: "fa-solid fa-square",
        description: "Decorative wall tiles that bring texture and character to any room.",
        fullDescription: "Decorative wall tiles designed to bring texture, colour and character to kitchens, living spaces and feature walls. Get in touch with your requirement and we'll confirm what's currently in stock.",
        image: "assets/products/floor_tiles/wall-tile-01.jpg",
        offer: true
    },


    {
        name: "Decorative Tiles",
        icon: "fa-solid fa-gem",
        description: "Statement tiles and patterns for feature walls and design accents.",
        fullDescription: "Statement tiles and pattern designs for feature walls, borders and design accents — a way to add a distinctive touch to any space. Reach out to discuss your design and current availability.",
        image: "assets/products/floor_tiles/decorative-tile-01.jpg",
        offer: false
    },
    
// =========================================
// BATHROOM ACCESSORIES — 20 PLACEHOLDERS
// =========================================

{
    name: "Bathroom Accessories",
    image: "assets/products/bath_acc/19.jpeg",
    offer: false
},
{
    name: "Bathroom Accessories",
    image: "assets/products/bath_acc/20.jpeg",
    offer: false
},
{
    name: "Bathroom Accessories",
    image: "assets/products/bath_acc/21.jpeg",
    offer: false
},
/*{
    name: "Bathroom Accessories",
    image: "assets/products/bath_acc/22.jpeg",
    offer: false
},*/
{
    name: "Bathroom Accessories",
    image: "assets/products/bath_acc/23.jpeg",
    offer: false
},
{
    name: "Bathroom Accessories",
    image: "assets/products/bath_acc/24.jpeg",
    offer: false
},
{
    name: "Bathroom Accessories",
    image: "assets/products/bath_acc/25.jpeg",
    offer: false
},
{
    name: "Bathroom Accessories",
    image: "assets/products/bath_acc/26.jpeg",
    offer: false
},
{
    name: "Bathroom Accessories",
    image: "assets/products/bath_acc/27.jpeg",
    offer: false
},
{
    name: "Bathroom Accessories",
    image: "assets/products/bath_acc/28.jpeg",
    offer: false
},
{
    name: "Bathroom Accessories",
    image: "assets/products/bath_acc/29.jpeg",
    offer: false
},
{
    name: "Bathroom Accessories",
    image: "assets/products/bath_acc/30.jpeg",
    offer: false
},
{
    name: "Bathroom Accessories",
    image: "assets/products/bath_acc/31.jpeg",
    offer: false
},
{
    name: "Bathroom Accessories",
    image: "assets/products/bath_acc/32.jpeg",
    offer: false
},
{
    name: "Bathroom Accessories",
    image: "assets/products/bath_acc/33.jpeg",
    offer: false
},
{
    name: "Bathroom Accessories",
    image: "assets/products/bath_acc/34.jpeg",
    offer: false
},
{
    name: "Bathroom Accessories",
    image: "assets/products/bath_acc/35.jpeg",
    offer: false
},
{
    name: "Bathroom Accessories",
    image: "assets/products/bath_acc/36.jpeg",
    offer: false
},{
    name: "Bathroom Accessories",
    image: "assets/products/bath_acc/37.jpeg",
    offer: false
},
{
    name: "Bathroom Accessories",
    image: "assets/products/bath_acc/38.jpeg",
    offer: false
},
{
    name: "Bathroom Accessories",
    image: "assets/products/bath_acc/39.jpeg",
    offer: false
},
{
    name: "Bathroom Accessories",
    image: "assets/products/bath_acc/40.jpeg",
    offer: false
},
{
    name: "Bathroom Accessories",
    image: "assets/products/bath_acc/41.jpeg",
    offer: false
},
{
    name: "Bathroom Accessories",
    image: "assets/products/bath_acc/42.jpeg",
    offer: false
},
{
    name: "Bathroom Accessories",
    image: "assets/products/bath_acc/43.jpeg",
    offer: false
},{
    name: "Bathroom Accessories",
    image: "assets/products/bath_acc/44.jpeg",
    offer: false
},{
    name: "Bathroom Accessories",
    image: "assets/products/bath_acc/45.jpeg",
    offer: false
},{
    name: "Bathroom Accessories",
    image: "assets/products/bath_acc/46.jpeg",
    offer: false
},{
    name: "Bathroom Accessories",
    image: "assets/products/bath_acc/47.jpeg",
    offer: false
},{
    name: "Bathroom Accessories",
    image: "assets/products/bath_acc/48.jpeg",
    offer: false
},{
    name: "Bathroom Accessories",
    image: "assets/products/bath_acc/49.jpeg",
    offer: false
},{
    name: "Bathroom Accessories",
    image: "assets/products/bath_acc/50.jpeg",
    offer: false
},{
    name: "Bathroom Accessories",
    image: "assets/products/bath_acc/51.jpeg",
    offer: false
},{
    name: "Bathroom Accessories",
    image: "assets/products/bath_acc/52.jpeg",
    offer: false
},{
    name: "Bathroom Accessories",
    image: "assets/products/bath_acc/53.jpeg",
    offer: false
},{
    name: "Bathroom Accessories",
    image: "assets/products/bath_acc/54.jpeg",
    offer: false
},{
    name: "Bathroom Accessories",
    image: "assets/products/bath_acc/42.jpeg",
    offer: false
},{
    name: "Bathroom Accessories",
    image: "assets/products/bath_acc/42.jpeg",
    offer: false
},{
    name: "Bathroom Accessories",
    image: "assets/products/bath_acc/42.jpeg",
    offer: false
},{
    name: "Bathroom Accessories",
    image: "assets/products/bath_acc/42.jpeg",
    offer: false
},{
    name: "Bathroom Accessories",
    image: "assets/products/bath_acc/42.jpeg",
    offer: false
},{
    name: "Bathroom Accessories",
    image: "assets/products/bath_acc/42.jpeg",
    offer: false
},



// =========================================
// BATHROOM SET — 20 PLACEHOLDERS
// =========================================

{
    name: "Bathroom Set",
    image: "assets/products/Bath_Set/01.jpeg",
    offer: false
},
{
    name: "Bathroom Set",
    image: "assets/products/Bath_Set/02.jpeg",
    offer: false
},
{
    name: "Bathroom Set",
    image: "assets/products/Bath_Set/03.jpeg",
    offer: false
},
{
    name: "Bathroom Set",
    image: "assets/products/Bath_Set/04.jpeg",
    offer: false
},
{
    name: "Bathroom Set",
    image: "assets/products/Bath_Set/05.jpeg",
    offer: false
},
{
    name: "Bathroom Set",
    image: "assets/products/Bath_Set/06.jpeg",
    offer: false
},
{
    name: "Bathroom Set",
    image: "assets/products/Bath_Set/07.jpeg",
    offer: false
},
{
    name: "Bathroom Set",
    image: "assets/products/Bath_Set/08.jpeg",
    offer: false
},
{
    name: "Bathroom Set",
    image: "assets/products/Bath_Set/09.jpeg",
    offer: false
},
{
    name: "Bathroom Set",
    image: "assets/products/Bath_Set/10.jpeg",
    offer: false
},
{
    name: "Bathroom Set",
    image: "assets/products/Bath_Set/11.jpeg",
    offer: false
},
{
    name: "Bathroom Set",
    image: "assets/products/Bath_Set/12.jpeg",
    offer: false
},
{
    name: "Bathroom Set",
    image: "assets/products/Bath_Set/13.jpeg",
    offer: false
},
{
    name: "Bathroom Set",
    image: "assets/products/Bath_Set/14.jpeg",
    offer: false
},
{
    name: "Bathroom Set",
    image: "assets/products/Bath_Set/15.jpeg",
    offer: false
},
{
    name: "Bathroom Set",
    image: "assets/products/Bath_Set/16.jpeg",
    offer: false
},
{
    name: "Bathroom Set",
    image: "assets/products/Bath_Set/17.jpeg",
    offer: false
},
{
    name: "Bathroom Set",
    image: "assets/products/Bath_Set/18.jpeg",
    offer: false
},
{
    name: "Bathroom Set",
    image: "assets/products/Bath_Set/19.jpeg",
    offer: false
},
{
    name: "Bathroom Set",
    image: "assets/products/Bath_Set/20.jpeg",
    offer: false
}


// =========================================
// KITCHEN ITEMS — 10 PLACEHOLDERS
// =========================================

{
    name: "Kitchen Items",
    image: "assets/products/kitchen_items/01.jpeg",
    offer: false
},
{
    name: "Kitchen Items",
    image: "assets/products/kitchen_items/02.jpeg",
    offer: false
},
{
    name: "Kitchen Items",
    image: "assets/products/kitchen_items/03.jpeg",
    offer: false
},
{
    name: "Kitchen Items",
    image: "assets/products/kitchen_items/04.jpeg",
    offer: false
},
{
    name: "Kitchen Items",
    image: "assets/products/kitchen_items/05.jpeg",
    offer: false
},
{
    name: "Kitchen Items",
    image: "assets/products/kitchen_items/06.jpeg",
    offer: false
},
{
    name: "Kitchen Items",
    image: "assets/products/kitchen_items/07.jpeg",
    offer: false
},
{
    name: "Kitchen Items",
    image: "assets/products/kitchen_items/08.jpeg",
    offer: false
},
{
    name: "Kitchen Items",
    image: "assets/products/kitchen_items/09.jpeg",
    offer: false
},
{
    name: "Kitchen Items",
    image: "assets/products/kitchen_items/10.jpeg",
    offer: false
}
];



function productImageMarkup(src, alt) {

    if (!src) {
        return "";
    }

    return `
        <img
            src="${src}"
            alt="${alt}"
            loading="lazy"
            onerror="this.remove()"
        >
    `;

}


/* =========================================
   RENDER PRODUCTS (products.html)
========================================= */

const productsGrid = document.getElementById("productsGrid");
const categoryButtons = document.querySelectorAll(".category-btn");
const productSearchInput = document.getElementById("productSearchInput");
const searchClearBtn = document.getElementById("searchClearBtn");

let currentCategory = "All";
let currentSearchTerm = "";

function renderProducts() {

    if (!productsGrid) return;

    const term = currentSearchTerm.trim().toLowerCase();

    const items = productCategories.filter(item => {

        const matchesCategory =
            currentCategory === "All" || item.name === currentCategory;

        if (!matchesCategory) return false;

        if (!term) return true;

        const haystack = [
            item.name,
            item.description,
            item.fullDescription || ""
        ].join(" ").toLowerCase();

        return haystack.includes(term);

    });

    if (!items.length) {

        productsGrid.innerHTML = `
            <div class="no-results">
                <i class="fa-solid fa-magnifying-glass"></i>
                <p>No products found</p>
            </div>
        `;

        return;

    }

    productsGrid.innerHTML = items.map((item, index) => `
        <div class="product-card card-animate" style="transition-delay:${index * 0.05}s">

            <div class="product-image">
                ${productImageMarkup(item.image, item.name)}
                ${item.offer ? '<span class="offer-badge">Offer</span>' : ''}
            </div>

            <div class="product-body">
               
                <div class="product-actions">

                    <button
                        class="enquire-btn"
                        data-product="${item.name}"
                        onclick="openEnquiryModal(${productCategories.indexOf(item)})"
                        <i class="fa-solid fa-comment-dots"></i>
                        Enquiry
                    </button>

                    <button
                        class="details-btn"
                        data-product="${item.name}"
                        onclick="openDetailsModal(${productCategories.indexOf(item)})"
                        <i class="fa-solid fa-circle-info"></i>
                        Full Details
                    </button>

                </div>
            </div>

        </div>
    `).join("");

    requestAnimationFrame(() => {

        productsGrid.querySelectorAll(".card-animate")
            .forEach(card => card.classList.add("in"));

    });

}

if (productsGrid) {
    renderProducts();
}

if (categoryButtons.length) {

    categoryButtons.forEach(btn => {

        btn.addEventListener("click", () => {

            categoryButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            currentCategory = btn.dataset.category;

            renderProducts();

        });

    });

}

if (productSearchInput) {

    productSearchInput.addEventListener("input", () => {

        currentSearchTerm = productSearchInput.value;

        if (searchClearBtn) {
            searchClearBtn.hidden = currentSearchTerm.length === 0;
        }

        renderProducts();

    });

}

if (searchClearBtn) {

    searchClearBtn.addEventListener("click", () => {

        currentSearchTerm = "";

        if (productSearchInput) {
            productSearchInput.value = "";
            productSearchInput.focus();
        }

        searchClearBtn.hidden = true;

        renderProducts();

    });

}


/* =========================================
   BRAND DATA
   PLACEHOLDER CONTENT — replace names/logos
   with verified Euro Ceramics brand partners
   once confirmed.
========================================= */

const brands = [

    {
        name: "Lanka Tiles",
        logo: "assets/brands/lanka.jpg"
    },

    {
        name: "Delux",
        logo: "assets/brands/delux.png"
    },

    {
        name: "Rhodes",
        logo: "assets/brands/rhodes.png"
    },

    {
        name: "Grohanz",
        logo: "assets/brands/grohanz.png"
    },

    {
        name: "Water Tec",
        logo: "assets/brands/water tec.jpg"
    },

    {
        name: "Wangel",
        logo: "assets/brands/wangel.png"
    }

];


/* =========================================
   BRAND LOGO MARKUP
   Same pattern as productImageMarkup: renders
   the real logo when the path resolves. If it's
   missing or fails to load, the image is simply
   removed and the .brand-logo container's own
   background shows through as a clean, empty
   placeholder — no icon, emoji or broken-image
   symbol, and no invented logo.
========================================= */

function brandLogoMarkup(src, alt) {

    if (!src) {
        return "";
    }

    return `
        <img
            src="${src}"
            alt="${alt}"
            loading="lazy"
            onerror="this.remove()"
        >
    `;

}


/* =========================================
   RENDER BRANDS
   Reusable across any page that has a
   #brandsGrid container — currently index.html.
   Safely does nothing on pages without one.
========================================= */

function renderBrands(container) {

    if (!container) return;

    container.innerHTML = brands.map((brand, index) => `
        <div class="brand-card reveal" style="transition-delay:${index * 0.06}s">

            <div class="brand-logo">
                ${brandLogoMarkup(brand.logo, brand.name)}
            </div>

            <span class="brand-label">${brand.name}</span>

        </div>
    `).join("");

}

const brandsGrid = document.getElementById("brandsGrid");

if (brandsGrid) {
    renderBrands(brandsGrid);
}


/* =========================================
   ENQUIRY MODAL
========================================= */

const enquiryModal = document.getElementById("enquiryModal");
const enquiryModalClose = document.getElementById("enquiryModalClose");
const enquiryModalText = document.getElementById("enquiryModalText");
const enquiryWhatsappBtn = document.getElementById("enquiryWhatsappBtn");
const enquiryEmailBtn = document.getElementById("enquiryEmailBtn");
const enquiryContactBtn = document.getElementById("enquiryContactBtn");

let currentEnquiryProduct = "";

function openEnquiryModal(productName) {

    if (!enquiryModal) return;

    currentEnquiryProduct = productName;

    if (enquiryModalText) {
        enquiryModalText.textContent =
            `I would like to enquire about ${productName}.`;
    }

    if (enquiryWhatsappBtn) {

        if (whatsappNumber) {

            const message = encodeURIComponent(
                `Hi ${businessName}, I'm interested in ${productName}. Could you please provide more details?`
            );

            enquiryWhatsappBtn.href =
                `https://wa.me/${whatsappNumber}?text=${message}`;

            enquiryWhatsappBtn.classList.remove("btn-disabled");

        } else {

            enquiryWhatsappBtn.href = "#";
            enquiryWhatsappBtn.classList.add("btn-disabled");

        }

    }

    if (enquiryEmailBtn) {

        if (businessEmail) {

            const subject = encodeURIComponent(`Product Enquiry — ${productName}`);
            const body = encodeURIComponent(
                `Hi ${businessName},\n\nI'm interested in ${productName}. Could you please provide more details on availability, sizes and pricing?\n\nThank you.`
            );

            enquiryEmailBtn.href = `mailto:${businessEmail}?subject=${subject}&body=${body}`;
            enquiryEmailBtn.classList.remove("btn-disabled");

        } else {

            enquiryEmailBtn.href = "#";
            enquiryEmailBtn.classList.add("btn-disabled");

        }

    }

    if (enquiryContactBtn) {

        enquiryContactBtn.href =
            `contact.html?enquiry=${encodeURIComponent(productName)}`;

    }

    enquiryModal.classList.add("show");
    document.body.classList.add("modal-open");

}

function closeEnquiryModal() {

    if (!enquiryModal) return;

    enquiryModal.classList.remove("show");
    document.body.classList.remove("modal-open");

}

if (enquiryModalClose) {
    enquiryModalClose.addEventListener("click", closeEnquiryModal);
}

if (enquiryModal) {

    enquiryModal.addEventListener("click", event => {

        if (event.target === enquiryModal || event.target.classList.contains("modal-backdrop")) {
            closeEnquiryModal();
        }

    });

}

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeEnquiryModal();
        closeDetailsModal();
    }

});


/* =========================================
   FULL DETAILS MODAL
========================================= */

const detailsModal = document.getElementById("detailsModal");
const detailsModalClose = document.getElementById("detailsModalClose");
const detailsModalImage = document.getElementById("detailsModalImage");
const detailsModalTitle = document.getElementById("detailsModalTitle");
const detailsModalDescription = document.getElementById("detailsModalDescription");
const detailsModalEnquireBtn = document.getElementById("detailsModalEnquireBtn");

function openDetailsModal(productIndex) {

    if (!detailsModal) return;

    const item = productCategories[productIndex];

    if (!item) return;

    if (detailsModalTitle) {
        detailsModalTitle.textContent = item.name;
    }

    /*if (detailsModalDescription) {
        detailsModalDescription.textContent =
            item.fullDescription ||
            item.description ||
            "Product details are currently unavailable. Please contact us for more information.";
    }
*/
    if (detailsModalImage) {
        detailsModalImage.innerHTML =
            productImageMarkup(item.image, item.name);
    }

    if (detailsModalEnquireBtn) {

        detailsModalEnquireBtn.onclick = () => {
            closeDetailsModal();
            openEnquiryModal(productIndex);
        };

    }

    detailsModal.classList.add("show");
    document.body.classList.add("modal-open");

}

function closeDetailsModal() {

    if (!detailsModal) return;

    detailsModal.classList.remove("show");
    document.body.classList.remove("modal-open");

}

if (detailsModalClose) {
    detailsModalClose.addEventListener("click", closeDetailsModal);
}

if (detailsModal) {

    detailsModal.addEventListener("click", event => {

        if (event.target === detailsModal || event.target.classList.contains("modal-backdrop")) {
            closeDetailsModal();
        }

    });

}


/* =========================================
   CONTACT PAGE — PRE-FILL ENQUIRY TYPE FROM URL
========================================= */

(function prefillEnquiryFromUrl() {

    const params = new URLSearchParams(window.location.search);
    const product = params.get("enquiry");

    const messageField = document.getElementById("message");

    if (product && messageField) {

        messageField.value =
            `I would like to enquire about ${product}.`;

    }

})();


/* =========================================
   WHATSAPP BUTTON (contact page)
========================================= */

(function setupWhatsappButton() {

    const waBtn = document.getElementById("whatsappBtn");

    if (!waBtn) return;

    if (whatsappNumber) {

        waBtn.href = `https://wa.me/${whatsappNumber}`;
        waBtn.classList.remove("btn-disabled");

    } else {

        waBtn.href = "#";
        waBtn.classList.add("btn-disabled");
        waBtn.setAttribute("aria-disabled", "true");

    }

})();


/* =========================================
   FLOATING WHATSAPP BUTTON (all pages)
========================================= */

(function setupFloatingWhatsapp() {

    const waFloat = document.getElementById("whatsappFloat");

    if (!waFloat) return;

    if (whatsappNumber) {

        const message = encodeURIComponent(
            `Hello ${businessName}, I would like to make an enquiry.`
        );

        waFloat.href = `https://wa.me/${whatsappNumber}?text=${message}`;
        waFloat.classList.remove("btn-disabled");

    } else {

        waFloat.href = "#";
        waFloat.classList.add("btn-disabled");
        waFloat.setAttribute("aria-disabled", "true");

    }

})();


/* =========================================
   GOOGLE MAPS BUTTON (contact page)
========================================= */

(function setupMapsButton() {

    const mapsBtn = document.getElementById("mapsBtn");

    if (!mapsBtn) return;

    if (googleMapsUrl) {

        mapsBtn.href = googleMapsUrl;
        mapsBtn.classList.remove("btn-disabled");

    } else {

        mapsBtn.href = "#";
        mapsBtn.classList.add("btn-disabled");

    }

})();


/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const icon = menuToggle.querySelector("i");

        const isOpen = navLinks.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isOpen);

        if (isOpen) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }

    });

    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            const icon = menuToggle.querySelector("i");
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

            menuToggle.setAttribute("aria-expanded", "false");

        });

    });

    document.addEventListener("click", event => {

        if (
            navLinks.classList.contains("active") &&
            !navLinks.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {

            navLinks.classList.remove("active");

            const icon = menuToggle.querySelector("i");
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

}


/* =========================================
   STICKY NAVBAR
========================================= */

const navbar = document.getElementById("navbar");

if (navbar) {

    window.addEventListener(
        "scroll",
        () => {
            navbar.classList.toggle("scrolled", window.scrollY > 40);
        },
        { passive: true }
    );

}


/* =========================================
   BACK TO TOP
========================================= */

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener(
        "scroll",
        () => {
            backToTop.classList.toggle("show", window.scrollY > 500);
        },
        { passive: true }
    );

    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

}


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                revealObserver.unobserve(entry.target);
            }

        });

    },
    { threshold: 0.12 }
);

revealElements.forEach(element => revealObserver.observe(element));


/* =========================================
   CONTACT FORM VALIDATION
========================================= */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {

    contactForm.addEventListener("submit", event => {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const enquiryType = document.getElementById("enquiryType")
            ? document.getElementById("enquiryType").value
            : "";
        const message = document.getElementById("message").value.trim();

        const phonePattern = /^[0-9+\-\s()]{7,}$/;

        if (!name || !phone || !message) {

            formMessage.textContent = "Please complete all required fields.";
            formMessage.classList.add("error");
            return;

        }

        if (!phonePattern.test(phone)) {

            formMessage.textContent = "Please enter a valid phone number.";
            formMessage.classList.add("error");
            return;

        }

        const submitBtn = contactForm.querySelector(".form-submit");

        if (submitBtn) {
            submitBtn.classList.add("is-loading");
        }

        formMessage.textContent = "";
        formMessage.classList.remove("error");

        // NOTE: This form does not currently send data anywhere.
        // Connect it to WhatsApp, email, Formspree, Netlify Forms
        // or a backend API before going live.
        setTimeout(() => {

            if (submitBtn) {
                submitBtn.classList.remove("is-loading");
            }

            formMessage.textContent =
                "Thanks! Your enquiry is ready to send. We'll be in touch soon.";

            contactForm.reset();

        }, 900);

    });

}


/* =========================================
   SHOP GALLERY LIGHTBOX (About page)
========================================= */

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");
const galleryItems = document.querySelectorAll(".shop-gallery-item");

if (lightbox && galleryItems.length) {

    galleryItems.forEach(item => {

        item.addEventListener("click", () => {

            const img = item.querySelector("img");

            if (!img) return;

            lightboxImage.src = img.src;
            lightboxImage.alt = img.alt;

            lightbox.classList.add("show");
            document.body.classList.add("modal-open");

        });

    });

    if (lightboxClose) {

        lightboxClose.addEventListener("click", () => {
            lightbox.classList.remove("show");
            document.body.classList.remove("modal-open");
        });

    }

    lightbox.addEventListener("click", event => {

        if (event.target === lightbox) {
            lightbox.classList.remove("show");
            document.body.classList.remove("modal-open");
        }

    });

}


/* =========================================
   PRELOADER
========================================= */

const preloader = document.getElementById("preloader");

if (preloader) {

    const MIN_VISIBLE_TIME = 450;
    const shownAt = Date.now();

    const hidePreloader = () => {

        const elapsed = Date.now() - shownAt;
        const remaining = Math.max(MIN_VISIBLE_TIME - elapsed, 0);

        setTimeout(() => {

            preloader.classList.add("hide");
            document.body.classList.remove("is-loading");

            setTimeout(() => preloader.remove(), 700);

        }, remaining);

    };

    if (document.readyState === "complete") {
        hidePreloader();
    } else {
        window.addEventListener("load", hidePreloader);
    }

}