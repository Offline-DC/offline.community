---
# The Resource Library — the ONE list of every printable/linkable resource
# on the site. The /resources page shows all of them, grouped by phase. The
# DIY subpages show a few each, picked by `id` (see the `resources:` list in
# e.g. src/content/diy-gather-participants/page.md), so editing a title or
# description here updates it everywhere it appears.
#
# Each item:
#   id          — a short name the DIY pages use to pick it. Don't rename one
#                 without updating the DIY pages that use it (the build will
#                 fail and tell you which id it couldn't find).
#   phase       — which group it's listed under on /resources: invite, orient,
#                 meetup, challenges (done in between meetups), or graduate (labels for these are under `phases`).
#   fieldKit    — true adds the little box icon: "included in the Facilitator
#                 Field Kit". Leave it off (or false) otherwise.
#   href        — a PDF under /resources/ (files live in public/resources/),
#                 or a full https:// link for anything hosted elsewhere.
#
# Formatting: `intro` may contain inline HTML (<a href>, <u>, <em>).
title: Resource Library — Month Offline
masthead: Month Offline > DIY Guide > Resources
sectionLabel: Resource library
intro: 'Month Offline is all about returning to the tactile, the textured, the handheld -- old school tools that liberate us from the screen. below you''ll find all the paper materials we''ve designed for the challenge. download, print, and gift them to ur participants! for maximum satisfaction, we recommend printing on 65lb cardstock paper. items with a box icon are included in the Facilitator Field Kit that we mail to ppl who come to our <a href="https://tally.so/r/RGgD2p" target="_blank" rel="noopener">facilitation workshop</a>!'
phases:
  invite: Invite
  orient: Orient
  meetup: Meetup
  challenges: Weekly Challenges
  graduate: Graduate
items:
  - id: flyers
    phase: invite
    title: Month Offline Flyers
    description: posters that u can put up around ur neighborhood to find the others!
    href: /resources/mo_flyers.pdf
  - id: sign-up-form
    phase: invite
    title: sign up form
    description: use our registration form template to keep track of all your participants.
    href: https://tally.so/templates/month-offline-registration-form-template/m6zZYm
  - id: postcards
    phase: invite
    title: Month Offline Postcards
    description: encouraging letters from past participants. cut them out and mail them as a welcome gift.
    href: /resources/mo_postcards.pdf
  - id: time-capsule
    phase: orient
    title: Time Capsule Card
    description: encourage ppl to set intentions at orientation that they can review at the end of the month.
    href: /resources/mo_time_capsule.pdf
  - id: pledge
    phase: orient
    fieldKit: true
    title: Offline Pledge Card
    description: ceremonially enter the month by signing the Offline Pledge together at orientation.
    href: /resources/mo_pledge.pdf
  - id: prompts
    phase: meetup
    title: Dumb Prompts
    description: weekly prompts to use at each meetup.
    href: /resources/mo_prompts.pdf
  - id: facilitation-guides
    phase: meetup
    title: Facilitation Guides
    description: beat-for-beat structure of the og MO meetups. take what's useful, leave the rest.
    href: /resources/mo_facilitator_guides.pdf
  - id: flipmates
    phase: meetup
    fieldKit: true
    title: Flipmates Card Deck
    description: pick a card, any card, and find ur matches -- they're ur accountability buddies for the challenge.
    href: /resources/mo_flipmates_deck.pdf
  - id: offtime-outlets
    phase: meetup
    fieldKit: true
    title: Offtime Outlets index
    description: invite ppl to add their creative outlet to a shared inventory.
    href: /resources/mo_offtime_outlets.pdf
  - id: challenge-pen-pal
    phase: challenges
    title: 'Communication: Pen Pal Stationary'
    description: choose a pen pal for the month, write a letter about a meaningful object, and drop it in the snailmail.
    href: /resources/mo_challenge_pen_pal.pdf
  - id: challenge-shotlist
    phase: challenges
    title: 'Memory: Shotlist'
    description: go on a photo scavenger hunt with a non-smartphone cam and see how many shots u can collect from the shotlist.
    href: /resources/mo_challenge_shotlist.pdf
  - id: challenge-cartography-card
    phase: challenges
    title: 'Navigation: Cartography Card'
    description: create a subjective map of ur neighborhood with the places that matter most to u.
    href: /resources/mo_challenge_cartography_card.pdf
  - id: challenge-bingo
    phase: challenges
    title: 'Boredom: Boredom Bingo'
    description: 'silly and sincere activities to fill those idle in-between moments: go for 5 in a row, winner gets a prize.'
    href: /resources/mo_challenge_bingo.pdf
  - id: certificates
    phase: graduate
    title: Certificates of Completion
    description: graduate from Month Offline in style.
    href: /resources/mo_certificate.pdf
  - id: blank-postcards
    phase: graduate
    title: Blank Postcards
    description: after graduation, ask participants to write a letter of advice to a future participant.
    href: /resources/mo_blank_postcards.pdf
---
