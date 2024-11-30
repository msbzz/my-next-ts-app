import './globals.css';

export const metadata = {
  title: 'My Next.js Project',
  description: 'Exemplo de projeto com Route Groups e TypeScript',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
