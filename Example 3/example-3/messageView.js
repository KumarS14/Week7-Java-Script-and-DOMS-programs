class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');
    this.buttonEle = document.querySelector('#hide-message-button')
    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });
    this.buttonEle.addEventListener('click',() => {
      this.hideMessage();
    });
  }
  hideMessage(){
    const main = document.querySelector('#message')
    main.remove()
  }
  displayMessage() {
   const message = document.createElement('div')
   message.innerText = "This is a button";
   message.id = 'message';
   document.querySelector('#main-container').append(message)

  }
}

module.exports = MessageView;