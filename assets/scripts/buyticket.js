
const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalContainer = document.querySelector('.js-modal-container')
const modalClose = document.querySelector('.js-modal-close')

//Hiển thị modal mua vé (thêm class open vào model)
function showBuyTickets(){
    modal.classList.add('open')
}

//Hàm ẩn modal mua vẽ (gỡ bỏ class open của model)
function hideBuyTickets(){
    modal.classList.remove('open')
}

//Lặp qua từng thẻ button và nghe hànhn vi click
for (const buyBtn of buyBtns){
    buyBtn.addEventListener('click', showBuyTickets)
}

//Nghe hành vi click
modalClose.addEventListener('click', hideBuyTickets)

//HidebuyTickets khi click ra ngoài
modal.addEventListener('click', hideBuyTickets)

//Ngăn chặn sự kiện nổi bọt (click vào container cũng chạy hideBuyTickets)
modalContainer.addEventListener('click', function(event) {
    event.stopPropagation()
})