import { Section } from 'components/common/container';
import { TextBanner } from 'components/text-banner';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Text from 'components/common/text';
import { rem } from 'polished';

import React from 'react';

const ContentWithSidebarWrapper = styled(motion.div)`
	display: grid;
	gird-template-columns: 1fr;
	grid-template-rows: auto;
	@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
		grid-template-columns: 35% 1fr;
		column-gap: ${rem(20)};
	}
`;
const Sidebar = styled(motion.div)`
	margin-bottom: ${({ theme }) => rem(theme.space[5])};
`;
const Content = styled(motion.div)`
	display: flex;
	flex-direction: column;

	${Text} {
		margin-bottom: 24px;
	}
`;

const ContentWithSidebar = ({ ...rest }) => {
	return (
		<Section {...rest}>
			<ContentWithSidebarWrapper>
				<Sidebar>
					<Text variant="termsTitle" maxWidth="80%">
						Last updated August 26, 2022
					</Text>
				</Sidebar>
				<Content>
					<Text>TERMS OF USE</Text>

					<Text>Last updated August 26, 2022</Text>

					<Text>TABLE OF CONTENTS</Text>

					<Text>
						<ol>
							<li>AGREEMENT TO TERMS </li>
							<li>INTELLECTUAL PROPERTY RIGHTS </li>
							<li>USER REPRESENTATIONS</li>
							<li>PROHIBITED ACTIVITIES </li>
							<li>USER GENERATED CONTRIBUTIONS </li>
							<li>CONTRIBUTION LICENSE </li>
							<li>MOBILE APPLICATION LICENSE </li>
							<li>SUBMISSIONS </li>
							<li>THIRD-PARTY WEBSITE AND CONTENT </li>
							<li>SITE MANAGEMENT </li>
							<li>PRIVACY POLICY </li>
							<li>TERM AND TERMINATION</li>
							<li>MODIFICATIONS AND INTERRUPTIONS </li>
							<li>GOVERNING LAW </li>
							<li>DISPUTE RESOLUTION</li>
							<li>CORRECTIONS </li>
							<li>DISCLAIMER </li>
							<li>LIMITATIONS OF LIABILITY </li>
							<li>INDEMNIFICATION </li>
							<li>USER DATA </li>
							<li>ELECTRONIC COMMUNICATIONS, TRANSACTIONS, ANDSIGNATURES </li>
							<li>CALIFORNIA USERS AND RESIDENTS </li>
							<li>MISCELLANEOUS </li>
							<li>CONTACT US</li>
						</ol>
					</Text>

					<Text> 1. AGREEMENT TO TERMS</Text>

					<Text>
						These Terms of Use constitute a legally binding agreement made between you,
						whether personally or on behalf of an entity (&ldquo;you&rdquo;) and Swoop
						Golf LLC (&quot;Company,&quot; &ldquo;we,&quot; &ldquo;us,&quot; or
						&ldquo;our&rdquo;), concerning your access to and use of the
						https://www.swoopgolf.com website as well as any other media form, media
						channel, mobile website or mobile application related, linked, or otherwise
						connected thereto (collectively, the &ldquo;Site&rdquo;). You agree that by
						accessing the Site, you have read, understood, and agreed to be bound by all
						of these Terms of Use. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE,
						THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE
						USE IMMEDIATELY.
					</Text>

					<Text>
						Supplemental terms and conditions or documents that may be posted on the Site
						from time to time are hereby expressly incorporated herein by reference. We
						reserve the right, in our sole discretion, to make changes or modifications to
						these Terms of Use at any time and for any reason. We will alert you about any
						changes by updating the &ldquo;Last updated&rdquo; date of these Terms of Use,
						and you waive any right to receive specific notice of each such change. Please
						ensure that you check the applicable Terms every time you use our Site so that
						you understand which Terms apply. You will be subject to, and will be deemed
						to have been made aware of and to have accepted, the changes in any revised
						Terms of Use by your continued use of the Site after the date such revised
						Terms of Use are posted.
					</Text>

					<Text>
						The information provided on the Site is not intended for distribution to or
						use by any person or entity in any jurisdiction or country where such
						distribution or use would be contrary to law or regulation or which would
						subject us to any registration requirement within such jurisdiction or
						country. Accordingly, those persons who choose to access the Site from other
						locations do so on their own initiative and are solely responsible for
						compliance with local laws, if and to the extent local laws are applicable.
					</Text>

					<Text>
						The Site is not tailored to comply with industry-specific regulations (Health
						Insurance Portability and Accountability Act (HIPAA), Federal Information
						Security Management Act (FISMA), etc.), so if your interactions would be
						subjected to such laws, you may not use this Site. You may not use the Site in
						a way that would violate the Gramm-Leach-Bliley Act (GLBA).
					</Text>

					<Text>
						All users who are minors in the jurisdiction in which they reside (generally
						under the age of 18) must have the permission of, and be directly supervised
						by, their parent or guardian to use the Site. If you are a minor, you must
						have your parent or guardian read and agree to these Terms of Use prior to you
						using the Site.
					</Text>

					<Text> 2. INTELLECTUAL PROPERTY RIGHTS</Text>

					<Text>
						Unless otherwise indicated, the Site is our proprietary property and all
						source code, databases, functionality, software, website designs, audio,
						video, text, photographs, and graphics on the Site (collectively, the
						&ldquo;Content&rdquo;) and the trademarks, service marks, and logos contained
						therein (the &ldquo;Marks&rdquo;) are owned or controlled by us or licensed to
						us, and are protected by copyright and trademark laws and various other
						intellectual property rights and unfair competition laws of the United States,
						international copyright laws, and international conventions. The Content and
						the Marks are provided on the Site &ldquo;AS IS&rdquo; for your information
						and personal use only. Except as expressly provided in these Terms of Use, no
						part of the Site and no Content or Marks may be copied, reproduced,
						aggregated, republished, uploaded, posted, publicly displayed, encoded,
						translated, transmitted, distributed, sold, licensed, or otherwise exploited
						for any commercial purpose whatsoever, without our express prior written
						permission.
					</Text>

					<Text>
						Provided that you are eligible to use the Site, you are granted a limited
						license to access and use the Site and to download or print a copy of any
						portion of the Content to which you have properly gained access solely for
						your personal, non-commercial use. We reserve all rights not expressly granted
						to you in and to the Site, the Content and the Marks.
					</Text>

					<Text> 3. USER REPRESENTATIONS</Text>

					<Text>
						By using the Site, you represent and warrant that: (1) you have the legal
						capacity and you agree to comply with these Terms of Use; (2) you are not a
						minor in the jurisdiction in which you reside, or if a minor, you have
						received parental permission to use the Site; (3) you will not access the Site
						through automated or non-human means, whether through a bot, script, or
						otherwise; (4) you will not use the Site for any illegal or unauthorized
						purpose; and (5) your use of the Site will not violate any applicable law or
						regulation.
					</Text>

					<Text>
						If you provide any information that is untrue, inaccurate, not current, or
						incomplete, we have the right to suspend or terminate your account and refuse
						any and all current or future use of the Site (or any portion thereof).
					</Text>

					<Text> 4. PROHIBITED ACTIVITIES</Text>

					<Text>
						You may not access or use the Site for any purpose other than that for which
						we make the Site available. The Site may not be used in connection with any
						commercial endeavors except those that are specifically endorsed or approved
						by us.
					</Text>

					<Text>
						As a user of the Site, you agree not to: Systematically retrieve data or other
						content from the Site to create or compile, directly or indirectly, a
						collection, compilation, database, or directory without written permission
						from us. Trick, defraud, or mislead us and other users, especially in any
						attempt to learn sensitive account information such as user passwords.
						Circumvent, disable, or otherwise interfere with security-related features of
						the Site, including features that prevent or restrict the use or copying of
						any Content or enforce limitations on the use of the Site and/or the Content
						contained therein. Disparage, tarnish, or otherwise harm, in our opinion, us
						and/or the Site. Use any information obtained from the Site in order to
						harass, abuse, or harm another person. Make improper use of our support
						services or submit false reports of abuse or misconduct. Use the Site in a
						manner inconsistent with any applicable laws or regulations. Engage in
						unauthorized framing of or linking to the Site. Upload or transmit (or attempt
						to upload or to transmit) viruses, Trojan horses, or other material, including
						excessive use of capital letters and spamming (continuous posting of
						repetitive text), that interferes with any party&rsquo;s uninterrupted use and
						enjoyment of the Site or modifies, impairs, disrupts, alters, or interferes
						with the use, features, functions, operation, or maintenance of the Site.
						Engage in any automated use of the system, such as using scripts to send
						comments or messages, or using any data mining, robots, or similar data
						gathering and extraction tools. Delete the copyright or other proprietary
						rights notice from any Content. Attempt to impersonate another user or person
						or use the username of another user. Upload or transmit (or attempt to upload
						or to transmit) any material that acts as a passive or active information
						collection or transmission mechanism, including without limitation, clear
						graphics interchange formats (&ldquo;gifs&rdquo;), 1&times;1 pixels, web bugs,
						cookies, or other similar devices (sometimes referred to as
						&ldquo;spyware&rdquo; or &ldquo;passive collection mechanisms&rdquo; or
						&ldquo;pcms&rdquo;). Interfere with, disrupt, or create an undue burden on the
						Site or the networks or services connected to the Site. Harass, annoy,
						intimidate, or threaten any of our employees or agents engaged in providing
						any portion of the Site to you. Attempt to bypass any measures of the Site
						designed to prevent or restrict access to the Site, or any portion of the
						Site. Copy or adapt the Site&rsquo;s software, including but not limited to
						Flash, PHP, HTML, JavaScript, or other code. Except as permitted by applicable
						law, decipher, decompile, disassemble, or reverse engineer any of the software
						comprising or in any way making up a part of the Site. Except as may be the
						result of standard search engine or Internet browser usage, use, launch,
						develop, or distribute any automated system, including without limitation, any
						spider, robot, cheat utility, scraper, or offline reader that accesses the
						Site, or using or launching any unauthorized script or other software. Use a
						buying agent or purchasing agent to make purchases on the Site. Make any
						unauthorized use of the Site, including collecting usernames and/or email
						addresses of users by electronic or other means for the purpose of sending
						unsolicited email, or creating user accounts by automated means or under false
						pretenses. Use the Site as part of any effort to compete with us or otherwise
						use the Site and/or the Content for any revenue-generating endeavor or
						commercial enterprise. Use the Site to advertise or offer to sell goods and
						services.
					</Text>

					<Text> 5. USER GENERATED CONTRIBUTIONS</Text>

					<Text>
						The Site does not offer users to submit or post content. We may provide you
						with the opportunity to create, submit, post, display, transmit, perform,
						publish, distribute, or broadcast content and materials to us or on the Site,
						including but not limited to text, writings, video, audio, photographs,
						graphics, comments, suggestions, or personal information or other material
						(collectively, &quot;Contributions&quot;). Contributions may be viewable by
						other users of the Site and through third-party websites. As such, any
						Contributions you transmit may be treated in accordance with the Site Privacy
						Policy. When you create or make available any Contributions, you thereby
						represent and warrant that: The creation, distribution, transmission, public
						display, or performance, and the accessing, downloading, or copying of your
						Contributions do not and will not infringe the proprietary rights, including
						but not limited to the copyright, patent, trademark, trade secret, or moral
						rights of any third party. You are the creator and owner of or have the
						necessary licenses, rights, consents, releases, and permissions to use and to
						authorize us, the Site, and other users of the Site to use your Contributions
						in any manner contemplated by the Site and these Terms of Use. You have the
						written consent, release, and/or permission of each and every identifiable
						individual person in your Contributions to use the name or likeness of each
						and every such identifiable individual person to enable inclusion and use of
						your Contributions in any manner contemplated by the Site and these Terms of
						Use. Your Contributions are not false, inaccurate, or misleading. Your
						Contributions are not unsolicited or unauthorized advertising, promotional
						materials, pyramid schemes, chain letters, spam, mass mailings, or other forms
						of solicitation. Your Contributions are not obscene, lewd, lascivious, filthy,
						violent, harassing, libelous, slanderous, or otherwise objectionable (as
						determined by us). Your Contributions do not ridicule, mock, disparage,
						intimidate, or abuse anyone. Your Contributions are not used to harass or
						threaten (in the legal sense of those terms) any other person and to promote
						violence against a specific person or class of people. Your Contributions do
						not violate any applicable law, regulation, or rule. Your Contributions do not
						violate the privacy or publicity rights of any third party. Your Contributions
						do not violate any applicable law concerning child pornography, or otherwise
						intended to protect the health or well-being of minors. Your Contributions do
						not include any offensive comments that are connected to race, national
						origin, gender, sexual preference, or physical handicap. Your Contributions do
						not otherwise violate, or link to material that violates, any provision of
						these Terms of Use, or any applicable law or regulation. Any use of the Site
						in violation of the foregoing violates these Terms of Use and may result in,
						among other things, termination or suspension of your rights to use the Site.
					</Text>

					<Text> 6. CONTRIBUTION LICENSE</Text>

					<Text>
						You agree that we may access, store, process, and use any information and
						personal data that you provide following the terms of the Privacy Policy and
						your choices (including settings).
					</Text>

					<Text>
						By submitting suggestions or other feedback regarding the Site, you agree that
						we can use and share such feedback for any purpose without compensation to
						you.
					</Text>

					<Text>
						We do not assert any ownership over your Contributions. You retain full
						ownership of all of your Contributions and any intellectual property rights or
						other proprietary rights associated with your Contributions. We are not liable
						for any statements or representations in your Contributions provided by you in
						any area on the Site. You are solely responsible for your Contributions to the
						Site and you expressly agree to exonerate us from any and all responsibility
						and to refrain from any legal action against us regarding your Contributions.
					</Text>

					<Text> 7. MOBILE APPLICATION LICENSE</Text>

					<Text>Use License</Text>

					<Text>
						If you access the Site via a mobile application, then we grant you a
						revocable, non-exclusive, non-transferable, limited right to install and use
						the mobile application on wireless electronic devices owned or controlled by
						you, and to access and use the mobile application on such devices strictly in
						accordance with the terms and conditions of this mobile application license
						contained in these Terms of Use. You shall not: (1) except as permitted by
						applicable law, decompile, reverse engineer, disassemble, attempt to derive
						the source code of, or decrypt the application; (2) make any modification,
						adaptation, improvement, enhancement, translation, or derivative work from the
						application; (3) violate any applicable laws, rules, or regulations in
						connection with your access or use of the application; (4) remove, alter, or
						obscure any proprietary notice (including any notice of copyright or
						trademark) posted by us or the licensors of the application; (5) use the
						application for any revenue generating endeavor, commercial enterprise, or
						other purpose for which it is not designed or intended; (6) make the
						application available over a network or other environment permitting access or
						use by multiple devices or users at the same time; (7) use the application for
						creating a product, service, or software that is, directly or indirectly,
						competitive with or in any way a substitute for the application; (8) use the
						application to send automated queries to any website or to send any
						unsolicited commercial e-mail; or (9) use any proprietary information or any
						of our interfaces or our other intellectual property in the design,
						development, manufacture, licensing, or distribution of any applications,
						accessories, or devices for use with the application.
					</Text>

					<Text>Apple and Android Devices</Text>

					<Text>
						The following terms apply when you use a mobile application obtained from
						either the Apple Store or Google Play (each an &ldquo;App Distributor&rdquo;)
						to access the Site: (1) the license granted to you for our mobile application
						is limited to a non-transferable license to use the application on a device
						that utilizes the Apple iOS or Android operating systems, as applicable, and
						in accordance with the usage rules set forth in the applicable App
						Distributor&rsquo;s terms of service; (2) we are responsible for providing any
						maintenance and support services with respect to the mobile application as
						specified in the terms and conditions of this mobile application license
						contained in these Terms of Use or as otherwise required under applicable law,
						and you acknowledge that each App Distributor has no obligation whatsoever to
						furnish any maintenance and support services with respect to the mobile
						application; (3) in the event of any failure of the mobile application to
						conform to any applicable warranty, you may notify the applicable App
						Distributor, and the App Distributor, in accordance with its terms and
						policies, may refund the purchase price, if any, paid for the mobile
						application, and to the maximum extent permitted by applicable law, the App
						Distributor will have no other warranty obligation whatsoever with respect to
						the mobile application; (4) you represent and warrant that (i) you are not
						located in a country that is subject to a U.S. government embargo, or that has
						been designated by the U.S. government as a &ldquo;terrorist supporting&rdquo;
						country and (ii) you are not listed on any U.S. government list of prohibited
						or restricted parties; (5) you must comply with applicable third-party terms
						of agreement when using the mobile application, e.g., if you have a VoIP
						application, then you must not be in violation of their wireless data service
						agreement when using the mobile application; and (6) you acknowledge and agree
						that the App Distributors are third-party beneficiaries of the terms and
						conditions in this mobile application license contained in these Terms of Use,
						and that each App Distributor will have the right (and will be deemed to have
						accepted the right) to enforce the terms and conditions in this mobile
						application license contained in these Terms of Use against you as a
						third-party beneficiary thereof.
					</Text>

					<Text> 8. SUBMISSIONS</Text>

					<Text>
						You acknowledge and agree that any questions, comments, suggestions, ideas,
						feedback, or other information regarding the Site (&quot;Submissions&quot;)
						provided by you to us are non-confidential and shall become our sole property.
						We shall own exclusive rights, including all intellectual property rights, and
						shall be entitled to the unrestricted use and dissemination of these
						Submissions for any lawful purpose, commercial or otherwise, without
						acknowledgment or compensation to you. You hereby waive all moral rights to
						any such Submissions, and you hereby warrant that any such Submissions are
						original with you or that you have the right to submit such Submissions. You
						agree there shall be no recourse against us for any alleged or actual
						infringement or misappropriation of any proprietary right in your Submissions.
					</Text>

					<Text> 9. THIRD-PARTY WEBSITE AND CONTENT</Text>

					<Text>
						The Site may contain (or you may be sent via the Site) links to other websites
						(&quot;Third-Party Websites&quot;) as well as articles, photographs, text,
						graphics, pictures, designs, music, sound, video, information, applications,
						software, and other content or items belonging to or originating from third
						parties (&quot;Third-Party Content&quot;). Such Third-Party Websites and
						Third-Party Content are not investigated, monitored, or checked for accuracy,
						appropriateness, or completeness by us, and we are not responsible for any
						Third-Party Websites accessed through the Site or any Third-Party Content
						posted on, available through, or installed from the Site, including the
						content, accuracy, offensiveness, opinions, reliability, privacy practices, or
						other policies of or contained in the Third-Party Websites or the Third-Party
						Content. Inclusion of, linking to, or permitting the use or installation of
						any Third-Party Websites or any Third-Party Content does not imply approval or
						endorsement thereof by us. If you decide to leave the Site and access the
						Third-Party Websites or to use or install any Third-Party Content, you do so
						at your own risk, and you should be aware these Terms of Use no longer govern.
						You should review the applicable terms and policies, including privacy and
						data gathering practices, of any website to which you navigate from the Site
						or relating to any applications you use or install from the Site. Any
						purchases you make through Third-Party Websites will be through other websites
						and from other companies, and we take no responsibility whatsoever in relation
						to such purchases which are exclusively between you and the applicable third
						party. You agree and acknowledge that we do not endorse the products or
						services offered on Third-Party Websites and you shall hold us harmless from
						any harm caused by your purchase of such products or services. Additionally,
						you shall hold us harmless from any losses sustained by you or harm caused to
						you relating to or resulting in any way from any Third-Party Content or any
						contact with Third-Party Websites.
					</Text>

					<Text> 10. SITE MANAGEMENT</Text>

					<Text>
						We reserve the right, but not the obligation, to: (1) monitor the Site for
						violations of these Terms of Use; (2) take appropriate legal action against
						anyone who, in our sole discretion, violates the law or these Terms of Use,
						including without limitation, reporting such user to law enforcement
						authorities; (3) in our sole discretion and without limitation, refuse,
						restrict access to, limit the availability of, or disable (to the extent
						technologically feasible) any of your Contributions or any portion thereof;
						(4) in our sole discretion and without limitation, notice, or liability, to
						remove from the Site or otherwise disable all files and content that are
						excessive in size or are in any way burdensome to our systems; and (5)
						otherwise manage the Site in a manner designed to protect our rights and
						property and to facilitate the proper functioning of the Site.
					</Text>

					<Text> 11. PRIVACY POLICY</Text>

					<Text>
						We care about data privacy and security. Please review our Privacy Policy:
						https://swoopgolf.com/privacy. By using the Site, you agree to be bound by our
						Privacy Policy, which is incorporated into these Terms of Use. Please be
						advised the Site is hosted in the United States. If you access the Site from
						any other region of the world with laws or other requirements governing
						personal data collection, use, or disclosure that differ from applicable laws
						in the United States, then through your continued use of the Site, you are
						transferring your data to the United States, and you agree to have your data
						transferred to and processed in the United States.
					</Text>

					<Text> 12. TERM AND TERMINATION</Text>

					<Text>
						These Terms of Use shall remain in full force and effect while you use the
						Site. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS OF USE, WE RESERVE
						THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY
						ACCESS TO AND USE OF THE SITE (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO
						ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR
						BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE TERMS
						OF USE OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR
						PARTICIPATION IN THE SITE OR DELETE ANY CONTENT OR INFORMATION THAT YOU POSTED
						AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.
					</Text>

					<Text>
						If we terminate or suspend your account for any reason, you are prohibited
						from registering and creating a new account under your name, a fake or
						borrowed name, or the name of any third party, even if you may be acting on
						behalf of the third party. In addition to terminating or suspending your
						account, we reserve the right to take appropriate legal action, including
						without limitation pursuing civil, criminal, and injunctive redress.
					</Text>

					<Text> 13. MODIFICATIONS AND INTERRUPTIONS</Text>

					<Text>
						We reserve the right to change, modify, or remove the contents of the Site at
						any time or for any reason at our sole discretion without notice. However, we
						have no obligation to update any information on our Site. We also reserve the
						right to modify or discontinue all or part of the Site without notice at any
						time. We will not be liable to you or any third party for any modification,
						price change, suspension, or discontinuance of the Site.
					</Text>

					<Text>
						We cannot guarantee the Site will be available at all times. We may experience
						hardware, software, or other problems or need to perform maintenance related
						to the Site, resulting in interruptions, delays, or errors. We reserve the
						right to change, revise, update, suspend, discontinue, or otherwise modify the
						Site at any time or for any reason without notice to you. You agree that we
						have no liability whatsoever for any loss, damage, or inconvenience caused by
						your inability to access or use the Site during any downtime or discontinuance
						of the Site. Nothing in these Terms of Use will be construed to obligate us to
						maintain and support the Site or to supply any corrections, updates, or
						releases in connection therewith.
					</Text>

					<Text> 14. GOVERNING LAW</Text>

					<Text>
						These Terms of Use and your use of the Site are governed by and construed in
						accordance with the laws of the State of Colorado applicable to agreements
						made and to be entirely performed within the State of Colorado, without regard
						to its conflict of law principles.
					</Text>

					<Text> 15. DISPUTE RESOLUTION</Text>

					<Text>Informal Negotiations</Text>

					<Text>
						To expedite resolution and control the cost of any dispute, controversy, or
						claim related to these Terms of Use (each &quot;Dispute&quot; and
						collectively, the &ldquo;Disputes&rdquo;) brought by either you or us
						(individually, a &ldquo;Party&rdquo; and collectively, the
						&ldquo;Parties&rdquo;), the Parties agree to first attempt to negotiate any
						Dispute (except those Disputes expressly provided below) informally for at
						least thirty (30) days before initiating arbitration. Such informal
						negotiations commence upon written notice from one Party to the other Party.
					</Text>

					<Text>Binding Arbitration</Text>

					<Text>
						If the Parties are unable to resolve a Dispute through informal negotiations,
						the Dispute (except those Disputes expressly excluded below) will be finally
						and exclusively resolved through binding arbitration. YOU UNDERSTAND THAT
						WITHOUT THIS PROVISION, YOU WOULD HAVE THE RIGHT TO SUE IN COURT AND HAVE A
						JURY TRIAL. The arbitration shall be commenced and conducted under the
						Commercial Arbitration Rules of the American Arbitration Association
						(&quot;AAA&quot;) and, where appropriate, the AAA&rsquo;s Supplementary
						Procedures for Consumer Related Disputes (&quot;AAA Consumer Rules&quot;),
						both of which are available at the AAA website: www.adr.org. Your arbitration
						fees and your share of arbitrator compensation shall be governed by the AAA
						Consumer Rules and, where appropriate, limited by the AAA Consumer Rules. If
						such costs are determined by the arbitrator to be excessive, we will pay all
						arbitration fees and expenses. The arbitration may be conducted in person,
						through the submission of documents, by phone, or online. The arbitrator will
						make a decision in writing, but need not provide a statement of reasons unless
						requested by either Party. The arbitrator must follow applicable law, and any
						award may be challenged if the arbitrator fails to do so. Except where
						otherwise required by the applicable AAA rules or applicable law, the
						arbitration will take place in Douglas County, Colorado. Except as otherwise
						provided herein, the Parties may litigate in court to compel arbitration, stay
						proceedings pending arbitration, or to confirm, modify, vacate, or enter
						judgment on the award entered by the arbitrator.
					</Text>

					<Text>
						If for any reason, a Dispute proceeds in court rather than arbitration, the
						Dispute shall be commenced or prosecuted in the state and federal courts
						located in Douglas County, Colorado, and the Parties hereby consent to, and
						waive all defenses of lack of personal jurisdiction, and forum non conveniens
						with respect to venue and jurisdiction in such state and federal courts.
						Application of the United Nations Convention on Contracts for the
						International Sale of Goods and the Uniform Computer Information Transaction
						Act (UCITA) is excluded from these Terms of Use.
					</Text>

					<Text>
						In no event shall any Dispute brought by either Party related in any way to
						the Site be commenced more than one (1) years after the cause of action arose.
						If this provision is found to be illegal or unenforceable, then neither Party
						will elect to arbitrate any Dispute falling within that portion of this
						provision found to be illegal or unenforceable, and such Dispute shall be
						decided by a court of competent jurisdiction within the courts listed for
						jurisdiction above, and the Parties agree to submit to the personal
						jurisdiction of that court.
					</Text>

					<Text>Restrictions</Text>

					<Text>
						The Parties agree that any arbitration shall be limited to the Dispute between
						the Parties individually. To the full extent permitted by law, (a) no
						arbitration shall be joined with any other proceeding; (b) there is no right
						or authority for any Dispute to be arbitrated on a class-action basis or to
						utilize class action procedures; and (c) there is no right or authority for
						any Dispute to be brought in a purported representative capacity on behalf of
						the general public or any other persons.
					</Text>

					<Text>Exceptions to Informal Negotiations and Arbitration</Text>

					<Text>
						The Parties agree that the following Disputes are not subject to the above
						provisions concerning informal negotiations and binding arbitration: (a) any
						Disputes seeking to enforce or protect, or concerning the validity of, any of
						the intellectual property rights of a Party; (b) any Dispute related to, or
						arising from, allegations of theft, piracy, invasion of privacy, or
						unauthorized use; and (c) any claim for injunctive relief. If this provision
						is found to be illegal or unenforceable, then neither Party will elect to
						arbitrate any Dispute falling within that portion of this provision found to
						be illegal or unenforceable and such Dispute shall be decided by a court of
						competent jurisdiction within the courts listed for jurisdiction above, and
						the Parties agree to submit to the personal jurisdiction of that court.
					</Text>

					<Text> 16. CORRECTIONS</Text>

					<Text>
						There may be information on the Site that contains typographical errors,
						inaccuracies, or omissions, including descriptions, pricing, availability, and
						various other information. We reserve the right to correct any errors,
						inaccuracies, or omissions and to change or update the information on the Site
						at any time, without prior notice.
					</Text>

					<Text> 17. DISCLAIMER</Text>

					<Text>
						THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR
						USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST
						EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN
						CONNECTION WITH THE SITE AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION,
						THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
						AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE
						ACCURACY OR COMPLETENESS OF THE SITE&rsquo;S CONTENT OR THE CONTENT OF ANY
						WEBSITES LINKED TO THE SITE AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY
						FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2)
						PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM
						YOUR ACCESS TO AND USE OF THE SITE, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF
						OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL
						INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION
						TO OR FROM THE SITE, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH
						MAY BE TRANSMITTED TO OR THROUGH THE SITE BY ANY THIRD PARTY, AND/OR (6) ANY
						ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF
						ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED,
						OR OTHERWISE MADE AVAILABLE VIA THE SITE. WE DO NOT WARRANT, ENDORSE,
						GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR
						OFFERED BY A THIRD PARTY THROUGH THE SITE, ANY HYPERLINKED WEBSITE, OR ANY
						WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND
						WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY
						TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.
						AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY
						ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE
						APPROPRIATE.
					</Text>

					<Text> 18. LIMITATIONS OF LIABILITY</Text>

					<Text>
						IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR
						ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY,
						INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE,
						LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE, EVEN IF WE
						HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING
						TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE
						WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE
						LIMITED TO THE LESSER OF THE AMOUNT PAID, IF ANY, BY YOU TO US OR $1,000.00
						USD. CERTAIN US STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS ON
						IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE
						LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT
						APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.
					</Text>

					<Text> 19. INDEMNIFICATION</Text>

					<Text>
						You agree to defend, indemnify, and hold us harmless, including our
						subsidiaries, affiliates, and all of our respective officers, agents,
						partners, and employees, from and against any loss, damage, liability, claim,
						or demand, including reasonable attorneys&rsquo; fees and expenses, made by
						any third party due to or arising out of: (1) use of the Site; (2) breach of
						these Terms of Use; (3) any breach of your representations and warranties set
						forth in these Terms of Use; (4) your violation of the rights of a third
						party, including but not limited to intellectual property rights; or (5) any
						overt harmful act toward any other user of the Site with whom you connected
						via the Site. Notwithstanding the foregoing, we reserve the right, at your
						expense, to assume the exclusive defense and control of any matter for which
						you are required to indemnify us, and you agree to cooperate, at your expense,
						with our defense of such claims. We will use reasonable efforts to notify you
						of any such claim, action, or proceeding which is subject to this
						indemnification upon becoming aware of it.
					</Text>

					<Text> 20. USER DATA</Text>

					<Text>
						We will maintain certain data that you transmit to the Site for the purpose of
						managing the performance of the Site, as well as data relating to your use of
						the Site. Although we perform regular routine backups of data, you are solely
						responsible for all data that you transmit or that relates to any activity you
						have undertaken using the Site. You agree that we shall have no liability to
						you for any loss or corruption of any such data, and you hereby waive any
						right of action against us arising from any such loss or corruption of such
						data.
					</Text>

					<Text> 21. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</Text>

					<Text>
						Visiting the Site, sending us emails, and completing online forms constitute
						electronic communications. You consent to receive electronic communications,
						and you agree that all agreements, notices, disclosures, and other
						communications we provide to you electronically, via email and on the Site,
						satisfy any legal requirement that such communication be in writing. YOU
						HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER
						RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF
						TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SITE. You hereby waive
						any rights or requirements under any statutes, regulations, rules, ordinances,
						or other laws in any jurisdiction which require an original signature or
						delivery or retention of non-electronic records, or to payments or the
						granting of credits by any means other than electronic means.
					</Text>

					<Text> 22. CALIFORNIA USERS AND RESIDENTS</Text>

					<Text>
						If any complaint with us is not satisfactorily resolved, you can contact the
						Complaint Assistance Unit of the Division of Consumer Services of the
						California Department of Consumer Affairs in writing at 1625 North Market
						Blvd., Suite N 112, Sacramento, California 95834 or by telephone at (800)
						952-5210 or (916) 445-1254.
					</Text>

					<Text> 23. MISCELLANEOUS</Text>

					<Text>
						These Terms of Use and any policies or operating rules posted by us on the
						Site or in respect to the Site constitute the entire agreement and
						understanding between you and us. Our failure to exercise or enforce any right
						or provision of these Terms of Use shall not operate as a waiver of such right
						or provision. These Terms of Use operate to the fullest extent permissible by
						law. We may assign any or all of our rights and obligations to others at any
						time. We shall not be responsible or liable for any loss, damage, delay, or
						failure to act caused by any cause beyond our reasonable control. If any
						provision or part of a provision of these Terms of Use is determined to be
						unlawful, void, or unenforceable, that provision or part of the provision is
						deemed severable from these Terms of Use and does not affect the validity and
						enforceability of any remaining provisions. There is no joint venture,
						partnership, employment or agency relationship created between you and us as a
						result of these Terms of Use or use of the Site. You agree that these Terms of
						Use will not be construed against us by virtue of having drafted them. You
						hereby waive any and all defenses you may have based on the electronic form of
						these Terms of Use and the lack of signing by the parties hereto to execute
						these Terms of Use.
					</Text>

					<Text> 24. CONTACT US</Text>

					<Text>
						In order to resolve a complaint regarding the Site or to receive further
						information regarding use of the Site, please contact us at:
					</Text>

					<Text>
						Swoop Golf LLC 3185 Fox Sedge Ln Highlands Ranch, CO 80126 United States
					</Text>
					<Text>Phone: (+1)4802259702 info@swoopgolf.com</Text>
				</Content>
			</ContentWithSidebarWrapper>
		</Section>
	);
};
function TermsAndConditions() {
	return (
		<>
			<TextBanner pt={[7, 8]} isLight title="Terms & Contditions" />
			<ContentWithSidebar />
		</>
	);
}

export async function getStaticProps() {
	return {
		props: {
			theme: 'light',
		},
	};
}

export default TermsAndConditions;
