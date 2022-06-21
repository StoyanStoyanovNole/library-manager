class UniversityLibrarian {
    assistCustomer(custName) {
        console.log(this.name + " is asssisting " + custName);
    }
}
class ReferenceItem {
    constructor(title, year) {
        this.title = title;
        this.year = year;
        console.log("Creating a reference item index....");
        console.log(`Department ${ReferenceItem.department} `);
    }
    get publisher() {
        return this._publisher.toUpperCase();
    }
    set publisher(newPublisher) {
        this._publisher = newPublisher;
    }
    printItem() {
        console.log(`${this.title} was published in ${this.year}`);
    }
}
ReferenceItem.department = "Research";
export { UniversityLibrarian, ReferenceItem };
