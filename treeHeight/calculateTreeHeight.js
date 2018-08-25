var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question( '', (numberOfNodes) => {
    rl.question ('', (numbers) => {
        let i;
        let arr=[];
        let nodesArray = [];
        let rootNode;
        let height =1;
        let computedHeight =0;
        arr = numbers.split(' ');
        for (i=0; i<numberOfNodes; i++) {
            nodesArray.push([]);
        }

        for (i=0; i<numberOfNodes; i++) {
            if (arr[i] == -1) {
                rootNode = [i];
            } else {
                nodesArray[arr[i]].push([i]);
            }
        }

        function CalculateHeight (rootNode) {
            let newHeight = 0;
            for(let i=0; i<rootNode.length; i++) {
                console.log (`value of i ${i}`);
                let childNodes = [];
                childNodes = nodesArray[rootNode[i]];
                console.log(`this is child node ${childNodes}`);
                if (childNodes.length != 0) {
                    height+=1;
                    console.log(`Height is ${height}`);
                    newHeight = CalculateHeight(childNodes);
                    height-=1;

                    if (newHeight >= height && newHeight > computedHeight) {
                        computedHeight = newHeight;
                    }
                } else {
                    if (computedHeight < height){
                        computedHeight = height;
                    }
                }
                console.log(`new height ${newHeight}`);
                console.log(`Computed Heigth${computedHeight}`);
                console.log(`increase value of i ${i}`);
            }
            return height
        }

        CalculateHeight(rootNode);

        console.log(computedHeight);
        rl.close();
        process.stdin.destroy();
    });
});
