interface YouTubeProps {
  videoId: string;
  className?: string;
}

export function YouTube({ videoId, className }: YouTubeProps) {
  return (
    <div className={`relative w-full aspect-video rounded-lg overflow-hidden ${className}`}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full"
      />
    </div>
  );
}
