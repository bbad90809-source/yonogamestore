import { createFileRoute } from "@tanstack/react-router";

import {
  Menu, Home, FileText, Contact, AlertTriangle, Send, Sparkles, Download,
  ExternalLink, Star, Cloud, BadgeCheck, Gift, MessageCircle, ChevronDown,
} from "lucide-react";

import { useState, useMemo } from "react";

import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

import logoAsset from "@/assets/yono-logo.png.asset.json";
import promoAsset from "@/assets/promo-banner.png.asset.json";
import yonoVipIcon from "@/assets/yono-vip.png.asset.json";
import bingo101Icon from "@/assets/bingo101.png.asset.json";
import bossRummyIcon from "@/assets/boss-rummy.png.asset.json";
import goodSlotsIcon from "@/assets/good-slots.png.asset.json";
import mqmBetIcon from "@/assets/mqm-bet.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "YONO Game Store — Download Earning Games & Apps" },
      {
        name: "description",
        content:
          "YONO Game Store: download the latest earning games and apps with instant bonuses and fast withdrawals.",
      },
      { property: "og:title", content: "YONO Game Store" },
      {
        property: "og:description",
        content: "Download top earning games and apps with bonus and withdrawal info.",
      },
    ],
  }),
  component: Index,
});

type AppItem = {
  rank: number;
  name: string;
  bonus: string;
  withdrawal: string;
  color: string;
  initials: string;
  icon?: string;
  url: string;
  category: "new" | "other";
};

const ALL_APPS: AppItem[] = [
  {
    rank: 1,
    name: "Yono VIP",
    bonus: "₹245",
    withdrawal: "₹100",
    color: "from-red-500 to-green-500",
    initials: "YV",
    icon: yonoVipIcon.url,
    url: "https://uonovipbet.net/?code=3CRUP285LMK&t=1779614888",
    category: "new",
  },
  {
    rank: 2,
    name: "Bingo101",
    bonus: "₹245",
    withdrawal: "₹100",
    color: "from-red-500 to-green-500",
    initials: "B1",
    icon: bingo101Icon.url,
    url: "https://bingo101ff.vip/?code=6YF9VSEC8YY&t=1767266803",
    category: "new",
  },
  {
    rank: 3,
    name: "Boss Rummy",
    bonus: "₹245",
    withdrawal: "₹100",
    color: "from-red-500 to-green-500",
    initials: "BR",
    icon: bossRummyIcon.url,
    url: "https://www.bossrummyr.com/?code=9HF2KUEWSYN&t=1767269383",
    category: "new",
  },
  {
    rank: 4,
    name: "MQM Bet",
    bonus: "₹245",
    withdrawal: "₹100",
    color: "from-red-500 to-green-500",
    initials: "MQ",
    icon: mqmBetIcon.url,
    url: "https://mqmshare.co?pid=408766214&pkg=com.mqmbet3001.app",
    category: "new",
  },
  {
    rank: 5,
    name: "Good Slots",
    bonus: "₹245",
    withdrawal: "₹100",
    color: "from-red-500 to-green-600",
    initials: "GS",
    icon: goodSlotsIcon.url,
    url: "https://sharegoodslots.cc?pid=284974117&pkg=com.goodslotsa.dss",
    category: "new",
  },
  {
    rank: 6,
    name: "Hindi 777",
    bonus: "₹245",
    withdrawal: "₹100",
    color: "from-red-500 to-green-600",
    initials: "H7",
    url: "https://www.hindi777refer.me/?code=7LFZD3TSV8P&t=1767268830",
    category: "new",
  },
  {
    rank: 7,
    name: "Hi Rummy",
    bonus: "₹245",
    withdrawal: "₹100",
    color: "from-red-500 to-green-600",
    initials: "HR",
    url: "https://www.hirummyagent.com/?code=RX3E735RNMT&t=1761710070",
    category: "new",
  },
  {
    rank: 8,
    name: "Spin 101",
    bonus: "₹245",
    withdrawal: "₹100",
    color: "from-red-500 to-green-600",
    initials: "S1",
    url: "https://spin101-l.org/?code=P4CD75Q6PGC&t=1767268472",
    category: "new",
  },
  {
    rank: 9,
    name: "Top Rummy",
    bonus: "₹245",
    withdrawal: "₹100",
    color: "from-red-500 to-green-600",
    initials: "TR",
    url: "https://www.toprummy.cc/?code=7K9NG77PRMP&t=1768201108",
    category: "new",
  },
  {
    rank: 10,
    name: "Maha Games",
    bonus: "₹245",
    withdrawal: "₹100",
    color: "from-red-500 to-green-600",
    initials: "MG",
    url: "https://mahagames.store/?code=J24KWQAXDLL&t=1767267894",
    category: "new",
  },
  {
    rank: 11,
    name: "JoyRummy",
    bonus: "₹245",
    withdrawal: "₹100",
    color: "from-red-500 to-green-600",
    initials: "JR",
    url: "https://www.joyrummy.me/?code=J5KTNRWXHW4&t=1768449561",
    category: "new",
  },
  {
    rank: 12,
    name: "Saga Slots",
    bonus: "₹245",
    withdrawal: "₹100",
    color: "from-red-500 to-green-600",
    initials: "SS",
    url: "http://100spin.com/?code=XJBMY2E414R&t=1767267986",
    category: "new",
  },
  {
    rank: 13,
    name: "Yes Spin",
    bonus: "₹245",
    withdrawal: "₹100",
    color: "from-red-500 to-green-600",
    initials: "YS",
    url: "https://www.yesspin99.com/?code=47TUZHYJ92N&t=1767269018",
    category: "new",
  },
  {
    rank: 14,
    name: "Yono Slots",
    bonus: "₹245",
    withdrawal: "₹100",
    color: "from-red-500 to-green-600",
    initials: "YS",
    url: "https://www.uonoslot.cloud/?code=Y64CD9ELDR8&t=1767268583",
    category: "new",
  },
  {
    rank: 15,
    name: "Rumble Rummy",
    bonus: "₹245",
    withdrawal: "₹100",
    color: "from-red-500 to-green-600",
    initials: "RR",
    url: "https://www.rumblerummy1.vip/?code=UC0KWDXCZ1J&t=1767268768",
    category: "new",
  },
  {
    rank: 16,
    name: "Mbm Bet",
    bonus: "₹245",
    withdrawal: "₹100",
    color: "from-red-500 to-green-600",
    initials: "MB",
    url: "https://mqmshare.app?pid=408766214&pkg=com.mqmbet3001.app",
    category: "new",
  },
  {
    rank: 17,
    name: "IND Slot",
    bonus: "₹245",
    withdrawal: "₹100",
    color: "from-red-500 to-green-600",
    initials: "IS",
    url: "http://indslotsc.com/?code=KLLKAJXZJUT&t=1767268267",
    category: "new",
  },
  {
    rank: 18,
    name: "Yono Games",
    bonus: "₹245",
    withdrawal: "₹100",
    color: "from-red-500 to-green-600",
    initials: "YG",
    url: "https://uonogames1.com/?code=MVV9KCLL&t=1767267632",
    category: "new",
  },
  {
    rank: 19,
    name: "Rummy 91",
    bonus: "₹245",
    withdrawal: "₹100",
    color: "from-red-500 to-green-600",
    initials: "R9",
    url: "http://d16sfv4ssrmnvt.cloudfront.net/rummy91_AGENT.apk",
    category: "new",
  },
  {
    rank: 20,
    name: "Rummy 888",
    bonus: "₹245",
    withdrawal: "₹100",
    color: "from-red-500 to-green-600",
    initials: "R8",
    url: "https://rummy888vip21.com/?code=TPUECUVHL4K&t=1767266039",
    category: "new",
  },
  {
    rank: 21,
    name: "777 Game",
    bonus: "₹245",
    withdrawal: "₹100",
    color: "from-red-500 to-green-600",
    initials: "7G",
    url: "https://www.777game2.com/?code=H53NQ7BJUP5&t=1767266502",
    category: "new",
  },
  {
    rank: 22,
    name: "101-Z",
    bonus: "₹245",
    withdrawal: "₹100",
    color: "from-red-500 to-green-600",
    initials: "1Z",
    url: "https://101z10.com/?code=398YAT9GYXG&t=1767268318",
    category: "new",
  },
  {
    rank: 23,
    name: "JaiHo Slots",
    bonus: "₹245",
    withdrawal: "₹100",
    color: "from-red-500 to-green-600",
    initials: "JS",
    url: "https://4jaihospin.com/?code=7TA7LLXR9KT&t=1767269222",
    category: "new",
  },
  {
    rank: 24,
    name: "Jaiho 777",
    bonus: "₹245",
    withdrawal: "₹100",
    color: "from-red-500 to-green-600",
    initials: "J7",
    url: "https://jaiho777vip.one/?code=GC2D4AKPMXY&t=1780718330",
    category: "new",
  },
  {
    rank: 25,
    name: "JaiHo Win",
    bonus: "₹245",
    withdrawal: "₹100",
    color: "from-red-500 to-green-600",
    initials: "JW",
    url: "https://www.jaihowin12.com/?code=1XNZFDYEE25&t=1767269078",
    category: "new",
  },
  {
    rank: 26,
    name: "JaihoRummy",
    bonus: "₹245",
    withdrawal: "₹100",
    color: "from-red-500 to-green-600",
    initials: "JR",
    url: "https://jaihorummy.bar/?code=E748YLZB6PV&t=1767267253",
    category: "new",
  },
  {
    rank: 27,
    name: "Abc Rummy",
    bonus: "₹245",
    withdrawal: "₹100",
    color: "from-red-500 to-green-600",
    initials: "AR",
    url: "https://www.abcrummy88.com/?code=75CK1M5UE35&t=1767267461",
    category: "new",
  },
  {
    rank: 28,
    name: "Spin 777",
    bonus: "₹245",
    withdrawal: "₹100",
    color: "from-red-500 to-green-600",
    initials: "S7",
    url: "http://spin777-e.com/?code=YLWYP1XK9JZ&t=1769404837",
    category: "new",
  },
  {
    rank: 29,
    name: "Diwa 777",
    bonus: "₹245",
    withdrawal: "₹100",
    color: "from-red-500 to-green-600",
    initials: "D7",
    url: "https://sharediwa777.club?pid=293307453&pkg=com.diwa777wh.com",
    category: "new",
  },
  {
    rank: 30,
    name: "Neta VIP",
    bonus: "₹245",
    withdrawal: "₹100",
    color: "from-red-500 to-green-600",
    initials: "NV",
    url: "https://www.neta1.vip/?code=DR0JFMQFA2J&t=1781865273",
    category: "new",
  },
  {
    rank: 1,
    name: "Color Prediction",
    bonus: "₹30",
    withdrawal: "₹100",
    color: "from-pink-500 to-fuchsia-500",
    initials: "CP",
    url: "#",
    category: "other",
  },
  {
    rank: 2,
    name: "Aviator Crash",
    bonus: "₹50",
    withdrawal: "₹200",
    color: "from-sky-500 to-blue-600",
    initials: "AV",
    url: "#",
    category: "other",
  },
  {
    rank: 3,
    name: "Fantasy 11 Pro",
    bonus: "₹100",
    withdrawal: "₹300",
    color: "from-green-500 to-emerald-600",
    initials: "F11",
    url: "#",
    category: "other",
  },
];

const NAV = [
  { label: "Home", icon: Home, href: "/" },
  { label: "About", icon: FileText, href: "/about" },
  { label: "Contact us", icon: Contact, href: "/contact" },
  { label: "Disclaimer", icon: AlertTriangle, href: "/disclaimer" },
  { label: "TG Join", icon: Send, href: "https://t.me/YONODAILYCODES" },
];

function hashString(str: string) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

function getAppRating(name: string) {
  const ratings = [4.5, 4.6, 4.7, 4.8, 4.9, 5.0];
  return ratings[hashString(name) % ratings.length];
}

function getAppSize(name: string) {
  const sizes = ["38-72 MB", "45-85 MB", "52-96 MB", "30-60 MB", "58-100 MB", "42-78 MB", "65-110 MB"];
  return sizes[hashString(name) % sizes.length];
}

function getAppDescription(name: string) {
  const descs = [
    `This is currently one of the most trending online earning applications where you can play games and win real cash.`,
    `Experience the thrill of real money gaming with this top-rated app. Join millions of players and start winning today.`,
    `A must-try platform for all gaming lovers. Enjoy seamless gameplay, fast withdrawals, and exciting daily rewards.`,
    `The ultimate destination for card game enthusiasts. Play Rummy, Teen Patti, and Poker with real players across India.`,
    `Get ready for non-stop entertainment and real cash prizes. This app combines fun gameplay with genuine earning potential.`,
    `One of the fastest-growing gaming apps in India. Simple to use, quick withdrawals, and massive sign-up bonuses await you.`,
    `Turn your gaming skills into real earnings. This trusted platform offers the best card games and slot experiences.`,
    `Join the community of smart gamers who play and earn every day. Safe, secure, and super rewarding!`,
    `Your gateway to real money gaming. Featuring top-notch security, instant withdrawals, and round-the-clock support.`,
    `India's favorite gaming companion. Play popular games, refer friends, and multiply your earnings effortlessly.`,
  ];
  return descs[hashString(name) % descs.length];
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [tab, setTab] = useState<"new" | "other">("new");
  const [selectedApp, setSelectedApp] = useState<AppItem | null>(null);
  const apps = ALL_APPS.filter((a) => a.category === tab).sort((a, b) => a.rank - b.rank);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-slate-100">
        <div className="mx-auto max-w-screen-md flex items-center justify-between px-4 h-14">
          <img
            src={logoAsset.url}
            alt="YONO Game Store logo"
            width={36}
            height={36}
            className="rounded-lg"
          />
          <h1 className="text-lg font-extrabold tracking-tight">YONO GAME STORE</h1>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Open menu"
            className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        <nav
          className={`mx-auto max-w-screen-md px-3 overflow-x-auto md:overflow-visible ${
            menuOpen ? "block" : "hidden md:block"
          }`}
        >
          <ul className="flex md:justify-center gap-2 py-2 min-w-max md:min-w-0">
            {NAV.map(({ label, icon: Icon, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 hover:bg-slate-100 text-sm font-medium text-slate-700 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="mx-auto max-w-screen-md px-4 pb-24">
        <section
          className="mt-4 rounded-2xl p-6 text-center text-white shadow-lg animate-fade-in"
          style={{ backgroundImage: "var(--gradient-welcome)" }}
        >
          <Sparkles className="w-6 h-6 mx-auto mb-2 opacity-90" />
          <h2 className="text-xl font-bold leading-tight">Welcome to YONO GAME STORE</h2>
          <p className="mt-1.5 text-sm/relaxed text-white/95 uppercase tracking-wide">
            The ultimate hub for top gaming apps, exclusive rewards, daily offers, fast downloads,
            secure access, and a smooth gaming experience. Play more, earn more, win more! 🚀
          </p>
        </section>

        <section className="mt-4 rounded-2xl overflow-hidden shadow-md animate-fade-in">
          <img
            src={promoAsset.url}
            alt="YONO Game Store — join our Telegram"
            width={1920}
            height={600}
            className="w-full h-auto block"
          />
        </section>

        <section className="mt-5 grid grid-cols-2 gap-3">
          <button
            onClick={() => setTab("new")}
            className={`rounded-2xl py-4 px-3 text-white font-bold text-base shadow-md hover-scale transition-all ${
              tab === "new" ? "ring-2 ring-offset-2 ring-red-400" : ""
            }`}
            style={{ backgroundImage: "var(--gradient-red)" }}
          >
            New Games
          </button>
          <button
            onClick={() => setTab("other")}
            className={`rounded-2xl py-4 px-3 text-white font-bold text-base shadow-md hover-scale transition-all ${
              tab === "other" ? "ring-2 ring-offset-2 ring-emerald-400" : ""
            }`}
            style={{ backgroundImage: "var(--gradient-green)" }}
          >
            Other Games
          </button>
        </section>

        <section className="mt-5 space-y-3">
          {apps.map((app) => (
            <article
              key={`${app.category}-${app.name}`}
              onClick={() => setSelectedApp(app)}
              className="relative flex items-center gap-3 bg-white border border-slate-100 rounded-2xl p-3 pr-3 animate-fade-in cursor-pointer active:scale-[0.99] transition-transform"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="absolute -top-2 -left-2 w-7 h-7 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center shadow">
                {app.rank}
              </div>
              <div
                className={`w-14 h-14 shrink-0 rounded-2xl overflow-hidden ${app.icon ? "bg-slate-100" : `bg-gradient-to-br ${app.color}`} text-white font-extrabold flex items-center justify-center text-lg shadow-md`}
              >
                {app.icon ? (
                  <img src={app.icon} alt={`${app.name} icon`} className="w-full h-full object-cover" />
                ) : (
                  app.initials
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-sm truncate">{app.name}</h3>
                <p className="text-xs text-slate-600 mt-0.5">
                  Bonus:{" "}
                  <span className="font-semibold text-emerald-600">{app.bonus}</span>
                </p>
                <p className="text-xs text-slate-600">
                  Withdrawal:{" "}
                  <span className="font-semibold text-slate-900">{app.withdrawal}</span>
                </p>
              </div>
              <a
                href={app.url}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="shrink-0 inline-flex items-center gap-1.5 text-white font-bold text-sm px-4 py-2.5 rounded-xl shadow-md hover-scale transition-transform"
                style={{ backgroundImage: "var(--gradient-download)" }}
              >
                <Download className="w-4 h-4" />
                DOWNLOAD
              </a>
            </article>
          ))}
        </section>

        <footer className="mt-10 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} YONO Game Store. For 18+ users only. Play responsibly.
        </footer>
      </main>

      <nav
        className="fixed bottom-0 inset-x-0 z-50 bg-white border-t border-slate-200"
        style={{ boxShadow: "0 -2px 12px rgba(0,0,0,0.06)" }}
        aria-label="Bottom navigation"
      >
        <ul className="mx-auto max-w-screen-md grid grid-cols-5">
          {[
            { label: "Home", icon: Home, href: "/" },
            { label: "About", icon: FileText, href: "/about" },
            { label: "Contact Us", icon: Contact, href: "/contact" },
            { label: "Disclaimer", icon: AlertTriangle, href: "/disclaimer" },
            { label: "TG Join", icon: Send, href: "https://t.me/YONODAILYCODES" },
          ].map(({ label, icon: Icon, href }) => {
            const external = href.startsWith("http");
            return (
              <li key={label}>
                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  className="flex flex-col items-center justify-center gap-0.5 py-2 text-[11px] font-medium text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                  <span>{label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <Dialog open={!!selectedApp} onOpenChange={(open) => !open && setSelectedApp(null)}>
        {selectedApp && (
          <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto p-0 gap-0">
            {/* Hero */}
            <div className="flex items-center gap-4 p-5 pb-2">
              <div
                className={`w-20 h-20 shrink-0 rounded-2xl overflow-hidden ${selectedApp.icon ? "bg-slate-100" : `bg-gradient-to-br ${selectedApp.color}`} text-white font-extrabold flex items-center justify-center text-2xl shadow-lg`}
              >
                {selectedApp.icon ? (
                  <img src={selectedApp.icon} alt={`${selectedApp.name} icon`} className="w-full h-full object-cover" />
                ) : (
                  selectedApp.initials
                )}
              </div>
              <div className="min-w-0">
                <h2 className="text-xl font-extrabold leading-tight">{selectedApp.name}</h2>
                <p className="text-sm text-blue-600 font-medium mt-0.5">{selectedApp.name} APK</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-2 px-5 py-2">
              <div className="flex flex-col items-center text-center gap-1">
                <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                <span className="text-sm font-bold">{getAppRating(selectedApp.name)}</span>
                <span className="text-[10px] text-slate-400">Rating</span>
              </div>
              <div className="flex flex-col items-center text-center gap-1">
                <Cloud className="w-5 h-5 text-sky-500" />
                <span className="text-sm font-bold">{getAppSize(selectedApp.name)}</span>
                <span className="text-[10px] text-slate-400">Size</span>
              </div>
              <div className="flex flex-col items-center text-center gap-1">
                <BadgeCheck className="w-5 h-5 text-emerald-500" />
                <span className="text-sm font-bold">Free</span>
                <span className="text-[10px] text-slate-400">Price</span>
              </div>
              <div className="flex flex-col items-center text-center gap-1">
                <Gift className="w-5 h-5 text-rose-500" />
                <span className="text-sm font-bold">{selectedApp.bonus}</span>
                <span className="text-[10px] text-slate-400">Upto Bonus</span>
              </div>
            </div>

            {/* Download Button */}
            <div className="px-5 py-2">
              <a
                href={selectedApp.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full text-white font-bold text-sm px-4 py-3.5 rounded-xl shadow-md hover:opacity-90 transition-opacity"
                style={{ background: "linear-gradient(135deg, #3b82f6, #2563eb)" }}
              >
                <Download className="w-5 h-5" />
                DOWNLOAD {selectedApp.name.toUpperCase()}
              </a>
            </div>

            {/* Telegram */}
            <div className="px-5 py-1">
              <a
                href="https://t.me/YONODAILYCODES"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full text-blue-600 font-semibold text-sm px-4 py-2.5 rounded-xl border border-blue-100 bg-blue-50 hover:bg-blue-100 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Join Our Telegram Team
              </a>
            </div>

            {/* Description */}
            <div className="px-5 py-3 space-y-2">
              <p className="text-sm text-slate-700 leading-relaxed">
                Welcome to <strong>{selectedApp.name}</strong>! {getAppDescription(selectedApp.name)}
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Download the {selectedApp.name} APK today and get an instant sign-up bonus of {selectedApp.bonus}. The app offers a variety of card games like Rummy, Teen Patti, Poker, and Slots. Withdraw your winnings starting from just {selectedApp.withdrawal}.
              </p>
            </div>

            {/* Related Games */}
            <div className="border-t border-slate-100 mt-2">
              <div className="flex items-center justify-center gap-1 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-sm">
                <ChevronDown className="w-4 h-4" />
                Other Related Games
              </div>
              <div className="p-3 space-y-2">
                {ALL_APPS.filter((a) => a.name !== selectedApp.name && a.category === selectedApp.category)
                  .slice(0, 5)
                  .map((app, idx) => (
                    <div
                      key={app.name}
                      onClick={() => setSelectedApp(app)}
                      className="flex items-center gap-3 bg-white border border-slate-100 rounded-xl p-2.5 cursor-pointer active:scale-[0.99] transition-transform"
                      style={{ boxShadow: "var(--shadow-card)" }}
                    >
                      <span className="w-5 h-5 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <div
                        className={`w-10 h-10 shrink-0 rounded-lg overflow-hidden ${app.icon ? "bg-slate-100" : `bg-gradient-to-br ${app.color}`} text-white font-bold flex items-center justify-center text-xs`}
                      >
                        {app.icon ? (
                          <img src={app.icon} alt={app.name} className="w-full h-full object-cover" />
                        ) : (
                          app.initials
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-xs truncate">{app.name}</h4>
                        <div className="flex items-center gap-3 text-[10px] text-slate-500 mt-0.5">
                          <span className="text-emerald-600 font-semibold">{app.bonus} Bonus</span>
                          <span>Min. {app.withdrawal}</span>
                        </div>
                      </div>
                      <span className="shrink-0 inline-flex items-center gap-1 bg-blue-500 text-white text-[10px] font-bold px-2.5 py-1.5 rounded-lg">
                        <Download className="w-3 h-3" />
                        Download
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}
