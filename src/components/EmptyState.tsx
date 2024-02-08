import Image from "next/image";
import emptyState from "../../public/empty.jpeg";

export const EmptyState = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => {
  return (
    <section className="flex flex-col items-center justify-center px-10 py-12 gap-2 w-full h-full">
      <Image unoptimized src={emptyState} alt="empty-state" />
      <h1 className="font-bold text-base text-neutral-dark">{title}</h1>
      <p className="max-w-sm text-neutral-600 text-sm text-center">
        {subtitle}
      </p>
    </section>
  );
};
