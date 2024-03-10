import { z } from "zod"

export const formSchema = z.object({
    name: z.string().min(2).max(64),
    email: z.string().email(),
    terms: z.boolean().refine((value) => value === true, {
        message: 'You must accept the terms and conditions',
    }),
})

export type FormSchema = z.infer<typeof formSchema>