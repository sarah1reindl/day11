function worker(task, timeRequired) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${task.trim()} done`);
        }, timeRequired);
    });
}
async function factory(tasks) {
    const taskPromises = tasks.tasks.map(({ task, timeRequired }) => {
        return worker(task, parseInt(timeRequired)).then(result => {
            console.log(result);
            return result;
        });
    });
}
let tasks = {
    tasks: [
        {
            task: 'Teaching Astronomy',
            timeRequired: '500',
        },
        {
            task: 'Refill fuel',
            timeRequired: '1500',
        },
        {
            task: 'Repair module',
            timeRequired: '1000',
        },
    ],
};

worker("Going to work", 1000).then(value => {
    console.log(value);
});

factory(tasks);
