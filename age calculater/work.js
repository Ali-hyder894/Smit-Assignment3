function findDayOfBirth(year, monthName, day) {

    const monthsOfYear = [
        'January', 'February', 'March', 'April', 'May', 'June', 
        'July', 'August', 'September', 'October', 'November', 'December'
    ];


    const month = monthsOfYear.indexOf(monthName);
    
    if (month === -1) {
        alert("Invalid month name! Please enter a valid month.");
        return;
    }


    const birthDate = new Date(year, month, day);
    

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const dayOfWeek = birthDate.getDay();
    
    return daysOfWeek[dayOfWeek];
}


const year = prompt("Enter your birth year (e.g., 1990):");
const monthName = prompt("Enter your birth month name (e.g., July):");
const day = prompt("Enter your birth day (e.g., 15):");


if (year && monthName && day) {
    const birthDay = findDayOfBirth(year, monthName, day);
    alert(`You were born on a ${birthDay}.`);
} else {
    alert("Please fill all the prompts (year, month, and day) before proceeding.");
}
