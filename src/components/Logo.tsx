interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className = "", size = 56 }: LogoProps) {
  return (
    <img
      src="/logo.png"
      alt="Pani&Forno Logo"
      className={className}
      style={{ width: size, height: "auto" }}
    />
  );
}
