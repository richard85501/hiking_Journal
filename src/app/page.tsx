export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Welcome!</h2>
      <p>This is the simplest Next.js App Router example.</p>
      {children}
    </div>
  );
}
