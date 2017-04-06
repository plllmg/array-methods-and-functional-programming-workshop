function forEach(callback, theArray) {
  /*
  This is a little hint to get you started ;)
  */
  for (var i = 0; i < theArray.length; i++) {

    callback(theArray[i]);

  }

  
}
/*
function map(mappingFunction, theArray) {
  var newArray = [];
  
  for (var i = 0; i < theArray.length; i++) {
    
      newArray.push(mappingFunction(theArray[i]))
      
  }
  return newArray;
  
}*/

function map(mappingFunction, theArray) {
  var newArray = [];
  
  forEach(function(element){
    
    newArray.push(mappingFunction(element))
    
  }, theArray)
  
  return newArray;
  
}

function filter(predicate, theArray) {

  var newArray = [];
  
  for (var i = 0; i < theArray.length; i++) {
    
    if (predicate(theArray[i])) {
      newArray.push(theArray[i])
    }
  }
  return newArray
}

function every(predicate, theArray) {
  
  for (var i = 0; i < theArray.length; i++) {
    
    if (!predicate(theArray[i])) {
      return false
    }
  }
  return true
  
}

function some(predicate, theArray) {
  for (var i = 0; i < theArray.length; i++) {
    
    if (predicate(theArray[i])) {
      return true
    }
  }
  return false
}

function indexOf(item, theArray) {
 for (var i = 0; i < theArray.length; i++) {
    
    if (item === theArray[i]) {
      return i
    }
  }
  return -1
}

function findIndex(predicate, theArray) {
  for (var i = 0; i < theArray.length; i++) {
    
    if (predicate(theArray[i])) {
      return i
    }
  }
  return -1
  //findIndex gives you more flexibility because of predicate
}

function first(n, theArray) {
  
  newArray = [];
  
  if (Array.isArray(n)){
    return n[0]
  }
  
  if (n < theArray.length){
      
    for (var i = 0; i < n; i++)
    {
      newArray.push(theArray[i]);
    }
    
    return newArray;
    
  } else if (n >= theArray.length){
    return theArray
  }
  
}

function last(n, theArray) {
    newArray = [];
  
  if (Array.isArray(n)){
    return n[n.length-1]
  }
  
  if (n < theArray.length){
    var count = 0;
    for (var i = n; i > 0; i--)
    {
      newArray.push(theArray[theArray.length-n+count]);
      count++
    }
    
    return newArray;
    
  } else if (n >= theArray.length){
    return theArray
  }

}

function pluck(property, arrayOfObjects) {
  
  var newArray = [];
  
  for (var i = 0; i < arrayOfObjects.length; i++){  
    newArray.push(arrayOfObjects[i][property])

  }
  
  return newArray
  
}

function flatten(theArray) {
  var newArray = [];
  
  for (var i = 0; i < theArray.length; i++){
    
    if (!Array.isArray(theArray[i])){
      newArray.push(theArray[i])
    } else {
      newArray = newArray.concat(flatten(theArray[i]))  
    }
    

  }
  
  return newArray

}

function negate1(predicate) {
  
  return function () {
    return !predicate.apply(this, arguments);
  };

}

function negate2(predicate) {
  
  return function () {
  return !predicate.apply(this, arguments);
  };
}

function compose1(fun1, fun2) {

}

function compose2(arrOfFuncs) {

}

/***** DO NOT EDIT AFTER THIS LINE *****/
module.exports = {
    forEach: forEach,
    map: map,
    filter: filter,
    every: every,
    some: some,
    indexOf: indexOf,
    findIndex: findIndex,
    first: first,
    last: last,
    pluck: pluck,
    flatten: flatten,
    negate1: negate1,
    negate2: negate2,
    compose1: compose1,
    compose2: compose2
};
