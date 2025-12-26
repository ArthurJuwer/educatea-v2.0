export default function CommentCard({ text, author, image, comunidade = false }) {
  return (
    <article
      className={`
        border-2 border-[#0033FF] rounded-lg flex items-center gap-4
        transition-all
        
        ${comunidade
          ? "p-3 h-[95px] w-full text-sm"
          : "p-4 lg:py-6 h-[115px] lg:w-[450px] text-sm"
        }
      `}
    >
      {/* Avatar */}
      <img
        src={image}
        alt={`Avatar de ${author}`}
        className={`
          object-cover rounded-full
          ${comunidade ? "w-12 h-12" : "w-14 h-14"}
        `}
      />

      {/* Content */}
      <div className="flex flex-col justify-center">
        <p
          className={`
            leading-snug
            ${comunidade ? "text-[13px] line-clamp-2" : "text-sm"}
          `}
        >
          {text}
        </p>

        <span
          className={`
            mt-1 text-gray-600
            ${comunidade ? "text-[11px]" : "text-xs"}
          `}
        >
          {author}
        </span>
      </div>
    </article>
  );
}
