const { getUsersInRoom } = require('./users')

const rooms = []

const addRoom = (room) => {
    // Clean the data
    room = room.trim().toLowerCase()
    if (!rooms.includes(room)) {
        rooms.push(room)
    }
    return room
}

const removeRoom = (roomName) => {
    if (getUsersInRoom(roomName).length > 0) {
        return roomName
    }
    const index = rooms.findIndex(room => room === roomName)
    if (index !== -1) {
        return rooms.splice(index, 1)[0]
    }
}

const getAvailableRooms = () => rooms 

module.exports = {
    addRoom,
    removeRoom,
    getAvailableRooms
}
