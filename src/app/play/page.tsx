import Image from "next/image";

export default function Home() {
  return (
    <main className=" bg-zinc-900 font-mono px-14">
      <div className=" mt-20">
        <h2 className=" text-xl">Time to</h2>
        <h1 className=" text-6xl">Play!</h1>
      </div>

      <div>
        <h2>Register</h2>
        <h3>
          What is your <span className=" text-purple-800">name?</span>
        </h3>
        <input
          type="text"
          name="username"
          id=""
          className=" text-black bg-slate-200 border-b-4 border-purple-950"
        />
        <button>Register</button>
      </div>

      <section>
        <h3>Great,</h3>
      </section>
    </main>
  );
}
