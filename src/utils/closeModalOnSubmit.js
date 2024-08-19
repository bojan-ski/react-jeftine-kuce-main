const closeModalOnSubmit = (modalID) => {
    const bodyEl = document.body;
    
    bodyEl.style.overflow = ''
    bodyEl.style.paddingRight = ''
    bodyEl.classList.remove('modal-open')
    document.querySelector('.modal-backdrop').remove()

    if(document.querySelector(modalID)){
        document.querySelector(modalID).classList.remove('show')
        document.querySelector(modalID).style.display = 'none'
    }
}

export default closeModalOnSubmit