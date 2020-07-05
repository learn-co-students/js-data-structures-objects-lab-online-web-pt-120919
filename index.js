// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, k, v){

    /* Alternative answer
    
    const copy = {...driver};
    copy[k] = v;
    return copy;*/

    return Object.assign({}, driver, { [k]: v });

};

function destructivelyUpdateDriverWithKeyAndValue(driver, k, v){

    /* Alternative answer

    driver[k] = v;
    return driver;*/

    return Object.assign( driver, { [k]: v });
}

function deleteFromDriverByKey(driver, k) {
    let copy = Object.assign({}, driver);
    delete copy[k];
    return copy;
}

function destructivelyDeleteFromDriverByKey(driver, k){
    delete driver[k];
    return driver;
}