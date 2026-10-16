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

  {
    slug: 'slip-joint-pliers',
    title: 'Slip-Joint Pliers: SolidWorks Design & FEA',
    subtitle: 'Pliers assembly modeled in SolidWorks with a static stress study · Personal project',
    date: '2023',
    status: 'Completed',
    org: '',
    summary:
      'I modeled a pair of slip-joint pliers in SolidWorks in January 2023 and ran a static FEA study in SolidWorks Simulation to see how the tool responds when the handles are squeezed.',
    overview:
      'The assembly has two jaw/handle bodies (about 229 × 16 × 47 mm, Chrome Stainless Steel), two handle grips (about 120 × 24 × 18 mm), and two 0.4 in diameter pivot bolts (about 13.2 mm and 16.4 mm long). I built two assembly variants. On one of them I set up a static study with distributed squeezing loads on both handles and the jaws fixed near the teeth. Most of the body stays at low stress, but the peak von Mises value lands right at the fixture/contact area near the jaw teeth and sits above the yield strength shown on the plot. I read that peak as a likely stress concentration or singularity caused by point-like restraints, not as a real failure prediction.',
    role: 'Solo project. I did the CAD modeling, the assembly, and the simulation setup.',
    team: [],
    tools: ['SolidWorks', 'SolidWorks Simulation (FEA)'],
    highlights: [
      'I modeled the jaw/handle bodies, grips, and pivot bolts, and mated them into an assembly (two variants).',
      'I set up a static study: distributed squeezing loads on both handles, jaws fixed near the teeth.',
      'Max displacement is at the handle tips, which matches how pliers flex when squeezed.',
      'The stress peak is localized at the restraint near the jaw teeth. Most of the body stays low (blue).',
    ],
    results: [
      { value: '1.937 mm', label: 'Max resultant displacement, at the handle tips' },
      { value: '1.412e9 N/m²', label: 'Peak von Mises stress (localized at the jaw fixture)' },
      { value: '1.724e8 N/m²', label: 'Yield strength shown on the plot' },
    ],
    nextSteps: [
      'Refine the mesh around the jaw teeth and fixture region.',
      'Use a more realistic contact and fixture setup instead of point-like restraints.',
      'Check a higher-strength tool steel for the jaw/handle bodies.',
    ],
    images: [
      { src: 'assets/img/pliers-assembly.webp', alt: 'SolidWorks isometric view of the slip-joint pliers assembly: steel jaws with serrated teeth, pivot bolt, and red handle grips.', caption: 'Full pliers assembly in SolidWorks.' },
      { src: 'assets/img/pliers-jaw-handle.webp', alt: 'SolidWorks view of one jaw/handle body of the pliers.', caption: 'Jaw/handle body (Chrome Stainless Steel).' },
      { src: 'assets/img/pliers-grip.webp', alt: 'SolidWorks render of a curved red handle grip.', caption: 'Handle grip.' },
      { src: 'assets/img/pliers-bolt.webp', alt: 'SolidWorks view of a pivot bolt.', caption: 'Pivot bolt (0.4 in diameter).' },
      { src: 'assets/img/pliers-fea-displacement.webp', alt: 'SolidWorks Simulation displacement plot of the pliers, with color contour showing the largest displacement at the handle tips.', caption: 'Resultant displacement: max 1.937 mm at the handle tips (deformation scale 12.08).' },
      { src: 'assets/img/pliers-fea-stress.webp', alt: 'SolidWorks Simulation von Mises stress plot of the pliers with load arrows on both handles; most of the body is blue (low stress).', caption: 'von Mises stress: peak 1.412e9 N/m² at the jaw fixture; yield 1.724e8 N/m² marked on the legend.' },
    ],
    links: [],
  },

  {
    slug: 'bamjack',
    title: 'BAMJACK',
    subtitle: 'Portable full-car jack system · Machine Design course project (Group 4 team project)',
    date: '2023',
    status: 'Completed',
    org: 'Kennesaw State University · Machine Design 4501 (Instructor: Dr. Aaron Adams)',
    summary:
      'A portable jack system that can lift a whole car from all four jack points. Our five-person team (Group 4) designed it in SolidWorks for KSU Machine Design 4501: a center frame, four telescopic arms, four bottle-screw jacks, and a gearbox accessory that raises two jacks at once.',
    overview:
      'Jacks that can lift an entire car tend to be expensive, bulky, and hard to move, and portable jacks usually lift only one wheel. Our goal was a full-car jack that is portable, storable, and cheaper than retail options. BAMJACK uses a center main frame with four telescopic arms that each extend up to 50 in from the base, rotate up to 300°, and lock at different angles. The arms fold into the hollow frame for storage, and the frame splits down the middle so half of it can be used for smaller jobs. Each arm carries a custom bottle-screw jack that goes from 6.2 in compressed to 16 in extended. A custom gearbox with U-joint extension arms lets you raise two jacks at the same time, by hand or with a drill. We started with a hydraulic jack but switched to designing our own screw jack because of cost and lead time, and because a screw jack works with the gearbox accessory. Most parts are 7079 aluminum, with plain carbon steel internal screws and gears and brass bushings. We checked the jack and main frame in SolidWorks Simulation against a target factor of safety of 2.5.',
    role:
      'Group 4 team project for KSU Machine Design 4501. Team: Janine Kennel, Mechack Nduwa, Ben Phillips, Cheran Rammohan, and me (Anand Seetharaman). The final report credits the work to the whole group.',
    team: ['Janine Kennel', 'Mechack Nduwa', 'Ben Phillips', 'Cheran Rammohan', 'Anand Seetharaman'],
    tools: ['SolidWorks', 'SolidWorks Simulation (FEA)', 'Engineering drawings', 'Material selection', 'Cost analysis'],
    constraints: [
      'Fit under the frame of many different cars: arms that rotate and extend, and a jack/frame height below typical ground clearance (about 6 in before extension).',
      'Light enough for one person to carry: partially hollow frame, a weight cap (the target dropped from under 200 lb to under 175 lb), and built-in handles.',
      'Lift two wheels at a time, or the whole car with the two-jack accessory, raised by hand or with a hand drill.',
      'Durable and portable: rust- and heat-resistant materials, arms that fold into the frame, a frame that splits down the middle, and easy disassembly.',
      'Cheaper than retail full-car jacks: materials chosen for cost and yield strength, with a minimum factor of safety of 2.5.',
    ],
    highlights: [
      'Center main frame with four telescopic arms, each made of three nested pieces, that fold into the hollow frame for storage.',
      'Custom telescoping bottle-screw jack: 7079 aluminum body, plain carbon steel screws and gears, brass bushings.',
      'Gearbox accessory with U-joint extension arms raises two jacks at the same time.',
      'FEA on the jack assembly at 1500 lbf: max von Mises stress of 18.42 ksi, and it passes the 2.5 factor-of-safety target.',
      'Shortening the arms from 47.5 in to 30 in cut the 2-jack main frame from 80 lb to 59.06 lb.',
      'Full set of part drawings plus material cost breakdowns for the jack, gearbox, and main frame.',
    ],
    results: [
      { value: '1500 lbf', label: 'Rated load per jack at a 2.5 factor of safety (FEA)' },
      { value: '18.42 ksi', label: 'Max von Mises stress in the jack assembly (FEA)' },
      { value: '6.2 → 16 in', label: 'Jack height, compressed to extended' },
      { value: '1500–6000 lb', label: 'Vehicle weight range, depending on jack choice' },
      { value: '40 × 102 in', label: 'Full assembly footprint' },
    ],
    nextSteps: [
      'Machine all threaded parts and gears from 1045 steel instead of plain carbon steel.',
      'Redesign the gearbox to handle the required load.',
      'Move from a 0.25 in to a 0.375 in square drive to get more torque into the accessory.',
      'Add wheels to the jacks and main body, and design a more comfortable, ergonomic handle.',
      'Keep cutting overall weight.',
    ],
    images: [
      { src: 'assets/img/bamjack-assembly.webp', alt: 'SolidWorks render of the BAMJACK assembly: a long main frame with telescopic arms ending in bottle-screw jacks, plus the gearbox accessory with extension arms.', caption: 'BAMJACK assembly with the gearbox accessory (the 4-jack version mirrors this on the main frame).' },
      { src: 'assets/img/bamjack-jack.webp', alt: 'SolidWorks render of the telescoping bottle-screw jack with a tiered body on a round base.', caption: 'Custom telescoping bottle-screw jack.' },
      { src: 'assets/img/bamjack-jack-section.webp', alt: 'Section view of the bottle-screw jack showing nested tiers, threaded screws, gears, and bushings.', caption: 'Jack section view: 4 outer tiers, main cover, 3 threaded screws, 2 gears, 2 bushings.' },
      { src: 'assets/img/bamjack-jack-exploded.webp', alt: 'Exploded SolidWorks view of the bottle-screw jack with numbered balloons and a parts list.', caption: 'Exploded view of the jack assembly (from our design constraint report).' },
      { src: 'assets/img/bamjack-jack-fea-stress.webp', alt: 'SolidWorks Simulation von Mises stress plot of the jack assembly, mostly blue, with min and max probes labeled.', caption: 'Jack FEA at 1500 lbf: max von Mises stress 18.42 ksi.' },
      { src: 'assets/img/bamjack-jack-fea-displacement.webp', alt: 'SolidWorks Simulation displacement plot of the jack assembly with a color contour.', caption: 'Jack FEA at 1500 lbf: displacement distribution.' },
      { src: 'assets/img/bamjack-gearbox.webp', alt: 'Exploded SolidWorks view of the gearbox accessory showing the housing, gears, and T piece.', caption: 'Gearbox accessory, exploded view (Aluminum 7079).' },
      { src: 'assets/img/bamjack-frame-early.webp', alt: 'Earlier SolidWorks render of the BAMJACK main frame with four arms ending in jacks.', caption: 'Earlier main frame and arm layout (design constraint report, March 2023).' },
      { src: 'assets/img/bamjack-frame-fea.webp', alt: 'SolidWorks Simulation stress plot of a main frame arm section.', caption: 'Main frame FEA at 180 lbf (2.5 factor-of-safety check).' },
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
