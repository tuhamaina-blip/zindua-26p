// function hello(name, callback) {
//     console.log(`Hello {name}!`);
//     callback();
// }
// function greeting() {
//     console.log('Welcome back.');
// }

// hello('James, greeting');

// function sayHello() {
//     console.log("Welcome to Callbacks");
// }

// function sayName(name) {
//     console.log(`Hey ${name}! Come back here!`);
// }

// setTimeout(sayHello, 5000);
// sayName("Abbie");



function task1() {
        return new Promise ((resolve) => {
            setTimeout( () => {
        console.log("Task one completed");
        resolve();
    },1000);
    })
        
};
function task2() {
    return new Promise((resolve) => {
        setTimeout( () => {
        console.log("Task two completed");
        resolve();
    },1000);
    })
    
};
function task3() {
    return new Promise((resolve) => {
        setTimeout( () => {
        console.log("Task three completed");
        resolve();
    },1000);
    })
    
};

// // task1(() => {
// //     task2(() => {
// //         task3(function() {
// //             console.log("All tasks completed")
// //         })
// //     })
// // })

// Promise.all([task1(), task2(), task3()])
// .then((results) =>  {
//     console.log("All tasks are completed", results)
// })
// .catch((error) => {
//     console.error("Failed because one of the tasks are failed:", error.message);
// })


// task1()
// .then(() => task2())
// .then(() => task3())
// .then(() => {
//     console.log("All tasks completed")
// })
// .catch((error) => {
//     console.error("An error occurred:", error);
// });

// // Promises with async await

async function runTasks (){
    try {
        //Risky code
        await task1();
        await task2();
        await task3();
        console.log("All tasks completed")
    } catch (error) {
        console.log("An error occurred:", error);
    }
};

// runTasks();

login('Matthew', hello)
function login(username, callback) {
    console.log(`Welcome back ${username}`)
    callback();
}

function hello() {
    console.log("Login to access the dashboard")
}

function fetchUserprofile() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("1. Profile loaded")
            resolve({userId: 42, name: "Jerome"});
        }, 1000)
    });
}

function fetchUserPosts(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Posts loaded for user ${userId}`)
            resolve(["Post A", "Post B", "Post C"])
        }, 1500)
    });
}

fetchUserprofile()
.then((user) => {
    return fetchUserPosts(user.userId)
})

.then((posts) => {
    console.log("dashboard fully loaded. User posts:", posts)
})
.catch((error) => {
    console.error("Something went wrong while loading data:", error)
})
