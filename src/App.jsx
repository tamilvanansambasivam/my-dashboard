import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white p-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <header>
          <h1 className="text-4xl font-bold">👨‍💻 Tamilvanan’s Dashboard</h1>
          <p className="text-zinc-400 mt-2">Your personal launchpad</p>
        </header>
        <section>
          <h2 className="text-xl font-semibold mb-2">🚀 Platforms</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <LinkCard
              title="TryHackMe"
              url="https://tryhackme.com/p/tamilvanan"
            />
            <LinkCard title="HackTheBox" url="https://hackthebox.com/" />
            <LinkCard title="HackerOne" url="https://hackerone.com/tmlvnn" />
            <LinkCard title="BugCrowd" url="https://bugcrowd.com/tmlvnn" />
            <LinkCard
              title="HackerOne CTF"
              url="https://ctf.hacker101.com/ctf"
            />
            <LinkCard title="PortSwigger" url="https://portswigger.net/" />
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-8 mb-2">📚 Learning</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <LinkCard
              title="LeetCode"
              url="https://leetcode.com/u/tamilvanansambasivam/"
            />
            <LinkCard title="NeetCode" url="https://neetcode.io/practice" />
            <LinkCard
              title="Udemy"
              url="https://www.udemy.com/home/my-courses/learning/"
            />
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-8 mb-2">🧠 Tools & Notes</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <LinkCard title="ChatGPT" url="https://chatgpt.com/" />
            <LinkCard title="Notion" url="https://www.notion.so/" />
            <LinkCard title="Excalidraw" url="https://excalidraw.com/" />
            <LinkCard title="Yewtu.be (YouTube alt)" url="https://yewtu.be/" />
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-8 mb-2">📢 Socials</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <LinkCard
              title="LinkedIn"
              url="https://www.linkedin.com/in/tamilvanansambasivam/"
            />
            <LinkCard
              title="GitHub"
              url="https://github.com/tamilvanansambasivam"
            />
            <LinkCard title="YouTube" url="https://www.youtube.com/@tmlvnn" />
            <LinkCard title="Medium" url="https://medium.com/@tmlvnn" />
            <LinkCard title="Substack" url="https://substack.com/@tamilvanan" />
            <LinkCard title="Dev" url="https://dev.to/tamilvanan" />
          </div>
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
