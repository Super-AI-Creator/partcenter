import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description: "What this website collects and how inquiries are reviewed.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="What this website does with your information."
        lede="How this website handles the information you choose to send."
        crumbs={[{ label: "Privacy" }]}
      />
      <article className="legal mx-auto max-w-3xl px-6 py-16">
        <h2>Who this notice is about</h2>
        <p>
          {site.name} is a recruitment and consulting firm at 3601 Wilson Boulevard, Arlington, VA 22201.
        </p>
        <h2>Information you send</h2>
        <p>The membership, business, and contact forms ask for details you choose to provide, such as your name, email, phone, location, company, professional background, and the message itself. Do not send a client’s confidential files, account numbers, or government identifiers through these forms.</p>
        <h2>How an inquiry is handled</h2>
        <p>A valid submission is saved with a reference number and the time it was received, so the firm can review a request to join, a request for services, or a question.</p>
        <h2>Why it is kept</h2>
        <p>Inquiries are kept so a person at the firm can review a request to join, a request for services, or a question. Membership applications are also kept to check that the qualifications described match what the person is willing to stand behind. Submitting a form does not create a member account.</p>
        <h2>What the site does not do</h2>
        <p>The pages do not run advertising trackers, do not sell personal information, and do not ask you to create a password. Server logs of the host that runs the site may still record an IP address as part of ordinary hosting. That logging is separate from the inquiry file.</p>
        <h2>Map</h2>
        <p>The contact and about pages include a Google Map of the office at 3601 Wilson Boulevard, Arlington, VA 22201. Loading that map is handled by Google under Google’s own policy.</p>
        <h2>How long it is kept</h2>
        <p>Inquiries are kept so they can be reviewed, and removed when they are no longer needed. To ask for a copy to be removed, use the contact form with the topic Privacy and include the reference number if you have it.</p>
        <h2>Other people’s information</h2>
        <p>Do not send us someone else’s personal information unless you are allowed to.</p>
        <h2>Children</h2>
        <p>The site is for adults considering professional work. It is not directed to children, and membership is not offered to minors.</p>
      </article>
    </>
  );
}
