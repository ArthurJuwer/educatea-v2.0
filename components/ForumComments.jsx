export default function CommentCard({ text, author, image, align }) {
  return (
    <article
      className={`border-[#0033FF] border-2 rounded-lg p-4 lg:py-6 flex items-center gap-4 lg:w-[450px] h-[115px]
        ${align === "left" ? "" : ""}`}
    >
      <img
        src={image}
        alt={`Avatar de ${author}`}
        className="object-cover"
      />

      <div>
        <p className="text-sm">{text}</p>
        <span className="text-xs">{author}</span>
      </div>
    </article>
  );
}

