import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white p-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <header>
          <h1 className="text-4xl font-bold">👨‍💻 Tamilvanan’s Dashboard</h1>
          <p className="text-zinc-400 mt-2">Your personal launchpad</p>
        </header>

        <section className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <LinkCard
            title="TryHackMe"
            url="https://tryhackme.com/p/tamilvanan"
          />
          <LinkCard
            title="LinkedIn"
            url="https://www.linkedin.com/in/tamilvanansambasivam/"
          />
          <LinkCard
            title="GitHub"
            url="https://github.com/tamilvanansambasivam"
          />
          <LinkCard title="HackTheBox" url="https://hackthebox.com/" />
          <LinkCard title="YouTube" url="https://www.youtube.com/@tmlvnn" />

          <LinkCard title="Medium" url="https://medium.com/@tmlvnn" />
          <LinkCard title="Twitter" url="https://x.com/tmlvnn" />
          <LinkCard title="PortSwigger" url="https://portswigger.net/" />
          <LinkCard title="ChatGPT" url="https://chatgpt.com/" />
          <LinkCard title="Excalidraw" url="https://excalidraw.com/" />
          <LinkCard title="Yewtu.be (YouTube alt)" url="https://yewtu.be/" />
        </section>
      </div>
    </div>
  );
}

function LinkCard({ title, url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-zinc-800 p-4 rounded-lg hover:bg-zinc-700 transition text-center"
    >
      {title}
    </a>
  );
}
