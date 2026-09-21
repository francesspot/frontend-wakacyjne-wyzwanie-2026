import TeamMemberCard from "@/components/TeamMemberCard";

export default function Home() {
  const teamMember = {
    name: "Franciszek Pora",
    role: "Frontend Developer",
    bio: "I am a passionate frontend developer with experience in building responsive and user-friendly web applications. I enjoy working with modern web technologies and continuously learning new skills.",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "JavaScript"],
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TeamMemberCard {...teamMember} />
    </main>
  );
}
