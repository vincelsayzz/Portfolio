import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Education from "./components/Education.jsx";
import Projects from "./components/Projects.jsx";
import Certifications from "./components/Certifications.jsx";
import Footer from "./components/Footer.jsx";

// Falls back to localhost:8000 for local dev. Set VITE_API_URL in a .env
// file (see .env.example) when the backend lives somewhere else.
const API_URL = import.meta.env.VITE_API_URL || "https://portfolio-production-6443.up.railway.app";

export default function App() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("loading"); // "loading" | "ready" | "error"

  useEffect(() => {
    let cancelled = false;

    fetch(`${API_URL}/api/portfolio`)
      .then((res) => {
        if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
        return res.json();
      })
      .then((payload) => {
        if (cancelled) return;
        setData(payload);
        setStatus("ready");
      })
      .catch(() => {
        if (cancelled) return;
        setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (status === "loading") {
    return (
      <div className="state-screen">
        <p className="state-screen__terminal">
          root@dnsc:~$ fetching_portfolio<span className="hero__cursor">_</span>
        </p>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="state-screen">
        <p className="state-screen__terminal state-screen__terminal--error">
          root@dnsc:~$ connection refused
        </p>
        <p className="state-screen__message">
          Couldn't reach the API at <code>{API_URL}</code>. Make sure the FastAPI backend is
          running:
        </p>
        <pre className="state-screen__code">
          cd backend{"\n"}
          uvicorn main:app --reload --port 8000
        </pre>
      </div>
    );
  }

  return (
    <>
      <Navbar avatarUrl={data.hero?.photo_url} handle={data.hero?.handle} />
      <main>
        <Hero hero={data.hero} />
        <Education education={data.education} />
        <Projects projects={data.projects} />
        <Certifications certifications={data.certifications} />
      </main>
      <Footer socialLinks={data.social_links} name={data.hero?.name} />
    </>
  );
}
