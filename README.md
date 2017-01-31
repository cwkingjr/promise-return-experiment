# promise-return-experiment

Do you need to use return when calling javascript promise resolve or reject statements?

I see lots of examples that do not.

Since I read that promises are immutable once fullfilled (either resolved or rejected), 
I figured it was reasonable that some magic inside the promise would break out of the 
code block when either of these are called, preempting the need to include the return.

For example:

    resolve('resolution value');

Instead of:

    return resolve('resolution value');

However, while working on a project with Chip King (https://github.com/charwking/), 
he said that we DID need to use the return to prevent further code execution after 
the resolve or reject.

This project was to test whether/not that was true.

It turns out that Chip was right.

See index.js and output.txt.