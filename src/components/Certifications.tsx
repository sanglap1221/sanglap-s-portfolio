// import { Award, ExternalLink } from "lucide-react";
// import { Button } from "@/components/ui/button";


// const Certifications = () => {
//   return (
//     <section id="certifications" className="py-24 relative overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
//       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

//       <div className="container mx-auto px-4 md:px-6 relative z-10">
//         <div className="text-center mb-14">
//           <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
//             Verified Credentials
//           </span>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
//             My <span className="gradient-text">Certifications</span>
//           </h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Certifications and internship proof showcasing practical, hands-on development experience.
//           </p>
//         </div>

//         <div className="max-w-3xl mx-auto space-y-4">
//           {certifications.map((cert) => (
//             <div key={`${cert.title}-${cert.issuer}`} className="glow-card rounded-2xl p-7">
//               <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
//                 <div className="flex items-start gap-4">
//                   <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
//                     <Award className="w-6 h-6" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-semibold">{cert.title}</h3>
//                     <p className="text-muted-foreground">{cert.issuer}</p>
//                     <p className="text-sm text-secondary mt-1">{cert.credential}</p>
//                   </div>
//                 </div>

//                 <Button
//                   size="sm"
//                   className="bg-primary text-primary-foreground hover:bg-primary/90"
//                   asChild
//                 >
//                   <a href={cert.certificateUrl} target="_blank" rel="noreferrer">
//                     View Certificate
//                     <ExternalLink className="w-4 h-4 ml-2" />
//                   </a>
//                 </Button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Certifications;
