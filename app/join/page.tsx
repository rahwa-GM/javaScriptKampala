"use client";

import React, { useState } from "react";
import { Section, Heading, Card, Button, Badge } from "../../components/UI";
import {
  Github,
  Twitter,
  Linkedin,
  Mic,
  Hand,
  Check,
  Mail,
  ArrowRight,
} from "lucide-react";
import { QRCodeCanvas } from "qrcode.react";

const WhatsApp = ({ width = "48", height = "48", className = "" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <style>
        {`.cls-1{fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;}`}
      </style>
    </defs>
    <path
      className="cls-1"
      d="M24,2.5A21.52,21.52,0,0,0,5.15,34.36L2.5,45.5l11.14-2.65A21.5,21.5,0,1,0,24,2.5ZM13.25,12.27h5.86a1,1,0,0,1,1,1,10.4,10.4,0,0,0,.66,3.91,1.93,1.93,0,0,1-.66,2.44l-2.05,2a18.6,18.6,0,0,0,3.52,4.79A18.6,18.6,0,0,0,26.35,30l2-2.05c1-1,1.46-1,2.44-.66a10.4,10.4,0,0,0,3.91.66,1.05,1.05,0,0,1,1,1v5.86a1.05,1.05,0,0,1-1,1,23.68,23.68,0,0,1-15.64-6.84,23.6,23.6,0,0,1-6.84-15.64A1.07,1.07,0,0,1,13.25,12.27Z"
    />
  </svg>
);

export default function Join() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setTimeout(() => setSubscribed(true), 500);
    }
  };

  return (
    <>
      <div className="bg-[#050505] border-b border-gray-800 pt-32 pb-20">
        <Section noPadding>
          <div className="max-w-4xl">
            <Badge color="yellow" className="mb-6">
              Membership
            </Badge>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 uppercase leading-[0.85] tracking-tighter">
              Join The <br />
              <span
                className="text-transparent bg-clip-text bg-none stroke-white"
                style={{ WebkitTextStroke: "1px white" }}
              >
                Collective
              </span>
            </h1>
          </div>
        </Section>
      </div>

      <Section className="bg-[#080808]">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Connect */}
          <div>
            <h2 className="text-3xl font-black text-white mb-8 uppercase border-l-4 border-js-yellow pl-6">
              Social Links
            </h2>
            <div className="grid gap-px bg-gray-800 border border-gray-800">
              {[
                {
                  icon: WhatsApp,
                  label: "WhatsApp",
                  link: "https://chat.whatsapp.com/FcGnmiAp9gl097ajVDQ931",
                },
                { icon: Twitter, label: "Twitter / X", link: "#" },
                { icon: Linkedin, label: "LinkedIn", link: "#" },
                {
                  icon: Github,
                  label: "GitHub Org",
                  link: "https://github.com/kampala-js",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  className="flex items-center justify-between p-8 bg-[#111] hover:bg-js-yellow hover:text-black transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <item.icon
                      size={24}
                      className="text-gray-500 group-hover:text-black"
                    />
                    <span className="uppercase font-bold tracking-widest text-lg">
                      {item.label}
                    </span>
                  </div>
                  <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="text-3xl font-black text-white mb-8 uppercase border-l-4 border-js-yellow pl-6">
              Weekly Intel
            </h2>
            <div className="bg-[#111] p-10 border border-gray-800 h-[300px] flex flex-col justify-center">
              <p className="text-gray-400 mb-8 font-mono text-sm uppercase">
                Enter your email to receive event updates and digest.
              </p>

              {subscribed ? (
                <div className="bg-green-600 text-white p-6 flex items-center gap-4 border border-green-500">
                  <Check size={24} />
                  <div>
                    <span className="font-bold uppercase tracking-wider block">
                      Subscribed
                    </span>
                    <span className="text-xs font-mono">
                      Check your inbox for confirmation.
                    </span>
                  </div>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubscribe}>
                  <div className="relative">
                    <Mail
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                      size={20}
                    />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="EMAIL ADDRESS"
                      className="w-full bg-black border-2 border-gray-700 pl-12 pr-6 py-4 text-white focus:border-js-yellow outline-none uppercase font-mono placeholder-gray-600 transition-colors"
                    />
                  </div>
                  <Button className="w-full">Initialize Subscription</Button>
                </form>
              )}
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-col items-center border-t border-gray-700 pt-6">
          <p className="text-gray-500 text-xs font-mono uppercase mb-4">
            Scan to Join Instantly
          </p>

          <div className="bg-white p-4">
            <QRCodeCanvas
              value="https://chat.whatsapp.com/FcGnmiAp9gl097ajVDQ931"
              size={140}
              bgColor="#ffffff"
              fgColor="#000000"
              level="H"
            />
          </div>
        </div>
      </Section>

      {/* Volunteer / Speak */}
      <Section className="bg-[#050505] border-t border-gray-800">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="border border-gray-800 p-12 hover:border-white transition-colors group bg-[#0a0a0a]">
            <Mic
              size={48}
              className="mb-8 text-gray-600 group-hover:text-js-yellow"
            />
            <h3 className="text-4xl font-black uppercase mb-4 text-white">
              Call for Speakers
            </h3>
            <p className="mb-8 text-lg font-light text-gray-400">
              Share your knowledge. We help first-time speakers with slide
              preparation and rehearsal.
            </p>
            <Button variant="outline" className="w-full">
              Submit Proposal
            </Button>
          </div>
          <div className="border border-gray-800 p-12 hover:border-white transition-colors group bg-[#0a0a0a]">
            <Hand
              size={48}
              className="mb-8 text-gray-600 group-hover:text-js-yellow"
            />
            <h3 className="text-4xl font-black uppercase mb-4 text-white">
              Volunteer
            </h3>
            <p className="mb-8 text-lg font-light text-gray-400">
              Help us run the show. Join the crew for event management,
              photography, or logistics.
            </p>
            <Button variant="outline" className="w-full">
              Join The Crew
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
