function togglePopupMenu() {
    const popup = document.getElementById("menuPopup");
    popup.style.display = popup.style.display === "flex" ? "none" : "flex";
}

function showTab(tabId) {
    const current = document.querySelector("section.active");
    const next = document.getElementById(tabId);
    
    if (current === next) return;

    if (current) {
        current.style.opacity = "0";
        current.style.transform = "translateY(20px)";
        setTimeout(() => {
            current.classList.remove("active");
            next.classList.add("active");
            next.style.opacity = "1";
            next.style.transform = "translateY(0)";
        }, 400);
    } else {
        next.classList.add("active");
    }
    
    const popup = document.getElementById("menuPopup");
    popup.style.display = "none";
}