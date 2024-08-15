import { Nav, Footer, ContainerGraph, Form } from '../components/components'

export default function Home() {
  return (
    <div className="w-full h-screen bg-blue-700 flex flex-col items-center">
      <Nav></Nav>
      <ContainerGraph></ContainerGraph>
      <Footer></Footer>
    </div>
  );
}
