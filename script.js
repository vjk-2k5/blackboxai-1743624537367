// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Generate product cards
    const productsContainer = document.querySelector('.products');
    const productData = [
        {
            id: 1,
            name: "Z-100 Air Purifier",
            price: "$299",
            image: "https://images.pexels.com/photos/4033324/pexels-photo-4033324.jpeg"
        },
        {
            id: 2,
            name: "Z-200 Smart AC",
            price: "$599",
            image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg"
        },
        {
            id: 3,
            name: "Z-300 Water Purifier",
            price: "$399",
            image: "https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg"
        },
        {
            id: 4,
            name: "Z-400 Refrigerator",
            price: "$899",
            image: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg"
        },
        {
            id: 5,
            name: "Z-500 Washing Machine",
            price: "$699",
            image: "https://images.pexels.com/photos/581331/pexels-photo-581331.jpeg"
        },
        {
            id: 6,
            name: "Z-600 Dishwasher",
            price: "$499",
            image: "https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg"
        }
    ];

    productData.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <span class="price">${product.price}</span>
                <a href="product-detail.html?id=${product.id}" class="btn">View Details</a>
            </div>
        `;
        productsContainer.appendChild(productCard);
    });

    // Back to top button
    const backToTop = document.createElement('div');
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTop.style.display = 'none';
    backToTop.style.position = 'fixed';
    backToTop.style.bottom = '20px';
    backToTop.style.right = '20px';
    backToTop.style.backgroundColor = 'var(--primary)';
    backToTop.style.color = 'white';
    backToTop.style.width = '50px';
    backToTop.style.height = '50px';
    backToTop.style.borderRadius = '50%';
    backToTop.style.display = 'flex';
    backToTop.style.alignItems = 'center';
    backToTop.style.justifyContent = 'center';
    backToTop.style.cursor = 'pointer';
    backToTop.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
    backToTop.style.transition = 'all 0.3s';
    document.body.appendChild(backToTop);

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.style.display = 'flex';
        } else {
            backToTop.style.display = 'none';
        }
    });

    // Product detail page functionality
    if (document.querySelector('.product-detail')) {
        // Thumbnail click handler
        const thumbnails = document.querySelectorAll('.thumbnail');
        const mainImage = document.querySelector('.main-image img');

        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', function() {
                const imgSrc = this.querySelector('img').src;
                mainImage.src = imgSrc;
                
                // Update active thumbnail
                thumbnails.forEach(t => t.style.borderColor = 'transparent');
                this.style.borderColor = 'var(--primary)';
            });
        });

        // Add to cart button
        const addToCartBtn = document.querySelector('.add-to-cart');
        if (addToCartBtn) {
            addToCartBtn.addEventListener('click', function() {
                this.textContent = 'Added to Cart!';
                this.style.backgroundColor = 'var(--accent)';
                setTimeout(() => {
                    this.textContent = 'Add to Cart';
                    this.style.backgroundColor = 'var(--primary)';
                }, 2000);
            });
        }

        // Load related products
        const relatedGrid = document.querySelector('.related-grid');
        if (relatedGrid) {
            const relatedProducts = [
                {
                    id: 2,
                    name: "Z-200 Smart AC",
                    price: "$599",
                    image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg"
                },
                {
                    id: 3,
                    name: "Z-300 Water Purifier",
                    price: "$399",
                    image: "https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg"
                },
                {
                    id: 4,
                    name: "Z-400 Refrigerator",
                    price: "$899",
                    image: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg"
                }
            ];

            relatedProducts.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.innerHTML = `
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="product-info">
                        <h3>${product.name}</h3>
                        <span class="price">${product.price}</span>
                        <a href="product-detail.html?id=${product.id}" class="btn">View Details</a>
                    </div>
                `;
                relatedGrid.appendChild(productCard);
            });
        }
    }
});
