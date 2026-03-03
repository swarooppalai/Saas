import Link from 'next/link';
import { Container } from '@/components/container';
import { Button } from '@/components/ui/button';
import { PricingSection } from '@/features/pricing/components/pricing-section';

export default async function HomePage() {
  return (
    <div className='flex flex-col gap-0 bg-[#080810]'>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden bg-[#080810]'>
      {/* Animated gradient orbs */}
      <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse' />
      <div className='absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/15 rounded-full blur-3xl animate-pulse delay-1000' />
      <div className='absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl animate-pulse delay-500' />

      {/* Grid pattern overlay */}
      <div className='absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]' />

      <Container className='relative z-10 text-center flex flex-col items-center gap-8 py-32'>
        {/* Badge */}
        <div className='inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 backdrop-blur-sm'>
          <span className='h-2 w-2 rounded-full bg-purple-400 animate-pulse' />
          <span className='text-sm text-purple-300 font-medium'>AI-Powered Bookmark Manager</span>
        </div>

        {/* Headline */}
        <h1 className='text-5xl lg:text-7xl font-bold text-white leading-tight max-w-4xl'>
          Save Everything.{' '}
          <span className='bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent'>
            Find Anything.
          </span>
        </h1>

        {/* Subheadline */}
        <p className='text-lg lg:text-xl text-gray-400 max-w-2xl leading-relaxed'>
          Automatically sync your Instagram saved posts and Twitter/X bookmarks in one place. 
          Search everything with AI — photos, videos, and links — instantly.
        </p>

        {/* CTA Buttons */}
        <div className='flex flex-col sm:flex-row gap-4 mt-4'>
          <Button asChild size='lg' className='bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white px-8 py-6 text-lg rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25'>
            <Link href='/signup'>Start for free →</Link>
          </Button>
          <Button asChild size='lg' variant='outline' className='border-purple-500/30 text-purple-300 hover:bg-purple-500/10 px-8 py-6 text-lg rounded-xl transition-all duration-500 backdrop-blur-sm'>
            <Link href='/pricing'>See pricing</Link>
          </Button>
        </div>

        {/* Social proof */}
        <p className='text-sm text-gray-500 mt-4'>
          Free to start · No credit card required · Cancel anytime
        </p>

        {/* Floating preview card */}
        <div className='mt-12 w-full max-w-3xl rounded-2xl border border-purple-500/20 bg-white/5 backdrop-blur-md p-6 shadow-2xl shadow-purple-500/10'>
          <div className='flex items-center gap-3 mb-4'>
            <div className='flex gap-1.5'>
              <span className='w-3 h-3 rounded-full bg-red-500/70' />
              <span className='w-3 h-3 rounded-full bg-yellow-500/70' />
              <span className='w-3 h-3 rounded-full bg-green-500/70' />
            </div>
            <div className='flex-1 h-6 rounded-md bg-white/10 flex items-center px-3'>
              <span className='text-xs text-gray-500'>app.savesync.io/dashboard</span>
            </div>
          </div>
          <div className='grid grid-cols-3 gap-3'>
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className='h-24 rounded-lg bg-gradient-to-br from-purple-500/10 to-violet-500/10 border border-purple-500/10 animate-pulse' style={{animationDelay: `${i * 150}ms`}} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: '🔖',
      title: 'Auto-Sync Bookmarks',
      description: 'Connect your Twitter/X and Instagram accounts. Your bookmarks sync automatically every hour — always up to date.',
    },
    {
      icon: '🤖',
      title: 'AI Search',
      description: 'Search by meaning, not just keywords. Find "funny tech memes" or "travel inspiration" and get exactly what you saved.',
    },
    {
      icon: '📸',
      title: 'Photos & Videos',
      description: 'Every image and video is indexed. Search visually or by description and find any media you\'ve ever saved.',
    },
    {
      icon: '📁',
      title: 'Smart Folders',
      description: 'AI automatically organizes your bookmarks into folders. Or create your own custom collections.',
    },
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Results in milliseconds. No more endless scrolling through saved posts trying to find that one thing.',
    },
    {
      icon: '🔒',
      title: 'Private & Secure',
      description: 'Your bookmarks are encrypted and private. We never share or sell your data to anyone.',
    },
  ];

  return (
    <section className='py-32 bg-[#080810] relative'>
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent' />
      <Container className='relative z-10'>
        <div className='text-center mb-16'>
          <span className='text-purple-400 font-semibold text-sm uppercase tracking-widest'>Features</span>
          <h2 className='text-4xl lg:text-5xl font-bold text-white mt-3'>
            Everything you need to{' '}
            <span className='bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent'>
              never lose a bookmark
            </span>
          </h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {features.map((feature, i) => (
            <div
              key={i}
              className='group rounded-2xl border border-purple-500/10 bg-white/3 backdrop-blur-sm p-6 hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10'
            >
              <div className='text-4xl mb-4'>{feature.icon}</div>
              <h3 className='text-lg font-semibold text-white mb-2'>{feature.title}</h3>
              <p className='text-gray-400 text-sm leading-relaxed'>{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    { step: '01', title: 'Connect your accounts', description: 'Sign in with Twitter/X or Instagram in one click. We request only read access to your bookmarks.' },
    { step: '02', title: 'We sync everything', description: 'Your bookmarks are automatically imported, indexed with AI, and organized into smart folders.' },
    { step: '03', title: 'Search and find', description: 'Use natural language search to find anything you\'ve ever saved — instantly, across all platforms.' },
  ];

  return (
    <section className='py-32 bg-[#080810]'>
      <Container>
        <div className='text-center mb-16'>
          <span className='text-purple-400 font-semibold text-sm uppercase tracking-widest'>How it works</span>
          <h2 className='text-4xl lg:text-5xl font-bold text-white mt-3'>Up and running in{' '}
            <span className='bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent'>3 minutes</span>
          </h2>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {steps.map((s, i) => (
            <div key={i} className='relative flex flex-col gap-4 p-8 rounded-2xl border border-purple-500/10 bg-white/3 hover:border-purple-500/30 transition-all duration-700'>
              <span className='text-6xl font-bold bg-gradient-to-b from-purple-500/40 to-transparent bg-clip-text text-transparent'>{s.step}</span>
              <h3 className='text-xl font-semibold text-white'>{s.title}</h3>
              <p className='text-gray-400 leading-relaxed'>{s.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    { q: 'Is it really free to start?', a: 'Yes. The free plan lets you save up to 100 bookmarks with basic search. No credit card required.' },
    { q: 'Does it work with Instagram?', a: 'Yes. We support Instagram saved posts via your Instagram data export. Full automatic sync is coming soon.' },
    { q: 'How does AI search work?', a: 'We generate semantic embeddings for every bookmark. This lets you search by meaning — not just exact words.' },
    { q: 'Is my data private?', a: 'Absolutely. Your bookmarks are stored encrypted and are never shared or used to train AI models.' },
    { q: 'Can I cancel anytime?', a: 'Yes. You can cancel your subscription at any time. You keep access until the end of your billing period.' },
    { q: 'What platforms are supported?', a: 'Currently Twitter/X and Instagram. LinkedIn, TikTok, and YouTube are on our roadmap.' },
  ];

  return (
    <section className='py-32 bg-[#080810] relative'>
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent' />
      <Container className='relative z-10 max-w-3xl'>
        <div className='text-center mb-16'>
          <span className='text-purple-400 font-semibold text-sm uppercase tracking-widest'>FAQ</span>
          <h2 className='text-4xl lg:text-5xl font-bold text-white mt-3'>Common questions</h2>
        </div>
        <div className='flex flex-col gap-4'>
          {faqs.map((faq, i) => (
            <div key={i} className='rounded-xl border border-purple-500/10 bg-white/3 p-6 hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-500'>
              <h4 className='text-white font-semibold mb-2'>{faq.q}</h4>
              <p className='text-gray-400 text-sm leading-relaxed'>{faq.a}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function CTASection() {
  return (
    <section className='py-32 bg-[#080810]'>
      <Container>
        <div className='relative rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-950/50 to-violet-950/30 backdrop-blur-sm p-16 text-center overflow-hidden'>
          <div className='absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-purple-600/20 rounded-full blur-3xl' />
          <div className='relative z-10 flex flex-col items-center gap-6'>
            <h2 className='text-4xl lg:text-5xl font-bold text-white'>
              Start saving smarter{' '}
              <span className='bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent'>today</span>
            </h2>
            <p className='text-gray-400 text-lg max-w-lg'>
              Join thousands of people who never lose an important bookmark again.
            </p>
            <Button asChild size='lg' className='bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white px-10 py-6 text-lg rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 mt-4'>
              <Link href='/signup'>Get started for free →</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
