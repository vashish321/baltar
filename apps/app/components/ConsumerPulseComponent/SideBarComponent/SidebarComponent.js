"use client";
import styles from "./SidebarComponent.module.css";
import { useState, useEffect } from "react";

function relativeTime(dateStr) {
  const diff = Math.floor((Date.now() - new Date(dateStr).getTime()) / 1000);
  if (diff < 3600) return `${Math.max(1, Math.floor(diff / 60))} min ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} hr ago`;
  return `${Math.floor(diff / 86400)} days ago`;
}

export default function SidebarComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [latestNews, setLatestNews] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    fetch("/api/consumer-pulse/articles?status=PUBLISHED&limit=6", {
  cache: "no-store"
})
      .then((res) => {
        if (!res.ok) throw new Error("fetch failed");
        return res.json();
      })
      .then((data) => {
        const articles = data?.articles ?? data?.data ?? [];
        setLatestNews(
          articles.map((a) => ({
            time: relativeTime(a.publishedAt),
            title: a.title,
          }))
        );
        setStatus("loaded");
      })
      .catch(() => {
        setStatus("error");
      });
  }, []);

  return (
    <div className={`${styles.sidebarContainer} ${isOpen ? styles.open : ""}`}>
      <button
    className={`${styles.toggleButton} ${isOpen ? styles.closeButton : ""}`}
    onClick={() => setIsOpen(!isOpen)}
  >
    {isOpen ? "×" : "Latest"}
  </button>

      {isOpen && (
        <aside className={styles.sidebar}>
          <div className={styles.header}>
            <h3>Latest</h3>
            <select className={styles.category}>
              <option>All categories</option>
            </select>
          </div>
          <ul className={styles.newsList}>
            {status === "loading" &&
              Array.from({ length: 6 }).map((_, i) => (
                <li key={i}>
                  <span className={styles.time}>—</span>
                  <span className={styles.title}>Loading…</span>
                </li>
              ))}
            {status === "error" && (
              <li>
                <span className={styles.title}>Trending stories unavailable</span>
              </li>
            )}
            {status === "loaded" &&
              latestNews.map((item, index) => (
                <li key={index}>
                  <span className={styles.time}>{item.time}</span>
                  <span className={styles.title}>{item.title}</span>
                </li>
              ))}
          </ul>
          <a className={styles.viewAll} href="#">See all latest ›</a>
        </aside>
      )}
    </div>
  );
}
