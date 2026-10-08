export type ProjectVisual = {
  src: string;
  alt: string;
  caption: string;
};

export const projectVisuals: Record<string, ProjectVisual[]> = {
  autobon: [
    {
      src: '/images/autobon.ca/01.webp',
      alt: 'Autobon desktop sales page design showing vehicle listings and details',
      caption: 'Desktop sales page with vehicle inventory and a clear browsing layout.'
    },
    {
      src: '/images/autobon.ca/02.webp',
      alt: 'Autobon contact page with a customer enquiry form',
      caption: 'A contact page that gives visitors a direct enquiry path.'
    },
    {
      src: '/images/autobon.ca/03.webp',
      alt: 'Autobon vehicle details form for getting an offer',
      caption: 'A focused vehicle information form for the offer journey.'
    },
    {
      src: '/images/autobon.ca/04.webp',
      alt: 'Autobon vehicle pre-qualification form',
      caption: 'A pre-qualification flow organized into clear form fields.'
    },
    {
      src: '/images/autobon.ca/05.webp',
      alt: 'Autobon admin dashboard with listing and activity overview',
      caption: 'An operations dashboard bringing listings and activity into one view.'
    },
    {
      src: '/images/autobon.ca/06.webp',
      alt: 'Autobon dashboard layout on a mobile screen',
      caption: 'The operations view adapted for a smaller screen.'
    },
    {
      src: '/images/autobon.ca/07.webp',
      alt: 'Autobon vehicle identification flow using a VIN',
      caption: 'A step in the vehicle identification journey.'
    },
    {
      src: '/images/autobon.ca/08.webp',
      alt: 'Autobon vehicle confirmation screen',
      caption: 'A vehicle confirmation screen before continuing the journey.'
    },
    {
      src: '/images/autobon.ca/09.webp',
      alt: 'Autobon vehicle confirmation screen for a Honda Civic',
      caption: 'A vehicle confirmation screen before continuing the journey.'
    }
  ],
  canvasbill: [1, 2, 3, 4, 5, 6].map((n) => ({
    src: `/images/canvasbill/0${n}.webp`, alt: `CanvasBILL product screen ${n}`, caption: `CanvasBILL product view ${String(n).padStart(2, '0')}.`
  })),
  gajsai: [
    {
      src: '/images/gajasai/01.webp',
      alt: 'Illustrated Gajsai Ventures identity system with logo and brand colors',
      caption: 'Core identity elements brought together as a repeatable system.'
    },
    {
      src: '/images/gajasai/02.webp',
      alt: 'Illustrated Gajsai Ventures visiting cards and exterior signage',
      caption: 'The identity adapted across print and physical applications.'
    }
  ],
  leadgen: [1, 2, 3, 4, 5].map((n) => ({
    src: `/images/leadgen/0${n}.webp`, alt: `Leadgen project screen ${n}`, caption: `Leadgen project view ${String(n).padStart(2, '0')}.`
  })),
  'portfolio-designs': ['post1.png', 'post2.png', 'post2-1.png'].map((file, i) => ({
    src: `/images/Portfolio%20designs/${file}`, alt: `Portfolio design ${i + 1}`, caption: `Portfolio design concept ${String(i + 1).padStart(2, '0')}.`
  })),
  'positivus-landing-page': ['post2.png', 'post2-1.png', 'post4.png'].map((file, i) => ({
    src: `/images/positivus%20landing%20rd%20(1)/${file}`, alt: `Positivus landing page design ${i + 1}`, caption: `Positivus landing page view ${String(i + 1).padStart(2, '0')}.`
  })),
  'kratos-landing-page': [{
    src: '/images/positivus%20landing%20rd%20(3)/kratos1.png', alt: 'Kratos landing page design', caption: 'Kratos landing page concept.'
  }],
  'print-media-display': ['Screenshot%202026-09-25%20142226.png', 'Screenshot%202026-09-25%20142352.png', 'Screenshot%202026-09-25%20142409.png', 'Screenshot%202026-09-25%20142431.png', 'glass.jpg'].map((file, i) => ({
    src: `/images/print%20media%20display/${file}`, alt: `Print media design ${i + 1}`, caption: `Print media application ${String(i + 1).padStart(2, '0')}.`
  })),
  'redesigns-500': ['post1.png', 'post2.png', 'post3.png'].map((file, i) => ({
    src: `/images/REDESIGNS%20_%20500/${file}`, alt: `Redesigns 500 visual ${i + 1}`, caption: `Redesign concept ${String(i + 1).padStart(2, '0')}.`
  }))
};
