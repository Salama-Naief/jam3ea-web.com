interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return <div id="container" className="app-container">{children}</div>;
}
