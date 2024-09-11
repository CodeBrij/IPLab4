// Creating the Person class
class Person {
    constructor(name, age, gender, address, contact) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.address = address;
        this.contact = contact;
    }

    // Regular method to get person details
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}, Address: ${this.address}, Contact: ${this.contact}`;
    }

    // Arrow function as a member function
    getContact = () => {
        return `Person's contact is ${this.contact}`;
    }

    // Static method (non-member method)
    static greet() {
        return "Hello! Welcome to the system.";
    }
}

// Creating the Student class by extending the Person class
class Student extends Person {
    constructor(name, age, gender, address, contact, rollNo, course, year) {
        super(name, age, gender, address, contact); // Call the parent class constructor
        if (rollNo <= 0) {
            throw new Error("Roll number must be greater than zero."); // Generate an exception for invalid roll number
        }
        this.rollNo = rollNo;
        this.course = course;
        this.year = year;
    }

    // Overriding the getDetails method to add student-specific details
    getDetails() {
        return `${super.getDetails()}, Roll No: ${this.rollNo}, Course: ${this.course}, Year: ${this.year}`;
    }

    // Arrow function as a member function in Student class
    getCourseInfo = () => {
        return `Student is enrolled in ${this.course}, Year: ${this.year}`;
    }

    // Additional method to demonstrate roll number validation
    getRollNo = () => {
        return `Student's roll number is ${this.rollNo}`;
    }
}

// Demonstrating the usage
try {
    // Creating a person object
    const person = new Person("Alice", 30, "Female", "123 Main St, NY", "+1234567890");
    console.log(person.getDetails()); // Output: Name, Age, Gender, Address, and Contact of the person
    console.log(person.getContact()); // Output: Person's contact is +1234567890
    console.log(Person.greet()); // Static method usage: Output: Hello! Welcome to the system.

    // Creating a student object
    const student = new Student("Bob", 20, "Male", "456 Maple Ave, LA", "+0987654321", 101, "Computer Science", "Second Year");
    console.log(student.getDetails()); // Output: Name, Age, Gender, Address, Contact, Roll No, Course, and Year of the student
    console.log(student.getCourseInfo()); // Output: Student is enrolled in Computer Science, Year: Second Year
    console.log(student.getRollNo()); // Output: Student's roll number is 101

    // Testing exception
    const invalidStudent = new Student("John", 18, "Male", "789 Oak St, SF", "+1122334455", 0, "Mechanical Engineering", "First Year");
    // Uncomment the above line to see exception: Error: Roll number must be greater than zero.

} catch (error) {
    console.error(error.message); // Handling invalid roll number error
}
