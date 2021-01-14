const Stack = require('./Stack')

function main() {
    const starTrek = new Stack();
    starTrek.push("Kirk");
    starTrek.push("Spock");
    starTrek.push("McCoy");
    starTrek.push("Scotty");
    starTrek.pop();
    console.log(isEmpty(starTrek))
    display(starTrek)
}

const peek = (stack) => {
    if (!stack.top) return null;
    return stack.top.data;
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