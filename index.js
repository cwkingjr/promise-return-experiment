'use strict';

function promiseWithReturns(err) {
	return new Promise((resolve, reject) => {
        if (err) {
            console.log('promiseWithReturns: before reject');
            return reject('promiseWithReturns: error');
            console.log('promiseWithReturns: after reject');
        }
        console.log('promiseWithReturns: before resolve');
        return resolve('promiseWithReturns: Resolved');
        console.log('promiseWithReturns: after resolve');
	});
}

function promiseWithoutReturns(err) {
	return new Promise((resolve, reject) => {
        if (err) {
            console.log('promiseWithoutReturns: before reject');
            reject('promiseWithoutReturns: error');
            console.log('promiseWithoutReturns: after reject');
        }
        console.log('promiseWithoutReturns: before resolve');
        resolve('promiseWithoutReturns: Resolved');
        console.log('promiseWithoutReturns: after resolve');
	});
}

console.log('-- Invoking promiseWithReturns with error');
promiseWithReturns(true).catch(console.log);

console.log('-- Invoking promiseWithReturns no error');
promiseWithReturns(false).then(console.log);

console.log('-- Invoking promiseWithoutReturns with error');
promiseWithoutReturns(true).catch(console.log);

console.log('-- Invoking promiseWithoutReturns no error');
promiseWithoutReturns(false).then(console.log);

console.log('-- async results --');