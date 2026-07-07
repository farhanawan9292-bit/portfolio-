'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import {
  Megaphone,
  Palette,
  TrendingUp,
  BarChart3,
  Target,
  PenTool,
  Video,
  Layers,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ChevronDown,
  Award,
  GraduationCap,
  Briefcase,
  Star,
  Menu,
  X,
  Send,
  ArrowUp,
  Sparkles,
  Eye,
  Zap,
  Globe,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'

/* ───── data ───── */
const skills = [
  { name: 'Meta Ads Management', icon: Target, level: 90, color: 'from-amber-500 to-orange-600' },
  { name: 'Social Media Strategy', icon: Megaphone, level: 85, color: 'from-orange-500 to-red-500' },
  { name: 'Content Creation', icon: PenTool, level: 88, color: 'from-amber-400 to-amber-600' },
  { name: 'Brand Development', icon: Layers, level: 82, color: 'from-yellow-500 to-amber-500' },
  { name: 'E-commerce Marketing', icon: TrendingUp, level: 85, color: 'from-orange-400 to-amber-500' },
  { name: 'Campaign Optimization', icon: Zap, level: 87, color: 'from-red-400 to-orange-500' },
  { name: 'Graphic & Video Design', icon: Video, level: 80, color: 'from-amber-500 to-yellow-500' },
  { name: 'Analytics & Reporting', icon: BarChart3, level: 78, color: 'from-orange-500 to-amber-400' },
]

const experiences = [
  {
    title: 'Social Media Manager & Marketer',
    company: 'Self-Managed E-commerce Brand (Dropshipping)',
    type: 'current',
    highlights: [
      'Developed and executed comprehensive Meta Ads strategies, managing campaigns from awareness to conversion with a focus on continuous performance optimization.',
      'Created and tested multiple ad creatives, identifying winning variations that significantly improved campaign results and reduced ad spend waste.',
      'Managed all social media activities including content strategy, daily posting schedule, community engagement, and brand consistency across platforms.',
      'Designed branded content including product images, promotional graphics, and short-form video advertisements for Facebook and Instagram.',
      'Built and maintained brand identity across all digital platforms with consistent visual language and messaging guidelines.',
    ],
  },
  {
    title: 'Graphic Designer (Entry-Level)',
    company: 'Freelance',
    type: 'past',
    highlights: [
      'Created visual content for social media channels including banners, flyers, and custom thumbnails tailored to brand identity.',
      'Edited short-form videos with transitions, text overlays, and audio optimization for maximum engagement on social platforms.',
    ],
  },
  {
    title: 'Customer Service Representative',
    company: 'Previous Role',
    type: 'past',
    highlights: [
      'Managed high volumes of customer inquiries and resolved concerns efficiently, building strong communication and problem-solving skills applicable across client-facing roles.',
    ],
  },
]

const education = [
  {
    degree: 'Bachelor of Business Administration (BBA ADP)',
    school: 'Minhaj University, Lahore',
    year: '',
    icon: GraduationCap,
  },
  {
    degree: 'Intermediate in Computer Science (I.C.S)',
    school: 'Punjab Group of Colleges, Noushehra',
    year: '2021',
    icon: GraduationCap,
  },
  {
    degree: 'Matriculation in Computer Science',
    school: 'Jinnah Grammar Higher Secondary School, Noushehra',
    year: '2019',
    icon: GraduationCap,
  },
]

const certifications = [
  { name: 'Digital Marketing', issuer: 'QANMOS', icon: Award },
  { name: 'Graphic Design', issuer: 'Logix Computers', icon: Palette },
  { name: 'Pitman English', issuer: 'Minhaj University', icon: Globe },
]

const stats = [
  { label: 'Ad Campaigns Managed', value: '50+', icon: Megaphone },
  { label: 'Content Pieces Created', value: '500+', icon: PenTool },
  { label: 'Brands Grown', value: '10+', icon: TrendingUp },
  { label: 'Client Satisfaction', value: '95%', icon: Star },
]

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

/* ───── animation helpers ───── */
function FadeInWhenVisible({ children, delay = 0, direction = 'up', className = '' }: {
  children: React.ReactNode; delay?: number; direction?: 'up' | 'down' | 'left' | 'right'; className?: string
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const dirs = {
    up: { y: 40 }, down: { y: -40 }, left: { x: 40 }, right: { x: -40 },
  }
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...dirs[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ───── components ───── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-lg shadow-sm border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#hero" className="font-bold text-lg tracking-tight text-primary">
            FJ<span className="text-amber-500">.</span>
          </a>
          {/* desktop */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-md hover:bg-accent">
                {l.label}
              </a>
            ))}
          </div>
          {/* mobile toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 text-muted-foreground hover:text-primary">
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {/* mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border"
          >
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-md hover:bg-accent">
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

function HeroSection() {
  const words = ['Social Media Manager', 'Digital Marketer', 'Brand Strategist', 'Content Creator']
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-300/5 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
          <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm font-medium bg-amber-100 text-amber-800 border-amber-200 hover:bg-amber-100">
            <Sparkles className="w-3.5 h-3.5 mr-1.5" /> Available for new projects
          </Badge>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6"
        >
          <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden ring-4 ring-amber-400/40 shadow-xl shadow-amber-500/20">
            <img
              src="/profile.jpeg"
              alt="Farhan Javed Awan"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4"
        >
          Hi, I&apos;m{' '}
          <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent animate-gradient">
            Farhan Javed
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="h-10 sm:h-12 md:h-14 flex items-center justify-center mb-6"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={wordIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-xl sm:text-2xl md:text-4xl font-semibold text-muted-foreground"
            >
              {words[wordIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed"
        >
          Creative and results-oriented marketer with hands-on experience in Meta Ads management,
          content creation, and brand growth. Turning ideas into impactful digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white shadow-lg shadow-amber-500/25 px-8" asChild>
            <a href="#contact">
              <Send className="w-4 h-4 mr-2" /> Get In Touch
            </a>
          </Button>
          <Button size="lg" variant="outline" className="px-8 border-amber-300 text-amber-700 hover:bg-amber-50" asChild>
            <a href="#experience">
              <Eye className="w-4 h-4 mr-2" /> View My Work
            </a>
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <ChevronDown className="w-5 h-5 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function StatsSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <FadeInWhenVisible key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 mb-3">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-amber-100 text-sm font-medium">{stat.label}</div>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInWhenVisible>
          <div className="text-center mb-14">
            <Badge variant="secondary" className="mb-3">About Me</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Who I <span className="text-amber-500">Am</span>
            </h2>
          </div>
        </FadeInWhenVisible>

        <div className="grid md:grid-cols-5 gap-10 items-start">
          {/* Left - decorative card */}
          <FadeInWhenVisible direction="left" className="md:col-span-2">
            <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-amber-50 to-orange-50">
              <div className="p-8">
                <div className="w-24 h-24 rounded-2xl overflow-hidden mb-6 shadow-lg shadow-amber-500/30 ring-2 ring-amber-400/50">
                  <img
                    src="/profile.jpeg"
                    alt="Farhan Javed Awan"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-1">Farhan Javed Awan</h3>
                <p className="text-muted-foreground mb-4">Social Media Manager & Marketer</p>
                <Separator className="my-4" />
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-amber-500 shrink-0" /> Lahore, Punjab, Pakistan
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="w-4 h-4 text-amber-500 shrink-0" /> +92 306 3355519
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="w-4 h-4 text-amber-500 shrink-0" /> farhanawan9292@gmail.com
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-amber-100 text-amber-800 border-amber-200">English — Professional</Badge>
                  <Badge className="bg-amber-100 text-amber-800 border-amber-200">Urdu — Native</Badge>
                </div>
              </div>
            </Card>
          </FadeInWhenVisible>

          {/* Right - about text */}
          <FadeInWhenVisible direction="right" delay={0.2} className="md:col-span-3">
            <div className="space-y-5">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I am a creative and results-oriented Social Media Manager & Marketer with hands-on experience
                in Meta Ads management, content creation, and brand growth. My journey in digital marketing
                began with a passion for storytelling and a keen eye for visual aesthetics, which naturally
                led me to specialize in social media marketing and e-commerce growth strategies.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Successfully managed e-commerce social presence from the ground up — running targeted ad
                campaigns, creating engaging content, and building brand identity. I thrive on the challenge
                of transforming creative ideas into measurable business results, whether that means scaling
                ad campaigns, optimizing conversion funnels, or developing content that resonates with target
                audiences.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Skilled in testing ad creatives, optimizing campaigns for better performance, and maintaining
                consistent brand messaging across all social platforms. My approach combines data-driven
                decision-making with creative intuition, ensuring every campaign delivers both aesthetic
                appeal and commercial impact. I believe that the best marketing happens at the intersection
                of creativity and analytics.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {['Meta Ads Expert', 'Content Strategist', 'Brand Builder', 'E-commerce Growth', 'Creative Designer'].map((tag) => (
                  <Badge key={tag} variant="outline" className="px-3 py-1 text-sm border-amber-300 text-amber-700">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  )
}

function SkillsSection() {
  return (
    <section id="skills" className="py-20 sm:py-28 bg-muted/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInWhenVisible>
          <div className="text-center mb-14">
            <Badge variant="secondary" className="mb-3">Core Skills</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              What I <span className="text-amber-500">Do Best</span>
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              A comprehensive toolkit honed through real-world campaigns and hands-on brand building.
            </p>
          </div>
        </FadeInWhenVisible>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((skill, i) => (
            <FadeInWhenVisible key={skill.name} delay={i * 0.08}>
              <Card className="group h-full border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform`}>
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-3">{skill.name}</h3>
                  <Progress value={skill.level} className="h-2 mb-2 [&>div]:bg-gradient-to-r [&>div]:from-amber-400 [&>div]:to-orange-500" />
                  <p className="text-sm text-muted-foreground text-right">{skill.level}%</p>
                </CardContent>
              </Card>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceSection() {
  return (
    <section id="experience" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInWhenVisible>
          <div className="text-center mb-14">
            <Badge variant="secondary" className="mb-3">Experience</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Professional <span className="text-amber-500">Journey</span>
            </h2>
          </div>
        </FadeInWhenVisible>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500 via-orange-400 to-amber-300 md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <FadeInWhenVisible key={exp.title} delay={i * 0.15} direction={i % 2 === 0 ? 'left' : 'right'}>
                <div className={`relative flex flex-col md:flex-row items-start gap-6 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full border-4 border-background bg-amber-500 shadow-md z-10" style={{ top: '8px' }} />

                  {/* Spacer for alignment */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card */}
                  <div className="ml-12 md:ml-0 md:w-1/2">
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-3 mb-4">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                            exp.type === 'current'
                              ? 'bg-gradient-to-br from-amber-500 to-orange-600 text-white'
                              : 'bg-muted text-muted-foreground'
                          }`}>
                            <Briefcase className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg">{exp.title}</h3>
                            <p className="text-sm text-amber-600 font-medium">{exp.company}</p>
                            {exp.type === 'current' && (
                              <Badge className="mt-1 bg-green-100 text-green-700 border-green-200 text-xs">Current Role</Badge>
                            )}
                          </div>
                        </div>
                        <ul className="space-y-2">
                          {exp.highlights.map((h, hi) => (
                            <li key={hi} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function EducationSection() {
  return (
    <section id="education" className="py-20 sm:py-28 bg-muted/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInWhenVisible>
          <div className="text-center mb-14">
            <Badge variant="secondary" className="mb-3">Education & Certifications</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Learning & <span className="text-amber-500">Credentials</span>
            </h2>
          </div>
        </FadeInWhenVisible>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div>
            <FadeInWhenVisible>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-amber-500" /> Education
              </h3>
            </FadeInWhenVisible>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <FadeInWhenVisible key={edu.degree} delay={i * 0.1}>
                  <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-5 flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shrink-0 shadow-md">
                        <edu.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{edu.degree}</h4>
                        <p className="text-sm text-amber-600">{edu.school}</p>
                        {edu.year && <p className="text-xs text-muted-foreground mt-0.5">Graduated: {edu.year}</p>}
                      </div>
                    </CardContent>
                  </Card>
                </FadeInWhenVisible>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <FadeInWhenVisible>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-500" /> Certifications
              </h3>
            </FadeInWhenVisible>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <FadeInWhenVisible key={cert.name} delay={i * 0.1}>
                  <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-5 flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center shrink-0 shadow-md">
                        <cert.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{cert.name}</h4>
                        <p className="text-sm text-amber-600">Issued by {cert.issuer}</p>
                      </div>
                    </CardContent>
                  </Card>
                </FadeInWhenVisible>
              ))}
            </div>

            {/* Services Overview */}
            <FadeInWhenVisible delay={0.3}>
              <h3 className="text-xl font-bold mt-10 mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-500" /> Services I Offer
              </h3>
            </FadeInWhenVisible>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Meta Ads Setup', icon: Target },
                { label: 'Social Strategy', icon: Megaphone },
                { label: 'Content Design', icon: Palette },
                { label: 'Brand Identity', icon: Layers },
                { label: 'Video Editing', icon: Video },
                { label: 'Analytics Setup', icon: BarChart3 },
              ].map((svc, i) => (
                <FadeInWhenVisible key={svc.label} delay={i * 0.06}>
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-background shadow-sm border border-border/50 hover:border-amber-300 transition-colors">
                    <svc.icon className="w-4 h-4 text-amber-500 shrink-0" />
                    <span className="text-sm font-medium">{svc.label}</span>
                  </div>
                </FadeInWhenVisible>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSending(true)
    setError('')

    const form = e.currentTarget
    const formData = new FormData(form)
    const templateParams = {
      name: formData.get('name'),
      email: formData.get('email'),
      title: formData.get('title'),
      message: formData.get('message'),
      time: new Date().toLocaleString(),
    }

    try {
      const emailjs = (await import('@emailjs/browser')).default
      await emailjs.send(
        'service_ndtiswa',
        'template_wbivtri',
        templateParams,
        'ALP_HWlp0gtomYL6s'
      )
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again or email me directly.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInWhenVisible>
          <div className="text-center mb-14">
            <Badge variant="secondary" className="mb-3">Get In Touch</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Let&apos;s <span className="text-amber-500">Connect</span>
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Have a project in mind or want to discuss how I can help grow your brand? I&apos;d love to hear from you.
            </p>
          </div>
        </FadeInWhenVisible>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact info */}
          <FadeInWhenVisible direction="left">
            <div className="space-y-6">
              <Card className="border-0 shadow-lg overflow-hidden">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shrink-0 shadow-md">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <a href="mailto:farhanawan9292@gmail.com" className="text-amber-600 hover:underline break-all">
                      farhanawan9292@gmail.com
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Typically respond within 24 hours</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg overflow-hidden">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shrink-0 shadow-md">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <a href="tel:+923063355519" className="text-amber-600 hover:underline">+92 306 3355519</a>
                    <p className="text-sm text-muted-foreground mt-1">Available during business hours</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg overflow-hidden">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shrink-0 shadow-md">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Location</h3>
                    <p className="text-amber-600">Lahore, Punjab, Pakistan</p>
                    <p className="text-sm text-muted-foreground mt-1">Open to remote work worldwide</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </FadeInWhenVisible>

          {/* Contact form */}
          <FadeInWhenVisible direction="right" delay={0.2}>
            <Card className="border-0 shadow-xl">
              <CardContent className="p-6 sm:p-8">
                {submitted ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <Star className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">Thank you for reaching out. I&apos;ll get back to you soon.</p>
                    <Button variant="outline" className="mt-4" onClick={() => setSubmitted(false)}>
                      Send Another
                    </Button>
                  </div>
                ) : (
                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500 transition"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500 transition"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Subject</label>
                      <input
                        type="text"
                        name="title"
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500 transition"
                        placeholder="Project inquiry"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Message</label>
                      <textarea
                        required
                        name="message"
                        rows={4}
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500 transition resize-none"
                        placeholder="Tell me about your project..."
                      />
                    </div>
                    {error && (
                      <p className="text-sm text-red-500 text-center">{error}</p>
                    )}
                    <Button type="submit" size="lg" disabled={sending} className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white shadow-lg shadow-amber-500/25 disabled:opacity-60">
                      <Send className="w-4 h-4 mr-2" /> {sending ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-muted/60 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="font-bold text-lg">
              Farhan Javed <span className="text-amber-500">Awan</span>
            </p>
            <p className="text-sm text-muted-foreground">Social Media Manager & Marketer</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="mailto:farhanawan9292@gmail.com" className="text-muted-foreground hover:text-amber-500 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <a href="tel:+923063355519" className="text-muted-foreground hover:text-amber-500 transition-colors">
              <Phone className="w-5 h-5" />
            </a>
          </div>
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Farhan Javed Awan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 w-11 h-11 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-lg shadow-amber-500/30 flex items-center justify-center z-40 hover:shadow-xl transition-shadow"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

/* ───── main page ───── */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
