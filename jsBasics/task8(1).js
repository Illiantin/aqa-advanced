function delayedLog (str, ms) {
    setTimeout(() => {
        console.log(str)
    }, ms)
}

test('test', 1000)