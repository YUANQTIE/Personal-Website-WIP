import { useEffect, useState, /*type CSSProperties, */ type FormEvent } from 'react';
import CategoryTab from '../CategoryTab';

type Note = {
  id: string;
  name: string;
  message: string;
  rotate: number; // degrees
  offset: number; // px, vertical jitter
};

const STORAGE_KEY = 'say-hi-notes';
// Web3Forms emails every "Say hi" to the address the key was created with.
// Get a free key at https://web3forms.com and put it in .env.local as VITE_WEB3FORMS_KEY=...
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;

type Status = 'idle' | 'sending' | 'sent' | 'error';
const MAX_LEN = 140;

const randomStyle = () => ({
  rotate: Math.round((Math.random() * 10 - 5) * 10) / 10,
  offset: Math.round(Math.random() * 16 - 8),
});

const seed: Note[] = [
  { id: 'seed-1', name: 'Yuan', message: 'Welcome! Leave a hi below :)', rotate: -2, offset: 0 },
];

function loadNotes(): Note[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Note[]) : seed;
  } catch {
    return seed;
  }
}

// Each message is emailed to you via Web3Forms. The wall itself is still only saved
// in the visitor's own browser (localStorage); a shared wall would need a backend (e.g. Supabase).
export default function BlogSection() {
  const [notes, setNotes] = useState<Note[]>(loadNotes);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [botcheck, setBotcheck] = useState(false); // honeypot: real people never tick this

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
    } catch {
      /* storage unavailable */
    }
  }, [notes]);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    const text = message.trim();
    if (!text || status === 'sending') return;
    const sender = name.trim() || 'Anonymous';

    setStatus('sending');
    try {
      if (!WEB3FORMS_KEY) throw new Error('Missing VITE_WEB3FORMS_KEY');
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New "Say hi!" from ${sender}`,
          from_name: 'Personal Website',
          name: sender,
          message: text,
          botcheck,
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message);

      setNotes((n) => [{ id: crypto.randomUUID(), name: sender, message: text, ...randomStyle() }, ...n]);
      setMessage('');
      setStatus('sent');
      setTimeout(() => setStatus('idle'), 3000);
    } catch (err) {
      console.error('Say hi failed:', err);
      setStatus('error');
    }
  };

  const input =
    'w-full font-body bg-[#1A1A1A] px-3 py-2 text-[12px] text-white outline-none placeholder:text-white/40 focus:ring-2 focus:ring-[#8ace00] md:px-4 md:py-3 md:text-[17px]';

  return (
    <section className="flex w-full flex-col items-center gap-6 p-0 md:gap-[42px]">
      <div className="flex w-full flex-row items-start px-4 md:px-0">
        <CategoryTab title="Say Hi!" icon="Chat" />
      </div>

      <div className="flex w-full flex-col gap-8 px-4 font-pixel lg:px-[37px]">
        {/* Say hi form */}
        <form
          onSubmit={submit}
          className="hover-pop flex flex-col gap-3 bg-[#343434] p-4 shadow-[5px_5px_3px_#1A1A1A] md:flex-row md:items-end md:gap-5 md:p-[23px] md:shadow-[17px_17px_3px_#1A1A1A]"
        >
          <label className="flex flex-col gap-1 md:w-[221px]">
            <span className="text-[11px] uppercase text-[#8ace00] md:text-[14px]">Name</span>
            <input className={input} value={name} onChange={(e) => setName(e.target.value)} placeholder="Anonymous" maxLength={30} />
          </label>
          <label className="flex flex-1 flex-col gap-1">
            <span className="text-[11px] uppercase text-[#8ace00] md:text-[14px]">Message</span>
            <input className={input} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Say hi!" maxLength={MAX_LEN} required />
          </label>
          {/* Honeypot (hidden from people, bots fill it in) */}
          <input
            type="checkbox"
            name="botcheck"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            checked={botcheck}
            onChange={(e) => setBotcheck(e.target.checked)}
          />
          <button
            type="submit"
            disabled={status === 'sending'}
            className="bg-[#8ace00] disabled:cursor-wait disabled:opacity-60 px-5 py-2 text-[12px] uppercase text-black shadow-[3px_3px_0px_#1A1A1A] transition-all duration-100 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:bg-[#a6f500] hover:shadow-[5px_5px_0px_#1A1A1A] motion-reduce:hover:translate-x-0 motion-reduce:hover:translate-y-0 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none md:py-3 md:text-[17px]"
          >
            {status === 'sending' ? 'Sending...' : 'Say hi!'}
          </button>
        </form>
        {status === 'sent' && (
          <p className="m-0 -mt-4 font-body text-[13px] text-[#8ace00] md:text-[15px]">I got your message!</p>
        )}
        {status === 'error' && (
          <p className="m-0 -mt-4 font-body text-[13px] text-red-400 md:text-[15px]">Couldn't send that. Please try again in a bit.</p>
        )}

        {/* Notes wall 
        <ul className="m-0 flex list-none flex-wrap justify-center gap-5 p-0 md:gap-8">
          {notes.map((n) => (
            <li
              key={n.id}
              style={{ '--r': `${n.rotate}deg`, '--y': `${n.offset}px` } as CSSProperties}
              className="relative w-[calc(50%-8px)] bg-[#343434] p-3 shadow-[5px_5px_3px_#1A1A1A] [transform:rotate(var(--r))_translateY(var(--y))] transition-[transform,box-shadow] duration-150 hover:z-10 hover:[transform:rotate(0deg)_scale(1.03)] hover:shadow-[0_0_0_1px_#8ace00,8px_8px_3px_#1A1A1A] motion-reduce:hover:[transform:rotate(var(--r))_translateY(var(--y))] sm:w-[170px] md:w-[204px] md:p-5"
            >
              <p className="m-0 break-words font-body text-[13px] leading-[1.5] text-white/90 md:text-[15px]">{n.message}</p>
              <p className="m-0 mt-2 text-[11px] uppercase text-[#8ace00] md:text-[12px]">- {n.name}</p>
            </li>
          ))}
        </ul>*/}
      </div>
    </section>
  );
}
