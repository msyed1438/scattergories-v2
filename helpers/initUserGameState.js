// const initializeArrayOfLengthN = n => new Array(n).fill('<category>')

// e.g. generateInitialCategoryState(3) gives us {category1: '', category2: '', category3: ''}

const initUserGameState = categories => {
    let categoryIndex = {}

    for (let i = 0; i < categories.length; i++) {
        let category = categories[i];
        categoryIndex[category] = ``
    }

    return categoryIndex
}

export default initUserGameState

const exampleState = initUserGameState(['Food', 'Cities']) //---> {Food: '', Cities: ''}