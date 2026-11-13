"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
} from "lucide-react";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const API_URL = process.env.NEXT_PUBLIC_CONTACT_API!;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "Delivery Partnership",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState("");

  const [error, setError] = useState("");


  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");
    setLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        
      });
      
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Failed to submit enquiry."
        );
      }

      setSuccess(result.message);

      setTimeout(() => {

          setSuccess("");

      }, 5000);

      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "Delivery Partnership",
        message: "",
      });
      setLoading(false);
    } catch (err: unknown) {
      setError(
        err instanceof Error ? err.message : "Something went wrong."
      );
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-slate-50 py-28"
    >
      <Container>

        <SectionTitle
          eyebrow="CONTACT"
          title="Request a Training Proposal"
          description="Share the topic, audience and preferred dates. We typically respond with an outline and proposal within two business days."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-2">

          {/* Contact Form */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white p-10 shadow-sm"
          >

            <form
              onSubmit={handleSubmit}
              className="grid gap-6"
            >

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                aria-label="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="rounded-xl border p-4 outline-none focus:border-orange-500"
              />

              <input
                type="text"
                name="company"
                placeholder="Company Name"
                aria-label="Company Name"
                value={formData.company}
                onChange={handleChange}
                required
                className="rounded-xl border p-4 outline-none focus:border-orange-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                aria-label="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="rounded-xl border p-4 outline-none focus:border-orange-500"
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                aria-label="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="rounded-xl border p-4 outline-none focus:border-orange-500"
              />

              <select
                name="service"
                aria-label="Service required"
                value={formData.service}
                onChange={handleChange}
                className="rounded-xl border p-4 outline-none focus:border-orange-500"
              >
                <option>Delivery Partnership</option>
                <option>Corporate Training Program</option>
                <option>Content Development</option>
                <option>Generative AI / Agentic AI Training</option>
                <option>DevOps / Containers Training</option>
                <option>Cloud Architecture / ML Training</option>
                <option>Other</option>
              </select>

              <textarea
                rows={5}
                name="message"
                aria-label="Requirement details"
                placeholder="Topic, audience size and level, preferred dates and delivery mode..."
                value={formData.message}
                onChange={handleChange}
                required
                className="rounded-xl border p-4 outline-none focus:border-orange-500"
              />

              {success && (
                <div className="rounded-xl bg-green-100 p-4 text-green-700">
                  {success}
                </div>
              )}

              {error && (
                <div className="rounded-xl bg-red-100 p-4 text-red-700">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className={`rounded-xl py-4 font-semibold text-white transition ${
                  loading
                    ? "cursor-not-allowed bg-gray-400"
                    : "bg-orange-500 hover:bg-orange-600"
                }`}
              >
                {loading ? "Submitting..." : "Send Inquiry"}
              </button>

            </form>

          </motion.div>

          {/* Contact Information */}

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