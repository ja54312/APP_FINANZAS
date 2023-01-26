"use client"; // this is a client component
import Header from "@/react/components/HEADER/Header"
import Footer from "@/react/components/FOOTER/Footer"
import LoginForm from "@/react/components/LOGINFORM/LoginForm"

export default function Home() {
  return (
    <>
      <Header />
      <LoginForm />
      <Footer />
    </>
  )
}
