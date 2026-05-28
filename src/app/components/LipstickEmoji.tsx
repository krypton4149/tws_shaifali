type LipstickEmojiProps = {
  className?: string;
};

export default function LipstickEmoji({ className = 'text-xl' }: LipstickEmojiProps) {
  return (
    <span
      className={`inline-block leading-none select-none ${className}`}
      role="img"
      aria-label="Makeup — lipstick"
    >
      💄
    </span>
  );
}
