import Nav from "../components/navbar";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <Nav/>
    {children}
    </>
  )
}