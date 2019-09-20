// CODE here for your Lambda Classes
class Person {
    constructor(attributes) {
        this.newName = attributes.name,
            this.newAge = attributes.age,
            this.newLocation = attributes.location
    } // methods here
    speak() {
        return `Hello my name is ${this.newName}, I am from  ${this.newLocation}`;
    }

} // closesperson

const mack = new Person({
    name: 'Mack',
    location: 'Kansas',
    age: 38

});

const sharon = new Person({
    name: 'Sharon',
    location: 'Detroit',
    age: 52

});


console.log(mack.speak());
console.log(sharon.speak());

class Instructor extends Person {
    constructor(InstructorAttributes) {
        super(InstructorAttributes); // super replaces parent.call
        this.newSpecialty = InstructorAttributes.specialty
        this.newFavLanguage = InstructorAttributes.favLanguage
        this.newCatchPhrase = InstructorAttributes.catchPhrase
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
    aboutMe() {
        return `Hi my name is ${this.newName}, I am ${this.newAge} and I live in 
${this.newLocation}. My favorite programming language is ${this.newFavLanguage}. 
${this.newSpecialty} development is what I do. So as we say in ${this.newLocation}...
"${this.newCatchPhrase}" `
    }


}

const ryan = new Instructor({
    name: 'Ryan',
    location: 'Maryland',
    age: 32,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Love will conquer all`
});

const steffi = new Instructor({
    name: 'steffi',
    location: 'New Jersey',
    age: 28,
    favLanguage: 'Ruby on Rails',
    specialty: 'Database',
    catchPhrase: `This is it`
});


console.log(ryan.aboutMe())
console.log(steffi.aboutMe())

class Student extends Person {
    constructor(StudentAttributes) {
        super(StudentAttributes); // super replaces call
        this.newStudentPreviousBackground = StudentAttributes.StudentPreviousBackground
        this.newClassName = StudentAttributes.ClassName
        this.newFavSubjects = StudentAttributes.FavSubjects
        this.newlistsSubjects = StudentAttributes.listsSubjects
    }
    listsSubjects(subject) {
        return `${subject}`
    }

    PRAssignment(student, subject) {
        return `${student} has submitted a PR for ${subject}`
    }

    sprintChallenge(student, subject) {
        return `${student} has begun sprint challenge on ${subject}`
    }

}

const sally = new Student({
    name: 'Sally',
    location: 'Bronx, New York',
    age: 37,
    background: 'JavaScript',
    className: 'CS 32',
    favsubjects: ['Html', 'CSS', 'JavaScript'],

});


console.log(sally.PRAssignment('sally', 'js'));
console.log(sally.sprintChallenge('Sally', 'Advance JS-III'));

class ProjectManager extends Instructor {
    constructor(PMAttributes) {
        super(PMAttributes);
        this.newGradClassName = PMAttributes.GradClassName
        this.newFavInstructor = PMAttributes.FavInstructor
    }

    standUp(name, channel) {
        return `${name} announces to ${channel}, @channel standy times!​​​​​`
    }

    debugsCode(name, student, subject) {
        return `${name} debugs ${student}'s code on ${subject}`
    }

}

const sam = new ProjectManager({
    name: 'Sam Wright',
    location: 'California',
    age: 38,
    gradClassName: 'C51',
    favInstructor: 'Sean',
    catchPhrase: `Big, bad, bold and beautiful`
});

console.log(sam.debugsCode('Sam-W', 'Sally Field', 'Javascript'));
console.log(sam.debugsCode('Wes', 'Brit Hemming', 'Javascript'));
console.log(sam.standUp('Sam-W', 'web24'));