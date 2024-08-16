const rooms = [
    {
        id : 1,
        code : "oslo",
        name : "Oslo"  ,
        image : "oslo.jpg"
    },
    {
        id : 2,
        code : "newyork",
        name : "New York"  ,
        image : "newyork.jpg"
    },
    {
        id : 3,
        code : "lisbon",
        name : "Lisbon",
        image : "lisbon.jpg"
    },
    {
        id : 4,
        code : "berlin",
        name : "Berlin",
        image : "berlin.jpg"
    },
    {
        id : 5,
        code : "madrid",
        name : "Madrid",
        image : "madrid.jpg"
    }
]

export function getRooms () {
    return rooms;
} 
export function getRoomById (id : number) {
    return rooms.find((item) => item.id === id);
} 