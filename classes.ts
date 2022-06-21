import * as Interfaces from "./interfaces";

class UniversityLibrarian implements Interfaces.Librarian {
  name: string;
  email: string;
  department: string;

  assistCustomer(custName: string) {
    console.log(this.name + " is asssisting " + custName);
  }
}

abstract class ReferenceItem {
  private _publisher: string;
  static department: string = "Research";

  get publisher(): string {
    return this._publisher.toUpperCase();
  }

  set publisher(newPublisher: string) {
    this._publisher = newPublisher;
  }
  constructor(public title: string, protected year: number) {
    console.log("Creating a reference item index....");
    console.log(`Department ${ReferenceItem.department} `);
  }

  printItem(): void {
    console.log(`${this.title} was published in ${this.year}`);
  }
}

export { UniversityLibrarian, ReferenceItem };
