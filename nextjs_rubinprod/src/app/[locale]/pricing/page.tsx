'use client'
import { Button } from '@/components/Button/Button'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Text } from '@/components/Text/Text'
import { Reveal } from '@/components/Reveal/Reveal'
import { Arrow } from '@/components/Arrow/Arrow'
import { useRouter } from 'next/navigation'

export default function PricingPage() {
    const router = useRouter()

    const handleSubscribe = async () => {
        const locale = window.location.pathname.split('/')[1]

        try {
            const response = await fetch('/api/stripe/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ locale }),
            })

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(
                    errorData.error || 'Failed to initiate checkout'
                )
            }
            const { url } = await response.json()
            router.push(url)
        } catch (error) {}
    }

    return (
        <FlexContainer
            id="about"
            justifyContent="justify-center"
            className="pt-36 pb-24 relative md:items-center"
        >
            <FlexContainer
                className="md:w-[750px]"
                direction="flex-col"
                alignItems="items-center"
            >
                {/* Title */}
                <Text
                    variant="h2"
                    textTransform="uppercase"
                    padding="px-6 md:px-0"
                    className="relative sm:text-center"
                >
                    Become a Part Of Our Group
                </Text>

                {/* Description */}
                <FlexContainer
                    width="w-auto"
                    className="md:mb-24 mt-8 md:mt-12 flex-col md:flex-row"
                >
                    <FlexContainer width="w-auto">
                        <Text className="sm:text-center md:text-left md:max-w-[330px] md:mx-6">
                            Our key factors are diversity and a fresh
                            perspective. Our approach is based on diversity and
                            innovation, giving our work a unique character.
                        </Text>
                    </FlexContainer>
                    <FlexContainer
                        alignItems="items-center"
                        width="w-auto"
                        className="justify-center md:justify-end gap-3 my-16 md:my-0"
                    >
                        <Text
                            textTransform="uppercase"
                            padding="px-0"
                            fontWeight="font-semibold"
                            className="tracking-[3px]"
                        >
                            Only for
                        </Text>
                        <div className="md:order-first">
                            <Reveal y={35} removeRepeatedReveal={false}>
                                <Arrow direction="down" />
                            </Reveal>
                        </div>
                        <Text
                            textTransform="uppercase"
                            padding="px-0"
                            fontWeight="font-semibold"
                            className="md:mr-2 tracking-[3px]"
                        >
                            29 Kč per month
                        </Text>
                    </FlexContainer>
                </FlexContainer>

                {/* Button */}
                <FlexContainer width="w-full md:w-4/6" className="px-6 lg:px-0">
                    <Button className="mr-6" onClick={() => handleSubscribe()}>
                        Free month
                    </Button>
                </FlexContainer>
            </FlexContainer>
        </FlexContainer>
    )
}
