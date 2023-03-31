class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');
    this.buttonEle = document.querySelector('#hide-message-button')
    this.searchBar = document.querySelector('#message-input')
    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });
  
  }
  hideMessage(){
    const main = document.querySelector('#message')
    main.remove()
  }
  displayMessage() {
   const message = document.createElement('div')
   const bar = this.searchBar.value
   message.id = 'message';
   message.innerText = bar;
   document.querySelector('#main-container').append(message)

  }
}

module.exports = MessageView;