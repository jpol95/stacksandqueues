const Stack = require('./Stack')

function main() {
    const starTrek = new Stack();
    starTrek.push("Kirk");
    starTrek.push("Spock");
    starTrek.push("McCoy");
    starTrek.push("Scotty");
    starTrek.pop();
    // console.log(isEmpty(starTrek));
    console.log(is_palindrome("dad"));
    console.log(is_palindrome("A man, a plan, a canal: Panama"));
    console.log(is_palindrome("1001"));
    console.log(is_palindrome("Tauhida"));
    // display(starTrek);
}

const peek = (stack) => {
    if (!stack.top) return null;
    return stack.top.data;
}

const is_palindrome = (s) => {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    let letterStack = new Stack();
    let compareString = '';
    for (let i = 0; i < s.length; i++){
        letterStack.push(s.charAt(i));
    }
    let currentNode = letterStack.top;
    while (currentNode !== null){
        compareString += letterStack.pop();
        currentNode = currentNode.next;
    }
    return s === compareString
}

const display = (stack) => {
    let result = "";
    let currentNode = stack.top;
    while (currentNode !== null){
        result += `  ${currentNode.data} \n ---------- \n `
        currentNode = currentNode.next;
    }
    console.log(result)
}

isEmpty = (stack) => {
    return (!stack.top)
}
main();