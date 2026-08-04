import React, { useState } from 'react';
import { Clock, MapPin, Phone, Navigation, Instagram, Facebook, Copy, Check, ExternalLink } from 'lucide-react';
import { CAFE_INFO } from '../data/menuData';

interface InfoSectionProps {
  onShowToast: (msg: string) => void;
}

export const InfoSection: React.FC<InfoSectionProps> = ({ onShowToast }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(CAFE_INFO.address);
    setCopied(true);
    onShowToast("Address copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="visit" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-semibold tracking-widest uppercase text-[#C9785C] bg-[#F5E9DA] px-3.5 py-1.5 rounded-full inline-block mb-3">
          Find Your Way To Us
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2B211D] mb-4">
          Visit Café De Travia
        </h2>
        <p className="text-[#5C3A2E]/80 text-base sm:text-lg">
          We look forward to welcoming you with fresh pastries, warm bread, and handcrafted drinks.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Contact Info Card */}
        <div className="lg:col-span-6 bg-white rounded-3xl p-8 sm:p-10 border border-[#EFE6D8] shadow-lg flex flex-col justify-between">
          <div className="space-y-8">
            {/* Opening Hours */}
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-[#F5E9DA] text-[#5C3A2E] shrink-0">
                <Clock className="w-6 h-6 text-[#C9785C]" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-[#2B211D] mb-2">
                  Opening Hours
                </h3>
                <div className="space-y-1 text-sm text-[#5C3A2E] leading-relaxed">
                  <p className="font-medium text-[#2B211D]">{CAFE_INFO.hours.weekday}</p>
                  <p className="font-medium text-[#2B211D]">{CAFE_INFO.hours.weekend}</p>
                </div>
                <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#8C9A7A]/15 text-[#8C9A7A] text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#8C9A7A] animate-ping" />
                  <span>Open Today</span>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-[#F5E9DA] text-[#5C3A2E] shrink-0">
                <MapPin className="w-6 h-6 text-[#C9785C]" />
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-xl font-bold text-[#2B211D] mb-2">
                  Location & Address
                </h3>
                <p className="text-sm text-[#5C3A2E] font-medium leading-relaxed mb-2">
                  {CAFE_INFO.address}
                </p>
                <button
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-1.5 text-xs text-[#C9785C] font-semibold hover:underline"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "Copied Address" : "Copy Address to Clipboard"}</span>
                </button>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-[#F5E9DA] text-[#5C3A2E] shrink-0">
                <Phone className="w-6 h-6 text-[#C9785C]" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-[#2B211D] mb-2">
                  Phone & Reservations
                </h3>
                <a
                  href={`tel:${CAFE_INFO.phone}`}
                  className="text-sm font-semibold text-[#5C3A2E] hover:text-[#C9785C] transition-colors"
                >
                  {CAFE_INFO.phone}
                </a>
                <p className="text-xs text-[#5C3A2E]/70 mt-1">
                  Call for bulk takeaway bread orders or table reservations.
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-8 mt-8 border-t border-[#EFE6D8] grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href={CAFE_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#C9785C] hover:bg-[#B5654A] text-white text-sm font-semibold shadow-md transition-all text-center"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Directions</span>
            </a>

            <a
              href={`tel:${CAFE_INFO.phone}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#5C3A2E] hover:bg-[#2B211D] text-white text-sm font-semibold shadow-md transition-all text-center"
            >
              <Phone className="w-4 h-4" />
              <span>Call the Café</span>
            </a>
          </div>
        </div>

        {/* Visual Map / Location Graphic Card */}
        <div className="lg:col-span-6 bg-white rounded-3xl overflow-hidden border border-[#EFE6D8] shadow-lg flex flex-col">
          {/* Mock Interactive Map Representation */}
          <div className="relative h-72 sm:h-80 w-full bg-[#EFE6D8] overflow-hidden">
            {/* Map styled photo background */}
            <img
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1000&q=80"
              alt="Mandalay Map Location preview"
              className="w-full h-full object-cover filter contrast-[0.95] saturate-[0.8]"
            />
            <div className="absolute inset-0 bg-[#5C3A2E]/10" />

            {/* Custom Map Marker Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative group cursor-pointer">
                <div className="w-14 h-14 rounded-full bg-[#C9785C] text-white flex items-center justify-center shadow-2xl animate-bounce border-2 border-white">
                  <MapPin className="w-7 h-7" />
                </div>
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#2B211D] text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg border border-white/20">
                  Café De Travia • 19th St
                </div>
              </div>
            </div>

            {/* Top Right Directions Badge */}
            <a
              href={CAFE_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-[#2B211D] px-3.5 py-2 rounded-xl text-xs font-semibold shadow-md flex items-center gap-1.5 hover:bg-white"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#C9785C]" />
              <span>Open Google Maps</span>
            </a>
          </div>

          {/* Social Links & Visit Encouragement */}
          <div className="p-8 bg-[#FFF9F1] flex-1 flex flex-col justify-between">
            <div>
              <h4 className="font-serif text-lg font-bold text-[#2B211D] mb-2">
                Follow Our Daily Bakes
              </h4>
              <p className="text-xs text-[#5C3A2E]/80 mb-4">
                We share photos of fresh oven batches every morning on Instagram and Facebook.
              </p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={CAFE_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#EFE6D8] text-xs font-semibold text-[#5C3A2E] hover:border-[#C9785C] transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#C9785C]" />
                <span>Instagram</span>
              </a>

              <a
                href={CAFE_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#EFE6D8] text-xs font-semibold text-[#5C3A2E] hover:border-[#C9785C] transition-colors"
              >
                <Facebook className="w-4 h-4 text-[#C9785C]" />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
