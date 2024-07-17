const socket = io()
const $roomsListTemplate = document.querySelector('#rooms-list-template')

socket.emit('sendRoomsList')
socket.on('roomsList', (rooms) => {
    const html = Mustache.render($roomsListTemplate, { rooms })
    document.querySelector('#roomsList').insertAdjacentHTML('beforeend', html)
})
