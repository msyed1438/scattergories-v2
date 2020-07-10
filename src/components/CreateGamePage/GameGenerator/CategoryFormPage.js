import React from 'react'
import RouteTransitionWrapper from '../../AnimationWrappers/RouteTransitionWrapper/RouteTransitionWrapper'

import CategoryForm from './CategoryForm'

const CategoryFormPage = () => {
    return (
        <div>
            <RouteTransitionWrapper>
                <CategoryForm />
            </RouteTransitionWrapper>
        </div>
    )
}

export default CategoryFormPage
