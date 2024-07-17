const socket = io()
const $roomsListTemplate = document.querySelector('#rooms-list-template')

socket.on('roomsList', (rooms) => {
    console.log("From client: ", rooms)
    const html = Mustache.render($roomsListTemplate, { rooms })
    document.querySelector('#roomsList').insertAdjacentHTML('beforeend', html)
})
