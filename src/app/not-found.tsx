import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-back px-6 text-center text-cream">
      <p className="text-sm text-cream/60">404</p>
      <h1 className="mt-2 text-3xl font-extrabold sm:text-5xl">
        This room isn&apos;t in the vault.
      </h1>
      <p className="mt-4 max-w-[46ch] leading-relaxed text-cream/70">
        The page you were looking for doesn&apos;t exist — maybe it moved,
        maybe it never did. The exhibits are back that way.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-cream px-6 py-3 font-bold text-black transition-colors duration-200 hover:bg-wine hover:text-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
      >
        Return to the vault
      </Link>
    </main>
  );
}
