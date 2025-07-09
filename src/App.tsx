import React, { useState, useEffect, useRef } from 'react';

// --- Material-UI (MUI) Imports ---
// We'll use these components to build the UI.
import {
    AppBar, Toolbar, Typography, Button, Container, Box, Grid, Card, CardContent,
    CardMedia, Chip, TextField, Checkbox, FormControlLabel, Link, IconButton, Drawer,
    List, ListItem, ListItemButton, ListItemText, Avatar,
    Stack
} from '@mui/material';

// --- MUI Icons Imports ---
// These are the icons we'll use throughout the site.
import CodeIcon from '@mui/icons-material/Code';
import BuildIcon from '@mui/icons-material/Build';
// import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MenuIcon from '@mui/icons-material/Menu';
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import DownloadIcon from '@mui/icons-material/Download';
import faceImage from './assets/face.jpg';

// import VisibilityIcon from '@mui/icons-material/Visibility';

// --- Data for your portfolio ---
// Keeping data separate from components makes your site easy to update.
const portfolioData = {
    name: "Abele Amsalu",
    title: "Software Engineer",
    email: "abeleamsalu@gmail.com",
    location: "Atlanta, Georgia",
    socials: {
        linkedin: "https://www.linkedin.com/in/abeleamsalu/",
        github: "https://github.com/abelelol",
        twitter: "#",
    },
    hero: {
        heading: "Abele Amsalu",
        subheading: "Software Engineer",
        bio: [
            "With strong experience in full-stack software development, I specialize in building robust, scalable applications that solve real business problems. My journey in tech started with a curiosity for creating solutions that connect people and systems in meaningful ways.",
            "At General Motors, I contributed to the complete rewrite and modernization of a nationwide dealership platform, strengthening my skills in Angular, Spring Boot, TypeScript, and Kubernetes. Beyond full-stack work, I'm passionate about mobile (Android) development, applied computer vision, and IoT/embedded systems — areas where I love exploring how technology bridges the digital and physical worlds.",
            "Currently based in Atlanta, I'm open to remote work or roles with a presence in both Atlanta and New York, as I plan to relocate to NYC in 2026. I'm always excited to collaborate on new projects, share ideas, and build software that makes an impact."
        ],
        profileImageUrl: faceImage,
        heroImageUrl: "https://readdy.ai/api/search-image?query=modern%20abstract%20technology%20background%20with%20blue%20gradient%2C%20subtle%20code%20patterns%2C%20minimalist%20design%2C%20perfect%20for%20software%20engineer%20portfolio%2C%20left%20side%20has%20clean%20empty%20space%20for%20text%2C%20right%20side%20has%20abstract%20tech%20elements%2C%20professional%20look&width=1920&height=1080&seq=hero1&orientation=landscape"
    },
    skills: {
        languages: ["JavaScript/TypeScript", "Python", "Java", "Go", "SQL"],
        frameworks: ["React/Next.js", "Node.js/Express", "Docker/Kubernetes", "AWS/GCP", "MongoDB/PostgreSQL"]
    },
    experience: [
        {
            role: "Freelance Full Stack Developer",
            company: "Veritasian – Financial Data Reconciliation Platform",
            period: "April 2025 – June 2025",
            location: "Remote",
            achievements: [
                "Designed and developed a secure, multi-tenant web application enabling companies, colleagues, and investors to connect, manage, and share financial data from multiple sources.",
                "Architected and implemented a robust, multi-role permission system using Supabase and PostgreSQL Row-Level Security (RLS), enforcing hierarchical access for company owners, colleagues, clients, and advisors.",
                "Wrote and debugged complex RLS policies to securely handle nested company structures and multi-user data visibility.",
                "Built a custom user invitation and onboarding system that intelligently distinguishes between new and existing users, generating secure invite flows, access request links, and automated email notifications.",
                "Developed and deployed secure backend services using Firebase Cloud Functions and Express.js, managing sensitive operations like Plaid and QuickBooks OAuth flows, token exchanges, and secure financial data retrieval.",
                "Integrated third-party services: Plaid (production) for real-time bank connections, QuickBooks (production) for accounting data sync, and Heron Data for transaction enrichment and P&L insights.",
                "Engineered reusable Angular frontend components for dashboards, connection management, financial data tables, file upload modules, and role-based onboarding workflows.",
                "Implemented secure file management using Supabase Storage, ensuring uploads and downloads are protected by RLS-based access controls.",
                "Managed full production compliance requirements, completing Plaid and QuickBooks risk diligence, security questionnaires, EULA and privacy policy generation, and domain setup via GoDaddy and Firebase Hosting.",
                "Wrote clear API usage policies, compliance documentation, and handled production onboarding for all integrated vendors."
            ],
            technologies: [
                "Angular",
                "Supabase",
                "Firebase Cloud Functions",
                "PostgreSQL",
                "TypeScript",
            ]
        },
        {
            role: "Software Engineer",
            company: "General Motors",
            period: "June 2020 – February 2025",
            location: "Atlanta, GA",
            achievements: [
                "Contributed to the complete architectural redesign and rewrite of CIMS (Central Information Management System), a critical dealership-facing platform serving GM's nationwide dealer network for parts inventory management, customer data tracking, and operational reporting.",
                "Drove technical modernization by upgrading a legacy Angular 12 application to Angular 15 and migrating the entire system architecture to Kubernetes, improving scalability and deployment efficiency for thousands of dealership users.",
                "Participated in architectural planning meetings with stakeholders, providing technical input for designing and implementing new features for parts management, warranty tracking, and financial reconciliation.",
                "Analyzed system performance metrics from the legacy application and implemented optimizations in the platform rewrite, enhancing user experience and operational efficiency.",
                "Maintained and enhanced production systems through strategic bug fixes and iterative feature additions based on dealer feedback, ensuring 99%+ uptime for mission-critical dealership operations.",
                "Developed full-stack solutions using Angular, Spring Boot, TypeScript, and Java, following enterprise-level design patterns and modern development standards."
            ],
            technologies: ["Angular", "Spring Boot", "TypeScript", "Java", "Kubernetes"]
        },
        {
            role: "Software Engineering Intern",
            company: "SurveyMonkey",
            period: "June 2019 – August 2019",
            location: "San Mateo, CA",
            achievements: [
                "Worked on the Data Service team doing backend development mainly using Python.",
                "Set up a way to compare characteristics of data between two time periods."
            ],
            technologies: ["Python", "PyCharm", "Pandas", "Terminal"]
        },
        {
            role: "Software Engineering Intern",
            company: "State Farm",
            period: "May 2018 – July 2018",
            location: "Atlanta, GA",
            achievements: [
                "Participated in daily stand-up meetings with team and upper management.",
                "Improved user experience and code quality by triaging and fixing high-priority bugs for agent-facing mobile apps.",
                "Implemented new features in the Life Beneficiary Claim Kit App."
            ],
            technologies: ["Java", "Android Studio", "XML"]
        },
        {
            role: "Software Engineering Intern",
            company: "UPS Supply Chain Solutions",
            period: "May 2017 – August 2017",
            location: "Alpharetta, GA",
            achievements: [
                "Scheduled daily stand-up meetings and appointments with technical leads and managers.",
                "Built an iOS/Android app with a dashboard to track packages, get quotes, implement GPS tracking, and use barcode scanning to manage package routing."
            ],
            technologies: ["Visual Studio", "Apache Cordova", "HTML", "CSS", "JavaScript", "Java"]
        },
        {
            role: "Extern",
            company: "Bank of America",
            period: "September 2017 – December 2017",
            location: "Charlotte, NC",
            achievements: [
                "Selected as 1 of 18 participants from over 200 applicants for a 2-day event at the Bank of America headquarters.",
                "Enhanced interviewing skills through integrated resume, presentation, and interview workshops.",
                "Developed a high-level understanding of complex bank systems and technology development processes."
            ],
            technologies: []
        }
    ],
    projects: [
        { title: "E-commerce Dashboard", category: "web", description: "A comprehensive analytics dashboard for online retailers with real-time sales tracking and inventory management.", technologies: ["React", "Node.js", "MongoDB", "Chart.js"], imageUrl: "https://readdy.ai/api/search-image?query=modern%20e-commerce%20dashboard%20interface%20with%20analytics%20charts%2C%20clean%20UI%20design%2C%20professional%20software%20application%20screenshot%2C%20high%20quality&width=600&height=400&seq=project1&orientation=landscape" },
        { title: "Fitness Tracker App", category: "mobile", description: "A mobile application for tracking workouts, nutrition, and health metrics with personalized recommendations.", technologies: ["React Native", "Firebase", "Redux", "HealthKit"], imageUrl: "https://readdy.ai/api/search-image?query=fitness%20tracking%20mobile%20app%20interface%2C%20clean%20modern%20design%2C%20activity%20tracking%2C%20workout%20plans%2C%20health%20metrics%2C%20professional%20mobile%20application%20screenshot&width=600&height=400&seq=project2&orientation=landscape" },
        { title: "Microservices Platform", category: "backend", description: "A scalable microservices architecture with service discovery, load balancing, and fault tolerance capabilities.", technologies: ["Go", "Docker", "Kubernetes", "gRPC"], imageUrl: "https://readdy.ai/api/search-image?query=microservices%20architecture%20diagram%2C%20cloud%20infrastructure%2C%20API%20gateway%2C%20service%20mesh%2C%20containerization%2C%20professional%20system%20architecture%20visualization&width=600&height=400&seq=project3&orientation=landscape" },
    ]
};

// --- Helper Components ---

// A reusable component for section titles
const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <Typography variant="h4" component="h2" fontWeight="bold" textAlign="center" mb={4} color="text.primary">
        {children}
    </Typography>
);

// --- Main Page Sections as Components ---

const Header = ({ onNavClick }: { onNavClick: (id: string) => void }) => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const navItems = ["about", "skills", "experience", "projects", "contact"];

    const handleDrawerToggle = () => {
        setDrawerOpen(!isDrawerOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2, fontFamily: "'Pacifico', cursive", color: 'primary.main' }}>
                John A.
            </Typography>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }} onClick={() => onNavClick(item)}>
                            <ListItemText primary={item.charAt(0).toUpperCase() + item.slice(1)} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <AppBar position="fixed" sx={{ bgcolor: 'white', boxShadow: 1 }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#hero"
                        onClick={(e) => { e.preventDefault(); onNavClick('hero'); }}
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: "'Pacifico', cursive",
                            fontWeight: 400,
                            color: 'primary.main',
                            textDecoration: 'none',
                        }}
                    >
                        Abele A.
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ color: 'text.primary' }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#hero"
                        onClick={(e) => { e.preventDefault(); onNavClick('hero'); }}
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: "'Pacifico', cursive",
                            fontWeight: 400,
                            color: 'primary.main',
                            textDecoration: 'none',
                        }}
                    >
                        Abele A.
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
                        {navItems.map((item) => (
                            <Button
                                key={item}
                                onClick={() => onNavClick(item)}
                                className="nav-link" // For custom CSS underline effect
                                sx={{ my: 2, color: 'text.secondary', display: 'block', textTransform: 'capitalize', fontSize: '1rem' }}
                            >
                                {item}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
            <Drawer
                variant="temporary"
                open={isDrawerOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
                }}
            >
                {drawer}
            </Drawer>
        </AppBar>
    );
};

const HeroSection = ({ onNavClick }: { onNavClick: (id: string) => void }) => (
    <Box
        id="hero"
        sx={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            pt: { xs: 10, md: 0 },
            backgroundImage: `url(${portfolioData.hero.heroImageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}
    >
        <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, white 40%, rgba(255,255,255,0.9) 70%, transparent)' }} />
        <Container maxWidth="xl" sx={{ position: 'relative' }}>
            {/* This parent Grid with the 'container' prop is key.
                It allows the child Grid elements to correctly use 'item', 'xs', and 'md' props.
            */}
            <Grid container spacing={4} alignItems="center">

                {/* Text content Grid item */}
                <Grid item xs={12} md={7}>
                    <Typography variant="h2" component="h1" fontWeight="bold" color="text.primary" gutterBottom>
                        {portfolioData.hero.heading}
                    </Typography>
                    <Typography variant="h4" component="h2" color="primary.main" fontWeight="500" mb={3}>
                        {portfolioData.hero.subheading}
                    </Typography>
                    {portfolioData.hero.bio.map((paragraph, index) => (
                        <Typography key={index} variant="body1" color="text.secondary" paragraph>
                            {paragraph}
                        </Typography>
                    ))}
                    <Stack direction="row" spacing={2} mt={4}>
                        <Button variant="contained" size="large" onClick={() => onNavClick('contact')}>Get in Touch</Button>
                        <Button variant="outlined" size="large" startIcon={<DownloadIcon />}>Download Resume</Button>
                    </Stack>
                </Grid>

                {/* Image Grid item */}
                <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box
                        component="img"
                        src={portfolioData.hero.profileImageUrl}
                        alt={portfolioData.name}
                        sx={{
                            width: 256,
                            height: 256,
                            borderRadius: '50%',
                            objectFit: 'cover',
                            boxShadow: 6,
                        }}
                    />
                </Grid>

            </Grid>
        </Container>
    </Box>
);



const SkillsSection = () => (
    <Box id="skills" sx={{ py: 10, bgcolor: 'grey.50' }}>
        <Container>
            <SectionTitle>Technical Skills</SectionTitle>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Card sx={{ p: 3, height: '100%' }}>
                        <Stack alignItems="center" spacing={2}>
                            <Avatar sx={{ bgcolor: 'primary.light', width: 64, height: 64 }}>
                                <CodeIcon color="primary" fontSize="large" />
                            </Avatar>
                            <Typography variant="h6" fontWeight="600">Programming Languages</Typography>
                            <Grid container spacing={2} justifyContent="center">
                                {portfolioData.skills.languages.map(lang => (
                                    <Grid item key={lang}>
                                        <Chip label={lang} variant="outlined" />
                                    </Grid>
                                ))}
                            </Grid>
                        </Stack>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card sx={{ p: 3, height: '100%' }}>
                        <Stack alignItems="center" spacing={2}>
                            <Avatar sx={{ bgcolor: 'secondary.light', width: 64, height: 64 }}>
                                <BuildIcon color="secondary" fontSize="large" />
                            </Avatar>
                            <Typography variant="h6" fontWeight="600">Frameworks & Tools</Typography>
                            <Grid container spacing={2} justifyContent="center">
                                {portfolioData.skills.frameworks.map(tool => (
                                    <Grid item key={tool}>
                                        <Chip label={tool} variant="outlined" color="secondary" />
                                    </Grid>
                                ))}
                            </Grid>
                        </Stack>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    </Box>
);

const ExperienceSection = () => (
    <Box id="experience" sx={{ py: 10, bgcolor: 'white' }}>
        <Container maxWidth="lg">
            <SectionTitle>Work Experience</SectionTitle>
            <Box className="timeline-container">
                {portfolioData.experience.map((job, index) => (
                    <Box key={index} className="timeline-item">
                        <Card sx={{ p: 3, border: '1px solid', borderColor: 'grey.200' }}>
                            <Stack direction="row" justifyContent="space-between" alignItems="flex-start" mb={1}>
                                <Typography variant="h6" fontWeight="bold">{job.role}</Typography>
                                <Chip label={job.period} color="primary" size="small" />
                            </Stack>
                            <Typography variant="subtitle1" fontWeight="500" color="text.secondary" mb={2}>
                                {job.company} - {job.location}
                            </Typography>
                            <List dense sx={{ listStyleType: 'disc', pl: 2 }}>
                                {job.achievements.map((achievement, i) => (
                                    <ListItem key={i} sx={{ display: 'list-item' }}>
                                        <Typography variant="body2">{achievement}</Typography>
                                    </ListItem>
                                ))}
                            </List>
                            <Stack direction="row" spacing={1} mt={2} flexWrap="wrap">
                                {job.technologies.map(tech => <Chip key={tech} label={tech} size="small" />)}
                            </Stack>
                        </Card>
                    </Box>
                ))}
            </Box>
        </Container>
    </Box>
);

const ProjectsSection = () => {
    // In React, we manage state like the current filter using the useState hook.
    const [filter, setFilter] = useState('all');

    const filteredProjects = filter === 'all'
        ? portfolioData.projects
        : portfolioData.projects.filter(p => p.category === filter);

    const filters = ['all', 'web', 'mobile', 'backend'];

    return (
        <Box id="projects" sx={{ py: 10, bgcolor: 'grey.50' }}>
            <Container>
                <SectionTitle>Project Showcase</SectionTitle>
                <Stack direction="row" justifyContent="center" spacing={1} mb={5} flexWrap="wrap">
                    {filters.map(f => (
                        <Button
                            key={f}
                            variant={filter === f ? 'contained' : 'outlined'}
                            onClick={() => setFilter(f)}
                        >
                            {f.charAt(0).toUpperCase() + f.slice(1)}
                        </Button>
                    ))}
                </Stack>
                <Grid container spacing={4}>
                    {filteredProjects.map((project, index) => (
                        <Grid item key={index} xs={12} sm={6} md={4}>
                            <Card className="project-card">
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image={project.imageUrl}
                                    alt={project.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div" fontWeight="bold">
                                        {project.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ minHeight: 60 }}>
                                        {project.description}
                                    </Typography>
                                    <Stack direction="row" spacing={1} mt={2} flexWrap="wrap">
                                        {project.technologies.map(tech => <Chip key={tech} label={tech} size="small" />)}
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

const ContactSection = () => {
    // In a real app, you'd use a library like Formik or React Hook Form for complex forms.
    // For a simple form, managing state with useState is fine.
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
        consent: false
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = event.target;
        // Handle checkbox separately since it uses 'checked' instead of 'value'
        const isCheckbox = type === 'checkbox';
        setFormState(prev => ({
            ...prev,
            [name]: isCheckbox ? (event.target as HTMLInputElement).checked : value
        }));
    };

    // FIX: Add the correct event type for form submissions
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!formState.consent) {
            alert("You must consent to continue.");
            return;
        }
        alert(`Message sent! (Simulated)\nName: ${formState.name}\nEmail: ${formState.email}\nMessage: ${formState.message}`);
        setFormState({ name: '', email: '', message: '', consent: false });
    };


    return (
        <Box id="contact" sx={{ py: 10, bgcolor: 'white' }}>
            <Container maxWidth="lg">
                <SectionTitle>Get In Touch</SectionTitle>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Card sx={{ p: 3 }}>
                            <Typography variant="h6" mb={2}>Send Me a Message</Typography>
                            <Box component="form" onSubmit={handleSubmit} noValidate>
                                <TextField fullWidth margin="normal" label="Name" name="name" value={formState.name} onChange={handleChange} required />
                                <TextField fullWidth margin="normal" label="Email" name="email" type="email" value={formState.email} onChange={handleChange} required />
                                <TextField fullWidth margin="normal" label="Message" name="message" multiline rows={4} value={formState.message} onChange={handleChange} required />
                                <FormControlLabel
                                    control={<Checkbox name="consent" checked={formState.consent} onChange={handleChange} />}
                                    label="I consent to having this website store my submitted information."
                                    sx={{ mt: 1 }}
                                />
                                <Button type="submit" fullWidth variant="contained" size="large" sx={{ mt: 2 }}>
                                    Send Message
                                </Button>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Card sx={{ p: 3, height: '100%' }}>
                            <Typography variant="h6" mb={2}>Contact Information</Typography>
                            <Stack spacing={3}>
                                <Stack direction="row" spacing={2} alignItems="center">
                                    <EmailIcon color="primary" />
                                    <Box>
                                        <Typography fontWeight="bold">Email</Typography>
                                        <Link href={`mailto:${portfolioData.email}`} color="inherit" underline="hover">{portfolioData.email}</Link>
                                    </Box>
                                </Stack>
                                <Stack direction="row" spacing={2} alignItems="center">
                                    <LocationOnIcon color="primary" />
                                    <Box>
                                        <Typography fontWeight="bold">Location</Typography>
                                        <Typography color="text.secondary">{portfolioData.location}</Typography>
                                    </Box>
                                </Stack>
                                <Stack direction="row" spacing={2} mt={2}>
                                    <IconButton href={portfolioData.socials.linkedin} target="_blank"><LinkedInIcon /></IconButton>
                                    <IconButton href={portfolioData.socials.github} target="_blank"><GitHubIcon /></IconButton>
                                    <IconButton href={portfolioData.socials.twitter} target="_blank"><TwitterIcon /></IconButton>
                                </Stack>
                            </Stack>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

const Footer = ({ onNavClick }: { onNavClick: (id: string) => void }) => (
    <Box component="footer" sx={{ bgcolor: 'grey.900', color: 'white', py: 6 }}>
        <Container>
            <Typography variant="h6" component="a" href="#hero" onClick={(e) => { e.preventDefault(); onNavClick('hero'); }} sx={{ fontFamily: "'Pacifico', cursive", textDecoration: 'none', color: 'white' }}>
                John A.
            </Typography>
            <Typography variant="body2" color="grey.400" mt={1}>Software Engineer & Problem Solver</Typography>
            <Box sx={{ borderTop: 1, borderColor: 'grey.800', mt: 3, pt: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
                <Typography variant="body2" color="grey.500">
                    © {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
                </Typography>
                <Stack direction="row" spacing={2}>
                    <IconButton href={portfolioData.socials.linkedin} target="_blank" sx={{color: 'white'}}><LinkedInIcon /></IconButton>
                    <IconButton href={portfolioData.socials.github} target="_blank" sx={{color: 'white'}}><GitHubIcon /></IconButton>
                    <IconButton href={portfolioData.socials.twitter} target="_blank" sx={{color: 'white'}}><TwitterIcon /></IconButton>
                </Stack>
            </Box>
        </Container>
    </Box>
);

// This is the main component that brings everything together.
function App() {
     const [setActiveSection] = useState('hero');
    // const [activeSection, setActiveSection] = useState('hero');
    const sectionRefs: Record<string, React.RefObject<HTMLDivElement | null>> = {
        hero: useRef<HTMLDivElement | null>(null),
        about: useRef<HTMLDivElement | null>(null),
        skills: useRef<HTMLDivElement | null>(null),
        experience: useRef<HTMLDivElement | null>(null),
        projects: useRef<HTMLDivElement | null>(null),
        contact: useRef<HTMLDivElement | null>(null),
    };




    // This is the React way to handle side effects, like listening to browser events.
    // It's similar to ngOnInit and ngOnDestroy combined.
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;
            Object.entries(sectionRefs).forEach(([key, ref]) => {
                if (ref.current) {
                    const { offsetTop, offsetHeight } = ref.current;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-expect-error
                        setActiveSection(key);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll); // Cleanup on component unmount
    }, []);

    const handleNavClick = (id: keyof typeof sectionRefs) => {
        const section = sectionRefs[id];
        if (section && section.current) {
            section.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Box>
            <Header onNavClick={handleNavClick} />
            <main>
                {/* We assign the ref to each section's container */}
                <div ref={sectionRefs.hero}><HeroSection onNavClick={handleNavClick} /></div>
                {/*<div ref={sectionRefs.about}><AboutSection /></div>*/}
                <div ref={sectionRefs.skills}><SkillsSection /></div>
                <div ref={sectionRefs.experience}><ExperienceSection /></div>
                <div ref={sectionRefs.projects}><ProjectsSection /></div>
                <div ref={sectionRefs.contact}><ContactSection /></div>
            </main>
            <Footer onNavClick={handleNavClick} />
        </Box>
    );
}

// A simple About section component
// const AboutSection = () => (
//     <Box id="about" sx={{ py: 10, bgcolor: 'white' }}>
//         <Container>
//             <SectionTitle>About Me</SectionTitle>
//             <Grid container spacing={4} alignItems="center">
//                 <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
//                     <Box
//                         component="img"
//                         src={portfolioData.hero.profileImageUrl}
//                         alt={portfolioData.name}
//                         sx={{
//                             width: 256,
//                             height: 256,
//                             borderRadius: '50%',
//                             objectFit: 'cover',
//                             boxShadow: 6,
//                         }}
//                     />
//                 </Grid>
//                 <Grid item xs={12} md={7}>
//                     {portfolioData.hero.bio.map((paragraph, index) => (
//                         <Typography key={index} variant="body1" color="text.secondary" paragraph>
//                             {paragraph}
//                         </Typography>
//                     ))}
//                 </Grid>
//             </Grid>
//         </Container>
//     </Box>
// );


export default App;
