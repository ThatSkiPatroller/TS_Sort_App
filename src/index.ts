class Sorter {
    constructor(public collection: number[] | string | LinkedList) {}

    sort (): void {
        const { length } = this.collection;

        for (let i=0; i<length; i++) {
            for (let j=0; j < length - i -1; j++) {
                if (this.collection instanceof LinkedList) {
                    
                }

                // All of this only works if collection is number []
                // If collection is an array of numbers:
                if (this.collection instanceof Array) {
                    // collection === number[]
                    if (this.collection[j] > this.collection[j + 1]) {
                        const leftHand = this.collection[j];
                        this.collection[j] = this.collection[j+1];
                        this.collection[j+1] = leftHand;
                    }
                }
                // Only going to work if collection is string
                // If collection is a string, do this logic instead:
                if (typeof this.collection === 'string') {
                    this.collection.
                }
            }
        }
    }
}

const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);