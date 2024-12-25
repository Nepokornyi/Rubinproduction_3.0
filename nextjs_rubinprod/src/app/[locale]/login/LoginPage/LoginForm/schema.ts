import { z } from 'zod'

export const LoginSchema = z.object({
    login: z.string().email('Please enter valid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
})

export type LoginValueSchema = z.infer<typeof LoginSchema>
