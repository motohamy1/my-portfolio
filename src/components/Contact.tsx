'use client'
import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react'
import SplitText from './SplitText'

const Contact = () => {
  return (
    <section id="contact" className="scroll-mt-[var(--appbar-offset)] bg-black/95 py-8 px-4 sm:px-6 lg:px-8 2xl:px-12 border-t border-cream/5">
      <div className="mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-cream/70 text-sm mb-2">Contact us</p>
            <SplitText
                text="Get in touch"
                className="text-3xl sm:text-5xl font-bold text-cream mb-4"
                delay={50}
                duration={0.4}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.5}
                rootMargin="0px"
                textAlign="center"
            />
          <p className="text-cream/60">Feel free to reach out. I&apos;m always here to chat.</p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Email */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-wine p-4 rounded-xl mb-4">
              <Mail className="w-6 h-6 text-cream" />
            </div>
            <h3 className="text-cream font-semibold text-lg mb-2">Email</h3>
            <p className="text-cream/60 text-sm mb-2">I&apos;m here to help with any questions.</p>
            <a href="mailto:eltohamym660@gmail.com" className="text-cream hover:text-wine transition-colors break-all">
              eltohamym660@gmail.com
            </a>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-wine p-4 rounded-xl mb-4">
              <MapPin className="w-6 h-6 text-cream" />
            </div>
            <h3 className="text-cream font-semibold text-lg mb-2">Location</h3>
            <p className="text-cream/60 text-sm mb-2">Based in Egypt, working remotely.</p>
            <p className="text-cream">
              Available worldwide<br />
              Efficient & Professional
            </p>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-wine p-4 rounded-xl mb-4">
              <Phone className="w-6 h-6 text-cream" />
            </div>
            <h3 className="text-cream font-semibold text-lg mb-2">Phone</h3>
            <p className="text-cream/60 text-sm mb-2">Available for calls anytime.</p>
            <a href="tel:+201016747795" className="text-cream hover:text-wine transition-colors">
              +20 101 674 7795
            </a>
          </div>

          {/* WhatsApp */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-wine p-4 rounded-xl mb-4">
              <MessageCircle className="w-6 h-6 text-cream" />
            </div>
            <h3 className="text-cream font-semibold text-lg mb-2">WhatsApp</h3>
            <p className="text-cream/60 text-sm mb-2">Quick responses via WhatsApp.</p>
            <a 
              href="https://wa.me/201016747795" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cream hover:text-wine transition-colors"
            >
              +20 101 674 7795
            </a>
          </div>

        </div>

        <footer className="border-t border-cream/10 pt-6 pb-2 text-center text-xs text-cream/60">
          <p>© {new Date().getFullYear()} Mahmoud Eltohamy · Hippocamp</p>
          <p className="mt-1">
            Services accordion adapted from{' '}
            <a
              href="https://gxuri.in"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-cream transition-colors"
            >
              Skiper UI
            </a>
            .
          </p>
        </footer>
      </div>
    </section>
  )
}

export default Contact
