function CalculateLateFee(daysLate: number): number {
  return daysLate * 0.25;
}

function MaxBooksAllowed(age: number): number {
  if (age < 12) {
    return 3;
  } else {
    return 10;
  }
}

function privateFunc(): void {
  console.log("This is a private function ...");
}

function Purge<T>(inventory: Array<T>): Array<T> {
  // Remove all items from inventory of all items
  // return the purged items
  return inventory.splice(2, inventory.length);
}

export { CalculateLateFee, MaxBooksAllowed, Purge };
