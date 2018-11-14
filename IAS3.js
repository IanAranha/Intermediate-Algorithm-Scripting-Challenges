//You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
//
//Note
//You have to use the arguments object.
//
//destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
//destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
//destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
//destroyer([2, 3, 2, 3], 2, 3) should return [].
//destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].
//destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan") should return [12,92,65]

function destroyer(arr) {
    var args = Array.prototype.slice.call(arguments,1)
    for(var i=0 ; i<arr.length; i++){
        for(let j =0; j < args.length; j++){
                if(arr[i] === args[j]){
                    delete arr[i]
                }
            }
        }
    return arr.filter(Boolean);
}

//destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

//destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));

//destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));

//destroyer([2, 3, 2, 3], 2, 3) should return [].
console.log(destroyer([2, 3, 2, 3], 2, 3));

//destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].
console.log(destroyer(["tree", "hamburger", 53], "tree", 53));

//destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan") should return [12,92,65]
console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"));
