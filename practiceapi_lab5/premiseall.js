Promise.all([
    new Promise(resolve => setTimeout(() => resolve(3), 3000)), // 1
    new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
    new Promise(resolve => setTimeout(() => resolve(1), 1000)) // 3
    ]).then(console.log); // 1