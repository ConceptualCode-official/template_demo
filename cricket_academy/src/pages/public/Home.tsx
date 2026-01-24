import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle,
  Instagram,
  PlayCircle,
  Shield,
  TrendingUp,
  Trophy,
  Video,
  Zap
} from 'lucide-react';
import { PageTransition } from '../../components/layout/PageTransition';
import { Button } from '../../components/ui/Button';
import { Reveal } from '../../components/ui/Reveal';
import { TextReveal } from '../../components/ui/TextReveal';
import { TiltCard } from '../../components/ui/TiltCard';

export const Home = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <PageTransition>
      <div className="min-h-screen overflow-hidden bg-white dark:bg-slate-950">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-primary">
          {/* Parallax Background */}
          <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40 z-10" />
            <img
              src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2067&q=80"
              alt="Cricket Stadium"
              className="w-full h-full object-cover scale-110"
            />
          </motion.div>

          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Reveal delay={0.2}>
                  <div className="inline-flex items-center space-x-2 py-1.5 px-4 rounded-full bg-white/10 text-white font-medium text-sm mb-8 backdrop-blur-md border border-white/20 shadow-xl">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                    </span>
                    <span className="tracking-wide text-xs uppercase">
                      Admissions Open for 2025 Season
                    </span>
                  </div>
                </Reveal>

                <div className="mb-6">
                  <TextReveal
                    text="FORGING FUTURE LEGENDS"
                    className="text-5xl md:text-7xl font-bold text-white leading-[1.1] font-display"
                  />
                </div>

                <Reveal delay={0.6}>
                  <p className="text-lg text-slate-200 mb-10 max-w-xl leading-relaxed font-light">
                    Experience professional-grade cricket training with
                    state-of-the-art technology, biomechanics analysis, and
                    world-class coaching staff.
                  </p>
                </Reveal>

                <Reveal delay={0.8}>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      size="lg"
                      variant="white"
                      className="group relative overflow-hidden whitespace-nowrap"
                    >
                      <span className="relative z-10 flex items-center">
                        Start Your Journey
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <div className="absolute inset-0 bg-gray-50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-white border-white hover:bg-white/10 backdrop-blur-sm whitespace-nowrap"
                    >
                      <PlayCircle className="mr-2 w-5 h-5" />
                      View Facilities
                    </Button>
                  </div>
                </Reveal>
              </div>

              {/* Hero Stats/Floating Card */}
              <motion.div
                style={{ y: y2 }}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="hidden md:block relative perspective-1000"
              >
                <div className="absolute -inset-10 bg-secondary/30 rounded-full blur-[100px]"></div>
                <TiltCard className="relative">
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl">
                    <div className="flex items-center justify-between mb-8">
                      <div>
                        <p className="text-slate-300 text-sm uppercase tracking-wider font-semibold">
                          Batting Average
                        </p>
                        <h3 className="text-5xl font-bold text-white mt-1">
                          52.4
                        </h3>
                      </div>
                      <div className="bg-green-500/20 p-3 rounded-2xl">
                        <TrendingUp className="w-8 h-8 text-green-400" />
                      </div>
                    </div>
                    <div className="space-y-4 mb-8">
                      <div className="flex justify-between text-sm text-slate-300 mb-2">
                        <span>Performance</span>
                        <span className="text-white font-bold">Top 5%</span>
                      </div>
                      <div className="h-3 bg-black/20 rounded-full overflow-hidden backdrop-blur-sm">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "75%" }}
                          transition={{ duration: 1.5, delay: 1 }}
                          className="h-full bg-gradient-to-r from-accent to-orange-500 rounded-full"
                        ></motion.div>
                      </div>
                    </div>
                    <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                      <div className="flex -space-x-4">
                        {[1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className="w-12 h-12 rounded-full border-2 border-primary bg-slate-800 flex items-center justify-center overflow-hidden shadow-lg"
                          >
                            <img
                              src={`https://i.pravatar.cc/100?img=${i + 10}`}
                              className="w-full h-full object-cover"
                              alt="Student"
                            />
                          </div>
                        ))}
                        <div className="w-12 h-12 rounded-full border-2 border-primary bg-secondary flex items-center justify-center text-xs font-bold text-white shadow-lg">
                          +500
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-white text-lg font-bold">
                          Active Students
                        </p>
                        <p className="text-accent text-sm">
                          Join the elite squad
                        </p>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ delay: 2, duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
          </motion.div>
        </section>

        {/* Match Center Section (New) */}
        <section className="py-12 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold text-slate-800 dark:text-white flex items-center">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                MATCH CENTER
              </h3>
              <a
                href="#"
                className="text-primary dark:text-secondary text-sm font-semibold hover:underline"
              >
                View All Results
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  type: "T20 League",
                  team1: "Elite Academy",
                  team2: "Spartans CC",
                  score1: "185/4",
                  score2: "160/9",
                  result: "Elite won by 25 runs",
                  date: "Yesterday",
                },
                {
                  type: "U-16 Cup",
                  team1: "Elite Juniors",
                  team2: "City Club",
                  score1: "210/5",
                  score2: "198/8",
                  result: "Elite won by 12 runs",
                  date: "2 days ago",
                },
                {
                  type: "Practice",
                  team1: "Batch A",
                  team2: "Batch B",
                  score1: "145/8",
                  score2: "146/4",
                  result: "Batch B won by 6 wkts",
                  date: "Today",
                },
              ].map((match, i) => (
                <Reveal key={i} delay={i * 0.1} width="100%">
                  <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-center mb-4 text-xs text-slate-500 uppercase font-bold tracking-wider">
                      <span>{match.type}</span>
                      <span>{match.date}</span>
                    </div>
                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-xs">
                            EL
                          </div>
                          <span className="font-bold text-slate-800 dark:text-white">
                            {match.team1}
                          </span>
                        </div>
                        <span className="font-mono font-bold text-slate-900 dark:text-white">
                          {match.score1}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center font-bold text-slate-500 text-xs">
                            OP
                          </div>
                          <span className="font-medium text-slate-600 dark:text-slate-400">
                            {match.team2}
                          </span>
                        </div>
                        <span className="font-mono text-slate-600 dark:text-slate-400">
                          {match.score2}
                        </span>
                      </div>
                    </div>
                    <div className="pt-3 border-t border-slate-100 dark:border-slate-700 text-sm font-medium text-green-600 dark:text-green-400">
                      {match.result}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-32 bg-white dark:bg-slate-950 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-100 to-transparent dark:from-slate-900/50 pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col items-center">
              <Reveal>
                <h2 className="text-secondary font-bold tracking-widest uppercase mb-4 text-sm">
                  Why Choose Elite Cricket
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 font-display">
                  PROFESSIONAL TRAINING <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    INFRASTRUCTURE
                  </span>
                </h3>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-slate-600 dark:text-slate-400 text-lg">
                  We bridge the gap between amateur passion and professional
                  performance through technology and discipline.
                </p>
              </Reveal>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Video,
                  title: "Video Analysis",
                  desc: "High-speed cameras and AI-driven motion analysis to perfect your technique frame by frame.",
                  color: "text-blue-500",
                  bg: "bg-blue-500/10",
                },
                {
                  icon: Shield,
                  title: "Injury Prevention",
                  desc: "Physiotherapy and biomechanics screening to ensure longevity and peak physical condition.",
                  color: "text-green-500",
                  bg: "bg-green-500/10",
                },
                {
                  icon: Trophy,
                  title: "Tournament Exposure",
                  desc: "Regular participation in state and national level leagues to build match temperament.",
                  color: "text-amber-500",
                  bg: "bg-amber-500/10",
                },
              ].map((feature, index) => (
                <Reveal
                  key={index}
                  delay={index * 0.2}
                  direction="up"
                  className="h-full"
                  overflow="visible"
                >
                  <TiltCard className="h-full">
                    <div className="h-full bg-white dark:bg-slate-900 p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100 dark:border-slate-800 group">
                      <div
                        className={`w-16 h-16 ${feature.bg} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <feature.icon className={`w-8 h-8 ${feature.color}`} />
                      </div>
                      <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        {feature.desc}
                      </p>

                      <div className="mt-8 flex items-center text-sm font-bold text-primary dark:text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        Learn more <ArrowRight className="ml-2 w-4 h-4" />
                      </div>
                    </div>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Coaches Section (New) */}
        <section className="py-24 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 flex flex-col items-center">
              <Reveal>
                <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4 font-display">
                  MEET THE MENTORS
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                  Learn from former internationals and certified coaches who
                  have played the game at the highest level.
                </p>
              </Reveal>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  name: "Vikram Rathour",
                  role: "Head Coach",
                  exp: "Ex-India Player",
                  img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                },
                {
                  name: "Sarah Taylor",
                  role: "Batting Specialist",
                  exp: "Level 3 Coach",
                  img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                },
                {
                  name: "Brett Lee",
                  role: "Bowling Coach",
                  exp: "Pace Legend",
                  img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                },
                {
                  name: "Mike Hussey",
                  role: "Strategy",
                  exp: "Mr. Cricket",
                  img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                },
              ].map((coach, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="group relative overflow-hidden rounded-2xl aspect-[3/4]">
                    <img
                      src={coach.img}
                      alt={coach.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-accent text-xs font-bold uppercase tracking-wider mb-1">
                        {coach.exp}
                      </p>
                      <h4 className="text-xl font-bold text-white mb-1">
                        {coach.name}
                      </h4>
                      <p className="text-slate-300 text-sm">{coach.role}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-32 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-between items-center mb-16">
              <div className="max-w-2xl">
                <Reveal>
                  <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 font-display">
                    OUR PROGRAMS
                  </h2>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="text-slate-600 dark:text-slate-400 text-lg">
                    Tailored coaching modules designed for every stage of a
                    cricketer's journey, from grassroots to professional levels.
                  </p>
                </Reveal>
              </div>
              <Reveal delay={0.2} className="self-end">
                <Button variant="outline" className="mt-6 md:mt-0 group">
                  View All Programs{" "}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Reveal>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Foundation",
                  age: "Age 8-12",
                  price: "$60/mo",
                  features: [
                    "Basic Technique",
                    "Fitness Fundamentals",
                    "Weekend Matches",
                    "Equipment Support",
                  ],
                  image:
                    "https://images.unsplash.com/photo-1593766827245-2968cc800974?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                },
                {
                  title: "Development",
                  age: "Age 13-16",
                  price: "$90/mo",
                  features: [
                    "Advanced Drills",
                    "Video Analysis",
                    "League Matches",
                    "Nutrition Planning",
                  ],
                  image:
                    "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  popular: true,
                },
                {
                  title: "High Performance",
                  age: "Age 17+",
                  price: "$150/mo",
                  features: [
                    "1-on-1 Coaching",
                    "Biomechanics Lab",
                    "State Selection Prep",
                    "Sports Psychology",
                  ],
                  image:
                    "https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                },
              ].map((program, index) => (
                <Reveal
                  key={index}
                  delay={index * 0.2}
                  width="100%"
                  overflow="visible"
                >
                  <div className="group relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    <div className="h-56 overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute bottom-4 left-4 z-20">
                        <span className="text-xs font-bold text-white bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30">
                          {program.age}
                        </span>
                      </div>
                      {program.popular && (
                        <div className="absolute top-4 right-4 z-20">
                          <span className="flex items-center gap-1 text-xs font-bold text-white bg-accent px-3 py-1 rounded-full shadow-lg">
                            <Zap className="w-3 h-3 fill-current" /> POPULAR
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-8">
                      <h4 className="text-2xl font-bold mb-2 dark:text-white font-display">
                        {program.title}
                      </h4>
                      <div className="text-3xl font-bold text-primary dark:text-blue-400 mb-6">
                        {program.price}
                      </div>
                      <ul className="space-y-4 mb-8">
                        {program.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-center text-slate-600 dark:text-slate-400 text-sm"
                          >
                            <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3 shrink-0">
                              <CheckCircle className="w-3 h-3 text-green-600 dark:text-green-400" />
                            </div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button
                        variant={program.popular ? "primary" : "outline"}
                        className="w-full rounded-xl py-4"
                      >
                        Enroll Now
                      </Button>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section (New) */}
        <section className="py-24 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white font-display">
                ACADEMY LIFE
              </h2>
              <Button variant="ghost" className="hidden sm:flex">
                Follow us on Instagram <Instagram className="ml-2 w-4 h-4" />
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
              {[
                "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80",
                "https://images.unsplash.com/photo-1593766827245-2968cc800974?w=800&q=80",
                "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=800&q=80",
                "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&q=80",
                "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80",
              ].map((src, i) => (
                <Reveal
                  key={i}
                  delay={i * 0.1}
                  className={`rounded-2xl overflow-hidden ${i === 0 ? "col-span-2 row-span-2" : "col-span-1 row-span-1"}`}
                >
                  <div className="group relative w-full h-full">
                    <img
                      src={src}
                      alt="Gallery"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Instagram className="text-white w-8 h-8" />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

          {/* Animated Circles BG */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] rounded-full bg-secondary/20 blur-3xl"
            ></motion.div>
            <motion.div
              animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 12, repeat: Infinity }}
              className="absolute -bottom-1/2 -left-1/2 w-[800px] h-[800px] rounded-full bg-accent/10 blur-3xl"
            ></motion.div>
          </div>

          <div className="max-w-4xl mx-auto px-4 text-center relative z-10 flex flex-col items-center">
            <Reveal>
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 font-display tracking-tight">
                READY TO ELEVATE <br /> YOUR GAME?
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-xl text-slate-200 mb-12 max-w-2xl mx-auto font-light">
                Join the academy that has produced over 50 state-level
                cricketers in the last 3 years.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Button
                  size="lg"
                  variant="white"
                  className="text-primary font-bold px-10 py-5 text-lg shadow-2xl shadow-white/20 hover:shadow-white/40"
                >
                  Book Free Trial Session
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-white/10 px-10 py-5 text-lg"
                >
                  Download Brochure
                </Button>
              </div>
            </Reveal>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};
