import Image from 'next/image';

/**
 * Sitewide footer badge acknowledging grant support from
 * Uppbyggingarsjóður Austurlands (2026).
 *
 * Logo: the hexagon mark from Sóknaráætlun Austurlands (the umbrella
 * framework Uppbyggingarsjóður operates under), cropped from the official
 * PNG at https://austurbru.is/wp-content/uploads/2021/09/Soknaraaetlun_Austurlands.png
 * (also used as the fund's own logo on austurbru.is). Background was
 * color-keyed to transparent and the wordmark portion was cropped out —
 * its dark-gray text has poor contrast on this site's dark theme, so the
 * accessible name lives in the visible text label instead.
 */
export default function GrantBadge() {
  return (
    <a
      href="https://austurbru.is/throun/uppbyggingarsjodur-austurlands/"
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-2 rounded-full border border-[oklch(24%_0.008_170_/_0.5)] bg-[oklch(15%_0.005_180_/_0.4)] px-3 py-1.5 text-xs text-warm-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-[oklch(60%_0.17_156_/_0.4)] hover:text-warm-200 hover:shadow-[0_0_16px_-4px_oklch(65%_0.17_158_/_0.45)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      <Image
        src="/logos/uppbyggingarsjodur-austurlands.png"
        alt="Merki Uppbyggingarsjóðs Austurlands"
        width={27}
        height={20}
        className="opacity-85 transition-opacity duration-300 group-hover:opacity-100"
      />
      <span>Styrkt af Uppbyggingarsjóði Austurlands</span>
    </a>
  );
}
