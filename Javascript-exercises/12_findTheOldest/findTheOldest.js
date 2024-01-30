const getAge = function getAgeBirthMinusDeath(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
};

const findTheOldest = function (people) {
    let oldest = {
        yearOfBirth: 2024,
    };

    people.forEach(person => {
        if (getAge(oldest.yearOfBirth, oldest.yearOfDeath) <
            getAge(person.yearOfBirth, person.yearOfDeath)) {
          
            oldest = person;
        }

    });
    return oldest;
};


// Do not edit below this line
module.exports = findTheOldest;
