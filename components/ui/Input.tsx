import { cva, VariantProps } from 'class-variance-authority';
import React, { ComponentProps } from 'react';

const inputStyles = cva(
    'p-1 rounded-sm border-2 focus:outline-none text-black ',
    {
        variants: {
            intent: {
                primary: 'border-black',
                sky: " border-sky-500 ",
                danger: ' border-red-500 ',
                success: ' border-teal-500 '
            },
            fullWidth: {
                true: 'w-full',
            },
            dashed: {
                true: 'border-dashed',
            }
        },
        defaultVariants: {
            intent: 'primary',
        },
    },
);

type inputOrLabelProps = ComponentProps<'input'> & ComponentProps<'label'>;

export interface Props
    extends inputOrLabelProps,
    VariantProps<typeof inputStyles> { label?: string }

export function Input({ intent, fullWidth, id, label, required, dashed, ...props }: Props) {
    return (
        <div className='flex flex-col '>
            {label && (<label htmlFor={id} className='text-md font-semibold' >{label}</label>)}
            <input id={id} className={inputStyles({ intent, fullWidth, dashed })} {...props} />
        </div>
    );
}