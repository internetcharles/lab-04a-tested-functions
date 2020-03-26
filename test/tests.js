const test = QUnit.test;

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const x = 18;
    const y = 3;
    const expected = 15;

    //Act 
    // Call the function you're testing and set the result to a const
    const minus = subtract(x, y);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(minus, expected);
});

function multi(x, y) {
    return x * y;
}

test('test multiply function', function(assert) {
    const x = 9;
    const y = 10;
    const expected = 90;

    const multiplied = multi(x, y);

    assert.equal(multiplied, expected);

});

function divide(x, y) {
    return x / y;

}

test('test divide', function(assert) {
    const x = 9;
    const y = 3;
    const expected = 3;

    const divided = divide(x, y);

    assert.equal(divided, expected);
});

test('test divide infinity', function(assert) {
    const x = 7;
    const y = 0;
    const expected = Infinity;

    const divided = divide(x, y);

    assert.equal(divided, expected);
});

// Testing if number is even

function isEven(x) {
    return x % 2 === 0;
}

test('test get even', function(assert) {
    const x = 2;
    const expected = true;

    const evenTest = isEven(x);

    assert.equal(evenTest, expected);

});

// Testing get array

function getNumbers(x) {
    let n = [];
    for(let i = 1; i <= x; i++) {
        n.push(i);}
    return n;
}

test('test getNumbers', function(assert) {
    const x = 9;
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const evenSet = getNumbers(x);

    assert.deepEqual(evenSet, expected);
});




// Even skip

function getEvenNumbers(x) {
    let n = [];
    for(let i = 1; i < x; i++) {
        if(isEven(i) === true) {
            n.push(i);
        }
    }
    return n;
}

test('test getEvenNumbers', function(assert) {
    const x = 9;
    const expected = [2, 4, 6, 8];

    const evenSet = getEvenNumbers(x);

    assert.deepEqual(evenSet, expected);
});

// function fizzBuzz(x) {
//     let n = [];
//     for (let i = 1; i < x; i++); {
//         if(i % 3 === 0 ! i % 5 === 0); {
//             n.push('fizz');
//         }
//         else if(i % 5 === 0); {
//             n.push('fizzbuzz');
//         }
//         else if(i % 5 === 0, and, i % 3 === 0); {
//             n.push('fizzbuzz');
//         }
//         else if {
//             n.push(i);
//         }
//     }
//     return n;
// }

// test('test fizzBuzz', function(assert) {
//     const x = 16;
//     const expected = [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz'];

//     const evenSet = fizzBuzz(x);

//     assert.deepEqual(evenSet, expected);
// });