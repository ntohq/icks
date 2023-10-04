'use strict';
import assert from 'assert'

function forceTest()
{
    return 'HeHeHe'
}

assert.strictEqual(forceTest(), 'HeHeHe');
console.info('docs tests passed');