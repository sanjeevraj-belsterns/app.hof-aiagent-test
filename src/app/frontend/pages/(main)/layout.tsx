/* eslint-disable prettier/prettier */
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import RightAside from '../../components/rightAside/rightAside';
import Sample from '../../components/Sample/sample';

export default function Layout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section className="flex flex-col w-full min-h-screen overflow-x-hidden">
      {/* Header */}
      <header className="flex-none sticky w-full z-10 bg-orange-600 shadow-md h-[65px]">
        <Header />
      </header>

      {/* Main Content */}
      <div className="flex flex-row flex-1 w-full">
        {/* Sidebar */}
        <aside className="flex bg-gray-100 overflow-hidden w-0 sm:w-[250px]">
          <Sample />
        </aside>

        {/* Main Area */}
        <main className="flex flex-1 min-h-screen px-4 py-2">{children}</main>

        {/* Right Sidebar */}
        <aside className="hidden sm:flex bg-gray-100 w-[250px]">
          <RightAside />
        </aside>
      </div>

      {/* Footer */}
      <footer className="bg-brown-600  text-center">
        <Footer />
      </footer>
    </section>
  );
}
