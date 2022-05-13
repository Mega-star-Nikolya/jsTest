
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
  },
  {
    name: "Olya",
    salary: 2000
    }
];


const getWorthyWorkers = workers.filter(item => item.salary >= 1000 ).map(item =>item.name);

  console.log(getWorthyWorkers)

