import {AppConfig} from 'blockstack'

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
            invoice: ""
        },
        {
            name: "Ethereum",
            invoice: ";"
        },
        {
            name: "Decred",
            invoice: ""
        },
        {
            name: "Nano",
            invoice: ""
        },
    ]
}

export const DEFAULTVOTERESULTS = {
    title: "Which cryptocurrency is the coolest?",
    votes: [
        {
            vote: "Bitcoin",
            voter: "4lrci0itn8i1k.id.blockstack"
        },
        {
            vote: "Bitcoin",
            voter: "samsancho.id.blockstack"
        },
        {
            vote: "Bitcoin",
            voter: "doomer45609.id.blockstack"
        },
        {
            vote: "Bitcoin",
            voter: "tripledimanis357.id.blockstack"
        },
        {
            vote: "Ethereum",
            voter: "pixelattack788.id.blockstack"
        },
        {
            vote: "Nano",
            voter: "bix08apple.id.blockstack"
        },
        {
            vote: "Decred",
            voter: "fiona45.id.blockstack"
        },
        {
            vote: "Bitcoin",
            voter: "robert988.id.blockstack"
        }
    ]
}
