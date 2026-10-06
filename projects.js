/* =====================================================================
   PROJECTS — the single source of truth for the Projects section.
   ---------------------------------------------------------------------
   To add a project: copy the TEMPLATE at the bottom of this file, paste
   it into the array (order = display order; the first one is featured),
   fill in the fields, drop any images into assets/img/, save, refresh.

   Required : slug, title, summary
   Optional : everything else (empty / missing fields are simply hidden)

   status   : 'Completed' | 'In progress' | 'Planned'  (controls the badge)
   images   : [{ src, alt, caption?, thumb? }]  — first image = card image.
              `thumb` is an optional smaller file used on the card.
              Always write a real `alt` description for accessibility.
   results  : [{ value, label }] — short headline numbers / outcomes.
   links    : [{ label, url }] — e.g. GitHub repo, video, write-up PDF.
   ===================================================================== */
window.PROJECTS = [
  {
    slug: 'barrel-trap',
    title: 'Barrel Trap',
    subtitle: 'Forklift-mounted barrel-gripping attachment · Senior design (team project)',
    date: '2023',
    status: 'Completed',
    org: 'Kennesaw State University · Dept. of Mechanical Engineering Technology',
    summary:
      'A forklift-mounted mechanism that grips barrels/drums. As lead CAD designer and FEA analyst on a five-person team, I designed the entire mechanism in SolidWorks and ran all of the full-scale FEA in SolidWorks Simulation. The team proved it out with a working 1/10-scale, fully 3D-printed prototype.',
    overview:
      'Our senior design team set out to design a barrel-gripping attachment that mounts to a forklift. I designed the complete mechanism in SolidWorks and ran the full-scale finite element analysis in SolidWorks Simulation (von Mises stress, displacement, strain, and factor of safety). As a team we worked through material selection, produced the drawings and calculations, and built a working 1/10-scale prototype that was fully 3D-printed.',
    role:
      'Lead CAD designer and FEA analyst on a five-person team. I designed the entire mechanism in SolidWorks CAD and ran all of the FEA/simulation testing in SolidWorks Simulation. My teammates contributed the drawings and calculations, part of the 3D printing, and the poster.',
    team: ['Anand Seetharaman', 'Janine Kennel', 'Mechack Nduwa', 'Cheran Rammohan', 'Rick Fosting'],
    tools: ['SolidWorks', 'SolidWorks Simulation (FEA)', 'Material selection', '3D printing'],
    highlights: [
      'I designed the entire forklift-mounted barrel-gripping mechanism in SolidWorks.',
      'I ran all of the full-scale FEA in SolidWorks Simulation: von Mises stress, displacement, strain, and factor of safety.',
      'Team: material selection, drawings and calculations, and the project poster.',
      'Team: built a working 1/10-scale, fully 3D-printed prototype.',
    ],
    results: [
      { value: '≈ 209.9 psi', label: 'Max von Mises stress (full-scale FEA)' },
      { value: '≈ 0.0001 in', label: 'Max displacement (full-scale FEA)' },
      { value: '1/10 scale', label: 'Working, fully 3D-printed prototype' },
    ],
    nextSteps: [
      'Validate the FEA against physical load testing.',
      'Optimize the design for weight.',
      'Review the design for manufacturability and ease of assembly.',
    ],
    images: [
      {
        src: 'assets/img/barrel-trap-cad.webp',
        thumb: 'assets/img/barrel-trap-cad-720.webp',
        alt: 'SolidWorks CAD render of the Barrel Trap assembly: two articulated gripper arms closed around a cylindrical drum, attached to a rectangular mounting frame.',
        caption: 'SolidWorks assembly: gripper arms closed around a drum.',
      },
      {
        src: 'assets/img/barrel-trap-fea.webp',
        alt: 'SolidWorks Simulation results plot of the gripper arms and mount, shown as a color contour with fixtures and load arrows visible.',
        caption: 'Full-scale FEA in SolidWorks Simulation (results contour; legend not shown).',
      },
    ],
    links: [],
  },

  /* ------------------------------------------------------------------
     TEMPLATE — copy everything between the braces into the array above.
     Use status: 'In progress' for something you're currently building.
  {
    slug: 'my-new-project',                 // unique, lowercase, no spaces
    title: 'Project Title',
    subtitle: 'One-line description · Personal project',
    date: '2026',
    status: 'In progress',                  // 'Completed' | 'In progress' | 'Planned'
    org: '',                                // optional: school, club, employer
    summary: 'Two or three sentences shown on the card.',
    overview: 'A longer paragraph shown in the detail view.',
    role: 'What you personally did.',
    team: [],                               // optional list of names
    tools: ['SolidWorks', 'CATIA'],
    highlights: ['Key thing you did or learned.'],
    results: [{ value: '—', label: 'Measured outcome' }],
    nextSteps: ['What you would do next.'],
    images: [
      { src: 'assets/img/my-new-project.webp', alt: 'Describe the image for screen readers.', caption: 'Short caption.' },
    ],
    links: [{ label: 'GitHub', url: 'https://github.com/...' }],
  },
  ------------------------------------------------------------------ */
];
