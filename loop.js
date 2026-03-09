//for loop, for of loop, for in loop


for (let i = 10; i > 0; i--) {
    console.log(i)
}

const person = {
    name: "CEE ONE",
    age: 40,
    isStudent: true,
    isPresent: true
}

for (let key in person) {
    console.log(`${key}: ${person[key]}`)
}

const students = ["Wema", "CEE ONE", "IOS", "MR.OLIVER", "CLARE", "HABEEB", "EBUBE"]

for (let student of students) {
    console.log(`Hope say e dey flow ${student}`)
}

const scores = [40, 59, 89, 99, 78, 34, 22, 31, 67, 87, 98, 76, 54, 32, 10, 98, 76, 54, 32, 10]

for (let score of scores) {
     switch (true) {
        case score >= 70:
            console.log("Grade A")
            break;

            case score >= 60:
                console.log("Grade B")
                break;

                case score >= 50:
                    console.log("Grade C")
                    break;

                    case score >= 40:
                        console.log("Grade D")
                        break;

                        case score < 30:
                            console.log("Grade F")
                            break;

                            default:
                                console.log("Invalid score")
                                break;
    }
}


