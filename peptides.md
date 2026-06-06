# PROJECT_PLAN.md

# Peptide Research Ecommerce Platform

## Project Overview

Build a premium scientific laboratory-style ecommerce platform focused on research peptides.

Primary goals:

* Establish trust through transparency and laboratory-grade presentation
* Support SEO-driven organic traffic growth
* Provide educational content around peptides and research compounds
* Create scalable infrastructure for future wholesale and subscription expansion
* Maintain strong compliance and legal safeguards

---

# Site Architecture

## Homepage

### Hero Section

* Clear scientific branding
* Primary CTA
* Featured research compounds
* Trust indicators

### Featured Products

* Best-selling compounds
* New arrivals
* Research collections

### Why Choose Us

* Third-party lab testing
* Quality assurance
* Batch transparency
* Fast shipping

### COA Section

* Certificate of Analysis explanation
* Verification process
* Testing standards

### Latest Articles

* Educational content
* Research updates
* Compound guides

### FAQ

* Common customer questions
* Ordering process
* Shipping information

### Newsletter Signup

* Research updates
* New product announcements
* Educational content

---

# Product Page Structure

Each product page should include:

## Product Information

### Description

* Overview of compound
* Research background
* Scientific summary

### Benefits

* Research applications
* Potential areas of interest
* Educational purposes

### Molecular Information

* Molecular weight
* CAS number
* Formula
* Structure details

### Storage Information

* Storage requirements
* Temperature guidelines
* Shelf-life recommendations

### Usage Disclaimer

* Research use only
* Not for human consumption
* Compliance requirements

### Lab Testing

* Third-party testing overview
* Purity information
* Testing methodology

### COA PDF

* Downloadable certificate
* Batch-specific reports

### FAQ

* Product-specific questions
* Storage
* Handling

---

# Blog Strategy

## Core Categories

### Peptide Education

Example Topics:

* What are peptides?
* Understanding peptide research
* Peptide classifications
* Peptide terminology

### Research Guides

Example Topics:

* Peptide research methodology
* Laboratory handling guides
* Best practices

### Storage Guides

Example Topics:

* Long-term peptide storage
* Temperature considerations
* Preventing degradation

### Reconstitution Guides

Example Topics:

* Reconstitution fundamentals
* Laboratory preparation considerations
* Storage after reconstitution

### Industry News

Example Topics:

* Research developments
* Scientific publications
* Industry trends

### Compound Comparisons

Example Topics:

* BPC-157 vs TB500
* CJC-1295 vs Ipamorelin
* Research-focused comparison articles

---

# SEO Architecture

## Programmatic SEO Structure

### Main Category

/peptides/

### Product Pages

/peptides/bpc-157/

/peptides/tb500/

/peptides/cjc-1295/

/peptides/ipamorelin/

/peptides/ghk-cu/

/peptides/mots-c/

/peptides/selank/

/peptides/semax/

---

# Content Cluster Strategy

## Example Cluster: BPC-157

### Pillar Page

/peptides/bpc-157/

### Supporting Articles

* What Is BPC-157
* BPC-157 Research Overview
* BPC-157 Storage Guide
* BPC-157 Stability Considerations
* BPC-157 vs TB500
* BPC-157 Research Studies
* BPC-157 Frequently Asked Questions

### Internal Linking

All supporting articles link to:

* Product page
* Related compounds
* Comparison articles
* Educational resources

---

# Ecommerce Features

## Product Catalog

* Categories
* Filters
* Search
* Sorting

## Shopping Cart

* Persistent cart
* Guest checkout
* Saved carts

## Checkout

* Secure payment processing
* Address validation
* Shipping selection

## Customer Accounts

* Order history
* Saved addresses
* Account management

## Wishlist

* Save products
* Shareable wishlists

---

# Compliance Requirements

## Legal Pages

* Terms and Conditions
* Privacy Policy
* Refund Policy
* Shipping Policy
* Disclaimer Policy

## Age Verification

* Age gate
* Compliance notices

## Product Disclaimers

* Research use only
* Not intended for human consumption
* Educational purposes only

---

# Trust Signals

## Quality Assurance

* COA PDFs
* Batch numbers
* Testing reports
* Purity verification

## Customer Confidence

* Product reviews
* FAQ sections
* Transparent testing information
* Secure checkout badges

---

# Analytics Stack

## Google Analytics 4

Track:

* Ecommerce events
* Funnel performance
* User behavior

## Google Search Console

Track:

* Organic visibility
* Indexation
* Search performance

## Microsoft Clarity

Track:

* Session recordings
* Heatmaps
* User behavior

## PostHog

Track:

* Product analytics
* Feature usage
* Customer journeys

---

# Email Marketing

## Platform

Klaviyo

---

## Automation Flows

### Welcome Series

* Brand introduction
* Educational content
* Product discovery

### Abandoned Cart

* Reminder sequence
* Recovery incentives

### Post-Purchase

* Order follow-up
* Product education
* Review requests

### Win-Back Campaign

* Re-engagement
* Product recommendations

---

# Future Revenue Expansion

## Phase 2 Features

### Wholesale Portal

* Tiered pricing
* Bulk ordering
* Wholesale accounts

### Affiliate Program

* Referral commissions
* Partner dashboard

### Subscription Orders

* Recurring purchases
* Flexible intervals

### Loyalty Program

* Points system
* VIP rewards

---

# Development Guard Rails

## Coding Standards

### TypeScript

* Strict mode enabled
* Never use any

### Components

* Server Components by default
* Client Components only when required

### Database

* All access through Prisma
* No direct SQL in components

### Validation

* All forms validated using Zod

### Security

* No hardcoded secrets
* Environment variables validated with Zod

### SEO

* Required on every page
* Metadata mandatory

### Performance

* Mobile-first design
* Lighthouse score target >95

### Accessibility

* Accessibility score >95

### UI Standards

* shadcn/ui only

### Code Quality

* ESLint required
* TypeScript checks required
* CI validation mandatory

### AI Development Rules

* Generate complete files
* Never generate partial snippets
* Follow existing project patterns

---

# Technology Stack

## Frontend

* Next.js 15
* TypeScript
* Tailwind CSS
* shadcn/ui

## Backend

* Supabase PostgreSQL
* Prisma ORM

## CMS

* Sanity

## Hosting

### Primary

* Vercel

### Security/CDN

* Cloudflare

## Payments

### Primary

* eWAY

### Secondary

* Braintree

### Backup

* High-risk merchant provider

## Analytics

* Google Analytics 4
* Google Search Console
* Microsoft Clarity
* PostHog

## Email

* Klaviyo

---

# Future Documentation

The next version should include:

## Development Roadmap

* Milestones
* Sprint planning
* Launch phases

## Technical Documentation

* Folder structure
* Database schema
* Prisma models
* Product data model

## SEO Documentation

* URL architecture
* Internal linking strategy
* Programmatic SEO templates

## Operations

* Launch checklist
* Legal checklist
* Compliance checklist

## Deployment

* Vercel deployment guide
* Environment setup
* CI/CD workflow

## Team Processes

* GitHub workflow
* Pull request requirements
* Release process

## Growth Strategy

* 90-day growth plan
* Content roadmap
* Link acquisition strategy
* Email growth strategy
