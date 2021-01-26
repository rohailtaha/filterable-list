const searchInput = document.querySelector('.search-input');
const contacts = Array.from(document.querySelectorAll('.contact'));

// Match the entered input with the contacts. 
const matchInput = function() {
    const currentInput = searchInput.value.toUpperCase();
    const toHide=[]; 
    const toShow=[];
    contacts.forEach((contact)=>{
        if(contact.textContent.toUpperCase().startsWith(currentInput)){
            toShow.push(contact);

        }
        else
            toHide.push(contact);
    });
    updateList(toHide, toShow);
}

// hide/show Contacts
const updateList = function(toHide, toShow) {
    toHide.forEach((contact)=> contact.parentElement.style.display = 'none');
    toShow.forEach((contact)=> contact.parentElement.style.display = 'block');
}

searchInput.addEventListener('input', matchInput);
document.addEventListener('DOMContentLoaded', ()=> searchInput.value='');