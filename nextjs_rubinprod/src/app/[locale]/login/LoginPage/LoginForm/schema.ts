import { z } from 'zod'

export const LoginSchema = z.object({
    login: z.string().email('Please enter valid email address'),
})

export type LoginValueSchema = z.infer<typeof LoginSchema>
