import React from 'react';
import { motion } from 'framer-motion';
import types from '@/components/fontLetters';

export const WriteFeaturesSectionDemo = ({ search }) => {
    const content = {
        "desarrollo-de-paginas-web": {
            content: (
                <div className="lg:col-span-8 space-y-20">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <h2 className={`${types.h3} mb-8 `}>
                            Web Architecture: Experiences that Convert
                        </h2>
                        <div className={`${types.p} space-y-4`} >
                            <p>We don't just build websites; we engineer high-performance digital ecosystems designed for maximum conversion. Every single line of code is meticulously written to deliver lightning-fast speed and flawless aesthetics.</p>
                            <p>By leveraging cutting-edge technologies like Next.js and React, we ensure your online presence is as powerful and scalable as your business model requires.</p>
                        </div>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ margin: "-100px" }} className="space-y-6">
                        <h3 className={`${types.h4}`}>Intelligent Responsive Design</h3>
                        <div className="text-gray-400 text-lg leading-relaxed space-y-4">
                            <p>Mobile traffic dominates the modern web. Our interfaces adapt fluidly across all devices, guaranteeing that your brand message remains impactful, whether your customers visit from a smartphone or a desktop.</p>
                            <p>We implement advanced technical SEO from the foundation up, allowing your site to be easily discoverable and consistently climb search engine rankings.</p>
                        </div>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" className="border-l-2 border-orange-500 pl-8 py-2">
                        <p className="text-2xl md:text-3xl text-gray-200 italic leading-snug">
                            "The web is your company's first impression. If it’s not fast and elegant, you’re leaving customers at the door."
                        </p>
                        <footer className="mt-6 text-sm">
                            <span className="text-white font-bold">Elena Vance</span>
                            <span className="text-gray-500 ml-2">— UX Strategy Lead</span>
                        </footer>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ margin: "-100px" }} className="space-y-6">
                        <h3 className="text-white text-3xl font-semibold">Uncompromised Interactivity</h3>
                        <div className="text-gray-400 text-lg leading-relaxed space-y-4">
                            <p>We create a seamless <span className="text-white font-medium underline underline-offset-4">user journey</span>. Fluid animations, instant load times, and intuitive navigation keep your audience engaged and focused on what matters: your product.</p>
                            <p>Every interactive element undergoes rigorous testing to ensure accessibility and peak efficiency across all modern browsers.</p>
                        </div>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ margin: "-100px" }} className="space-y-6">
                        <h3 className="text-white text-3xl font-semibold">Scalable Web Infrastructure</h3>
                        <div className="text-gray-400 text-lg leading-relaxed space-y-4">
                            <p>We integrate modern Headless CMS solutions, empowering your marketing team to update content in real-time without technical dependencies, maintaining total operational agility.</p>
                            <p>Our architecture is built to withstand massive traffic spikes, ensuring rock-solid stability during major campaign launches or high-demand commercial events.</p>
                        </div>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" className="border-l-2 border-gray-800 pl-8 py-2 bg-[#080808]/50">
                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                            "We transform pixels into tangible business results through high-precision web engineering."
                        </p>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ margin: "-100px" }} className="space-y-6 pb-20">
                        <h3 className="text-white text-3xl font-semibold">Market Impact</h3>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            By unifying world-class design with robust technology, we enable your brand to stand out in a saturated digital landscape, turning passive visitors into loyal active clients.
                        </p>
                    </motion.div>
                </div>
            )
        },
        "asesorias-y-mantenimientos": {
             content: (
                <div className="lg:col-span-8 space-y-20">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <h2 className={`${types.h3} mb-8`}>
                            Critical Support: 24/7 Operational Continuity
                        </h2>
                        <div className={`${types.p} space-y-4`}>
                            <p>Tech maintenance isn't about fixing what's broken—it's about ensuring it never breaks in the first place. Our preventive advisory services act as a shield for your digital infrastructure.</p>
                            <p>We understand that every minute of downtime represents a direct financial loss. That’s why our protocols are engineered for maximum resilience and rapid recovery.</p>
                        </div>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ margin: "-100px" }} className="space-y-6">
                        <h3 className={`${types.h4}`}>Strategic Consultancy</h3>
                        <div className="text-gray-400 text-lg leading-relaxed space-y-4">
                            <p>We analyze your current ecosystem to detect security vulnerabilities and hardware obsolescence. We don't just repair; we project the long-term growth of your technology stack.</p>
                            <p>The tight coordination between our senior consultants and your internal team creates a synergy that significantly reduces support costs over time.</p>
                        </div>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" className="border-l-2 border-green-500 pl-8 py-2">
                        <p className="text-2xl md:text-3xl text-gray-200 italic leading-snug">
                            "Technological excellence is not an act, but a habit of constant maintenance and relentless improvement."
                        </p>
                        <footer className="mt-6 text-sm">
                            <span className="text-white font-bold">Diana Ross</span>
                            <span className="text-gray-500 ml-2">— Strategic Advisor</span>
                        </footer>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ margin: "-100px" }} className="space-y-6">
                        <h3 className="text-white text-3xl font-semibold">Proactive Monitoring</h3>
                        <div className="text-gray-400 text-lg leading-relaxed space-y-4">
                            <p>We deploy a <span className="text-white font-medium underline underline-offset-4">digital sentry</span> that monitors the health of your servers and networks in real-time. This eliminates the need for constant manual oversight.</p>
                            <p>When an anomaly arises, our team is already troubleshooting it before you or your customers even notice a difference. That is true peace of mind.</p>
                        </div>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ margin: "-100px" }} className="space-y-6">
                        <h3 className="text-white text-3xl font-semibold">Security & Backups</h3>
                        <div className="text-gray-400 text-lg leading-relaxed space-y-4">
                            <p>We protect the integrity of your data through geo-redundant backups and instant deployment of critical security patches.</p>
                            <p>Every digital asset in your company is shielded under international standards, ensuring your business never stops, regardless of external threats or failures.</p>
                        </div>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" className="border-l-2 border-gray-800 pl-8 py-2 bg-[#080808]/50">
                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                            "A well-maintained system is the invisible foundation upon which great business successes are built."
                        </p>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ margin: "-100px" }} className="space-y-6 pb-20">
                        <h3 className="text-white text-3xl font-semibold">Execution Guarantee</h3>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Ultimately, our management allows leadership to focus on the global vision of the business, confident that the technical foundations are unbreakable.
                        </p>
                    </motion.div>
                </div>
            )
        },
        "desarrollo-de-software": {
            content: (
                <div className="lg:col-span-8 space-y-20">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <h2 className={`${types.h3} mb-8`}>
                            Software Engineering: From Concept to Deployment
                        </h2>
                        <div className={`${types.p} space-y-4`}>
                            <p>Custom software development means creating tools that adapt to your business, not forcing your business to adapt to a tool. We build robust systems engineered for high performance and reliability.</p>
                            <p>Our methodology unifies clean architecture with agile development cycles, allowing your software to evolve at the speed of today's market demands.</p>
                        </div>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ margin: "-100px" }} className="space-y-6">
                        <h3 className={`${types.h4}`}>User-Centric Development</h3>
                        <div className="text-gray-400 text-lg leading-relaxed space-y-4">
                            <p>Traditionally, software development suffered from gaps between business logic and user experience. We close that gap with intuitive interfaces backed by a powerful, enterprise-grade backend.</p>
                            <p>This results in tools that teams actually enjoy using, increasing internal productivity and reducing the learning curve for any corporate implementation.</p>
                        </div>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" className="border-l-2 border-purple-500 pl-8 py-2">
                        <p className="text-2xl md:text-3xl text-gray-200 italic leading-snug">
                            "Quality software is not measured by lines of code, but by the problems it solves and the stability it maintains under pressure."
                        </p>
                        <footer className="mt-6 text-sm">
                            <span className="text-white font-bold">Eng. Carlos Méndez</span>
                            <span className="text-gray-500 ml-2">— Chief Technology Officer</span>
                        </footer>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ margin: "-100px" }} className="space-y-6">
                        <h3 className="text-white text-3xl font-semibold">Architectural Freedom</h3>
                        <div className="text-gray-400 text-lg leading-relaxed space-y-4">
                            <p>We build on a <span className="text-white font-medium underline underline-offset-4">modular canvas</span>. This allows for seamless integration of third-party APIs and database scaling without the need to rebuild from scratch.</p>
                            <p>The result is a significantly longer product lifecycle and a much higher return on investment for your organization.</p>
                        </div>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ margin: "-100px" }} className="space-y-6 pb-20">
                        <h3 className="text-white text-3xl font-semibold">Impeccable Execution</h3>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            We deliver open, evolving solutions that grow with your vision, handling the technical complexity so you can lead the market.
                        </p>
                    </motion.div>
                </div>
            )
        },
        "gestion-de-despliegues": {
            content: (
                <div className="lg:col-span-8 space-y-20">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <h2 className={`${types.h3} mb-8`}>
                            CI/CD: Automating Critical Releases
                        </h2>
                        <div className={`${types.p} space-y-4`}>
                            <p>Managing deployments with confidence means eliminating human error. We implement automated pipelines that allow you to move from code to production in seconds.</p>
                            <p>Our CI/CD methodology ensures that every update is automatically tested, scanned, and validated before it ever reaches your end user.</p>
                        </div>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ margin: "-100px" }} className="space-y-6">
                        <h3 className={`${types.h4}`}>Zero Downtime Philosophy</h3>
                        <div className="text-gray-400 text-lg leading-relaxed space-y-4">
                            <p>We utilize Blue-Green and Canary deployment strategies to guarantee your platform never stops. If an issue is detected, the system performs an instant, automated rollback.</p>
                            <p>This allows your development team to iterate frequently and innovate without fearing for the operational stability of the business.</p>
                        </div>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" className="border-l-2 border-cyan-500 pl-8 py-2">
                        <p className="text-2xl md:text-3xl text-gray-200 italic leading-snug">
                            "Deployment should not be a stressful weekend event; it should be an invisible, everyday process."
                        </p>
                        <footer className="mt-6 text-sm">
                            <span className="text-white font-bold">Marcus Fenix</span>
                            <span className="text-gray-500 ml-2">— DevOps Director</span>
                        </footer>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ margin: "-100px" }} className="space-y-6">
                        <h3 className="text-white text-3xl font-semibold">Infrastructure as Code (IaC)</h3>
                        <div className="text-gray-400 text-lg leading-relaxed space-y-4">
                            <p>We treat your servers like <span className="text-white font-medium underline underline-offset-4">software</span>. Using Terraform and Ansible, we replicate exact production environments in seconds, eliminating the "it works on my machine" syndrome.</p>
                            <p>Consistency across environments is the key to large-scale stability and data security.</p>
                        </div>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ margin: "-100px" }} className="space-y-6 pb-20">
                        <h3 className="text-white text-3xl font-semibold">Velocity of Execution</h3>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            By optimizing the deployment flow, we drastically reduce Time-to-Market, allowing your company to respond to competition in hours, not weeks.
                        </p>
                    </motion.div>
                </div>
            )
        },
        "maquinas-virtuales": {
            content: (
                <div className="lg:col-span-8 space-y-20">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <h2 className={`${types.h3} mb-8`}>
                            High-Performance Virtualization
                        </h2>
                        <div className={`${types.p} space-y-4`}>
                            <p>Virtual Machines are the silent engine of modern computing. We offer isolated, secure, and highly optimized environments to run any professional workload with precision.</p>
                            <p>From application servers to complex development sandboxes, our VMs are designed to deliver performance that rivals bare-metal hardware.</p>
                        </div>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ margin: "-100px" }} className="space-y-6">
                        <h3 className={`${types.h4}`}>Resource Optimization</h3>
                        <div className="text-gray-400 text-lg leading-relaxed space-y-4">
                            <p>We maximize your hardware through next-generation hypervisors. This allows multiple independent operating systems to run on a single physical infrastructure, slashing operational costs.</p>
                            <p>Dynamic resource management ensures each machine receives the exact CPU and RAM required during peak demand periods.</p>
                        </div>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" className="border-l-2 border-yellow-500 pl-8 py-2">
                        <p className="text-2xl md:text-3xl text-gray-200 italic leading-snug">
                            "Virtualization isn't just about saving space; it's about gaining total control over the flexibility of your infrastructure."
                        </p>
                        <footer className="mt-6 text-sm">
                            <span className="text-white font-bold">Sarah Kerrigan</span>
                            <span className="text-gray-500 ml-2">— Systems Architect</span>
                        </footer>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ margin: "-100px" }} className="space-y-6">
                        <h3 className="text-white text-3xl font-semibold">Total Isolation & Security</h3>
                        <div className="text-gray-400 text-lg leading-relaxed space-y-4">
                            <p>Each VM operates in a <span className="text-white font-medium underline underline-offset-4">sealed environment</span>. If one instance is compromised, the rest of your infrastructure remains intact and secure.</p>
                            <p>We implement hypervisor-level firewalls and disk encryption to ensure your data is protected both in transit and at rest.</p>
                        </div>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ margin: "-100px" }} className="space-y-6 pb-20">
                        <h3 className="text-white text-3xl font-semibold">Operational Liberty</h3>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Our virtualization solutions make your company hardware-agnostic, facilitating horizontal scaling as your needs grow.
                        </p>
                    </motion.div>
                </div>
            )
        },
        "dominios": {
             content: (
                <div className="lg:col-span-8 space-y-20">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <h2 className={`${types.h3} mb-8`}>
                            Digital Identity Management: Domains & DNS
                        </h2>
                        <div className={`${types.p} space-y-4`}>
                            <p>Your domain is the gateway to your business. Professional DNS management ensures that gateway is always open and that your brand name resolution is instantaneous worldwide.</p>
                            <p>We don't just register names; we fortify your digital identity against hijacking and optimize access latency from any corner of the globe.</p>
                        </div>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ margin: "-100px" }} className="space-y-6">
                        <h3 className={`${types.h4}`}>Low-Latency Anycast DNS</h3>
                        <div className="text-gray-400 text-lg leading-relaxed space-y-4">
                            <p>We utilize Anycast networks so your DNS records resolve at the server closest to the user. This significantly slashes initial website load times.</p>
                            <p>Every millisecond saved in DNS resolution translates into a superior user experience and improved search engine rankings.</p>
                        </div>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" className="border-l-2 border-pink-500 pl-8 py-2">
                        <p className="text-2xl md:text-3xl text-gray-200 italic leading-snug">
                            "A domain is much more than an address; it is the bedrock of your customers' digital trust."
                        </p>
                        <footer className="mt-6 text-sm">
                            <span className="text-white font-bold">Arthur Morgan</span>
                            <span className="text-gray-500 ml-2">— Branding Specialist</span>
                        </footer>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ margin: "-100px" }} className="space-y-6">
                        <h3 className="text-white text-3xl font-semibold">Security with DNSSEC</h3>
                        <div className="text-gray-400 text-lg leading-relaxed space-y-4">
                            <p>We implement <span className="text-white font-medium underline underline-offset-4">digital signatures</span> for your DNS records, preventing cache poisoning attacks and ensuring users always reach your legitimate server.</p>
                            <p>We add layers of WHOIS Privacy protection to keep your corporate data out of the hands of spammers and malicious actors.</p>
                        </div>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ margin: "-100px" }} className="space-y-6 pb-20">
                        <h3 className="text-white text-3xl font-semibold">Asset Consolidation</h3>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Manage all your TLDs (.com, .io, .tech) from a unified panel. We simplify complex record configurations (MX, TXT, SRV) so your communications never miss a beat.
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