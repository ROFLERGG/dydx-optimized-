import { cva } from 'class-variance-authority';

const buttonVariants = cva('cursor-pointer rounded-lg', {
  variants: {
    link: {
      sm: 'duration-150 ease-in-out',
      default: 'px-4 py-3 duration-150 ease-in-out',
    },
    btn: {
      primary: 'px-4 py-3 duration-150 ease-in-out',
      primaryWhite: 'px-4 py-3 duration-150 ease-in-out',
      secondary: 'px-4 py-3 duration-150 ease-in-out',
      ghost: 'px-4 py-3 duration-150 ease-in-out',
    },
    bg: {
      white: 'bg-white-100',
      grey: 'bg-white-500',
      brand: 'bg-brand',
      secondary: 'bg-secondary',
    },
    text: {
      white: 'text-white-100',
      grey: 'text-white-500',
      brand: 'text-brand',
    },
  },
  compoundVariants: [
    { link: 'sm', text: 'grey', className: 'hover:text-white-100' },
    {
      link: 'sm',
      text: 'brand',
      className: 'hover:underline underline-offset-2',
    },
    { link: 'default', text: 'grey', className: 'hover:text-white-100' },
    { bg: 'brand', className: 'hover:bg-brandHover' },
    { bg: 'secondary', className: 'hover:bg-secondaryHover' },
    { bg: 'white', className: 'hover:bg-white-500' },
    { btn: 'ghost', className: 'hover:bg-secondary' },
  ],
});

const Button = ({ link, btn, bg, text, href, className, ...rest }) => {
  if (href) {
    return (
      <a
        href={href}
        className={buttonVariants({ link, btn, bg, text, className })}
        {...rest}
      />
    );
  } else {
    return (
      <button
        className={buttonVariants({ link, btn, bg, text, className })}
        {...rest}
      />
    );
  }
};

export default Button;
