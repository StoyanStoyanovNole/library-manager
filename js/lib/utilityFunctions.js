function CalculateLateFee(daysLate) {
    return daysLate * 0.25;
}
function MaxBooksAllowed(age) {
    if (age < 12) {
        return 3;
    }
    else {
        return 10;
    }
}
function privateFunc() {
    console.log("This is a private function ...");
}
function Purge(inventory) {
    // Remove all items from inventory of all items
    // return the purged items
    return inventory.splice(2, inventory.length);
}
export { CalculateLateFee, MaxBooksAllowed, Purge };
