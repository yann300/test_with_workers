self.onmessage = function(n) {
    console.log('sub worker called', n)

    for (var k = 0; k < 10000000; k++) {
        if (k % 10000 === 0) {
            console.log('still running', n.data, k)
        }
    }

    console.log('finishing', n.data)
};
