interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      id="container"
      className={"container mx-auto px-4 lg:px-0 " + className}
    >
      {children}
    </div>
  );
}
