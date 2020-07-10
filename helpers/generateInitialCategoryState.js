// const initializeArrayOfLengthN = n => new Array(n).fill('<category>')

// e.g. generateInitialCategoryState(3) gives us {category1: '', category2: '', category3: ''}

const generateInitialCategoryState = n => {
    let categoryIndex = {}

    for (let i = 0; i < n; i++) {
        let key = `category${i + 1}`

        categoryIndex[key] = ``
    }

    return categoryIndex
}

export default generateInitialCategoryState
