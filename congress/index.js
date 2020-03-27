import { senators } from '../Data/senators.js'

// this is all about filter, map, reduce

const container = document.querySelector('.container')

const filterSenators = (prop, value) => {
    return senators.filter(senator => senator[prop] === value)
}

console.log(filterSenators('party', 'R'))
console.log(filterSenators('party', 'D'))
console.log(filterSenators('party', 'ID'))