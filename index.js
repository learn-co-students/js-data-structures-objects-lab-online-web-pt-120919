// Write your solution in this file!
let driver = {}

function updateDriverWithKeyAndValue(driverObject, key, value){
const newDriver = {...driverObject};
newDriver[key] = value;
return newDriver;

}

function destructivelyUpdateDriverWithKeyAndValue(driverObject, key, value){
    driverObject[key] = value;
    return driverObject;
    }

function deleteFromDriverByKey(obj, key){
    const newDriver = {...obj}
    delete newDriver[key]
    return newDriver
}

function destructivelyDeleteFromDriverByKey(obj, key){
    delete obj[key]
    return obj
}