# Month Offline — Site Copy

This file contains **all editable text on the site**, page by page, in the order
it appears. Edit it directly, then hand it back and I'll apply your changes to the code.

## How to use this file
- **Edit the text, not the structure.** Leave the `##` page headings and the
  **bold field labels** exactly as they are — they're how I map each block back
  to the right place in the code. Just rewrite the text that follows each label.
- **Don't reorder blocks.** If you want something moved, add a note like
  `>> MOVE THIS above the photo` and I'll handle it.
- **Underlined words** are wrapped in `[[double brackets]]`, e.g. `[[recruit]]`.
  These render with an underline for emphasis. Add or remove the brackets to
  change what's emphasized.
- **All caps is automatic.** Headings, bar labels, and the ticker/footer are
  uppercased by the site's styling, so I've written them here in normal case —
  edit them in normal case and they'll display in caps.
- **Dynamic bits** (the ticker's date and clock) are generated automatically and
  aren't editable here.
- Want a brand-new paragraph/section? Just write it in the right spot with a
  short note like `>> NEW paragraph` and I'll wire it up.

---

## Shared (appears on every page)

**Ticker (scrolling marquee):**
[live date] * [live time] * WWW.OFFLINE.COMMUNITY * ALUMNI COUNTER: 400 PPL * CITY COUNTER: 2 * JOIN THE CHALLENGE * DITCH THE DOOMSCROLL * LOG OFF AND LINK UP * TOUCH GRASS

*(The date and time are generated live and tick every second. WWW.OFFLINE.COMMUNITY links to the homepage. The two counters are hard-coded for now — tell me when the numbers change and I'll update them.)*

**Footer line 1:** WWW.OFFLINE.COMMUNITY
**Footer line 2:** DUMB.CO * SEE WHAT'S UNDER STUDIO
**Footer line 3:** WASHINGTON, DC 2026

**Breadcrumb home link (start of every masthead):** Month Offline

**Default page description (search engines / link previews):** Month Offline — try a dumbphone for 30 days with a cohort of neighbors.

---

## Page: Home  (`src/pages/index.astro`)

**Browser tab title:** Month Offline

**Masthead bar:** Month Offline * Less is MO

**Intro — lead line:**
part support group, part happy hour, part classroom: ditch ur smartphone for 30 days and join a cohort of neighbors for weekly meetups, creative challenges, and mutual encouragement. if not now, when?

**Intro — paragraph:**
ahoy! [[you’ve reached offline.community]] — a directory of Month Offline cohorts and a guide to starting ur own. the very first MO challenge took place in Washington DC in May 2025. since then, over 400 brave souls have entered the flip side with their neighbors -- turning doomscroll into neighborhood stroll, plugging their creativity into the local landscape, & filling the smartphone-shaped hole in their lives with on-land joy. check the directory below to see if there’s already a MO cohort in ur city. if not, might u be the one to get it going? ⁕

**Section heading (cyan bar):** Read all about it

**Press item 1 — headline:** A group of us ditched our smartphones for a month. It changed us.
**Press item 1 — outlet:** [Washington Post](https://www.washingtonpost.com/dc-md-va/interactive/2025/smartphones-dumbphones-month-offline/)

**Press item 2 — headline:** The flip-phone cleanse
**Press item 2 — outlet:** [The Atlantic](https://www.theatlantic.com/technology/2026/04/month-offline-smartphone-detox/686911/)

**Press item 3 — headline:** Would you try the 30-day flip phone challenge?
**Press item 3 — outlet:** [Dazed](https://www.dazeddigital.com/life-culture/article/69882/1/month-offline-smartphone-support-group-unplugging-flip-offline-detox)

**Section heading (cyan bar):** How it works

**Body — intro line:**
[[flipping off is better together!]] the MO challenge is a community of practice for groups of 10–30. participants gather at a local venue, sign a pledge to forgo the use of their smartphone for 30 days, and support the vitality of the neighborhood through their presence + patronage.

**Sub-heading (blue):** Facilitated IRL meetups
**Bullet:** [[hands-on activities]] to explore weekly themes on the frictions & fruits of offline living
**Bullet:** [[dedicated time]] to incubate your creative outlet and encourage others’ exploration
**Bullet:** [[graduation ceremony]] to celebrate each other’s offtime

**Sub-heading (blue):** dumbphone 2 from dumb.co
**Bullet:** [[classic flip phone]] designed with Month Offline participants in mind 
**Bullet:** [[unlimited]] calling & texting, grainy 2MP camera, the sweet sound of closure when u snap it shut
**Bullet:** [[option to sync]] calls, texts, & contacts with ur “smart” phone

**Sub-heading (blue):** community exhibition
**Bullet:** [[public party]] with the friends & family of MO participants
**Bullet:** [[showcase]] stories, artworks, and practices that emerged during the month

**Body — directory blurb:**
each cohort is unique, but we’re united by the MO pledge and our commitment to attention liberation. join an existing cohort and start ur own.

**Section heading (cyan bar):** Month Offline locations

**Locations empty-state (shown when no cohorts are listed):**
No cohorts listed yet — be the first to start one in your city, below.

**CTA bar — heading:** Start Month Offline in ur city
**CTA bar — blurb:**
not seeing ur location? don’t fret ... use the DIY guide to roll ur own cohort.

---

## Page: DIY Guide — landing  (`src/pages/diy/index.astro`)

**Browser tab title:** DIY Guide — Month Offline

**Masthead breadcrumb:** Month Offline > DIY Guide

**Letter — salutation:** Dear organizers,

**Letter:**
we’re glad you’re curious about starting a Month Offline cohort in ur city. a little backstory: MO’s founding flipmates first met at a phone-free Shabbat dinner in [Temperance Alley](https://www.ustreetcommunity.org/temperance-alley-garden) -- a community garden and outdoor classroom in Washington, DC. Grant and Danny teamed up with Aaron and Josh to design a challenge that would help neighbors liberate their attention and deepen their sense of place. all of us had been practicing our own forms of [attention activism](https://www.schoolofattention.org/attention-activism) ... building clay ovens, inspiring friends to use flip phones, organizing local field trips. 

in April 2025, we came together to post flyers around DC with a simple invitation: CALL 1-844-OFFLINE if u want to ditch ur smartphone for 30 days and experience the beauty of Life beyond the screen with a small group of peers. to our surprise, ppl started leaving us heartfelt voicemails about why they wanted to flip off. we put together a MO field kit with old-school tools that would help us fill the void left behind by our smartphones. and a few weeks later, 15 strangers assembled at a local bar to embark on what turned out to be a transformative trip. 

if that was THE END, it would have been enough! but we were so energized by what emerged in newfound offtime that we decided to organize another cohort. and another. and another ... after crushing the July ’25 challenge, Lydia came on board as MO’s first-ever trained facilitator and not long after, she helped bring the challenge to a whole new city: the Big Apple.  

so much has bloomed now: new friendships, photo books, dance videos, plays, short films, a makeshift telegraph, subjective cartographies, kombucha, repaired jeans, a petition to save the local park -- more than we can remember. inspired by all we’ve witnessed, we created this DIY guide to encourage u to start a MO cohort (and to make it ur own)! inside you’ll find helpful hints and printable materials for every stage of ur organizing. u got this! don’t hesitate to reach out. 

Less is MO,
Aaron, Josh, & Lydia
month@offline.community


**Section heading (yellow bar):** The basics

**Body:**
[[weekly meetups are at the heart of MO]]. the most important ‘content’ of our curriculum is the stories that participants bring back from the field. the dumbphone is just a gateway. it’s not a retreat, but a *reentry* program to the beauty of local Life beyond the screen. the og challenge is built around 5 themes, but u r welcome to remix our recipe to better suit the needs of ur neighborhood: 

**Program week 1 — title:** Communication
**Program week 1 — question:** how do devices shape our patterns of communication? ppl [[sign the Offline Pledge]]and ceremonially flip off their smartphones. 

**Program week 2 — title:** Memory
**Program week 2 — question:** what do we notice when we're not feeling distracted? ppl interview each other about [[a creative outlet]] they’re exploring. 

**Program week 3 — title:** Navigation
**Program week 3 — question:** how do we experience urban space when we're off the GPS? ppl [[use paper maps]] to share the story of their commute. 

**Program week 4 — title:** Boredom
**Program week 4 — question:** how do we inhabit the vacancies in our attention? ppl [[split into 2 teams]] for a collage competition and plan a midweek outing. 

**Program week 5 — title:** Graduation
**Program week 5 — question:** what are we going to carry with us from this experience together? ppl give [[mini-commencement speeches]] with their takeaways.  

**Program week 6 — title:** Exhibition
**Program week 6 — question:** how did we make the most of our offtime? ppl share their [[creative outlets]] at a public party for the community. 



**Section heading (yellow bar):** Ring ring: we r here 2 help u flip off

**Body:**
ready to take the next step? start thinking about co-facilitator, a venue, and a start date. submit an interest form and we’ll invite u to the next Q&A session where u can ask any questions, meet other aspiring organizers, and learn how to get dumbphones. 
**Button:** COUNT ME IN

**Section heading (yellow bar):** How to...

**How-to link 01:** Gather participants
**How-to link 02:** Get dumbphones
**How-to link 03:** Facilitate meetups
**How-to link 04:** Host an exhibition

---

## Page: How to Gather Participants  (`src/pages/diy/gather-participants.astro`)

**Browser tab title:** How to Gather Participants — Month Offline

**Masthead breadcrumb:** Month Offline > DIY Guide > Participants

**Section heading (cyan bar):** How to gather participants

**Sub-heading (blue):** How do I get the word out?

**Body — paragraph 1:**
it's much easier to flip off in community than on ur own. the first step is to [[find at least one other person who wants to help u bring this to life]]. 

work together to recruit a group of 10–30 participants to go offline together. set up a phone number, email address, or form where ppl can sign up. invite some friends to join you, and ask them to invite some of their friends. 

flyer on utility boxes, in cafes, book shops, bars -- or wherever u can find a community bulletin board. table on a busy street corner. submit an invitation to local newsletters or e-mail listservs. try to avoid using social media ... [[u will be surprised by how many ppl]] come out of the woodwork! 

*(photo of someone wheat-pasting a flyer)*

**Body — paragraph 2:**
[[cold call]] ppl as they sign up. ask them about why they decided to take the plunge, their hopes & dreams for the month. make sure they’re free on the date & time you’ve selected. share a bit about urself and what to expect from the meetups. 

[[send a reminder]] 1 week before and 1 day before with all ur deets: date, time, & location. try including a playful instruction like “look 4 the man in the sunglasses and give him the secret passcode LESS IS MO.” 

**Sub-heading (blue):** Where should we meet up? 

**Body — paragraph 4:**
[[choose a day and time]] that u and ur fellow organizers are available for 5 consecutive weeks. meetups typically last 1.5-2hours, and remember u will need at least a half hour on either end for set up and takedown!

**Body — paragraph 5:**
[[find a local venue]] that will host u, and get to know the owners. Month Offline is a great way to patronize local businesses and support IRL community hubs. private rooms or relatively quite spaces at restaurants & bars tend to work best, but some groups meet outside at the park. 

once you’ve found ur ppl and place, ur ready to start prepping for the meetups!

**Section heading (cyan bar):** Resources

**Resource 1 — title:** Month Offline Flyers
**Resource 1 — description:** editable posters that u can post around your neighborhood! include ur phone number or e-mail address in the blank space at the bottom.
**Resource 1 — link:** /resources/mo_flyers.pdf

**Resource 2 — title:** sign up form
**Resource 2 — description:** duplicate the interest form we created to keep track of all your participants.
**Resource 2 — link:** https://tally.so/r/KYOAOA

**Resource 3 — title:** Month Offline Postcards
**Resource 3 — description:** encouraging letters from past participants. cut them out and mail them as a welcome gift. 
**Resource 3 — link:** /resources/mo_postcards

**Next bar — link label:** How to Get Dumbphones

---

## Page: How to Get Dumbphones  (`src/pages/diy/get-dumbphones.astro`)

**Browser tab title:** How to Get Dumbphones — Month Offline

**Masthead breadcrumb:** Month Offline > DIY Guide > Dumbphones

**Section heading (cyan bar):** How to get dumbphones

**Sub-heading (blue):** Why dumb down?

**Body — paragraph:**
most of us have learned the hard way that we need more than just self-control, grayscale screens, and private resolutions to reduce our screen time. ppl get the most out of MO when they fully abandon their smartphones for the month. 

why? every device has an opinion about how we should be relating, attending, and spending our time -- an opinion expressed in the form of its hardware and software design. beginning in the ‘90s, a couple of companies decided it would be a good idea to try combining telephones and computers into one all-purpose pocket communicator. the dumbphone says nah. its intentionally-limited functionality leaves room for mind & body wandering, for fruitful friction, for glorious glitches.  

all dumbphones are welcome at Month Offline, most ppl use the dumbphone 2 from dumb.co. the company was started by two of MO’s founders *and* some of the very first participants. inspired by everything they learned during MO, they built a dumbphone that makes it easy (but not too easy) for ppl to flip off.

**Sub-heading (blue):** What are the dumbphone deets?  

**Body — paragraph:**
dumb.co is offering a discount code that organizers can give to participants. when u share an interest form, you’ll receive a followup with all the details. in short: the hardware costs $20 and, upon receiving the phone, they’ll need to activate a $15.99/mo phone plan for a minimum of 2 months. shipping usually takes 3–5 business days, so make sure that ur ppl order with enough lead time. for more options, check out the [Dumbphone Finder](https://www.dumbphones.org/). 

*(photo of participants setting up dumbphones)*

**Button:** ANSWER THE CALL*

**Next bar — link label:** How to Facilitate Meetups

---

## Page: How to Facilitate Meetups  (`src/pages/diy/facilitate-meetups.astro`)

**Browser tab title:** How to Facilitate Meetups — Month Offline

**Masthead breadcrumb:** Month Offline > DIY Guide > Facilitation

**Section heading (cyan bar):** How to facilitate meetups

*(photo of an orientation meetup)*

Month Offline meetups are playful and thought-provoking events where participants encourage, challenge, and get to know each other. 

we’re not purists (it’s OK to slip up), but we do urge ppl to [[make the most]] of the the time we have together. 

facilitators [[don’t have all the answers]] and don’t take up too much space in the room -- we help participants learn from each other and crowdsource creative workarounds to common troubles. u can download detailed facilitation guides for each meetup, or create ur own! 

WHAT SHOULD I BRING?  
* a handbell to easily get the attention of a large group 
* nametags to help strangers become friends 
* old-school tools for ppl to play with, e.g. typewriter, quill pen, film camera 
* relevant books for participants to peruse
* paper, crayons, and pens for drawing or writing about the triumphs and trials of MO
* stickers for ppl to bedazzle their phones 
* speakers and a rockin’ playlist  

**Sub-heading (blue):** What’s the orientation like?

participants have called in, left voicemails, signed up, showed up, and now ... orientation meetup is all about building a doorway in time and walking through it together. Month Offline has officially™ begun! [[the focus is *not* on the pain of the problem, but on the fun of the challenge ahead]]. private commitments become shared, and participants get a chance to meet the rest of the cohort. 

[[arrange the seating]] to allow for open communication between all participants. invite ppl pair up as they arrive and chat with each other about why they’re flipping off.

after everyone has arrived, circle up and ask ppl to share the [[story of their name]], and a [[digital habit]] they’re hoping to leave behind. 

stage a [[Flipping Off Ceremony]], where participants turn off their smartphones and sign an Offline Pledge together to officially enter the Month Offline.

*(photo of a candlelit meetup)*

**Sub-heading (blue):** How do the meetups work?

**Body — lead line:**
Month Offline meetups often contain 4 segments:

**Numbered list — item 1:** [[Reflection]]: draw a memorable moment from the last week and discuss dumb prompts in small groups
**Numbered list — item 2:** [[Round Robin]]: share out reflections to the whole group
**Numbered list — item 3:** [[Creation]]: hands-on activity or creative exercise related to the weekly theme
**Numbered list — item 4:** [[Transition]]: learn about the next challenge and set intentions for the week ahead


bonus: [[reach out to participants]] 1-2 times per week with meetup reminders, notes of encouragement, weekly challenges, or upcoming events. check in with anyone who misses unexpectedly to make sure they’re doing OK. 

**Yellow callout box:**
Check the facilitator guides below for activity ideas and prompts for each meetup.

**Sub-heading (blue):** What’s the graduation like? 

**Body — paragraph:**
close out the challenge with a Graduation Ceremony, where participants can give mini commencement speeches about what they learned during the month and take home key insights from each other. 

u might want to make a way for participants to keep in touch with each other after the challenge: e-mail listserv, reunions, alumni events, etc. 

*(photo of a graduation ceremony)*

**Sub-heading (blue):** How do we share our stories w/o social media?

**Body — paragraph:**
the MO team innovated a new form of social media called the Dumbscroll. at the beginning of each meetup, participants are invited to create (analog) content about what went down during their offtime -- memorable moments, frustrating frictions, surprising synchronicities. 

after graduation, their drawings & writings are assembled into a collective art piece: a *finite* scroll on brown butcher paper that tells the stories of our Month Offline. this is a feed that u can get to the bottom of, and u have to be there to see it. 

**Section heading (cyan bar):** Resources

**Resource 1 — title:** Time Capsule Card
**Resource 1 — description:** Orientation: set intentions that you can look back on at the end of the month. 
**Resource 1 — link:** /resources/mo_time_capsule.pdf

**Resource 2 — title:** Offline Pledge Card
**Resource 2 — description:** Orientation: ceremonially enter the month by signing the Offline Pledge together.
**Resource 2 — link:** /resources/mo_pledge.pdf

**Resource 3 — title:** Conversation Cards
**Resource 3 — description:** Weekly prompts to use at each meetup.
**Resource 3 — link:** /resources/mo_prompts.pdf

**Resource 4 — title:** Facilitation Guides
**Resource 4 — description:** beat-for-beat structure of the og MO meetups. take what’s useful, leave the rest.
**Resource 4 — link:** /resources/facilitation_guides.pdf

**Resource 5 — title:** Certificates of Completion
**Resource 5 — description:** Graduate from Month Offline in style.
**Resource 5 — link:** /resources/mo_certificate.pdf

**Next bar — link label:** How to Host an Exhibition

---

## Page: How to Host a Closing Exhibition  (`src/pages/diy/host-an-exhibition.astro`)

**Browser tab title:** How to Host a Closing Exhibition — Month Offline

**Masthead breadcrumb:** Month Offline > DIY Guide > Exhibition

**Section heading (cyan bar):** How to host a closing exhibition

**Sub-heading (blue):** What do ppl do with all their new free time? 

**Body — paragraph:**
Month Offline is not just about what we're saying no to, but what we're inviting in. we always ask participants to consider choosing an Offtime Outlet for the month. 

how might they want to spend their newfound free time? this is a permission slip to do that thing they've always wanted to do. keep it low-stakes and low-pressure! Offtime outlets come in many different shapes and sizes (including napping and spending more time with the kids). set aside some time to workshop ideas at each MO meetup.

*(the handwritten "Offtime Outlets" sign-up graphic)*

**Sub-heading (blue):** What’s a community exhibition? 

**Body — paragraph:**
the og Month Offline cohorts ended with a phone-free exhibition where participants shared their offtime projects with friends, family, and neighbors. 

it’s important to wrap things up with a public event so that ur cohort sparks a community conversation  and more ppl are invited 2 join the attention liberation movement. 

the goal is not to isolate participants in insular flip phone clubs, but to make our neighborhoods more enriching than our screens. 

*(Vimeo video embed — the Month Offline Gallery)*

**Body — paragraph:**
the exhibition feels like a cross between a science fair, an open mic, and an art gallery. 

spread the word by printing invitations and submitting to local newspapers or community calendars. 

set up tables where ppl can showcase their projects. invite 2-3 participants to share their experience during a ~20min panel and give guests plenty of time to ask their own questions. it's always a good time to listen to the trials and triumphs from the month-long challenge. 

ppl leave feeling inspired reconsider their relationship to digital media and maybe even join a future MO cohort. find a way to collect contact information so u can follow up with guests after the event and grow ur scene! 

*(two photos of the dumb scroll on display)*

unrolling the dumb scroll 

**Next bar — link label:** DIY Guide   *(loops back to the DIY guide index)*
