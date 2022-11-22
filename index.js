// ==================== SIDEBAR=====================

const menuItems = document.querySelectorAll('.menu-items');


// REMOVE ACTIVE CLASS FROM MENU ITEMS
const changeActiveItem = () => {
    menuItems.forEach('item' => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notifications-popup').style.display = 'none';
        } else {
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
})

// =============== MESSAGES =====================
