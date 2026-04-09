export const metadata = {
  title: 'Support | Baila',
  description: 'Get help with the Baila app, account access, privacy requests, and bug reports.',
};

const supportTopics = [
  {
    title: 'General Support',
    description:
      'Questions about using the Baila app, getting started, or troubleshooting a feature.',
  },
  {
    title: 'Account Help',
    description:
      'Problems signing in, updating your profile, or accessing your dance journal and social activity.',
  },
  {
    title: 'Bug Reports',
    description:
      'Unexpected errors, crashes, syncing problems, or anything in the app that is not working as intended.',
  },
  {
    title: 'Privacy Requests',
    description:
      'Requests involving your account data, privacy questions, or account deletion assistance.',
  },
];

export default function SupportPage() {
  return (
    <div className="min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl space-y-8">
        <section className="rounded-3xl bg-purple-300 p-8 shadow-md">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-900">
            Baila App Support
          </p>
          <h1 className="mt-3 text-4xl font-bold text-black">Need help with Baila?</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-black">
            Contact our support team for help with the app, your account, privacy requests,
            or to report a bug. Include your device model, iOS version, and a short
            description of the issue so we can respond faster.
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <a
              href="mailto:contact@bailaapp.com?subject=Baila%20Support%20Request"
              className="inline-flex items-center justify-center rounded-2xl bg-purple-700 px-6 py-3 font-semibold text-white transition hover:bg-purple-800"
            >
              Email Support
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl border border-purple-700 px-6 py-3 font-semibold text-purple-900 transition hover:bg-white/60"
            >
              Open Contact Page
            </a>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          {supportTopics.map((topic) => (
            <article key={topic.title} className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-black">{topic.title}</h2>
              <p className="mt-3 leading-relaxed text-gray-700">{topic.description}</p>
            </article>
          ))}
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-black">Support Details</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-black">Email</h3>
              <p className="mt-2 text-gray-700">
                <a
                  href="mailto:contact@bailaapp.com"
                  className="font-medium text-purple-700 hover:underline"
                >
                  contact@bailaapp.com
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black">Response Time</h3>
              <p className="mt-2 text-gray-700">
                We typically respond within 24 to 48 hours on business days.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black">Privacy and Legal</h3>
              <p className="mt-2 text-gray-700">
                Review our <a href="/privacy" className="text-purple-700 hover:underline">Privacy Policy</a>{' '}
                and <a href="/terms" className="text-purple-700 hover:underline">Terms & Conditions</a>{' '}
                for more information about data handling and platform use.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black">Best Way to Get Help</h3>
              <p className="mt-2 text-gray-700">
                When reporting an issue, include screenshots, the steps that caused it, and
                the email address tied to your account if relevant.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
