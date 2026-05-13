// ── Personal / Hero ──────────────────────────────────────────────
export const personalInfo = {
  name: 'Kartik Nair',
  tagline: 'Cybersecurity Researcher & Security Tool Developer',
  heroDescription:
    'Engineering offensive security tooling, automating threat intelligence pipelines, and building infrastructure that defends itself.',
  bio: "Final-year Computer Science engineer with a purple team skillset — offensive security research combined with defensive operations experience. I find vulnerabilities in real-world systems, build tools that defend them, and contribute fixes to open-source infrastructure. Currently ranked top 5% globally on TryHackMe.",
  contactBlurb:
    "Open to security research collaborations, offensive security roles, and tool development projects. If it's interesting, reach out.",
  email: 'contact.kartikn@gmail.com',
  socialLinks: {
    github: 'https://github.com/Carrtik',
    linkedin: 'https://linkedin.com/in/kartiknair-sec',
  },
  resumeUrl: undefined as string | undefined,
}

// ── Projects ─────────────────────────────────────────────────────
export const projects = [
  {
    id: '1',
    shortName: 'HONEYPOT',
    name: 'Adaptive ML Honeypot & Threat Intelligence Engine',
    description:
      "A containerized, self-adapting honeypot powered by a Reinforcement Learning engine that classifies live attacker behavior in real time and dynamically shifts its responses to maximize deception — turning attackers' own tactics against them. Contributions fed directly into SIEM use case development and advanced incident response strategies.",
    technologies: ['Python', 'Docker', 'Flask', 'Reinforcement Learning', 'Threat Modeling'],
    githubUrl: 'https://github.com/Carrtik/Dynamic-Honeypot-RL',
    badge: "ICACCS '26",
  },
  {
    id: '2',
    shortName: 'CYLOCK',
    name: 'Cylock — Network Reconnaissance & Vulnerability Scanner',
    description:
      'A custom-built, multi-threaded network security engine engineered from raw sockets up. Executes high-speed port scanning and deep packet inspection to identify exploitable vulnerabilities, outdated services, and misconfigured protocols across subnets — with zero dependency on existing frameworks.',
    technologies: ['Python', 'TCP/IP', 'Raw Socket Programming'],
    githubUrl: 'https://github.com/Carrtik/Cylock',
  },
  {
    id: '3',
    shortName: 'VALKYRIE',
    name: 'Valkyrie — Security Compliance & Configuration Auditor',
    description:
      'An enterprise-grade automated auditing engine that performs deep-state compliance assessments across Linux environments — mapping privilege escalation vectors and misconfigurations directly to NIST guidelines and CIS Benchmarks, and transforming raw system logs into actionable diagnostic reports.',
    technologies: ['Python', 'Bash', 'OS-Level APIs'],
    githubUrl: 'https://github.com/Carrtik',
  },
  {
    id: '4',
    shortName: 'SOAR',
    name: 'Automated SOAR & SIEM Triage Pipeline',
    description:
      'A Python-based Security Orchestration, Automation and Response pipeline that ingests, normalizes, and triages security events from simulated SIEM environments. Automated playbooks analyze threat feeds and route incidents based on severity matrices — with full API-integrated ticket management and weekly SIP reporting.',
    technologies: ['Python', 'QRadar', 'ITSM API', 'Regex'],
    githubUrl: 'https://github.com/Carrtik',
  },
  {
    id: '5',
    shortName: 'VULNSYNC',
    name: 'VulnSync — Enterprise VM Lifecycle Engine',
    description:
      'A centralized vulnerability management engine that automates the full lifecycle of infrastructure vulnerabilities from discovery to resolution. Integrates live threat intelligence feeds via API to autonomously detect zero-days, prioritize risk dynamically, and generate stakeholder-ready remediation reports.',
    technologies: ['Python', 'REST APIs', 'JSON', 'Data Analytics'],
    githubUrl: 'https://github.com/Carrtik',
  },
  {
    id: '6',
    shortName: 'PQC',
    name: 'Self-Healing Cloud Environment — Post-Quantum Cryptography',
    description:
      'A resilient cloud architecture that autonomously detects and neutralizes threats using CRYSTALS-Kyber and AES encryption — engineered to withstand attacks from quantum-capable adversaries. Designed for the era where conventional cryptography breaks.',
    technologies: ['Python', 'AWS', 'CRYSTALS-Kyber', 'AES', 'Post-Quantum Cryptography'],
    wip: true,
  },
]

// ── Certifications ────────────────────────────────────────────────
export const certifications = [
  {
    id: 1,
    title: 'CompTIA Security+ SY0-701',
    issuer: 'CompTIA',
    abbrev: 'C+',
    year: 'In Progress',
    description:
      'Industry-standard validation of foundational cybersecurity skills — covering threat detection, risk management, and security architecture.',
    tags: ['Security', 'In Progress'],
  },
  {
    id: 2,
    title: 'Google Cybersecurity Certificate',
    issuer: 'Google',
    abbrev: 'G',
    year: '2024',
    description:
      'Comprehensive training in cybersecurity fundamentals, security operations, and tools used in the industry.',
    tags: ['Cybersecurity', 'Certified'],
  },
  {
    id: 3,
    title: 'AWS Security: IAM',
    issuer: 'Amazon Web Services',
    abbrev: 'AWS',
    year: '2024',
    description:
      'Deep dive into AWS Identity and Access Management — covering policies, roles, and securing cloud infrastructure.',
    tags: ['AWS', 'Cloud Security'],
  },
  {
    id: 4,
    title: 'NoSQL, Big Data & Spark Foundations',
    issuer: 'IBM',
    abbrev: 'IBM',
    year: '2024',
    description:
      'Foundations of NoSQL databases, big data architecture, and Apache Spark for large-scale data processing.',
    tags: ['IBM', 'Big Data'],
  },
]

// ── Skills ────────────────────────────────────────────────────────
export const skills = [
  {
    category: 'Languages & Scripting',
    skills: ['Python', 'Bash', 'C', 'SQL', 'JavaScript', 'React.js', 'Node.js'],
  },
  {
    category: 'SIEM & Monitoring',
    skills: ['Microsoft Sentinel', 'KQL', 'Splunk SPL', 'IBM QRadar', 'Log Analysis', 'IOC Extraction', 'Event Correlation'],
  },
  {
    category: 'Endpoint & Cloud',
    skills: ['Microsoft EDR/XDR', 'Defender for Office', 'Azure', 'AWS IAM', 'Malware Detection'],
  },
  {
    category: 'Threat Detection & Response',
    skills: ['MITRE ATT&CK', 'Threat Hunting', 'Alert Triage', 'DLP Monitoring', 'Incident Escalation', 'ServiceNow'],
  },
  {
    category: 'Offensive Security',
    skills: ['Burp Suite', 'Nmap', 'Metasploit', 'Wireshark', 'Shodan', 'OpenSSL', 'CyberChef', 'Linux Privilege Escalation', 'PCAP Analysis'],
  },
  {
    category: 'Infrastructure & Systems',
    skills: ['Linux/Unix Administration', 'SSH Hardening', 'TCP/IP', 'Raw Socket Programming', 'Docker', 'Azure', 'AWS'],
  },
]

// ── Security Research ─────────────────────────────────────────────
export type ResearchItem = {
  status: string
  statusBg: string
  statusColor: string
  statusBorder: string
  leftBorder: string
  platform: string
  title: string
  description: string
  tags: string[]
  linkLabel?: string
  linkHref?: string
}

export type ResearchBlock = {
  label: string
  title: string
  count: string
  items: ResearchItem[]
}

export const researchBlocks: ResearchBlock[] = [
  {
    label: 'RESEARCH / DISCLOSURE',
    title: 'Vulnerability Disclosures',
    count: '4 findings',
    items: [
      {
        status: 'CREDITED',
        statusBg: '#0a2a0a',
        statusColor: '#4caf50',
        statusBorder: '1px solid #4caf50',
        leftBorder: '#4caf50',
        platform: 'GITHUB SECURITY ADVISORY',
        title: 'MLflow — GHSA-cxjq-35gw-4m9f',
        description:
          'Credited as Finder for security vulnerability in MLflow LangChain integration. Verified and acknowledged by maintainers.',
        tags: ['MLflow', 'LangChain', 'Python'],
      },
      {
        status: 'PATCH MERGED',
        statusBg: '#0a1a2a',
        statusColor: '#2196f3',
        statusBorder: '1px solid #2196f3',
        leftBorder: '#2196f3',
        platform: 'MITRE / RESPONSIBLE DISCLOSURE',
        title: 'miniupnpd Integer Overflow',
        description:
          'Identified integer overflow in miniupnpd/linux/getifstats.c causing corrupted UPnP bandwidth values on interfaces above 2147 Mbps. Acknowledged in 41 minutes, patched within 7 hours.',
        tags: ['C', 'UPnP', 'Integer Overflow'],
        linkLabel: '→ Read Writeup on Medium',
        linkHref: 'https://medium.com/@contact.kartikn',
      },
      {
        status: 'UNDER REVIEW',
        statusBg: '#1a1400',
        statusColor: '#ff9800',
        statusBorder: '1px solid #ff9800',
        leftBorder: '#ff9800',
        platform: 'GITHUB SECURITY ADVISORY',
        title: 'Haystack — GHSA-728f-j9w9-m8c3',
        description:
          'Critical severity remote code execution vulnerability identified in Haystack framework. Pending maintainer triage.',
        tags: ['Python', 'RCE', 'Critical 9.8'],
      },
      {
        status: 'UNDER REVIEW',
        statusBg: '#1a1400',
        statusColor: '#ff9800',
        statusBorder: '1px solid #ff9800',
        leftBorder: '#ff9800',
        platform: 'HUNTR BOUNTY PROGRAM',
        title: 'DJL Unsigned JAR Execution Bypass',
        description:
          'Supply chain attack vector in Deep Java Library allowing unsigned JAR execution bypass. Submitted via Huntr, pending triage.',
        tags: ['Java', 'Supply Chain', 'Critical 9.8'],
      },
    ],
  },
  {
    label: 'OPEN SOURCE / LINUX KERNEL',
    title: 'Open Source Contributions',
    count: '4 contributions',
    items: [
      {
        status: 'UNDER REVIEW',
        statusBg: '#1a1400',
        statusColor: '#ff9800',
        statusBorder: '1px solid #ff9800',
        leftBorder: '#ff9800',
        platform: 'LINUX KERNEL — NETWORKING CORE',
        title: 'cfg80211 syzbot Bug Fix',
        description:
          'Fixed syzbot-reported missing validation in cfg80211 wireless stack open 42 days with no prior patches. Under review by Johannes Berg — Intel, cfg80211 subsystem author.',
        tags: ['C', 'Linux Kernel', 'WiFi', 'Networking'],
        linkLabel: '→ Read Writeup on Medium',
        linkHref: 'https://medium.com/@contact.kartikn',
      },
      {
        status: 'UNDER REVIEW',
        statusBg: '#1a1400',
        statusColor: '#ff9800',
        statusBorder: '1px solid #ff9800',
        leftBorder: '#ff9800',
        platform: 'LINUX KERNEL — DRIVERS',
        title: 'Rockchip NPU Silent Error Fix',
        description:
          'Fixed silent error propagation in Rockchip NPU accelerator driver — job failures silently returned success to userspace. Submitted to Tomeu Vizoso.',
        tags: ['C', 'Linux Kernel', 'Drivers', 'NPU'],
      },
      {
        status: 'STABLE BACKPORT',
        statusBg: '#0a2a0a',
        statusColor: '#4caf50',
        statusBorder: '1px solid #4caf50',
        leftBorder: '#4caf50',
        platform: 'LINUX KERNEL — STABLE BACKPORT',
        title: 'zsmalloc KMSAN Uninit Memory Fix',
        description:
          'Fixed uninitialized memory in zsmalloc memory management subsystem. Accepted for stable backport by Andrew Morton — queued for all actively maintained Linux stable branches.',
        tags: ['C', 'Linux Kernel', 'Memory Management', 'cc:stable'],
      },
      {
        status: 'LIVE',
        statusBg: '#0a2a0a',
        statusColor: '#4caf50',
        statusBorder: '1px solid #4caf50',
        leftBorder: '#4caf50',
        platform: 'GITHUB — SECURITY TOOLING',
        title: 'mlflow-audit',
        description:
          'Open source security auditing tool for MLflow deployments. Identifies misconfigurations and attack surface in MLflow instances.',
        tags: ['Python', 'MLflow', 'Open Source'],
        linkLabel: '→ View on GitHub',
        linkHref: 'https://github.com/Carrtik',
      },
    ],
  },
  {
    label: 'MEDIUM / TECHNICAL WRITING',
    title: 'Writing & Writeups',
    count: '2 posts',
    items: [
      {
        status: 'PUBLISHED',
        statusBg: '#0a2a0a',
        statusColor: '#4caf50',
        statusBorder: '1px solid #4caf50',
        leftBorder: '#4caf50',
        platform: 'MEDIUM — VULNERABILITY RESEARCH',
        title: 'miniupnpd Integer Overflow — Discovery & Disclosure',
        description:
          'Full technical walkthrough of discovery methodology, impact analysis, responsible disclosure process, and patch verification. Covers how a corrupted UPnP value led to a real upstream fix.',
        tags: ['CVE Research', 'C', 'Responsible Disclosure'],
        linkLabel: '→ Read on Medium',
        linkHref: 'https://medium.com/@contact.kartikn',
      },
      {
        status: 'PUBLISHED',
        statusBg: '#0a2a0a',
        statusColor: '#4caf50',
        statusBorder: '1px solid #4caf50',
        leftBorder: '#4caf50',
        platform: 'MEDIUM — KERNEL DEVELOPMENT',
        title: "Contributing to the Linux Kernel — A First Timer's Experience",
        description:
          'Behind the scenes of submitting patches to the Linux kernel — the process, the subsystem maintainers, the mailing lists, and what it actually takes to get code reviewed at that level.',
        tags: ['Linux Kernel', 'Open Source', 'C'],
        linkLabel: '→ Read on Medium',
        linkHref: 'https://medium.com/@contact.kartikn',
      },
    ],
  },
]

// ── Beyond Tech ───────────────────────────────────────────────────
export const beyondTechActivities = [
  'Terminal-native workflow: Neovim, tmux, Ghostty',
  'Active CTF competitor and security researcher',
  'TryHackMe — Top 5% global ranking',
  'Post-quantum cryptography research',
  'Building open-source offensive security tooling',
]

// ── Stats ─────────────────────────────────────────────────────────
export const stats = [
  { label: 'TryHackMe Global Rank', value: 'Top 5%', color: 'rgb(244, 63, 94)' },
  { label: 'Research Publication', value: "ICACCS '26", color: 'rgb(244, 63, 94)' },
  { label: 'Security Tools Built', value: '6+', color: 'rgb(244, 63, 94)' },
  { label: 'Years in Security', value: '3+', color: 'rgb(244, 63, 94)' },
]
