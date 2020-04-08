const data = [
  {
    id: 1,
    notes:[
      {id: 1, message: 'wash the car', type: 'plan'},
      {id: 2, message: 'file taxes', type: 'do'},
      {id: 3, message: 'waste time', type: 'delete'}
    ]
  },
  {
    id: 2,
    notes:[]
  },
  {
    id: 3,
    notes:[]
  },
  {
    id: 4,
    notes:[]
  }
];

const users = [
  { email: "d_bille@yahoo.com", password: "123", id: 1 },
  { email: "swanson@parks.rec", password: "whiskey", id: 2 },
  { email: "knope@parks.rec", password: "pancakes", id: 3 },
  { email: "haverford@parks.rec", password: "e720", id: 4 },
];

module.exports = { data, users };
