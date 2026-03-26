// Number Counter Animation for Stats
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.stat-number');
    let hasAnimated = false;

    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
            hasAnimated = true;
            counters.forEach(counter => {
                const updateCount = () => {
                    const target = +counter.getAttribute('data-target');
                    const count = +counter.innerText;
                    
                    const speed = 200; // The lower the slower
                    const inc = target / speed;
                    
                    if (count < target) {
                        counter.innerText = Math.ceil(count + inc);
                        setTimeout(updateCount, 10);
                    } else {
                        counter.innerText = target + (target > 50 ? "+" : (target === 95 ? "%" : "+")); 
                    }
                };
                updateCount();
            });
        }
    });

    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        observer.observe(statsSection);
    }
});

// Lead Gen Modal Logic
const modal = document.getElementById("leadModal");
const closeBtn = document.querySelector(".close-btn");
const destCards = document.querySelectorAll(".dest-card");

if (modal && closeBtn) {
    // Open Modal when a destination card is clicked
    destCards.forEach(card => {
        card.addEventListener("click", (e) => {
            e.preventDefault();
            modal.style.display = "flex";
            
            // Update modal title specifically for the country
            const countryName = card.querySelector(".dest-title").innerText;
            const modalTitle = document.querySelector(".modal-title");
            if (modalTitle && countryName) {
                modalTitle.innerText = `Study in ${countryName}`;
            }
        });
    });

    // Close Modal
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close Modal if clicking outside content
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
}
