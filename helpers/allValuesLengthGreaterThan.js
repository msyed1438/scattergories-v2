const allValuesLengthGreaterThan = (num, obj) => {
    const values = Object.values(obj)
    console.log('Object values: ', values)

    for (let i = 0; i < values.length; i++) {
        if (values[i].length <= num) {
            return false
        }
    }

    return true
}

export default allValuesLengthGreaterThan;
