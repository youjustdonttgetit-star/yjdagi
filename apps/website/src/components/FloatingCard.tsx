type Props = {
  title: string;
  children?: React.ReactNode;
};

export default function FloatingCard({ title, children }: Props) {
  return (
    <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-lg hover:scale-[1.03] transition">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      {children}
    </div>
  );
}
