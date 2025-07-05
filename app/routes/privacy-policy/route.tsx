export default function Page() {
  return (
    <main className="px-6 py-10">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-7">Privacy Policy</h1>
        <p className="mb-4">
          <strong>Effective Date:</strong> July 4, 2025
        </p>
        <p className="mb-6 leading-loose">
          This privacy policy explains how Eloho (“we”, “our”, or “us”)
          collects, uses, and protects your personal information when you visit{' '}
          <strong>eloho.pro</strong> and use our web development services for
          your business.
        </p>

        <div className="flex flex-col gap-12 py-8">
          <Section title="1. Information We Collect">
            <ul className="list-disc max-sm:pl-3 space-y-4">
              <li>Contact information (name, email address, business name)</li>
              <li>Website data if you request an audit or consultation</li>
              <li>Technical data such as IP address and device info</li>
            </ul>
          </Section>

          <Section title="2. How We Use Your Information">
            <ul className="list-disc max-sm:pl-3 space-y-4">
              <li>To respond to inquiries or consultations</li>
              <li>To improve our site and services</li>
              <li>To send helpful updates (with your consent)</li>
            </ul>
          </Section>

          <Section title="3. Data Sharing">
            <p>
              We do not sell your data. We may share limited info with trusted
              providers (e.g., email tools) to deliver services, and they comply
              with data laws.
            </p>
          </Section>

          <Section title="4. Data Security">
            <p>
              We follow standard practices to secure your data. If there’s ever
              a breach, we’ll notify you promptly as required by law.
            </p>
          </Section>

          <Section title="5. Your Rights">
            <ul className="list-disc max-sm:pl-3 space-y-4">
              <li>Access your personal data</li>
              <li>Request correction or deletion</li>
              <li>Unsubscribe from marketing at any time</li>
            </ul>
          </Section>

          <Section title="6. Cookies">
            <p>
              We use basic cookies for functionality and to understand how
              people use the site. You can change cookie settings in your
              browser.
            </p>
          </Section>

          <Section title="7. Children’s Privacy">
            <p>
              Our site isn’t meant for children under 16. We don’t knowingly
              collect their data.
            </p>
          </Section>

          <Section title="8. Contact">
            <p>Questions or concerns? Reach out below:</p>
            <address className="mt-2 not-italic">
              Eloho
              <br />
              Abuja, Nigeria
              <br />
              <a
                href="mailto:kennyduske@gmail.com"
                className="text-blue-600 underline"
              >
                kennyduske@gmail.com
              </a>
            </address>
          </Section>

          <Section title="9. Updates">
            <p>
              We may update this policy. The latest version will always be
              posted here on this page.
            </p>
          </Section>
        </div>
      </section>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-5">{title}</h2>
      {children}
    </section>
  );
}
