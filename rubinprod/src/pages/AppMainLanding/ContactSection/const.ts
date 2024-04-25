import { z } from "zod"

const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])*$/
  );
  

export const formSchema = z.object({
    email: z.string().email(),
    phone: z.string().regex(phoneRegex, 'Invalid phone number').optional(),
    terms: z.boolean().refine((value) => value === true, {
        message: 'You must accept the terms and conditions',
    }),
})

export type FormSchema = z.infer<typeof formSchema>