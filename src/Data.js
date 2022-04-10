
 export const test = () => {
    return new Promise((resolve, reject) => {
        resolve(data());
    });
 
};

const data = () => {
    return [
        {id: 1, link:"https://www.youtube.com/watch?v=dH6A6FxfAAI", author:"Djadja & Dinaz", image: "https://imgur.com/lhU55g2.jpg", description: "Djadja & Dinaz #1"},
        {id: 2, link:"https://www.youtube.com/watch?v=hVOs8DLRAiY", author:"Ninho", image:"https://i.imgur.com/bDGckY3.jpg", description:"Ninho #2"},

    ];
};