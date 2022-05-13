
const workers = [
  {
    name: "John",
    salary: 500
  },
  {
  name: "Mike",
  salary: 1300
  },
  {
  name: "Linda",
  salary: 1500
  }];

const getWorthyWorkers = (workersArr) => { 
  const workhyWorkers = [];

  workersArr.forEach(currentWorker => {
    if (currentWorker.salary >= 1000) {
            workhyWorkers.push(currentWorker.name);
          }
  })
//   for (let i = 0; i < workersArr.length; i++) {
//     const currentWorker = workersArr[i];
// 
//     if (currentWorker.salary >= 1000) {
//       workhyWorkers.push(currentWorker.name);
//     }
//   }

  return workhyWorkers;
};

  console.log(getWorthyWorkers(workers))