import Image from "next/image";

export type Experience = {
  logoSrc: string;
  institution: string;
  role?: string;
  duration?: string;
  details?: string[];
};

export default function ExperienceSection({
  title,
  items,
}: {
  title: string;
  items: Experience[];
}) {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <div className="flex flex-col gap-6 py-4">
        {items.map((exp, idx) => (
          <section key={idx} className="flex flex-col gap-2">
            <div className="flex justify-between items-start">
              <div className="flex gap-3">
                <Image
                  src={exp.logoSrc}
                  alt={exp.institution}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover border border-gray-200 dark:border-gray-700"
                />
                <div className="flex flex-col space-y-1">
                  <p className="text-base font-semibold text-black dark:text-white">
                    {exp.institution}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {exp.role}
                  </p>
                  <p className="text-sm text-gray-400 dark:text-gray-400 sm:hidden">
                    {exp.duration}
                  </p>
                </div>
              </div>
              <div className="text-sm text-gray-400 hidden sm:block">
                {exp.duration}
              </div>
            </div>

            {exp.details && (
              <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 text-sm pl-14">
                {exp.details.map((item, i) => (
                  <li key={i} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </section>
  );
}
