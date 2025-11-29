'use client'
import { Mail, MapPin, Phone, MessageCircle, Facebook, Twitter } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="bg-darker py-50 px-6 rounded-2xl ">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-cream/70 text-sm mb-2">Contact us</p>
          <h2 className="text-4xl font-bold text-cream mb-4">Get in touch</h2>
          <p className="text-cream/60">Feel free to reach out. I&apos;m always here to chat.</p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Email */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-wine p-4 rounded-xl mb-4">
              <Mail className="w-6 h-6 text-cream" />
            </div>
            <h3 className="text-cream font-semibold text-lg mb-2">Email</h3>
            <p className="text-cream/60 text-sm mb-2">I&apos;m here to help with any questions.</p>
            <a href="mailto:eltohamym660@gmail.com" className="text-cream hover:text-wine transition-colors">
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

          {/* Facebook */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-wine p-4 rounded-xl mb-4">
              <Facebook className="w-6 h-6 text-cream" />
            </div>
            <h3 className="text-cream font-semibold text-lg mb-2">Facebook</h3>
            <p className="text-cream/60 text-sm mb-2">Connect with me on Facebook.</p>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cream hover:text-wine transition-colors"
            >
              Follow me
            </a>
          </div>

          {/* Twitter */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-wine p-4 rounded-xl mb-4">
              <Twitter className="w-6 h-6 text-cream" />
            </div>
            <h3 className="text-cream font-semibold text-lg mb-2">Twitter</h3>
            <p className="text-cream/60 text-sm mb-2">Follow me on Twitter.</p>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cream hover:text-wine transition-colors"
            >
              Follow me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
