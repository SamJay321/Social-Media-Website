// SIDEBAR

const menuItems = document.querySelectorAll('.menu-items');

// MESSAGES

const messagesNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.messages');
const messageSearch = document.querySelector('#message-search');


// =============== SIDEBAR =====================

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

//Search Chats

const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        let name = chat.querySelectorAll('h5').textcontent.toLowerCase();
        if(name.indexOf(val) != -1){
            chat.style.display = 'flex';
        }
    })
}

// Search Chat

messageSearch.addEventListener('keyup', searchMessage)


// Highlight message card when event is clicked

messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
})