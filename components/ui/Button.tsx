import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';
import { ButtonOrLink, Props as ButtonOrLinkProps } from './ButtonOrLink';

const buttonStyles = cva(
    'flex items-center justify-center space-x-2 px-4 py-2 rounded focus:outline-none focus:ring-0 focus:ring-offset-white dark:focus:ring-offset-black focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-60 hover:bg-opacity-80 focus:border-none ',
    {
        variants: {
            intent: {
                primary: 'bg-brand-500 text-gray-500',
                secondary:
                    'bg-gray-400 text-gray-900 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-600 dark:text-gray-100 focus:ring-gray-500 hover:cursor-pointer duration-200 ease-in',
                danger: 'bg-red-500 text-white focus:ring-red-500 hover:cursor-pointer duration-200 ease-in',
                success: 'bg-green-600 hover:bg-green-500 text-white disabled:hover:bg-green-500 duration-200 ease-in',
                sky: 'bg-sky-500 hover:bg-sky-400 disabled:hover:bg-sky-500 text-white duration-200 ease-in',
                info: "bg-orange-400 hover:bg-orange-500 text-white duration-200 ease-in"

            },
            fullWidth: {
                true: 'w-full',
            },
            bold: {
                true: 'text-lg font-bold'
            },
            animated: {
                true: "hover:text-opacity-60 duration-200 ease-in"
            },
        },
        defaultVariants: {
            intent: 'primary',
        },
    },
);

export interface Props
    extends ButtonOrLinkProps,
    VariantProps<typeof buttonStyles> { }

export function Button({ intent, fullWidth, bold, animated, ...props }: Props) {
    return (
        <ButtonOrLink className={buttonStyles({ intent, fullWidth, bold, animated })} {...props} />
    );
}