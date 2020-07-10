const createArrayFromOneThroughN = n =>
    Array.from({ length: n }, (_, index) => index + 1)

export default createArrayFromOneThroughN
