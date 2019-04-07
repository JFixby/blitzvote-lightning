import { AppConfig } from 'blockstack'

export const appConfig = new AppConfig(['store_write', 'publish_data'])
export const ANIMALS = [
  {
    id: 'cat',
    name: 'Cat',
    superpower: 'Has 9 lives.'
  },
  {
    id: 'dog',
    name: 'Dog',
    superpower: 'Catching frisbees.'
  },
  {
    id: 'lion',
    name: 'Lion',
    superpower: 'Roaring loudly.'
  }]

export const TERRITORIES = [
  {
    id: 'forest',
    name: 'Forest',
    superpower: 'Trees!'
  },
  {
    id: 'tundra',
    name: 'Tundra',
    superpower: 'Let it snow!'
  },
  {
    id: 'westeros',
    name: 'Westeros',
    superpower: 'oooooo!'
  },
  
]

export const ME_FILENAME = 'me.json'
export const SUBJECTS_FILENAME = 'subjects.json'
export const EXPLORER_URL = 'https://explorer.blockstack.org'


export const OTHER_KINGDOMS = [
  {
    app: 'https://animal-kingdom-1.firebaseapp.com',
    ruler: 'larry.id'
  },
  {
    app: 'http://localhost:3001',
    ruler: 'larz.id'
  },
  {
    app: 'https://decentralised-islands.netlify.com',
    ruler: 'yannael_leborgne.id'
  },
  {
      app: 'https://thirsty-jang-0c0a17.netlify.com',
      ruler: 'ma1222042.id.blockstack'
  }
]


export const DEFAULTCONFIGUREDVOTE = {
  title: "Which cryptocurrency is the coolest?",
  options: [
    {
      name: "Bitcoin",
      invoice: "lnbc2500u1pvjluezpp5qqqsyqcyq5rqwzqfqqqsyqcyq5rqwzqfqqqsyqcyq5rqwzqfqypqdq5xysxxatsyp3k7enxv4jsxqzpuaztrnwngzn3kdzw5hydlzf03qdgm2hdq27cqv3agm2awhz5se903vruatfhq77w3ls4evs3ch9zw97j25emudupq63nyw24cg27h2rspfj9srp"
    },
    {
      name: "Ethereum",
      invoice: "dsfargegs;"
    },
    {
      name: "Nano",
      invoice: "hunter2"
    },
  ]
}

export const DEFAULTVOTERESULTS = {
  title: "Which cryptocurrency is the coolest?",
  votes: [
    {
      vote: "Bitcoin",
      voter: "Steve"
    },
    {
      vote: "Ethereum",
      voter: "Dave"
    },
    {
      vote: "Nano",
      voter: "Kev"
    },
    {
      vote: "Bitcoin",
      voter: "Fiona"
    },
    {
      vote: "Bitcoin",
      voter: "Rob"
    }
  ]
}
