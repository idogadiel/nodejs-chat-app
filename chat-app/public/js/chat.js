const socket = io()
const empty = ''

const eventTypes = {
    message: 'message'
}

socket.on('message', (messageText) => {
    console.log('messageText: ' + messageText)
    const conversationDiv = document.querySelector('#conversationDiv')
    conversationDiv.innerHTML = conversationDiv.innerHTML + '<br>' + messageText
})

document.querySelector('#send').addEventListener('click', (e) => {
    e.preventDefault()
    const textArea = document.querySelector('#textArea')

    socket.emit('message', textArea.value, (message)=> {
            console.log(message)
    })

    textArea.value = empty
})