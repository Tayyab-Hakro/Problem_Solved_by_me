let ArrofObj = [
    { name: "Ali", mark: 40 },
    { name: "tayyab", mark: 20 },
    { name: "Billionaire", mark: 80 }
];

let topStudent = ArrofObj[0]; // Assume first student is top scorer

for (let student of ArrofObj) {
    if (student.mark > topStudent.mark) {
        topStudent = student;
    }
}

console.log(topStudent); // Output: { name: "Billionaire", mark: 80 }
