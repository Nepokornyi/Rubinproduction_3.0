import React from 'react'
import { FlexContainer } from '../FlexContainer/FlexContainer'
import { Text } from '../Text/Text'
import { Box } from '../Box/Box'

export const Footer = () => {
    return (
        <FlexContainer direction="flex-col" center>
            <FlexContainer
                justifyContent="justify-between"
                alignItems="items-end"
            >
                <div className="pb-6">Logo</div>

                <Text variant="socials" padding="pb-6">
                    Copyright
                </Text>

                <Box className="hidden md:grid grid-cols-3 grid-rows-3 pb-6 gap-x-4 text-right">
                    <a href="" className="col-start-3 row-start-1">
                        Home
                    </a>
                    <a href="" className="col-start-1 row-start-2">
                        About
                    </a>
                    <a href="" className="col-start-2 row-start-2">
                        Contact
                    </a>
                    <a href="" className="col-start-3 row-start-2">
                        Portfolio
                    </a>
                    <a href="" className="col-start-1 row-start-3">
                        Behance
                    </a>
                    <a href="" className="col-start-2 row-start-3">
                        Instagram
                    </a>
                    <a href="" className="col-start-3 row-start-3">
                        Youtube
                    </a>
                </Box>
            </FlexContainer>
        </FlexContainer>
    )
}
