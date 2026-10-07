export default function LanguageSwitcher() {
  return (
    <button
      type="button"
      className="flex items-center gap-[0.35em] text-[clamp(1rem,1.9vw,1.75rem)] font-medium tracking-tighter"
    >
      Français
      <svg
        aria-hidden="true"
        viewBox="0 0 10 6"
        className="h-[0.35em] w-[0.6em] fill-current"
      >
        <path d="M0 0h10L5 6z" />
      </svg>
    </button>
  );
}
