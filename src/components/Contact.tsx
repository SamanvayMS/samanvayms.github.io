import { useState } from "react";
import { MapPin, Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { site } from "../data/site";
import { SocialLinks } from "./ui/SocialLinks";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // No Formspree endpoint configured yet → fall back to a prefilled email.
    if (!site.formspreeEndpoint) {
      const subject = encodeURIComponent(`Portfolio message from ${data.get("name") ?? ""}`);
      const body = encodeURIComponent(
        `${data.get("message") ?? ""}\n\n${data.get("name") ?? ""} (${data.get("email") ?? ""})`,
      );
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(site.formspreeEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const fieldClass =
    "w-full rounded-lg border border-[var(--color-glass-08)] bg-[var(--color-glass-04)] px-3.5 py-2.5 text-sm text-white placeholder:text-[var(--color-mute-500)] outline-none transition-colors focus:border-[var(--color-accent)]";

  return (
    <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
      {/* Left: details */}
      <div>
        <p className="text-[var(--color-mute-300)]">
          I'm always open to conversations about quant research, ML engineering, and
          trading-systems work. Drop a message and I'll get back to you.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-[var(--color-mute-300)]">
            <MapPin className="h-4 w-4 text-[var(--color-accent)]" /> {site.location}
          </span>
          <a
            href={`mailto:${site.email}`}
            className="glass glass-interactive inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-[var(--color-mute-300)]"
          >
            <Mail className="h-4 w-4 text-[var(--color-accent)]" /> Email
          </a>
        </div>

        <SocialLinks glass includeEmail={false} className="mt-4" />
      </div>

      {/* Right: form */}
      <form onSubmit={handleSubmit} className="glass p-6 md:p-8">
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-[var(--color-mute-400)]">
              Name
            </label>
            <input id="name" name="name" type="text" required className={fieldClass} placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-[var(--color-mute-400)]">
              Email
            </label>
            <input id="email" name="email" type="email" required className={fieldClass} placeholder="you@example.com" />
          </div>
          <div>
            <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-[var(--color-mute-400)]">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className={`${fieldClass} resize-y`}
              placeholder="What's on your mind?"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="glass glass-interactive inline-flex w-full items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium text-white disabled:opacity-60"
          >
            <Send className="h-4 w-4" />
            {status === "sending" ? "Sending…" : "Send message"}
          </button>

          {status === "success" && (
            <p role="status" className="flex items-center gap-2 text-sm text-emerald-400">
              <CheckCircle2 className="h-4 w-4" /> Thanks, your message has been sent.
            </p>
          )}
          {status === "error" && (
            <p role="alert" className="flex items-center gap-2 text-sm text-red-400">
              <AlertCircle className="h-4 w-4" /> Something went wrong. Please email me directly.
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
