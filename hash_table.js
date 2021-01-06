const hashFunction = (key, storageLimit) => {
    let hash = 0;
    for(let i = 0; i < key.length; i++){
        hash += key.charCodeAt(i);
    }
    return hash % storageLimit;
}

class HashTable {
    constructor(storageLimit){
        this.storage = [];
        this.storageLimit = storageLimit;
    }

    insertValue = (key, value) => {
        const index = hashFunction(key, this.storageLimit);
        if (this.storage[index] === undefined) {
            this.storage[index] = [[key, value]]
        } else {
            for (let i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] === key) {
                    this.storage[index][i] = [key, value];
                    return undefined;
                }
            }
            this.storage[index].push([key, value]);
        }
    }

    deleteValue = key => {
        const index = hashFunction(key, this.storageLimit);
        if (this.storage[index] === undefined) {
            return undefined;
        }
        for (let i = 0; i < this.storage[index].length; i++) {
            if (this.storage[index][i][0] === key) {
                this.storage[index].splice(i,1);
            }
        }
    }

    lookUpValue = key => {
        const index = hashFunction(key, this.storageLimit);
        if (this.storage[index] === undefined) {
            return undefined;
        }
        for (let i = 0; i < this.storage[index].length; i++) {
            if (this.storage[index][i][0] === key) {
                return this.storage[index][i][1];
            }
        }
    }

    printTable = () => {
        console.log(this.storage);
    }
}

const ht = new HashTable(5);

ht.insertValue('a','b');
ht.insertValue('c','d');
ht.insertValue('e','f');
ht.insertValue('g','h');
ht.insertValue('i','j');
ht.insertValue('k','l');
console.log(ht.lookUpValue('i'));
ht.deleteValue('a');
ht.insertValue('a','bbb');
ht.printTable();
