import React from 'react';
import { motion } from 'framer-motion';
import types from '@/components/fontLetters';

export const WriteFeaturesSectionDemo = ({ search }) => {
    const content = {
        "desarrollo-de-paginas-web": {
            content: (
<div className="lg:col-span-8 space-y-28">
    {/* SECCIÓN 1: INTRO */}
    <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
    >
        <h2 className={`${types.h3} mb-8 text-white leading-tight`}>
            Web Architecture: <br/>
            <span className="text-orange-500 italic">Experiences that Convert</span>
        </h2>
        <div className={`${types.p} space-y-6 text-gray-400 max-w-3xl leading-relaxed text-lg`} >
            <p>
                We don't just build websites; we engineer **high-performance digital ecosystems** designed for maximum conversion. Every single line of code is meticulously written to deliver lightning-fast speed, ensuring that your first impression is not just good, but unforgettable.
            </p>
            <p>
                By leveraging cutting-edge technologies like **Next.js 15, React, and Tailwind CSS**, we ensure your online presence is as powerful, secure, and scalable as your business model requires. We focus on the "Core Web Vitals" to put you ahead of the competition.
            </p>
        </div>
    </motion.div>

    {/* SECCIÓN 2: RESPONSIVE */}
    <motion.div 
        initial={{ opacity: 0, x: -20 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        viewport={{ margin: "-100px" }} 
        className="space-y-6"
    >
        <h3 className={`${types.h4} text-white flex items-center gap-3`}>
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"/>
            Intelligent Responsive Design
        </h3>
        <div className="text-gray-400 text-lg leading-relaxed space-y-4 max-w-2xl">
            <p>
                Mobile traffic dominates the modern web. Our interfaces adapt fluidly across all devices using a **mobile-first approach**, guaranteeing that your brand message remains impactful, whether your customers visit from a high-end smartphone or a 4K desktop monitor.
            </p>
            <p>
                Beyond looks, we implement **advanced technical SEO** from the foundation up. This means clean semantic HTML, optimized metadata, and schema markup that allows your site to be easily discoverable by Google.
            </p>
        </div>
    </motion.div>

    {/* SECCIÓN 3: CITA (QUOTE) */}
    <motion.div 
        initial={{ opacity: 0, scale: 0.95 }} 
        whileInView={{ opacity: 1, scale: 1 }} 
        className="border-l-2 border-orange-500 pl-8 py-4 bg-orange-500/5 rounded-r-xl"
    >
        <p className="text-2xl md:text-3xl text-gray-200 italic leading-snug font-light">
            "The web is your company's first impression. If it’s not fast, elegant, and intuitive, you’re essentially leaving potential customers at the door."
        </p>
        <footer className="mt-6 text-sm flex items-center gap-3">
            <div className="w-8 h-[1px] bg-gray-700"></div>
            <p>
                <span className="text-white font-bold uppercase tracking-widest">Elena Vance</span>
                <span className="text-gray-500 ml-2">— UX Strategy Lead</span>
            </p>
        </footer>
    </motion.div>

    {/* SECCIÓN 4: INTERACTIVIDAD */}
    <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ margin: "-100px" }} 
        className="space-y-6"
    >
        <h3 className="text-white text-3xl font-semibold tracking-tight">Uncompromised Interactivity</h3>
        <div className="text-gray-400 text-lg leading-relaxed space-y-4 max-w-2xl">
            <p>
                We create a seamless <span className="text-white font-medium underline underline-offset-8 decoration-orange-500/50">user journey</span>. By integrating fluid micro-interactions and instant state transitions, we keep your audience focused on what truly matters: **your product**.
            </p>
            <p>
                Every interactive element undergoes rigorous testing to ensure **AAA accessibility** (WCAG), making sure your site is usable for everyone, while maintaining peak efficiency across all modern browsers.
            </p>
        </div>
    </motion.div>

    {/* SECCIÓN 5: INFRAESTRUCTURA */}
    <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ margin: "-100px" }} 
        className="space-y-6"
    >
        <h3 className="text-white text-3xl font-semibold tracking-tight">Scalable Web Infrastructure</h3>
        <div className="text-gray-400 text-lg leading-relaxed space-y-4">
            <p>
                We integrate modern **Headless CMS solutions (Sanity, Strapi, Contentful)**, empowering your marketing team to update content in real-time without technical dependencies, maintaining total operational agility.
            </p>
            <p>
                Our serverless architecture is built to withstand massive traffic spikes. Whether it's a Black Friday launch or a viral campaign, your site will remain rock-solid and stable under any load.
            </p>
        </div>
    </motion.div>

    {/* SECCIÓN 6: BANNER DE CIERRE */}
    <motion.div 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        className="border-l-2 border-gray-800 pl-8 py-6 bg-[#080808]/80 backdrop-blur-sm shadow-2xl"
    >
        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
            "We transform complex code into **tangible business results** through high-precision web engineering and user-centric design."
        </p>
    </motion.div>

    {/* SECCIÓN 7: IMPACTO */}
    <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ margin: "-100px" }} 
        className="space-y-6 pb-20"
    >
        <h3 className="text-white text-3xl font-semibold">Global Market Impact</h3>
        <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
            By unifying world-class design with robust technology, we enable your brand to stand out in a saturated digital landscape. We turn passive visitors into loyal, active clients by providing a frictionless digital experience that breathes confidence and professionalism.
        </p>
    </motion.div>
</div>
            )
        },
        "asesorias-y-mantenimientos": {
             content: (
<div className="lg:col-span-8 space-y-28">
    {/* SECCIÓN 1: INTRO - OPERATIONAL CONTINUITY */}
    <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
    >
        <h2 className={`${types.h3} mb-8 text-white leading-tight`}>
            Critical Support: <br/>
            <span className="text-green-500 italic font-light text-3xl md:text-5xl">24/7 Operational Continuity</span>
        </h2>
        <div className={`${types.p} space-y-6 text-gray-400 max-w-3xl leading-relaxed text-lg`}>
            <p>
                Technical maintenance isn't just about fixing what's broken—it's about engineering systems so resilient they **never fail** in the first place. Our preventive advisory services act as a strategic shield for your entire digital infrastructure.
            </p>
            <p>
                We understand that every second of downtime is a direct impact on your bottom line. That’s why our protocols are built for **maximum uptime**, rapid recovery, and absolute stability under heavy workloads.
            </p>
        </div>
    </motion.div>

    {/* SECCIÓN 2: CONSULTANCY */}
    <motion.div 
        initial={{ opacity: 0, x: -20 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        viewport={{ margin: "-100px" }} 
        className="space-y-6"
    >
        <h3 className={`${types.h4} text-white flex items-center gap-3 italic`}>
            <span className="w-10 h-[1px] bg-green-500"/>
            Strategic Consultancy
        </h3>
        <div className="text-gray-400 text-lg leading-relaxed space-y-4 max-w-2xl">
            <p>
                We perform deep-dive audits of your current ecosystem to detect **security vulnerabilities** and hardware obsolescence before they become liabilities. We don't just patch problems; we architect the future of your tech stack.
            </p>
            <p>
                Through the synergy between our senior advisors and your team, we optimize resources to **drastically reduce operational costs** and long-term technical debt.
            </p>
        </div>
    </motion.div>

    {/* SECCIÓN 3: CITA (QUOTE) - VERDE */}
    <motion.div 
        initial={{ opacity: 0, scale: 0.98 }} 
        whileInView={{ opacity: 1, scale: 1 }} 
        className="border-l-2 border-green-500 pl-8 py-6 bg-green-500/5 rounded-r-2xl"
    >
        <p className="text-2xl md:text-4xl text-gray-200 italic leading-snug font-light tracking-tight">
            "Technological excellence is not a single act, but a habit of constant maintenance and relentless improvement."
        </p>
        <footer className="mt-8 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                <span className="text-green-500 font-mono text-xs">DR</span>
            </div>
            <div>
                <span className="block text-white font-bold uppercase tracking-widest text-xs">Diana Ross</span>
                <span className="text-gray-500 text-[10px] font-mono tracking-tighter">— Strategic Advisor & Systems Lead</span>
            </div>
        </footer>
    </motion.div>

    {/* SECCIÓN 4: MONITORING */}
    <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ margin: "-100px" }} 
        className="space-y-6"
    >
        <h3 className="text-white text-3xl font-semibold tracking-tighter flex items-center gap-4">
            Proactive Monitoring 
            <span className="px-2 py-1 bg-green-500/10 border border-green-500/20 text-green-500 text-[10px] uppercase font-mono animate-pulse">Live_Sync</span>
        </h3>
        <div className="text-gray-400 text-lg leading-relaxed space-y-4 max-w-2xl font-light">
            <p>
                We deploy a **digital sentry** powered by real-time analytics that monitors the health of your servers, databases, and networks. This eliminates the uncertainty of manual oversight.
            </p>
            <p>
                When a threshold is crossed, our automated response systems and on-call engineers are already troubleshooting the anomaly **before it reaches your end-users**. That is true operational peace of mind.
            </p>
        </div>
    </motion.div>

    {/* SECCIÓN 5: SECURITY & BACKUPS */}
    <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ margin: "-100px" }} 
        className="space-y-6"
    >
        <h3 className="text-white text-3xl font-semibold tracking-tight">Enterprise Security & Backups</h3>
        <div className="text-gray-400 text-lg leading-relaxed space-y-4">
            <p>
                We protect the integrity of your most valuable asset: **data**. Through geo-redundant, encrypted backups and instant deployment of critical security patches, we ensure you are protected against any threat.
            </p>
            <p>
                By adhering to **international security standards**, we guarantee that your business stays online and compliant, regardless of hardware failures or external cyber-attacks.
            </p>
        </div>
    </motion.div>

    {/* SECCIÓN 6: BANNER DE CIERRE */}
    <motion.div 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        className="border-l-2 border-gray-800 pl-8 py-6 bg-[#080808]/90 backdrop-blur-xl relative overflow-hidden"
    >
        <div className="absolute top-0 right-0 p-2 opacity-5 font-mono text-[60px] select-none">SHIELD</div>
        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light relative z-10">
            "A well-maintained system is the **invisible foundation** upon which great business successes are built."
        </p>
    </motion.div>

    {/* SECCIÓN 7: EXECUTION GUARANTEE */}
    <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ margin: "-100px" }} 
        className="space-y-6 pb-20"
    >
        <h3 className="text-white text-3xl font-semibold italic">Unbreakable Execution Guarantee</h3>
        <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
            Ultimately, our infrastructure management allows your leadership to focus exclusively on the **global vision** of the business. You can scale with confidence, knowing that your technical foundations are handled by experts who value uptime as much as you do.
        </p>
    </motion.div>
</div>
            )
        },
        "desarrollo-de-software": {
            content: (
<div className="lg:col-span-8 space-y-28">
    {/* SECCIÓN 1: INTRO - SOFTWARE ENGINEERING */}
    <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
    >
        <h2 className={`${types.h3} mb-8 text-white leading-tight`}>
            Software Engineering: <br/>
            <span className="text-purple-500 italic">From Concept to Deployment</span>
        </h2>
        <div className={`${types.p} space-y-6 text-gray-400 max-w-3xl leading-relaxed text-lg`}>
            <p>
                Custom software development is about creating tools that **adapt to your unique business logic**, not forcing your operations to fit a generic tool. We architect robust systems engineered for high-load performance and fail-safe reliability.
            </p>
            <p>
                Our methodology unifies **Clean Architecture** with agile development cycles, allowing your software to evolve at the speed of today's market demands while maintaining a bug-free production environment.
            </p>
        </div>
    </motion.div>

    {/* SECCIÓN 2: USER-CENTRIC */}
    <motion.div 
        initial={{ opacity: 0, x: -20 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        viewport={{ margin: "-100px" }} 
        className="space-y-6"
    >
        <h3 className={`${types.h4} text-white flex items-center gap-3`}>
            <span className="w-8 h-[2px] bg-purple-600"/>
            User-Centric Engineering
        </h3>
        <div className="text-gray-400 text-lg leading-relaxed space-y-4 max-w-2xl">
            <p>
                Historically, enterprise software suffered from a disconnect between complex logic and user experience. We bridge that gap by delivering **intuitive interfaces** backed by powerful, cloud-native backends.
            </p>
            <p>
                The result is a suite of tools that teams actually enjoy using. This focus on **UX for internal tools** increases productivity, minimizes friction, and drastically reduces the learning curve for any corporate rollout.
            </p>
        </div>
    </motion.div>

    {/* SECCIÓN 3: CITA (QUOTE) - PÚRPURA */}
    <motion.div 
        initial={{ opacity: 0, scale: 0.98 }} 
        whileInView={{ opacity: 1, scale: 1 }} 
        className="border-l-2 border-purple-500 pl-8 py-6 bg-purple-500/5 rounded-r-2xl relative"
    >
        <div className="absolute top-4 right-8 text-purple-900/20 text-6xl font-serif">"</div>
        <p className="text-2xl md:text-3xl text-gray-200 italic leading-snug font-light tracking-tight">
            "Quality software is not measured by the number of lines written, but by the business problems it solves and the stability it maintains under extreme pressure."
        </p>
        <footer className="mt-8 flex items-center gap-4">
            <div className="w-10 h-[1px] bg-purple-800"></div>
            <div>
                <span className="text-white font-bold uppercase tracking-widest text-xs">Eng. Carlos Méndez</span>
                <span className="text-gray-500 text-[11px] ml-2 font-mono">— Chief Technology Officer</span>
            </div>
        </footer>
    </motion.div>

    {/* SECCIÓN 4: ARCHITECTURAL FREEDOM */}
    <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ margin: "-100px" }} 
        className="space-y-6"
    >
        <h3 className="text-white text-3xl font-semibold tracking-tight">Architectural Freedom</h3>
        <div className="text-gray-400 text-lg leading-relaxed space-y-4 max-w-2xl">
            <p>
                We build on a <span className="text-white font-medium underline underline-offset-8 decoration-purple-500/40">modular canvas</span>. Our systems use microservices or modular monoliths that allow for seamless integration of third-party APIs and database scaling without needing a "start-from-scratch" rebuild.
            </p>
            <p>
                By focusing on **Long-term Scalability**, we ensure a significantly longer product lifecycle and a much higher ROI for your organization's digital investment.
            </p>
        </div>
    </motion.div>

    {/* SECCIÓN 5: INTEGRATION */}
    <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ margin: "-100px" }} 
        className="space-y-6"
    >
        <h3 className="text-white text-3xl font-semibold tracking-tight">Enterprise Integration</h3>
        <div className="text-gray-400 text-lg leading-relaxed space-y-4">
            <p>
                Our software doesn't live in a silo. We specialize in connecting new builds with your existing **ERP, CRM, or Legacy systems**, ensuring data flows smoothly across your entire corporate infrastructure.
            </p>
            <p>
                We implement automated testing and continuous integration (CI) to guarantee that every new feature adds value without introducing regression errors.
            </p>
        </div>
    </motion.div>

    {/* SECCIÓN 6: BANNER DE CIERRE */}
    <motion.div 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        className="border-l-2 border-gray-800 pl-8 py-6 bg-purple-900/5 backdrop-blur-sm border-r border-y border-r-white/5 border-y-white/5"
    >
        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
            "We deliver open, evolving solutions that grow with your vision, handling the technical complexity so you can focus on **market leadership**."
        </p>
    </motion.div>

    {/* SECCIÓN 7: IMPECABLE EXECUTION */}
    <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ margin: "-100px" }} 
        className="space-y-6 pb-20"
    >
        <h3 className="text-white text-3xl font-semibold">Impeccable Execution</h3>
        <p className="text-gray-400 text-lg leading-relaxed max-w-3xl font-light">
            From the initial wireframe to the final deployment on AWS or Azure, our engineering team ensures that every stage of the lifecycle is documented, tested, and optimized for peak efficiency. We don't just ship code; we ship solutions that transform industries.
        </p>
    </motion.div>
</div>
            )
        },
        "gestion-de-despliegues": {
            content: (
<div className="lg:col-span-8 space-y-28">
    {/* SECCIÓN 1: INTRO - AUTOMATING RELEASES */}
    <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
    >
        <h2 className={`${types.h3} mb-8 text-white leading-tight`}>
            CI/CD: <br/>
            <span className="text-cyan-400 italic">Automating Critical Releases</span>
        </h2>
        <div className={`${types.p} space-y-6 text-gray-400 max-w-3xl leading-relaxed text-lg`}>
            <p>
                Managing deployments with confidence means **eliminating human error** through rigorous automation. We implement intelligent pipelines that transform the journey from "code-complete" to "production-ready" into a matter of seconds.
            </p>
            <p>
                Our CI/CD methodology ensures that every single update is automatically tested, vulnerability-scanned, and performance-validated before it ever reaches your end users, maintaining an **uninterrupted flow of value**.
            </p>
        </div>
    </motion.div>

    {/* SECCIÓN 2: ZERO DOWNTIME */}
    <motion.div 
        initial={{ opacity: 0, x: -20 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        viewport={{ margin: "-100px" }} 
        className="space-y-6"
    >
        <h3 className={`${types.h4} text-white flex items-center gap-3 font-light`}>
            <span className="px-2 py-0.5 border border-cyan-500/30 text-cyan-500 text-[10px] font-mono tracking-tighter">SAFE_DEPLOY</span>
            Zero Downtime Philosophy
        </h3>
        <div className="text-gray-400 text-lg leading-relaxed space-y-4 max-w-2xl">
            <p>
                We utilize **Blue-Green and Canary deployment strategies** to guarantee your platform never stops. By routing traffic progressively, we ensure total stability. If an anomaly is detected, our systems trigger an **instant, automated rollback**.
            </p>
            <p>
                This allows your development team to iterate frequently and innovate without fearing for the operational stability of the business. We turn deployments from a risk into a **competitive advantage**.
            </p>
        </div>
    </motion.div>

    {/* SECCIÓN 3: CITA (QUOTE) - CYAN */}
    <motion.div 
        initial={{ opacity: 0, scale: 0.98 }} 
        whileInView={{ opacity: 1, scale: 1 }} 
        className="border-l-2 border-cyan-500 pl-8 py-6 bg-cyan-500/5 rounded-r-2xl relative overflow-hidden"
    >
        <div className="absolute -right-4 -bottom-4 opacity-5 font-mono text-8xl rotate-12">CI/CD</div>
        <p className="text-2xl md:text-3xl text-gray-200 italic leading-snug font-light tracking-tight relative z-10">
            "Deployment should not be a stressful weekend event; it should be an invisible, automated, and everyday process."
        </p>
        <footer className="mt-8 flex items-center gap-4">
            <div className="w-10 h-10 rounded-sm border border-cyan-500/40 rotate-45 flex items-center justify-center">
                <span className="text-cyan-500 font-mono text-[10px] -rotate-45">MF</span>
            </div>
            <div>
                <span className="text-white font-bold uppercase tracking-widest text-xs">Marcus Fenix</span>
                <span className="text-gray-500 text-[10px] ml-2 font-mono">— DevOps & Infrastructure Director</span>
            </div>
        </footer>
    </motion.div>

    {/* SECCIÓN 4: IaC */}
    <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ margin: "-100px" }} 
        className="space-y-6"
    >
        <h3 className="text-white text-3xl font-semibold tracking-tight">Infrastructure as Code (IaC)</h3>
        <div className="text-gray-400 text-lg leading-relaxed space-y-4 max-w-2xl font-light">
            <p>
                We treat your servers like <span className="text-white font-medium underline underline-offset-8 decoration-cyan-500/40 text-glow-cyan">software</span>. Using tools like **Terraform, Ansible, and Kubernetes**, we replicate exact production environments in seconds, completely eliminating the "it works on my machine" syndrome.
            </p>
            <p>
                Total consistency across Dev, Staging, and Production environments is the cornerstone of large-scale stability and high-level data security.
            </p>
        </div>
    </motion.div>

    {/* SECCIÓN 5: VELOCITY */}
    <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ margin: "-100px" }} 
        className="space-y-6"
    >
        <h3 className="text-white text-3xl font-semibold tracking-tight">Velocity & Market Impact</h3>
        <div className="text-gray-400 text-lg leading-relaxed space-y-4">
            <p>
                By optimizing the deployment flow, we drastically reduce **Time-to-Market**. This agility allows your company to respond to market shifts or competitor moves in hours, not weeks.
            </p>
            <p>
                Our pipelines include automated **Security Orchestration**, ensuring that speed never comes at the cost of your organization's integrity.
            </p>
        </div>
    </motion.div>

    {/* SECCIÓN 6: BANNER DE CIERRE */}
    <motion.div 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        className="border-l-2 border-gray-800 pl-8 py-6 bg-cyan-900/5 backdrop-blur-sm border-r border-y border-white/5"
    >
        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
            "We build the **delivery engines** that power high-growth digital products, ensuring every release is a non-event."
        </p>
    </motion.div>

    {/* SECCIÓN 7: FINAL IMPACT */}
    <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ margin: "-100px" }} 
        className="space-y-6 pb-20"
    >
        <h3 className="text-white text-3xl font-semibold">Scaling with Confidence</h3>
        <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
            Whether you are handling thousands or millions of users, our deployment management scales with you. We provide the technical backbone that allows your engineers to focus on building features while we handle the **complexity of delivery**.
        </p>
    </motion.div>
</div>
            )
        },
        "maquinas-virtuales": {
            content: (
<div className="lg:col-span-8 space-y-28">
    {/* SECCIÓN 1: INTRO - VIRTUALIZATION */}
    <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
    >
        <h2 className={`${types.h3} mb-8 text-white leading-tight`}>
            High-Performance <br/>
            <span className="text-yellow-500 italic">Virtualization Ecosystems</span>
        </h2>
        <div className={`${types.p} space-y-6 text-gray-400 max-w-3xl leading-relaxed text-lg`}>
            <p>
                Virtual Machines are the silent engine of modern computing. We architect **isolated, secure, and highly optimized environments** to run professional workloads with surgical precision. 
            </p>
            <p>
                From critical application servers to complex development sandboxes, our VMs are engineered to deliver a level of performance that rivals **bare-metal hardware** through advanced hypervisor tuning.
            </p>
        </div>
    </motion.div>

    {/* SECCIÓN 2: OPTIMIZATION */}
    <motion.div 
        initial={{ opacity: 0, x: -20 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        viewport={{ margin: "-100px" }} 
        className="space-y-6"
    >
        <h3 className={`${types.h4} text-white flex items-center gap-3 font-light`}>
            <span className="w-2 h-6 bg-yellow-600"/>
            Hardware Resource Optimization
        </h3>
        <div className="text-gray-400 text-lg leading-relaxed space-y-4 max-w-2xl">
            <p>
                We maximize your physical hardware through next-generation hypervisors. This allows multiple independent operating systems to run on a single infrastructure, **slashing operational costs** without sacrificing speed.
            </p>
            <p>
                Our **Dynamic Resource Allocation** ensures each instance receives the exact CPU and RAM required during peak demand, maintaining stability during intensive computational tasks.
            </p>
        </div>
    </motion.div>

    {/* SECCIÓN 3: CITA (QUOTE) - AMARILLO */}
    <motion.div 
        initial={{ opacity: 0, scale: 0.98 }} 
        whileInView={{ opacity: 1, scale: 1 }} 
        className="border-l-2 border-yellow-500 pl-8 py-6 bg-yellow-500/5 rounded-r-2xl"
    >
        <p className="text-2xl md:text-3xl text-gray-200 italic leading-snug font-light">
            "Virtualization isn't just about saving physical space; it's about gaining total, granular control over the **agility and elasticity** of your infrastructure."
        </p>
        <footer className="mt-8 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full border border-yellow-500/30 flex items-center justify-center text-yellow-500 font-mono text-xs">SK</div>
            <div>
                <span className="text-white font-bold uppercase tracking-widest text-[10px]">Sarah Kerrigan</span>
                <span className="text-gray-500 text-[10px] ml-2 font-mono">— Senior Systems Architect</span>
            </div>
        </footer>
    </motion.div>

    {/* SECCIÓN 4: SECURITY */}
    <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ margin: "-100px" }} 
        className="space-y-6"
    >
        <h3 className="text-white text-3xl font-semibold tracking-tight">Total Isolation & Security</h3>
        <div className="text-gray-400 text-lg leading-relaxed space-y-4 max-w-2xl font-light">
            <p>
                Each VM operates in a <span className="text-white font-medium underline underline-offset-8 decoration-yellow-500/40">sealed environment</span>. In the event of a security breach in one instance, the rest of your infrastructure remains completely untouched and secure.
            </p>
            <p>
                We implement **hypervisor-level firewalls** and hardware-accelerated encryption to ensure your corporate data is protected both in transit and at rest.
            </p>
        </div>
    </motion.div>

    {/* SECCIÓN 5: LIBERTY */}
    <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ margin: "-100px" }} 
        className="space-y-6 pb-20"
    >
        <h3 className="text-white text-3xl font-semibold">Operational Liberty</h3>
        <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
            Our virtualization solutions make your company **hardware-agnostic**. Facilitate seamless horizontal scaling and effortless migrations as your needs grow, ensuring your software is never tethered to a single physical machine.
        </p>
    </motion.div>
</div>
            )
        },
        "dominios": {
             content: (
<div className="lg:col-span-8 space-y-28">
    {/* SECCIÓN 1: INTRO - DIGITAL IDENTITY */}
    <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
    >
        <h2 className={`${types.h3} mb-8 text-white leading-tight`}>
            Digital Identity Management: <br/>
            <span className="text-pink-500 italic">Global Domains & DNS Architecture</span>
        </h2>
        <div className={`${types.p} space-y-6 text-gray-400 max-w-3xl leading-relaxed text-lg`}>
            <p>
                Your domain is the primary gateway to your business. Professional DNS management ensures that this gateway is **always accessible** and that your brand name resolution is instantaneous across the globe.
            </p>
            <p>
                We don't just register names; we **fortify your digital identity** against hijacking and optimize access latency to ensure a premium experience from the very first click.
            </p>
        </div>
    </motion.div>

    {/* SECCIÓN 2: ANYCAST DNS */}
    <motion.div 
        initial={{ opacity: 0, x: -20 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        viewport={{ margin: "-100px" }} 
        className="space-y-6"
    >
        <h3 className={`${types.h4} text-white flex items-center gap-3 font-light italic`}>
            <span className="w-12 h-[1px] bg-pink-500"/>
            Low-Latency Anycast DNS
        </h3>
        <div className="text-gray-400 text-lg leading-relaxed space-y-4 max-w-2xl">
            <p>
                We utilize **global Anycast networks** so your DNS records resolve at the server physically closest to the user. This significantly slashes initial website TTFB (Time to First Byte).
            </p>
            <p>
                Every millisecond saved in DNS resolution translates into a superior user experience and **boosted search engine rankings** (SEO), giving you a head start before the site even loads.
            </p>
        </div>
    </motion.div>

    {/* SECCIÓN 3: CITA (QUOTE) - PINK */}
    <motion.div 
        initial={{ opacity: 0, scale: 0.98 }} 
        whileInView={{ opacity: 1, scale: 1 }} 
        className="border-l-2 border-pink-500 pl-8 py-6 bg-pink-500/5 rounded-r-2xl"
    >
        <p className="text-2xl md:text-3xl text-gray-200 italic leading-snug font-light tracking-tight">
            "A domain is much more than a technical address; it is the absolute **bedrock of digital trust** between a brand and its customers."
        </p>
        <footer className="mt-8 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-600 to-purple-600 flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-pink-500/20">AM</div>
            <div>
                <span className="text-white font-bold uppercase tracking-widest text-[10px]">Arthur Morgan</span>
                <span className="text-gray-500 text-[10px] ml-2 font-mono">— Strategic Branding Specialist</span>
            </div>
        </footer>
    </motion.div>

    {/* SECCIÓN 4: DNSSEC SECURITY */}
    <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ margin: "-100px" }} 
        className="space-y-6"
    >
        <h3 className="text-white text-3xl font-semibold tracking-tight flex items-center gap-4">
            Security with DNSSEC
            <span className="text-[10px] text-pink-400 font-mono border border-pink-500/30 px-2 py-0.5 rounded">ENCRYPTED</span>
        </h3>
        <div className="text-gray-400 text-lg leading-relaxed space-y-4 max-w-2xl font-light">
            <p>
                We implement <span className="text-white font-medium underline underline-offset-8 decoration-pink-500/40">cryptographic signatures</span> (DNSSEC) for your records, preventing cache poisoning and ensuring users always reach your legitimate server, never a malicious clone.
            </p>
            <p>
                Furthermore, we add layers of **WHOIS Privacy protection** to keep your corporate contact data out of the hands of scrapers and malicious actors.
            </p>
        </div>
    </motion.div>

    {/* SECCIÓN 5: ASSET CONSOLIDATION */}
    <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ margin: "-100px" }} 
        className="space-y-6 pb-20"
    >
        <h3 className="text-white text-3xl font-semibold tracking-tight">Global Asset Consolidation</h3>
        <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
            Manage all your TLDs (** .com, .io, .ai, .tech **) from a unified, enterprise-grade panel. We simplify complex configurations (MX for mail, TXT for verification, SRV for services) so your global communications never miss a beat.
        </p>
    </motion.div>
</div>
            )
        }
    };

    return content[search]?.content || (
        <div className="text-gray-500">Please select a service to view details...</div>
    );
};