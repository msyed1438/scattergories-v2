import React from 'react'
import { Box, Button, Form, FormField, Text, TextInput, Select } from 'grommet'

const GameGenerator = () => {
    const [value, setValue] = React.useState({
        name: '',
        gameRoom: '',
        categories: [],
        numberOfCategories: {},
    })

    const options = [
        { label: '1', value: 1 },
        { label: '2', value: 2 },
        { label: '3', value: 3 },
        { label: '4', value: 4 },
        { label: '5', value: 5 },
        { label: '6', value: 6 },
        { label: '7', value: 7 },
        { label: '8', value: 8 },
    ]

    const message = /[^a-zA-Z]/.test(value.gameRoom)
        ? 'Room name can only have letters'
        : undefined

    return (
        <div className="page-container">
            <Form
                value={value}
                onChange={nextValue => setValue(nextValue)}
                onReset={() => setValue({})}
                onSubmit={({ value }) => {
                    console.log(value)
                }}
            >
                <FormField
                    name="gameRoom"
                    label="Room Name"
                    required={true}
                    error={message}
                >
                    <TextInput
                        name="gameRoom"
                        placeholder="Only letters here"
                        maxLength={20}
                    />
                </FormField>

                <FormField name="name" label="Username" required={true}>
                    <TextInput name="name" />
                </FormField>
                <FormField
                    label="Number of Categories"
                    name="numberOfCategories"
                    required={true}
                >
                    <Select
                        name="numberOfCategories"
                        options={options}
                        labelKey="label"
                        valueKey="value"
                        required={true}
                    />
                </FormField>
                <Box direction="row" gap="medium" alignSelf="center">
                    <Button
                        type="submit"
                        primary
                        label="Submit"
                        color="#aec7e2"
                        active={/[^a-zA-Z]/.test(value.gameRoom)}
                    />
                    <Button type="reset" label="Reset" color="#aec7e2" />
                </Box>
            </Form>
        </div>
    )
}

export default GameGenerator
