function stack(stackOperation, stackValue) {
  var stackHolder = {
    count: 3,
    storage: [1, '{id: 1,value: "obj"}', "stringHolder", 46],
  };

  var push = function (value) {
    stackHolder.storage.push(value);
    stackHolder.count++;
    return stackHolder.storage;
  };

  var pop = function () {
    if (stackHolder.count === 0) {
      return [];
    }

    var poppedItem = stackHolder.storage[stackHolder.count];
    stackHolder.storage.shift();
    stackHolder.count--;
    return poppedItem;
  };

  var peek = function () {
    return stackHolder.storage[0];
  };

  var swap = function () {
    const firstElement = stackHolder.storage[0];
    const secondElement = stackHolder.storage[1];
    stackHolder.storage[0] = secondElement;
    stackHolder.storage[1] = firstElement;
    return stackHolder.storage;
  };

  switch (stackOperation) {
    case "push":
      return push(stackValue);
      break;
    case "pop":
      return pop();
      break;
    case "swap":
      return swap();
      break;
    case "peek":
      return peek();
      break;
    default:
      return stackHolder.storage;
  }
}

console.log(stack("push", String("null")));
// 1,{id: 1,value: "obj"},stringHolder,46,null
console.log(stack("swap"));
//{id: 1,value: "obj"},1,stringHolder,46
console.log(stack("default", String("23")));
// 1,{id: 1,value: "obj"},stringHolder,46
console.log(stack("pop", String("false")));
// 46
console.log(stack("push", "false"));
//1,{id: 1,value: "obj"},stringHolder,46,false
