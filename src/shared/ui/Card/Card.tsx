interface CardProps extends React.ComponentProps<'div'> {
  className?: string;
}

export const Card = ({ children, className, ref, ...props }: CardProps) => {
  return (
    <div className={className} ref={ref} {...props}>
      {children}
    </div>
  );
};
