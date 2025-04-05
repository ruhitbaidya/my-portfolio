import DOMPurify from "dompurify";
export const Description = ({ htmlContent }) => {
  const cleanHtml = DOMPurify.sanitize(htmlContent);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: cleanHtml }}
      className="prose max-w-none" // Tailwind classes for nice typography
    />
  );
};
