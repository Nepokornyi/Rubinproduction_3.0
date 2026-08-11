import { CleanMedia } from "@/components/media/CleanMedia";
import type { WorkItem } from "@/types/content";

export function CaseCard({ item, index, onOpen }: { item: WorkItem; index: number; onOpen: () => void }) {
  return (
    <article className="work-card">
      <button type="button" className="work-card__button" onClick={onOpen} aria-label={`Open selected music visual ${index + 1}`}>
        <CleanMedia {...item.media} sizes="(max-width: 767px) 50vw, 33vw" />
      </button>
    </article>
  );
}
