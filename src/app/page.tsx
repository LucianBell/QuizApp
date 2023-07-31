import Image from "next/image";

export default function Home() {
  return (
    <main className=" bg-zinc-900 font-mono px-14">
      <div className=" mt-40">
        <h2 className=" text-xl">Welcome to...</h2>
        <h1 className=" text-6xl">Computer Science Quiz!</h1>
      </div>

      <div className=" mt-10 flex">
        <div className=" group">
          <a href="/play" className=" mr-10 text-2xl">
            Play
          </a>
          <div className=" bg-purple-950 h-1 w-4 group-hover:w-10 transition-all duration-300"></div>
        </div>
        <div className=" group">
          <a href="" className=" text-2xl">
            Ranking
          </a>
          <div className=" bg-purple-950 h-1 w-4 group-hover:w-20 transition-all duration-300"></div>
        </div>
      </div>
    </main>
  );
}
