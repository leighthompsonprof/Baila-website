'use client';

import { useState } from 'react';

export default function PrivacyPage() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Mobile toggle button */}
      <div className="lg:hidden p-4 bg-violet-600">
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="text-white text-sm underline"
        >
          {showSidebar ? 'Hide Table of Contents' : 'Show Table of Contents'}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`${
          showSidebar ? 'block' : 'hidden'
        } lg:block w-full lg:w-1/4 bg-violet-100 text-black p-6 overflow-y-auto text-sm sticky top-0 h-screen`}
      >
        <nav className="space-y-2">
          {[
            { href: "#introduction", label: "Introduction" },
            { href: "#personal-info", label: "Personal Information" },
            { href: "#data-controller", label: "Data Controller" },
            { href: "#collection", label: "Collection of Data" },
            { href: "#purposes", label: "Purposes of Data Processing" },
            { href: "#legal-bases", label: "Legal Bases of Data Processing" },
            { href: "#sharing", label: "Sharing of Your Information" },
            { href: "#privacy-rights", label: "Your Privacy Rights" },
            { href: "#retention", label: "Data Retention Period" },
            { href: "#security", label: "Security Measures" },
            { href: "#third-party", label: "Third-Party Links" },
            { href: "#children", label: "Children's Information" },
            { href: "#international", label: "International Transfer" },
            { href: "#cookies", label: "Cookies & Tracking" },
            { href: "#fair-principles", label: "Fair Information Principles" },
            { href: "#eu-uk", label: "EU/UK Residents" },
            { href: "#california", label: "California Residents" },
            { href: "#can-spam", label: "CAN-SPAM Act" },
            { href: "#changes", label: "Changes to Privacy Policy" },
            { href: "#contact", label: "Contact Information" },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="block hover:underline"
              onClick={() => setShowSidebar(false)}
            >
              {label}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="w-full lg:w-3/4 p-6 space-y-6 bg-white text-black">
        <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500">Last Updated: May 1, 2025</p>

        <section id="introduction">
          <h2 className="text-2xl font-semibold mt-6">Introduction</h2>
          <p className="mt-2">
            Baila ("We", "Us", "Our" and/or "Platform") takes User and/or Client ("You", "Your" and/or "Client") privacy seriously and provides this Privacy Policy to clarify best practices since they relate to information collected and/or processed through www.bailaapp.com (Our "Website" App, and/or "Site").
          </p>
          <p className="mt-2">
            This Privacy Policy (the "Policy" or "Privacy Policy") explains what information we collect from you, why we collect it, and how we process, use, and/or disclose the data we receive from you in connection with our services (the "Service"). By using the Service, you consent to the practices described in this Policy.
          </p>
          <p className="mt-2">
            The Privacy Policy is construed in accordance with international data protection laws and best practices together with any implementing regulations and sets out and executes key principles of data protection laws:
          </p>
          <ol className="list-decimal list-inside mt-2 space-y-1">
            <li>Lawfulness</li>
            <li>Fairness and transparency</li>
            <li>Purpose limitation</li>
            <li>Data minimization</li>
            <li>Accuracy</li>
            <li>Storage limitation</li>
            <li>Integrity and confidentiality (security)</li>
            <li>Accountability</li>
          </ol>
          <p className="mt-2">
          We only collect the personal data we need for our specified purposes as set out in the foregoing Privacy Policy. We periodically review the data we hold and delete anything we don't need.
We may update this Policy from time to time and we will post updates together with the most recent date of modification. You are encouraged to revisit this page on a regular basis to find out changes in our Privacy Policy. Your continued use of the Site will be deemed your acceptance of those modifications. Therefore, if you do not agree to changes in our Privacy Policy you shall stop visiting our Site.

          </p>
        </section>

        <section id="personal-info">
          <h2 className="text-2xl font-semibold mt-6">Personal Information</h2>
          <p className="mt-2">
            "Personally Identifiable Information" (the "Personal Information") refers to details collected on the Internet about an individual consumer, including an individual's first and last name, a physical street address, an email address, a telephone number, or any other information that permits a specific individual to be contacted physically or online.
          </p>
        </section>

        <section id="data-controller">
          <h2 className="text-2xl font-semibold mt-6">Data Controller</h2>
          <p className="mt-2">
            Baila is a "Controller" of all personal data collected and used to provide Site and/or App and for any other purposes set out in this Privacy Policy. This means that we are responsible for deciding how and why your data is used and for ensuring that your data is handled legally and safely.
          </p>
          <p className="mt-2">
            If you have any questions about this privacy policy, the data collection and processing practices of this platform, or your dealings with our Service, please contact us at: Leigh@leighthompson.com
          </p>
        </section>

        <section id="collection">
          <h2 className="text-2xl font-semibold mt-6">Collection of Data</h2>
          <p className="mt-2">
            We collect various types of personal data (that identifies a person, directly or indirectly) either directly from you (e.g., when you sign up for an account, or send us a message through our Platform). The types of data include, but are not limited to:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Email address</li>
            <li>First name</li>
            <li>Last name</li>
            <li>Password</li>
            <li>Usage Data</li>
            <li>Unique Device Identifiers</li>
            <li>Demographic Data</li>
          </ul>
        </section>

        <section id="purposes">
          <h2 className="text-2xl font-semibold mt-6">Purposes of Data Processing</h2>
          <p className="mt-2">
            When we collect any personal information, we will do our best to store and process it securely. We will comply with our obligations and safeguard your rights under the applicable laws at all times. We process your data for the following purposes:
          </p>
          <ol className="list-decimal list-inside mt-2 space-y-1">
            <li>Provision of our Service. To allow you access and use our Service.</li>
            <li>Enhance User Experience. To enhance our services and give you a better user experience when you use our Service.</li>
            <li>Diagnosis & Troubleshooting. To diagnose problems with our servers and to administer our Platform.</li>
            <li>Security. To prevent, detect and investigate illegal activities, breaches of any agreements entered into between you and us and threats to the security of the Service.</li>
            <li>Statistics. To produce aggregate statistical information about users and their activities on our Service that does not identify any person.</li>
            <li>Legal & Compliance. To investigate any claims or disputes concerning the use of our Service.</li>
            <li>Research & Development. To improve and enhance the safety and security of our Service, as well as to design and develop new features and products relating to the Service.</li>
          </ol>
        </section>

        <section id="legal-bases">
          <h2 className="text-2xl font-semibold mt-6">Legal Bases of Data Processing</h2>
          <p className="mt-2">
            Under applicable laws, we are required to have valid legal bases in order to lawfully collect and process any personal information. The following are the legal bases that we rely on when we collect, use and process your personal information:
          </p>
          <div className="mt-2 space-y-2">
            <p><strong>(a) Consent</strong><br />
            In order to collect and use certain information about you, we rely on your consent. This is where you have actively agreed to our collection and use of your personal information. For example, when you accept our use of cookies to collect and process certain information about your experience with us.</p>
            
            <p><strong>(b) Performance of a Contract</strong><br />
            As a user of our Service, you agree to our Terms of Service in order to access and use the Service. We will process your personal information on the legal basis that it is necessary for us to provide you with our Service.</p>
            
            <p><strong>(c) Legal Compliance</strong><br />
            We may have to process and share your personal data in order to comply with our legal obligations or to protect our rights or the rights of others. For example, we may be required to comply with a subpoena, court order, or a similar legal procedure.</p>
            
            <p><strong>(d) Legitimate interests</strong><br />
            In some situations, we rely on our legitimate business interests in order to collect and process your personal data. Before using your data for our legitimate interests, we always carry out a balancing test to carefully consider the impact of the processing on your interests, rights and freedoms. We only process your personal data if we are satisfied there is no negative impact on you. Particularly, we rely on legitimate interests for the following activities:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>providing, maintaining, improving and developing our Service;</li>
              <li>analyzing the use of our Service;</li>
              <li>using aggregated (non-personally identifiable) statistical and analysis data to identify usage trends;</li>
              <li>dealing with user queries and complaints;</li>
              <li>personalizing your experience on our Service;</li>
              <li>identifying fraudulent behavior and ensuring our Service and systems are safe and secure.</li>
            </ul>
          </div>
        </section>

        <section id="sharing">
          <h2 className="text-2xl font-semibold mt-6">Sharing of Your Information</h2>
          <p className="mt-2">
            When we provide our Service we share personal information with other parties. When we share your personal information, we do our best to ensure that it is stored and handled as securely as it is with us. We may share your personal information with the following categories of recipients:
          </p>
          <div className="mt-2 space-y-2">
            <p><strong>Service Providers.</strong> We use third-party service providers to provide our services to you which may have access to your data in limited circumstances. We ensure that these service providers do not make use of your personal data for any secondary purposes other than our express written instructions. The following are the categories of such service providers:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Hosting Service Providers - to host our Service, database (or parts thereof) and media files;</li>
              <li>Payment Processors - to process payments;</li>
              <li>Web Analytics Providers - to analyze how you interact with us;</li>
              <li>Email Marketing Providers - to manage our marketing and promotional emails;</li>
              <li>Chat Service Providers - to allow you to interactively communicate with us;</li>
            </ul>
            
            <p><strong>Business Transfers.</strong> If we ever sell, transfer, or merge parts of our business or assets, your data may be transferred to a third party. Any new owner of our business may continue to use your data in the same way that we have used it, as specified in this privacy policy (i.e. to communicate with you).</p>
            
            <p><strong>Law Enforcement.</strong> In some limited circumstances, we may be legally required to share certain data, which may rarely include your personal data, if we are involved in legal proceedings or complying with legal obligations, a court order, or the instructions of a government authority.</p>
            
            <p><strong>Staff.</strong> We may share some personal information about you with our employees, or independent contractors. We ensure that they handle your personal data according to this privacy policy, applicable laws and our internal policies.</p>
          </div>
        </section>

        <section id="privacy-rights">
          <h2 className="text-2xl font-semibold mt-6">Your Privacy Rights</h2>
          <p className="mt-2">
            Under applicable data protection laws, you have the following rights regarding the personal data we hold about you:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>The right to be informed about our collection and use of your personal data. This Privacy Policy should tell you everything you need to know, but you can always contact us to find out more or to ask any questions you may have.</li>
            <li>The right to access the personal data we maintain about you.</li>
            <li>The right to have your personal data rectified if any of your personal data held by us is inaccurate or incomplete.</li>
            <li>The right to be forgotten, i.e. the right to ask us to delete or otherwise dispose of any of your personal data that we hold.</li>
            <li>The right to restrict (i.e. prevent) the processing of your personal data.</li>
            <li>The right to object to us for using your personal data for a particular purpose or purposes.</li>
            <li>The right to withdraw consent. This means that, if we are relying on your consent as the legal basis for using your personal data, you are free to withdraw that consent at any time.</li>
            <li>The right to data portability. This means that, if you have provided personal data to us directly, we are using it with your consent or for the performance of a contract, and that data is processed using automated means, you can ask us for a copy of that personal data to re-use with another service or business in many cases.</li>
            <li>Rights relating to automated decision-making and profiling. We do not use your personal data in this way.</li>
          </ul>
          <div className="mt-4">
            <h3 className="text-xl font-semibold">How to Exercise Your Rights</h3>
            <p className="mt-2">
              To exercise any of these rights, please contact us. We aim to respond within three (3) business days of receiving a clear request. Complex or multiple requests may take longer, but we will keep you updated.
            </p>
            <p className="mt-2">
              Note that conditions or limitations on these rights may apply depending on your legal jurisdiction.
            </p>
          </div>
        </section>

        <section id="retention">
          <h2 className="text-2xl font-semibold mt-6">Data Retention Period</h2>
          <p className="mt-2">
            We will keep your personal information only as long as is reasonably necessary for the purposes described in this privacy policy, or for a longer period as may be required by applicable laws. You can always request that we suspend or remove your personal data by writing to Leigh@leighthompson.com
          </p>
        </section>

        <section id="security">
          <h2 className="text-2xl font-semibold mt-6">Security Measures</h2>
          <p className="mt-2">
            We maintain physical, electronic and procedural safeguards in connection with the collection, storage and disclosure of personal information. We also apply access restrictions to your personal data by our employees. Furthermore, we ensure to educate and train our employees about the importance of privacy and data protection continuously.
          </p>
          <p className="mt-2">
            We use Secure Sockets Layer (SSL) encryption to protect the information you enter in the App or on the Website during its transmission to and from our Service.
          </p>
          <p className="mt-2">
            When storing personal information, we protect its security by encryption and pseudonymization of data.
          </p>
          <p className="mt-2">
            Although we take all these measures to maintain the safety and security of your personal information, you should be aware that no transmission over the Internet can ever be guaranteed to be secure. Therefore, we cannot fully guarantee the security of any personal information that you transfer over the Internet to us.
          </p>
        </section>

        <section id="third-party">
          <h2 className="text-2xl font-semibold mt-6">Third-Party Links</h2>
          <p className="mt-2">
            Our Service might include links to third-party websites to enhance user experience. These sites are not operated or controlled by us, and we assume no responsibility for their content, privacy policies, or practices. These third-party sites have their own policies and we urge users to review them before using their sites and services. Linking does not imply endorsement in any way and your use of these sites is at your own risk. We shall not be liable for damages arising from the use of third-party sites.
          </p>
        </section>

        <section id="children">
          <h2 className="text-2xl font-semibold mt-6">Children's Information</h2>
          <p className="mt-2">
            We recognize the importance of protecting the privacy and safety of children. Our Service is not designed for, targeted at, or intentionally marketed to children under the age of 18. We do not knowingly collect, use, or disclose personal data from children under 18 years of age.
          </p>
          <p className="mt-2">
            We explicitly prohibit individuals under the age of 18 from using our Service. If we learn that we have inadvertently collected personal data from a child under 18 without the required parental consent, we will take immediate steps to delete such information and terminate the child's account.
          </p>
          <p className="mt-2">
            If you are a parent or legal guardian and you believe that your child under the age of 18 has submitted personal information to us you can contact us at Leigh@leighthompson.com. We will promptly investigate the concern and, if necessary, remove the child's personal data from our records and deactivate any associated accounts.
          </p>
        </section>

        <section id="international">
          <h2 className="text-2xl font-semibold mt-6">International Transfer of Data</h2>
          <p className="mt-2">
            Your information, including personal data, may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction. By using our Website, App or our services you consent to any transfer, storage or processing of your personal information outside of your country.
          </p>
          <p className="mt-2">
            We rely on the fact that you have been properly informed in this privacy policy about us and our data processing activities, and by choosing to continue using our services you are deemed to have given us consent for the transfer of your personal information internationally. However, we will take all steps reasonably necessary to ensure that personal information is treated securely and in accordance with this Privacy Policy.
          </p>
        </section>

        <section id="cookies">
          <h2 className="text-2xl font-semibold mt-6">Cookies & Tracking</h2>
          <div className="mt-2 space-y-4">
            <div>
              <h3 className="text-xl font-semibold">(a) What are Cookies?</h3>
              <p className="mt-2">
                We use cookies and other tracking technologies (collectively, "Cookies") on our Service. Cookies are small text files that may be stored on your device (e.g., computer, mobile phone, or other device) when you visit a website or App. They are generally used to facilitate browsing on the website or App, track actions within the website, measure website performance, and remember your preferences and login details, among other purposes.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">(b) Why do we use Cookies?</h3>
              <p className="mt-2">
                These technologies allow us to deliver our Service to you and enhance your experience with us. We do not place any cookies on your device before obtaining your consent (except for the strictly necessary cookies which allow our Service to function).
              </p>
              <p className="mt-2">
                The category of cookies is presented to you when we ask your consent to install cookies on your device. You can always change your cookie preferences.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">(c) How to delete cookies?</h3>
              <p className="mt-2">
                It is you who decides whether we can set cookies on your device. You are also able to configure your browser to accept or reject cookies by default through your browser settings. You can refer to the official information provided by your browser software provider on how you can deactivate and delete cookies.
              </p>
              <p className="mt-2">
                In the event that you set your browser to reject all cookies or delete our cookies, that may lead to the unavailability to access to some or all of the Service provided by us and that your experience when you use our Service may be less satisfactory.
              </p>
            </div>
          </div>
        </section>

        <section id="fair-principles">
          <h2 className="text-2xl font-semibold mt-6">Fair Information Principles</h2>
          <p className="mt-2">
            This privacy policy is crafted to align with the fair information principles established by the applicable international laws. In this policy, we detail our adherence to these principles. Below is a summary of the measures we take to ensure compliance.
          </p>
          <div className="mt-2 space-y-2">
            <p><strong>Principle 1 - Accountability.</strong> We are committed to safeguarding your information. We oversee our compliance efforts and are available for contact on an ongoing basis using the details provided in the designated section of our Privacy Policy.</p>
            <p><strong>Principle 2 - Identifying purposes.</strong> We have identified the purposes of processing in the relevant section of this privacy policy.</p>
            <p><strong>Principle 3 - Consent.</strong> We make every effort to obtain consent before collecting personal information, although local laws may differ. You can contact us using the details provided in this Privacy Policy to request the deletion of your information.</p>
            <p><strong>Principle 4 - Limiting Collection.</strong> Personal data collected is limited to that which is necessary for the purposes identified in this privacy policy.</p>
            <p><strong>Principle 5 - Limiting Use, Disclosure, and Retention.</strong> We use your personal information only for the purposes for which it was collected. Details on the use, disclosure, and retention of your personal information are provided in the corresponding sections of this privacy policy.</p>
            <p><strong>Principle 6 - Accuracy.</strong> We keep any information accurate, complete and up-to-date. Where there are changes in the information we retain about you, you are encouraged to submit a request to make changes.</p>
            <p><strong>Principle 7 - Safeguards.</strong> We protect your personal information with appropriate safeguards, as outlined in the relevant section of this Privacy Policy, and ensure that our service providers implement suitable technical and organizational measures to protect your information from security breaches.</p>
            <p><strong>Principle 8 - Openness.</strong> We are open regarding our data collection and processing practices. You can find information about how we collect, use, process and disclose personal information in this privacy policy.</p>
            <p><strong>Principle 9 - Individual Access.</strong> You can submit a request to access your information we hold about you. You can use the contact details to get in touch with us.</p>
            <p><strong>Principle 10 - Challenging Compliance.</strong> You are welcome to direct any questions or inquiries concerning our compliance with this privacy policy to us.</p>
          </div>
        </section>

        <section id="eu-uk">
          <h2 className="text-2xl font-semibold mt-6">Supplementary Notice to EU/UK Residents</h2>
          <p className="mt-2">
            The General Data Protection Regulation of the EU and the UK (collectively the "GDPR") gives the residents of the EU/UK certain rights when their personal data is being collected and processed. We are committed to complying with the GDPR, as far as it applies to us, and we have embedded data protection by design and default into our Service.
          </p>
          <p className="mt-2">
            This privacy policy, in its entirety, conforms with the information disclosure obligations set out under the GDPR. Therefore, EU/UK residents should read the entire privacy policy to find out how we handle their personal information.
          </p>
          <div className="mt-2 space-y-2">
            <p><strong>(a) Data Subjects Rights</strong><br />
            As an EU or UK resident, you are entitled to the rights outlined in Chapter 3 of the GDPR, and we are committed to upholding them. These rights are also detailed in the relevant section of this Privacy Policy.</p>
            
            <p><strong>(b) International Transfer of Data</strong><br />
            If you are a resident of the EU/UK, you should be aware that when you access and use our Service your personal information will be transferred to countries located outside the EU/UK. We rely on several legal bases to lawfully transfer your personal data outside of your jurisdiction, including:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Adequacy decision of the EU Commission, and, as applicable, the UK Government.</li>
              <li>Standard Contractual Clauses (SCC) approved by the European Commission, or international data transfer agreements (IDTA) or international data transfer addendum adopted by the UK Government.</li>
            </ul>
            
            <p><strong>(c) Exercising Your Data Protection Rights</strong><br />
            You may exercise your rights of access, rectification, cancellation, erasure, and opposition by contacting us. Please note that we may ask you to verify your identity before responding to such requests, such as by asking you questions about your use of the Service. If you make a request, we will try our best to respond to you as soon as possible.</p>
          </div>
        </section>

        <section id="california">
          <h2 className="text-2xl font-semibold mt-6">Supplementary Notice to California Residents</h2>
          <p className="mt-2">
            If you are a consumer residing in California, the following section is relevant to you. It's important to be aware that the laws mentioned below may not always apply to us, as there are specific criteria that must be met for their application.
          </p>
          <div className="mt-2 space-y-2">
            <p><strong>(a) California Shine the Light Law</strong><br />
            California's Shine the Light Law, also known as the California Civil Code Section 1798.83 gives California residents the right to request information about how businesses share their personal information with third parties for direct marketing purposes.</p>
            <p>Residents of California may ask us to provide them with a list of the types of personal information that we have disclosed during the preceding year to third parties for their direct marketing purposes, and the identity of those third parties. If you are a California resident and would like such a list, please contact us at Leigh@leighthompson.com</p>
            <p>For all such requests, please indicate "CA Shine the Light" in the subject field and include your full name, email address, street address, city, state, and zip code in your request.</p>
            
            <p><strong>(b) California Consumer Privacy Act</strong><br />
            The California Consumer Privacy Act of 2018 ("CCPA") and California Privacy Rights Act of 2020 ("CPRA") provide certain rights to residents of California. This section applies if you are a natural person who is a resident of California ("California Consumer") and use our Service. This notice supplements the information in our privacy policy. Certain terms used below have the meanings given to them in the CCPA and CPRA.</p>
            <p>For more details on the categories of personal information, the purposes for which we collected such information and the sources from which we obtain your personal information contact us at Leigh@leighthompson.com</p>
            
            <p><strong>(c) Sale/Sharing of Your Data</strong><br />
            We do not sell your personal data. We will share the personal information collected from and about you over the past twelve (12) months as discussed in this privacy policy for various business purposes.</p>
            
            <p><strong>(d) Your Privacy Rights and Choices</strong><br />
            In addition to rights of access, correction and deletion, as described in the privacy policy, California Consumers may have certain additional rights in connection with the personal data we collect about you, many of which are subject to exceptions under applicable law:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>The right to access, disclosure and portability. You may have the right to request, twice during twelve months, the following information about the personal data we have collected about you:
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>the categories and specific pieces of personal information we have collected about you;</li>
                  <li>the categories of sources from which we collected the personal information;</li>
                  <li>the business or commercial purpose for which we collected or sold the personal information;</li>
                  <li>the categories of third parties with whom we shared the personal information;</li>
                  <li>the categories of personal information that we sold or disclosed for a business purpose, and the categories of third parties to whom we sold or disclosed that information for a business purpose; and</li>
                  <li>the specific pieces of personal information we obtained from you in a format that is easily understandable, and to the extent technically feasible, in a structured commonly used, machine-readable format.</li>
                </ul>
              </li>
              <li>The right to nondiscrimination. We will not discriminate against you, alter our pricing, or offer a different standard of goods and services based on your decision to exercise these rights.</li>
              <li>The right to opt-out of the sale or sharing of your personal information. You have the right to opt out of the sale or sharing of your personal information. California law broadly defines sale such that it may include allowing third parties to receive certain information, such as cookies IP address and/or browsing behavior, to deliver targeted advertising.</li>
              <li>The right to limit the use of sensitive personal information. You possess the right to demand that we restrict the use or sharing of your confidential personal data strictly to what is essential for executing the services or delivering the goods you have solicited. We do not collect or share your sensitive information.</li>
            </ul>
            
            <p><strong>(e) How to exercise your access, correction and deletion rights.</strong><br />
            California residents may exercise their California privacy rights, as far as applicable, by submitting a request via email at Leigh@leighthompson.com</p>
            <p>Once we have verified your identity (and your agent, as applicable), we will respond to your request as appropriate. If we are unable to complete your requests fully for any of the reasons, we will provide you additional information about the reasons that we could not comply with your request.</p>
            
            <p><strong>(f) Authorized Agents</strong><br />
            You have the option to appoint a representative (authorized agent) to submit requests on your behalf regarding your rights under the CPRA as outlined previously. We will undertake measures to confirm the identity of the individual attempting to exercise their rights as mentioned, and to verify that your representative is authorized to act on your behalf, either through a signed written authorization or a power of attorney provided to us.</p>
          </div>
        </section>

        <section id="can-spam">
          <h2 className="text-2xl font-semibold mt-6">CAN-SPAM Act</h2>
          <p className="mt-2">
            The CAN-SPAM Act is a law that sets the rules for commercial email, establishes requirements for commercial messages, gives recipients the right to have emails stopped from being sent to them, and spells out tough penalties for violations.
          </p>
          <p className="mt-2">
            We collect your email address in order to:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Send information, respond to inquiries, and/or other requests or questions.</li>
            <li>Process orders, send information and updates pertaining to orders.</li>
            <li>We may also send you additional information related to our product and/or service.</li>
            <li>Market to our mailing list or continue to send emails to our clients after the original transaction has occurred.</li>
          </ul>
          <p className="mt-2">
            To be in accordance with CAN-SPAM we agree to the following:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>NOT use false, or misleading subject lines or email addresses.</li>
            <li>Identify the message as an advertisement in some reasonable way.</li>
            <li>Monitor third-party email marketing services for compliance, if one is used.</li>
            <li>Honor opt-out/unsubscribe requests quickly.</li>
            <li>Allow users to unsubscribe by using the link at the bottom of each email.</li>
          </ul>
          <p className="mt-2">
            If at any time you would like to unsubscribe from receiving future emails, you can follow the instructions at the bottom of each email, and we will promptly remove you from all correspondence.
          </p>
        </section>

        <section id="changes">
          <h2 className="text-2xl font-semibold mt-6">Changes to Privacy Policy</h2>
          <p className="mt-2">
            This privacy policy may be amended by us from time to time. This may be done out of necessity (e.g., in order to reflect changes in the applicable laws), or if we change our business in a way that affects personal data protection.
          </p>
          <p className="mt-2">
            Any changes will immediately be posted on our website and you will be deemed to have accepted the terms of the updated privacy policy on your first use of our Service following the amendments. Therefore, we strongly recommend you to revisit this page and check our privacy policy regularly in order to keep up-to-date.
          </p>
        </section>

        <section id="contact">
          <h2 className="text-2xl font-semibold mt-6">Contact Information</h2>
          <p className="mt-2">
            Please submit any questions, concerns, or comments you have about this Privacy Policy or any request concerning your Personal Information to Leigh@leighthompson.com
          </p>
        </section>
      </main>
    </div>
  );
}
