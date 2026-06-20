import { motion, useReducedMotion } from "framer-motion";
import { Star, BookOpen } from "lucide-react";
import { books, type Book } from "../data/books";
import { FX_DISABLED } from "../lib/fx";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`Rated ${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < rating;
        return (
          <Star
            key={i}
            className="h-3.5 w-3.5"
            style={{ color: filled ? "#ECC94B" : "#4A5568" }}
            fill={filled ? "#ECC94B" : "none"}
            aria-hidden
          />
        );
      })}
    </div>
  );
}

function Cover({ book }: { book: Book }) {
  if (book.cover) {
    return (
      <img
        src={book.cover}
        alt={`Cover of ${book.title}`}
        loading="lazy"
        className="max-h-64 w-full rounded-md object-contain"
      />
    );
  }
  // Placeholder cover when no image is provided.
  return (
    <div className="flex h-56 w-40 flex-col items-center justify-center gap-3 rounded-md border border-[var(--color-glass-12)] bg-gradient-to-br from-[var(--color-glass-12)] via-[var(--color-glass-06)] to-transparent p-4 text-center">
      <BookOpen className="h-7 w-7 text-[var(--color-accent)]" aria-hidden />
      <span className="line-clamp-3 text-sm font-semibold text-white">{book.title}</span>
    </div>
  );
}

function BookCard({ book, index }: { book: Book; index: number }) {
  const reduce = useReducedMotion();
  const reading = book.currentlyReading;
  return (
    <motion.article
      className={`group relative flex h-full flex-col rounded-xl border p-6 backdrop-blur-[6px] transition-all duration-300 ${
        reading
          ? "border-[var(--color-glass-16)] bg-[var(--color-glass-08)] hover:scale-[1.02]"
          : "border-[var(--color-glass-08)] bg-[var(--color-glass-06)]"
      } hover:border-[var(--color-glass-16)] hover:bg-[var(--color-glass-08)]`}
      initial={reduce || FX_DISABLED ? false : { opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduce ? 0 : 0.6, delay: reduce ? 0 : index * 0.1, ease: [0, 0, 0.2, 1] }}
    >
      {reading && (
        <span className="pointer-events-none absolute -right-2 -top-2 z-[2] rounded-full bg-green-500 px-3 py-1 text-xs font-bold text-white opacity-0 shadow-lg transition-all duration-200 group-hover:scale-110 group-hover:opacity-100">
          📖 Currently Reading
        </span>
      )}

      {/* Green glow on hover for reading cards */}
      {reading && (
        <span
          className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ boxShadow: "0 0 20px rgba(34,197,94,0.30)" }}
          aria-hidden
        />
      )}

      <div className="mb-4 flex justify-center">
        <Cover book={book} />
      </div>

      <div className="mb-2 flex items-start justify-between gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-[var(--color-mute-300)]">
          {book.category}
        </span>
        <Stars rating={book.rating} />
      </div>

      <div className="h-20">
        <h2 className="line-clamp-2 text-xl font-bold leading-tight text-white">{book.title}</h2>
        <p className="mt-1 text-xs text-[var(--color-mute-400)]">{book.author}</p>
      </div>

      {book.note && (
        <p className="flex-1 text-sm leading-relaxed text-[var(--color-mute-300)]">{book.note}</p>
      )}
    </motion.article>
  );
}

export default function BookshelfGrid() {
  return (
    <div
      className="grid gap-6"
      style={{ gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }}
    >
      {books.map((book, i) => (
        <BookCard key={book.title} book={book} index={i} />
      ))}
    </div>
  );
}
