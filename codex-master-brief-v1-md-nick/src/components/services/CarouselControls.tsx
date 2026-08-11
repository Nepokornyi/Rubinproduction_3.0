export function CarouselControls({ current, total, label, onPrevious, onNext, onSelect, emphasizeNext = false }: { current: number; total: number; label: string; onPrevious: () => void; onNext: () => void; onSelect: (index: number) => void; emphasizeNext?: boolean }) {
  return (
    <div className="carousel-controls" aria-label={`${label} carousel controls`}>
      <button type="button" onClick={onPrevious} aria-label={`Previous ${label} slide`}><span aria-hidden="true">←</span></button>
      <div className="carousel-dots" role="group" aria-label={`${label} slides`}>
        {Array.from({ length: total }, (_, index) => (
          <button key={index} type="button" className={index === current ? "is-active" : ""} aria-label={`Show ${label} slide ${index + 1}`} aria-current={index === current ? "true" : undefined} onClick={() => onSelect(index)} />
        ))}
      </div>
      <span className="carousel-count" aria-live="polite">{String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</span>
      <button type="button" className={emphasizeNext ? "carousel-next" : undefined} onClick={onNext} aria-label={`Next ${label} slide`}><span aria-hidden="true">→</span></button>
    </div>
  );
}
