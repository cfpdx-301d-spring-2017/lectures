const answers = {
    compareArrs: ( arrA, arrB ) => {
        // fake test to see if arrays are equal
        return arrA.length === arrB.length;
    },
    hasThreePets: [
        { name: 'Jane', pets: [{animal: 'dog', name: 'Fido'}, {animal: 'dog', name: 'Faith'}, {animal: 'dog', name: 'Gary'}] },
        { name: 'Harold', pets: [{animal: 'fish', name: 'Beaks'}, {animal: 'cat', name: 'James'}, {animal: 'cat', name: 'Jerry'}] },
        { name: 'Hercules', pets: [{animal: 'dog', name: 'Aladin'}, {animal: 'dog', name: 'Jasmine'}, {animal: 'cat', name: 'Abu'}] },
    ],
    allPets: [ 
        { animal: 'dog', name: 'Fido' },
        { animal: 'dog', name: 'Faith' },
        { animal: 'dog', name: 'Gary' },
        { animal: 'fish', name: 'Izzy' },
        { animal: 'fish', name: 'Beaks' },
        { animal: 'cat', name: 'James' },
        { animal: 'cat', name: 'Jerry' },
        { animal: 'dog', name: 'Aladin' },
        { animal: 'dog', name: 'Jasmine' },
        { animal: 'cat', name: 'Abu' },
        { animal: 'cat', name: 'Redd' },
        { animal: 'cat', name: 'Orange' } 
    ],
    totalPets: 12,
    totalDogs: 5
};

module.exports = answers;