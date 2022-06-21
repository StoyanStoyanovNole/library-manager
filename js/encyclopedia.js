import { ReferenceItem } from "./classes";
export default class Encyclopedia extends ReferenceItem {
    constructor(newTitle, newYear, edition) {
        super(newTitle, newYear);
        this.edition = edition;
    }
    printItem() {
        super.printItem();
        console.log(`Edition ${this.edition} (${this.year})`);
    }
    printCitation() {
        console.log(`${this.title} - ${this.year}`);
    }
}
