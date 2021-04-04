const costcoList = require('../shopping/costco.json');
const groceryList = require('../shopping/groceries.json');
const hardwareList = require('../shopping/hardware.json');

const printList = (list) => {
    for (const listItem of  list){
        console.log(listItem);
    }
}
