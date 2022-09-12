function gradingStudents(grades) {
    let output = []
    let a = grades.map(g => {
            if(g >= 38) {
                if(g % 5 === 0) {
                output.push(g)
                }
                if((g+1) % 5 === 0) {
                output.push(g+1)
                }
                if((g+2) % 5 === 0) {
                output.push(g+2)
                }
                if((g+3) % 5 === 0 || (g+4) % 5 === 0){
                output.push(g)
                }
            }
            else {
                output.push(g)
            }
        })
        console.log(output);
}
const grades = [73, 67, 38, 33];
gradingStudents(grades);