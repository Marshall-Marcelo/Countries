interface WrapperProps {
  children: React.ReactNode;
}

export const PageWrapper = ({ children }: WrapperProps) => {
  return <div className="grid place-items-center m-0 h-dvh">{children}</div>;
};

export const ContentWrapper = ({ children }: WrapperProps) => {
  return <div className="p-8 flex flex-col">{children}</div>;
};
