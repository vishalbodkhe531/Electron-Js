const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 p-4 text-white ">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact us</a>
      </header>
      <main className="flex-1 p-4">{children}</main>
      <footer className="bg-gray-800 text-white p-4 text-center">Footer</footer>
    </div>
  );
};

export default Layout;
