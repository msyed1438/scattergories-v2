import React, { useState } from 'react'

import {
    Anchor,
    Box,
    Button,
    Collapsible,
    Footer,
    Grommet,
    Heading,
    Layer,
    ResponsiveContext,
    Text
} from 'grommet'

import { FormClose, Notification } from 'grommet-icons'

const theme = {
    global: {
        colors: {
            brand: '#228BE6',
        },
        font: {
            family: 'Roboto',
            size: '18px',
            height: '20px',
        },
    },
}

const AppBar = props => (
    <Box
        tag="header"
        direction="row"
        align="center"
        justify="between"
        background="brand"
        pad={{ left: 'medium', right: 'small', vertical: 'small' }}
        elevation="medium"
        style={{ zIndex: '1' }}
        {...props}
    />
)

const App = () => {
    const [showSidebar, setShowSidebar] = useState(false)

    return (
        <Grommet theme={theme} full>
            <ResponsiveContext.Consumer>
                {size => (
                    <Box fill>
                        <AppBar>
                            <Heading level="3" margin="none">
                                My App
                            </Heading>
                            <Button
                                icon={<Notification />}
                                onClick={() => {
                                    setShowSidebar(!showSidebar)
                                }}
                            />
                        </AppBar>
                        <Box
                            direction="column"
                            flex
                            overflow={{ horizontal: 'hidden' }}
                        >
                            <Box flex align="center" justify="center">
                                App Body
                            </Box>
                            {!showSidebar || size !== 'small' ? (
                                <Collapsible
                                    direction="horizontal"
                                    open={showSidebar}
                                >
                                    <Box
                                        flex
                                        width="medium"
                                        background="light-2"
                                        elevation="small"
                                        align="center"
                                        justify="center"
                                    >
                                        Sidebar
                                    </Box>
                                </Collapsible>
                            ) : (
                                <Layer>
                                    <Box
                                        background="light-2"
                                        tag="header"
                                        justify="end"
                                        align="center"
                                        direction="row"
                                    >
                                        <Button
                                            icon={<FormClose />}
                                            onClick={() =>
                                                setShowSidebar(false)
                                            }
                                        />
                                    </Box>
                                    <Box
                                        fill
                                        background="light-2"
                                        align="center"
                                        justify="center"
                                    >
                                        sidebar
                                    </Box>
                                </Layer>
                            )}
                            <Footer background="brand" pad="medium">
                                <Text>Copyright</Text>
                                <Anchor label="About" />
                            </Footer>
                        </Box>
                    </Box>
                )}
            </ResponsiveContext.Consumer>
        </Grommet>
    )
}

export default App
