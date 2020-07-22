// Write your solution in this file!


const driver = {};

function updateDriverWithKeyAndValue(obj, key, value) { // returns a driver with the original key value pairs and the new key value pair
    const newDriver = Object.assign({}, obj) // it does not modify the original driver, but rather returns a clone with the new data

    newDriver[key] = value;
    
    return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) { // updates `driver` with the given `key` and `value` (it is destructive) and returns the entire updated driver
    obj[key] = value;

    return obj;
}

function deleteFromDriverByKey(obj, key) { // deletes `key` from a clone of driver and returns the new driver (it is non-destructive)
    const newDriver = Object.assign({}, obj) // does not modify the original driver (it is non-destructive)

    delete newDriver[key];

    return newDriver;
}

function destructivelyDeleteFromDriverByKey(obj, key) { // returns driver without the delete key/value pair
    delete obj[key]; // modifies the original driver

    return obj;
}