const journals = [
    {
        id : 1,
        code : "idt22",
        name : "Interior Design Trends 2022"  ,
        image : "journal1.jpg",
        category : "trends",
        date : "JULY 21, 2022",
        read : 12,
        author : "Jakob Gronberg",
    },
    {
        id : 2,
        code : "minint",
        name : "Minimal Interior"  ,
        image : "journal2.jpg",
        category : "design",
        date : "JULY 21, 2022",
        read : 7,
        author : "Austin Verstapen",
    },
    {
        id : 3,
        code : "ditf",
        name : "Design in the Future"  ,
        image : "journal3.jpg",
        category : "future",
        date : "JULY 21, 2022",
        read : 9,
        author : "Ralph Anatoli",
    },
]

export function getJournals () {
    return journals;
} 
export function getJournalById (id : number) {
    return journals.find((item) => item.id === id);
} 
export function getJournalByCode (code : string) {
    return journals.find((item) => item.code === code);
} 