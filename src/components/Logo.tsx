export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg width="30" height="30" viewBox="0 0 40 40" aria-hidden="true">
        <circle cx="20" cy="20" r="19" fill="#5f8b39" />
        <path
          d="M20 10 c7 2 11 8 11 15 c-8 0 -13 -6 -13 -13 c0 7 -5 13 -13 13 c0 -7 4 -13 11 -15 c1 -0.5 3 -0.5 4 0 z"
          fill="#f2d675"
        />
        <circle cx="20" cy="27" r="2" fill="#f2d675" />
      </svg>
      <span className="font-serif text-xl font-bold tracking-tight text-leaf-800">
        Diri<span className="text-gold-600"> Oils</span>
      </span>
    </span>
  );
}
