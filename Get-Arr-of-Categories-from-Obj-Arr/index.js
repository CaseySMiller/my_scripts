const objArray = [
    { name: 'John', age: 21, category: 'student' },
    { name: 'Peter', age: 31, category: 'teacher' },
    { name: 'Kate', age: 21, category: 'janitor' },
    { name: 'Mike', age: 21, category: 'student' },
]


// console logs "Category 1: student" and "Category 2: teacher" and "Category 3: janitor"
const getCats = async () => {
    const catArray = [];
    await objArray.map(obj => {
        if (!catArray.includes(obj.category)) {
            catArray.push(obj.category);
            return;
        } else {
            return;
        }
    })
    catArray.forEach((cat, i) => console.log(`Category ${i+1}: ${cat}`));
    return true;
}
getCats();
