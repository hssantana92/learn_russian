import Header from "../components/Header"
import "../globals.css";


export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
      <>
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <Header></Header>
          {children}
        <footer className="mt-auto text-50">
        </footer>
      </div>
      </>
  );
}
