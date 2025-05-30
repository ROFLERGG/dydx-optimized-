import { cva } from 'class-variance-authority';

const tooltipVariants = cva('tooltip', {
  variants: {
    position: {
      left: 'before:right-full before:mr-3 before:inset-y-1/2 before:-translate-y-1/2 after:right-full after:inset-y-1/2 after:-translate-y-1/2 after:-mr-1 after:border-r-transparent after:border-t-transparent after:border-b-transparent',
      right:
        'before:left-full before:ml-3 before:inset-y-1/2 before:-translate-y-1/2 after:left-full after:inset-y-1/2 after:-translate-y-1/2 after:-ml-1 after:border-l-transparent after:border-t-transparent after:border-b-transparent',
      top: 'before:bottom-full before:mb-3 before:inset-x-1/2 before:-translate-x-1/2 after:bottom-full after:inset-x-1/2 after:-translate-x-1/2 after:-mb-1 after:border-l-transparent after:border-b-transparent after:border-r-transparent',
      bottom:
        'before:top-full before:mt-3 before:inset-x-1/2 before:-translate-x-1/2 after:top-full after:inset-x-1/2 after:-translate-x-1/2 after:-mt-1 after:border-l-transparent after:border-t-transparent after:border-r-transparent',
    },
  },
});

const Tooltip = ({ text, position, ...rest }) => {
  return (
    <div
      data-tooltip={text}
      className={tooltipVariants({ position })}
      {...rest}
    />
  );
};

export default Tooltip;
