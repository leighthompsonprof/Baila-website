'use client';

import { useState } from 'react';

export default function TermsPage() {
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
    { href: "#user-accounts", label: "User Accounts" },
    { href: "#license", label: "License to Use" },
    { href: "#obligations", label: "User Obligations" },
    { href: "#links", label: "Links to Other Sites" },
    { href: "#privacy", label: "Privacy" },
    { href: "#thirdparties", label: "Third-Parties" },
    { href: "#warranty", label: "Disclaimer of Warranties" },
    { href: "#ip", label: "Intellectual Property" },
    { href: "#liability", label: "Limitation of Liability" },
    { href: "#indemnity", label: "Indemnification" },
    { href: "#law", label: "Governing Law" },
    { href: "#misc", label: "Miscellaneous" },
  ].map(({ href, label }) => (
    <a
      key={href}
      href={href}
      className="block hover:underline"
      onClick={() => setShowSidebar(false)} // hide sidebar on link click
    >
      {label}
    </a>
  ))}
</nav>
      </aside>

      {/* Main content */}
      <main className="w-full lg:w-3/4 p-6 space-y-6 bg-white text-black">
        <h1 className="text-3xl font-bold mb-2">Terms & Conditions</h1>
        <p className="text-sm text-gray-500">Last Updated: May 1, 2025</p>

        <section id="introduction">
          <h2 className="text-2xl font-semibold mt-6">Introduction</h2>
          <p className="mt-2">
            These Terms of Service (“Terms” or “Agreement”) govern your access to and use of the Baila App and the platform available at www.bailaapp.com (“Service” or “platform”). By using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, you may not use the Service.
          </p>
          <p className="mt-2 text-sm">
            In this document, references to “you”, “your” and “yours” shall mean the user of the platform, whereas “we”, “our”, and “us” shall refer to Platform.
          </p>
          <p className="mt-2 text-sm">
          PLEASE READ THESE TERMS CAREFULLY BEFORE CREATING A USER ACCOUNT WITH US AND USING OUR SERVICE AS THEY BECOME BINDING ON YOU UPON CREATION OF A USER ACCOUNT OR USE OF OUR SERVICE. 
          IF YOU ARE ACCEPTING THESE TERMS ON BEHALF OF A COMPANY OR OTHER LEGAL ENTITY, YOU REPRESENT THAT YOU HAVE THE LEGAL AUTHORITY TO ACCEPT THESE TERMS ON THAT ENTITY’S BEHALF, IN WHICH CASE “YOU” (“YOUR”, “YOURS”) WILL MEAN THAT ENTITY. IF YOU DO NOT AGREE TO THESE TERMS OR IF YOU DO NOT HAVE THE AUTHORITY TO ENTER INTO THESE TERMS ON BEHALF OF A COMPANY, YOU MAY NOT ACCESS OR USE OUR SERVICE.
          </p>
        </section>

        <section id="user-accounts">
          <h2 className="text-2xl font-semibold mt-6">User Accounts</h2>
          <p className="mt-2">
          To use the Service (or certain parts thereof), you may be required to complete the registration process and create a user account. You may establish your user account by authenticating through a third-party (e.g., Google) or by using your email address. 
          When you create a user account on the Platform, you agree to maintain the security of your account and are fully responsible for all activities that occur under your account, as well as any other actions taken in connection with it.
          </p>
          <p className="mt-2 text-sm">
          It is your responsibility to provide and maintain accurate, current, and complete information, including your contact information. You may not use false or misleading information in connection to your account, or use any information which damages the reputation of others. Platform retains the right to change or remove any information that it considers inappropriate or unlawful, or otherwise likely to expose the Platform to claims of third parties. You agree that we may take steps to verify the accuracy of the information you have provided to us.
          It is also your responsibility to take any and all reasonable measures to maintain the confidentiality of your login credentials. You must immediately notify us of any unauthorized uses of your information, your account, or any other security breaches within 72 hours. We do not bear responsibility nor are liable for any acts or omissions by you, including any damages of any kind incurred as a result of such acts or omissions.
          </p>
        </section>

        <section id="license">
          <h2 className="text-2xl font-semibold mt-6">License to Use</h2>
          <p className="mt-2">
          Platform grants you a personal, limited, non-exclusive, non-commercial, and non-transferable license to access and use the Service only as expressly permitted under these Terms. Any violation by you of these Terms may give rise to immediate termination of your right to use our Service, as well as potential liability for copyright and other Intellectual Property Rights infringement depending on the circumstances. Any use of our Service other than as specifically authorized under these Terms, without our prior written permission is strictly prohibited and will terminate the license granted herein.          </p>
        </section>

        <section id="obligations">
          <h2 className="text-2xl font-semibold mt-6">User Obligations & Usage Policy</h2>
          <p className="mt-2">
            You acknowledge and expressly agree that you are responsible for your own conduct while using our Service, and for any consequences thereof. You agree to use our Service only for purposes that are legal, proper and in accordance with these Terms and any applicable laws or regulations.
          </p>
          <p className="mt-2">
            You acknowledge and expressly agree that you shall not, and shall not allow any third party to:
          </p>
          <ul className="list-decimal list-inside mt-2 text-sm space-y-1">
            <li>Send, upload, distribute or disseminate any unlawful, defamatory, harassing, abusive, and fraudulent content</li>
            <li>Distribute software viruses, worms, Trojan horses, corrupted files, or any other malware or any other items of a destructive or deceptive nature</li>
            <li>Upload, post, transmit or otherwise make available through the Service any content that infringes the Intellectual Proprietary Rights of others</li>
            <li>Use the Service to violate the legal rights of others</li>
            <li>Engage in, promote, or encourage any illegal activity, including but not limited to money laundering or the unlawful use of earned awards and prizes</li>
            <li>Interfere with other users' enjoyment of the Service</li>
            <li>Exploit the Service for any unauthorized commercial purpose</li>
            <li>Copy, alter, translate, modify, create derivative works from, reproduce, resell, reverse assemble, reverse engineer, reverse compile any portion of the Service</li>
            <li>Remove any copyright, trademark or other proprietary rights notices contained in or on the Service</li>
            <li>Reformat or “frame” or “mirror” any portion of the Service</li>
            <li>Use any robot, spider, site search/retrieval application, or other device to retrieve or index any portion of the Service or the content posted on thereof, or to collect information about the users for any unauthorized purpose</li>
            <li>Access or use the Service for the purpose of creating a product or service that is competitive with any of our products or services</li>
          </ul>
          <p className="mt-2">
            If you engage in any of the prohibited activities set forth herein, we may, at our sole and absolute discretion, without notice to you and without limiting any of our other rights or remedies at law or in equity, immediately suspend your use of the Service, including termination of your user account.
          </p>
          <p className="mt-2">
            By breaching these provisions you may be committing a criminal offense under the applicable laws. Any and all such breaches will be reported to the relevant law enforcement authorities, and we will cooperate fully with those authorities by disclosing your identity to them.
          </p>
        </section>

        <section id="links">
          <h2 className="text-2xl font-semibold mt-6">Links to Other Websites & Services</h2>
          <p className="mt-2">
          Our Service may contain links to third-party websites or services that are not owned or controlled by us. We have no control over, and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that we shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services. We strongly recommend that you read the terms and conditions and privacy policies, as well as cookie policies of any third-party websites or services that you visit.
          </p>
        </section>

        <section id="privacy">
          <h2 className="text-2xl font-semibold mt-6">Privacy</h2>
          <p className="mt-2">
          Your privacy is very important to us. Our Privacy Policy explains how we treat your personal information and protect your privacy when you are using the App. By using the Service, you agree that the Platform may use your information as set forth in the Privacy Policy. We designed our Privacy Policy to make important disclosures about how we collect and use your content and information. 
You are subject to our Privacy Policy which may be found by clicking the “Privacy Policy” link on the bottom footer of our Website and is incorporated herein by reference.
Reliance on Third-Parties </p>
        </section>

        <section id="thirdparties">
          <h2 className="text-2xl font-semibold mt-6">Reliance on Third-Parties</h2>
          <p className="mt-2">
          In order to deliver our Service to you we rely on certain third-party service providers. While we make reasonable efforts to ensure the proper integration and operation of these third-party services, we do not control them and cannot guarantee their constant availability or functionality. Any system failure, technical error or any other negative event on the part of these third-party service providers may affect the delivery of our Service to you. 
We shall not be liable or responsible for any negative events that hinder your enjoyment of our Service due to the fault or negligence of these service providers. The Platform disclaims all warranties and liability related to third-party services, and your use of such services is at your own risk.
          </p>
        </section>

        <section id="warranty">
          <h2 className="text-2xl font-semibold mt-6">Disclaimer of Warranties</h2>
          <p className="mt-2">
          THE SERVICE IS PROVIDED “AS IS” AND “AS AVAILABLE”, WITHOUT WARRANTIES OF ANY KIND. PLATFORM DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
          By using the platform, you acknowledge that you are utilizing the Service in its current form. As our platform continues to evolve, its features and functionality are subject to change. While we strive to provide a high-quality user experience, occasional bugs or errors may occur, which you agree to report to us promptly.
          </p>
        </section>

        <section id="ip">
          <h2 className="text-2xl font-semibold mt-6">Intellectual Property Rights</h2>
          <p className="mt-2">
          You expressly acknowledge and agree that any and all Intellectual Property Rights associated with our Service and its Content (including, but without limitation to all art, design, text, graphics, user interfaces, “look and feel”, photos, audio, video, compilation of the content, code and data, computer code and all other forms of information or data) are the sole property of the Platform and its affiliates or are licensed for our use, unless otherwise is expressly set forth in these Terms. 
The Content is protected by Intellectual Property Rights and other laws available in the United States and other countries. Elements of the Service are also protected by unfair competition, and other laws and may not be copied or imitated in whole or in part. 
All customized graphics, icons, and other items that appear on the Platform are trademarks, service marks or trade names (“Marks”) of the Platform, its affiliates or other entities that have granted us the right and license to use such Marks and may not be used or interfered with in any manner without our express written consent. 
Except as otherwise expressly authorized by these Terms, or without our prior written permission, you are not allowed to reproduce, copy, distribute, sell, rent, sub-licence, store, or in any other manner reuse the Content. Except as expressly provided herein, we do not grant to you any express or implied rights to our Intellectual Property Rights or that of any third party.
Users retain ownership of the content they generate or upload using the Service (“User Content”). By uploading or creating User Content, you grant the Platform a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and display such content for the purpose of providing and improving the Service. You are solely responsible for your use of the Service and any content you upload. The Platform is not responsible for and does not endorse any User Content.
          </p>
        </section>

        <section id="liability">
          <h2 className="text-2xl font-semibold mt-6">Limitation of Liability</h2>
          <p className="mt-2">
          TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL THE PLATFORM OR ANY OF ITS FOUNDERS, OFFICERS, DIRECTORS, REPRESENTATIVES, AGENTS, EMPLOYEES, CONSULTANTS, LAWYERS, AND OTHER PERSONNEL AUTHORIZED TO ACT ON ITS BEHALF BE LIABLE TO YOU UNDER CONTRACT, TORT, STRICT LIABILITY, NEGLIGENCE, OR ANY OTHER LEGAL OR EQUITABLE THEORY, FOR: (A) ANY LOST REVENUE, DATA LOSS, LOSS OF ANTICIPATED PROFITS, OR DIRECT, INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE, COMPENSATORY, OR CONSEQUENTIAL DAMAGES OF ANY KIND WHATSOEVER RESULTING FROM: (I) YOUR USE OF, OR CONDUCT IN CONNECTION WITH THE SERVICE; (II) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SERVICE; OR (III) ANY BUGS, VIRUSES, TROJAN HORSES, OR ANY OTHER HARMFUL AND DISRUPTIVE CODE THAT ARE FOUND IN THE SERVICE OR THAT MAY BE TRANSMITTED TO OR THROUGH THE SERVICE BY ANY THIRD PARTY, REGARDLESS OF THE SOURCE OF ORIGINATION.
PLATFORM’S TOTAL LIABILITY FOR ANY CLAIM RELATED TO THESE TERMS OR THE SERVICE SHALL BE LIMITED TO THE TOTAL PAYMENTS MADE TO US DURING THE THREE MONTHS PRECEDING THE INCIDENT THAT LED TO THE DAMAGES.
THESE LIMITATIONS APPLY REGARDLESS OF THE LEGAL THEORY, WHETHER BASED ON TORT, STRICT LIABILITY, BREACH OF CONTRACT, BREACH OF WARRANTY, OR ANY OTHER LEGAL THEORY.
          </p>
        </section>

        <section id="indemnity">
          <h2 className="text-2xl font-semibold mt-6">Indemnification</h2>
          <p className="mt-2">
          You agree to indemnify and hold us and any of our founders, officers, employees, and agents harmless, including costs and attorneys’ fees, from any claim or demand made by any third party due to or arising out of (i) your use of our Service, (ii) your violation of these Terms, or (iii) your violation of applicable laws or regulations. 
          We retain the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate with our defense of these claims. You agree not to settle any matter without our prior written consent. We will use reasonable efforts to notify you of any such claim, action or proceeding upon becoming aware of it.
          </p>
        </section>

        <section id="law">
          <h2 className="text-2xl font-semibold mt-6">Governing Law & Jurisdiction</h2>
          <p className="mt-2">
          These Terms, along with any incorporated rules and policies, and the relationship between you and us, whether contractual or otherwise, shall be governed by and construed in accordance with the laws of the State of Washington, United States of America, without regard to its conflict of law principles.
If any dispute occurs between the parties relating to the application, interpretation, implementation or validity of these Terms, the parties agree to seek to resolve the dispute or controversy through negotiations. Any party to the dispute may serve notice on the others of its desire to resolve a particular dispute by negotiations. If the dispute has not been resolved within thirty (30) days of the notice of desire to negotiate, any party may terminate the negotiations and proceed to arbitration as set out below.
If any dispute or controversy occurs between the parties relating to the interpretation or implementation of any of the provisions of this Agreement, the dispute will be resolved through online arbitration using Jamsadr.com, pursuant to its applicable arbitration rules. 
Any party may serve notice of its desire to refer a dispute to arbitration. The arbitration will be conducted by a single arbitrator and will be held using online video conferencing means. The decision arrived at by the arbitrator(s) shall be final and binding and no appeal shall lie therefrom. 
Judgment upon the award rendered by the arbitrator may be entered in any court having jurisdiction. The costs of the arbitrator shall be divided equally between the parties.
          </p>
        </section>

        <section id="misc">
          <h2 className="text-2xl font-semibold mt-6">Miscellaneous</h2>
          Termination. We may terminate your access to the platform at any time, for any reason, with or without notice. Upon termination, your right to use the platform and access your content will immediately cease. The Platform has no obligation to maintain or provide copies of your content after termination.
Severance. The provisions of these Terms are independent of one another. In case any provision of the Terms is found by a competent court or authority to be invalid, illegal or unenforceable, the validity, legality and enforceability of the remaining provisions shall not in any way be affected or impaired thereby and such provision shall be ineffective only to the extent of such invalidity, illegality or unenforceability. 
Changes. We may change these Terms from time to time, at our sole discretion. Any changes to the Terms will be effective immediately upon posting on our website or within our platform. You are advised to review our Terms regularly to stay informed about any changes. Your continued use of our platform after any modifications constitutes acceptance of the revised Terms.
Entire Agreement. These Terms, including any rules or policies incorporated by reference into them, are the whole agreement between you and us concerning the Service.
Security of Your Device. We exercise all reasonable skill and care to ensure that our Service is secure and free from viruses and other malware. Please note, it is your responsibility to protect your hardware, software, data, and other material from viruses, malware, and other Internet security risks.
Account Deletion. In order to delete your user account with us, you should contact us through the means provided in these Terms and request the deletion of your user account. 
Assignment. We may assign, transfer, novate or subcontract any or all of our rights and obligations under these Terms at any time.
Service Inquiries & Contacts
In order to contact us with regard to anything concerning these Terms, including any concerns or disputes, please use the following details:
Email address: leigh@leighthompson.com 

        </section>
      </main>
    </div>
  );
}
