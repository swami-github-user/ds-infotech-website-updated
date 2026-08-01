"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-50 py-28"
    >
      <Container>
        <SectionTitle
          eyebrow="CONTACT"
          title="Ready to Transform Your Team?"
          description="Let's discuss how DS Infotech can help your organization build Cloud, DevOps and AI capabilities."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-2">

          {/* Form */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white p-10 shadow-sm"
          >

            <div className="grid gap-6">

              <input
                placeholder="Full Name"
                className="rounded-xl border p-4 outline-none focus:border-orange-500"
              />

              <input
                placeholder="Company Name"
                className="rounded-xl border p-4 outline-none focus:border-orange-500"
              />

              <input
                placeholder="Email Address"
                className="rounded-xl border p-4 outline-none focus:border-orange-500"
              />

              <input
                placeholder="Phone Number"
                className="rounded-xl border p-4 outline-none focus:border-orange-500"
              />

              <select
                className="rounded-xl border p-4 outline-none focus:border-orange-500"
              >
                <option>AWS Training</option>
                <option>DevOps Training</option>
                <option>AI / GenAI Training</option>
                <option>Corporate Training</option>
                <option>Custom Learning Path</option>
              </select>

              <textarea
                rows={5}
                placeholder="Tell us about your requirement..."
                className="rounded-xl border p-4 outline-none focus:border-orange-500"
              />

              <button
                className="rounded-xl bg-orange-500 py-4 font-semibold text-white transition hover:bg-orange-600"
              >
                Send Inquiry
              </button>

            </div>

          </motion.div>

          {/* Contact Info */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white p-10 shadow-sm"
          >

            <div className="space-y-8">

              <div className="flex gap-4">
                <MapPin className="text-orange-500" />
                <div>
                  <h4 className="font-semibold">Office</h4>
                  <p className="text-slate-600">
                     Maharashtra, India
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="text-orange-500" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-slate-600">
                    info@dsinfotech.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="text-orange-500" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-slate-600">
                    +91 XXXXXXXX
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="text-orange-500" />
                <div>
                  <h4 className="font-semibold">Business Hours</h4>
                  <p className="text-slate-600">
                    Monday – Friday
                  </p>
                  <p className="text-slate-600">
                    9:00 AM – 6:00 PM
                  </p>
                </div>
              </div>

            </div>

          </motion.div>

        </div>
      </Container>
    </section>
  );
}