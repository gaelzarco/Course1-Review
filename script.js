let animals = document.querySelectorAll('.animal')
console.log(animals)

    let dogVotesCell = document.querySelector('#doggo-votes')

let dogVotes = localStorage.getItem('dog-votes')
if (dogVotes) {
    dogVotesCell.textContent = dogVotes
}

let dogVoteBtn = document.createElement('button')
dogVoteBtn.textContent = 'Vote for doggo'

dogVoteBtn.addEventListener('click', function(e) {
    let dogVotesCount = parseInt(dogVotesCell.textContent)
    dogVotesCount = dogVotesCount + 1
    dogVotesCell.textContent = dogVotesCount
    localStorage.setItem('dog-votes', dogVotesCount)
})

animals[0].append(dogVoteBtn)

    let catVotesCell = document.querySelector('#catto-votes')

let catVotes = localStorage.getItem('cat-votes')
if (catVotes) {
    catVotesCell.textContent = catVotes
}

let catVoteBtn = document.createElement('button')
catVoteBtn.textContent = 'Vote for catto'

catVoteBtn.addEventListener('click', function(e) {
    let catVotesCount = parseInt(catVotesCell.textContent)
    catVotesCount = catVotesCount + 1
    catVotesCell.textContent = catVotesCount
    localStorage.setItem('cat-votes', catVotesCount)
})

animals[1].append(catVoteBtn)

    let fishVotesCell = document.querySelector('#fish-votes')

let fishVotes = localStorage.getItem('fish-votes')
if (fishVotes) {
    fishVotesCell.textContent = fishVotes
}

let fishVoteBtn = document.createElement('button')
fishVoteBtn.textContent = 'Vote for "fish gold" lol'

fishVoteBtn.addEventListener('click', function (e) {
    let fishVotesCount = parseInt(fishVotesCell.textContent)
    fishVotesCount = fishVotesCount + 1
    fishVotesCell.textContent = fishVotesCount
    localStorage.setItem('fish-votes', fishVotesCount)
})

animals[2].append(fishVoteBtn)

let favoriteAnimal = document.querySelectorAll('.voting-table')

let favoriteAnimalBtn = document.createElement('button')
favoriteAnimalBtn.textContent = "Favorite animal!"

favoriteAnimalBtn.addEventListener('click', function(e) {
    let favoriteAnimalCount = parseInt(favoriteAnimal.textContent)
    for (let i = 0; i < favoriteAnimal.length; i++) {
        if (favoriteAnimalCount[i] > favoriteAnimalCount[i]) {
            favoriteAnimalCount[i] = favoriteAnimal
        }
    } window.alert ('and the favorite animal is:',favoriteAnimal)
    console.log(favoriteAnimalCount)
    console.log(favoriteAnimal)   
})

document.body.append(favoriteAnimalBtn)