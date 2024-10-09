import { NextRequest, NextResponse } from 'next/server'
import axios from 'axios'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { email, phone } = body

        if (!email) {
            return NextResponse.json(
                { error: 'Email is required' },
                { status: 400 }
            )
        }

        const data = {
            email_address: email,
            status: 'subscribed',
            merge_fields: {
                PHONE: phone || '',
            },
        }

        const listId = process.env.MAILCHIMP_AUDIENCE_ID
        const apiKey = process.env.MAILCHIMP_KEY
        const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX

        if (!listId || !apiKey || !serverPrefix) {
            return NextResponse.json(
                { error: 'Mailchimp not configured' },
                { status: 500 }
            )
        }

        const url = `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${listId}/members/`

        const response = await axios.post(url, data, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `apiKey ${apiKey}`,
            },
        })

        if (response.status === 200 || response.status === 201) {
            return NextResponse.json(
                { message: 'Subscription successful!' },
                { status: 200 }
            )
        } else {
            return NextResponse.json(
                { error: 'There was an issue with your subscription' },
                { status: response.status }
            )
        }
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            const mailChimpError = error.response.data
            return NextResponse.json(
                {
                    error:
                        mailChimpError.detail ||
                        'An error occurred with Mailchimp',
                },
                { status: error.response.status }
            )
        }

        return NextResponse.json(
            { error: 'Something went wrong. Please try again later.' },
            { status: 500 }
        )
    }
}
