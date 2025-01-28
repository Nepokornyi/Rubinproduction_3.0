export const manageSubscription = async (locale: string) => {
    const response = await fetch('/api/stripe/subscription', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ locale }),
    })

    if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to initiate subscription')
    }

    return response.json()
}

export const subscribe = async (locale: string) => {
    const response = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ locale }),
    })

    if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to initiate checkout')
    }

    return response.json()
}
