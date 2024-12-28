import { Mail, Phone, MapPin } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import ContactForm from './ContactForm';

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    details: "hello@creativeriotmob.com",
    link: "mailto:hello@creativeriotmob.com"
  },
  {
    icon: Phone,
    title: "Phone",
    details: "+254 700 000 000",
    link: "tel:+254700000000"
  },
  {
    icon: MapPin,
    title: "Location",
    details: "Nairobi, Kenya",
    link: "https://maps.google.com"
  }
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Get in Touch"
          subtitle="Let's Create Something Amazing"
        />
        
        <div className="mt-12 grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map(({ icon: Icon, title, details, link }) => (
                <a
                  key={title}
                  href={link}
                  className="flex items-start gap-4 text-[#B0B3C1] hover:text-white transition-colors"
                >
                  <Icon className="w-6 h-6 text-[#FF4C4C]" />
                  <div>
                    <h4 className="font-medium text-white">{title}</h4>
                    <p>{details}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}