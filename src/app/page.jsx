import Header from "@/components/header/Header";

export default function Home() {
  return (
    <main className="flex-center flex-col">
      <Header />
      <section className="min-h-[100vh] w-full"></section>
      <section className="min-h-[100vh] bg-green-400 w-full"></section>
    </main>
  );
}
