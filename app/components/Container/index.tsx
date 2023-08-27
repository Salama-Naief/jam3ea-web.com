interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div id="container" className={'app-container ' + className}>
      {children}
    </div>
  );
}
