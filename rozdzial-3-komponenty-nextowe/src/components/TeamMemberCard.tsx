import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  skills: string[];
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  role,
  bio,
  skills,
}) => {
  return (
    <div className="flex flex-col md:flex-row bg-stone-50 rounded-2xl shadow-xl overflow-hidden max-w-2xl w-full border border-stone-200 transition-all hover:shadow-2xl">
      <div className="md:w-1/3 bg-gradient-to-br from-amber-100 to-orange-50 p-8 flex flex-col items-center justify-center relative">
        <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-lg border-4 border-amber-50/50 z-10">
          <Image
            src="/awatar.png"
            alt={`Zdjęcie profilowe - ${name}`}
            width={128}
            height={128}
            priority
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <div className="md:w-2/3 p-8 flex flex-col justify-center">
        <span
          className={`${roboto.className} text-amber-600 text-xs font-bold uppercase tracking-widest mb-1`}
        >
          {role}
        </span>
        <h2 className="text-3xl font-extrabold text-stone-800 mb-3">{name}</h2>
        <p className="text-stone-600 leading-relaxed text-sm mb-6">{bio}</p>

        <div className="mt-auto">
          <h3 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3">
            Umiejętności
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-white border border-stone-200 text-stone-600 text-xs font-medium px-3 py-1.5 rounded-lg shadow-sm hover:border-amber-300 hover:text-amber-700 hover:bg-amber-50 transition-colors duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-6">
            <Link
              href="https://solvro.pwr.edu.pl/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-amber-600 text-white text-xs font-semibold px-4 py-2 rounded-lg shadow hover:bg-amber-700 transition-colors"
            >
              Dowiedz się więcej
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
