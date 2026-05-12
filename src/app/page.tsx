"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTwentyEight from '@/components/sections/feature/FeatureCardTwentyEight';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="compact"
        sizing="mediumLargeSizeMediumTitles"
        background="grid"
        cardStyle="gradient-bordered"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        { name: "Home", id: "hero" },
        { name: "About", id: "about" },
        { name: "Menu", id: "menu" },
        { name: "Testimonials", id: "testimonials" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="Terrace House"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{ variant: "gradient-bars" }}
      title="Authentic North Indian Flavors"
      description="Experience the warmth of traditional North Indian cuisine at Terrace House. From outdoor seating under the stars to cozy indoor vibes, every meal is a celebration of heritage."
      buttons={[{ text: "View Menu", href: "#menu" }, { text: "Book Your Table", href: "#contact" }]}
      imageSrc="http://img.b2bpic.net/free-photo/active-conversation-evening-time-friends-have-dinner-gorgeous-outdoor-place_146671-14434.jpg"
      mediaAnimation="slide-up"
      avatars={[
        { src: "http://img.b2bpic.net/free-photo/side-view-people-sitting-table_23-2149655613.jpg", alt: "Side view people sitting at table" },
        { src: "http://img.b2bpic.net/free-photo/typical-french-restaurant-scene-tables-chairs_1147-445.jpg", alt: "Typical french restaurant scene of tables and chairs" },
        { src: "http://img.b2bpic.net/free-photo/woman-drinking-hot-chocolate-cafe_23-2149944017.jpg", alt: "Woman drinking hot chocolate at cafe" },
        { src: "http://img.b2bpic.net/free-photo/string-lights-sunset_23-2148232006.jpg", alt: "String of lights on a sunset" },
        { src: "http://img.b2bpic.net/free-photo/smiling-woman-holding-beer_23-2147680740.jpg", alt: "Smiling woman holding a beer" },
      ]}
      marqueeItems={[
        { type: "text", text: "Authentic Spices" },
        { type: "text", text: "Outdoor Terrace" },
        { type: "text", text: "North Indian Cuisine" },
        { type: "text", text: "Family Friendly" },
        { type: "text", text: "Signature Tandoor" },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={false}
      title="A Legacy of Flavor"
      description="Terrace House brings the rich, robust culinary traditions of North India to the heart of Faridabad. We believe in high-quality ingredients, traditional cooking methods, and a passion for hospitality that turns every guest into family."
      bulletPoints={[
        { title: "Traditional Recipes", description: "Time-honored preparation techniques from North Indian kitchens." },
        { title: "Outdoor Seating", description: "Relaxing and aesthetic terrace views for a perfect evening." },
        { title: "Authentic Spices", description: "Hand-picked, fresh ingredients in every single bite." },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/spa-therapy-ingredients_1232-3509.jpg"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={true}
      products={[
        { id: "1", name: "Tandoori Special", price: "₹350", imageSrc: "http://img.b2bpic.net/free-photo/gourmet-bowl-with-healthy-rice-meat-vegetables-generated-by-ai_188544-14076.jpg" },
        { id: "2", name: "Shahi Paneer", price: "₹320", imageSrc: "http://img.b2bpic.net/free-photo/top-view-cooked-vegetables-with-egg-meal-seasonings-dark-desk_140725-79691.jpg" },
        { id: "3", name: "Butter Chicken", price: "₹380", imageSrc: "http://img.b2bpic.net/free-photo/pancake-with-sweet-topings-ingredients-generated-by-ai_188544-20557.jpg" },
        { id: "4", name: "Dal Makhani", price: "₹280", imageSrc: "http://img.b2bpic.net/free-photo/side-close-up-view-chicken-chicken-with-onion-herbs-lemon-sauce-garlic_140725-71499.jpg" },
        { id: "5", name: "Laccha Paratha", price: "₹200", imageSrc: "http://img.b2bpic.net/free-photo/spices-dry-fruits-tray-textile_23-2148080939.jpg" },
        { id: "6", name: "Veg Kebab Platter", price: "₹300", imageSrc: "http://img.b2bpic.net/free-photo/high-angle-indian-food-spices_23-2148747648.jpg" },
      ]}
      title="Our Signature Dishes"
      description="Explore our curated menu of North Indian delights, where every dish is crafted with aromatics and spices that excite the senses."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyEight
      animationType="slide-up"
      textboxLayout="split-description"
      useInvertedBackground={false}
      features={[
        { id: "f1", title: "Fireplace Ambiance", subtitle: "Perfect for winters", category: "Experience", value: "Warmth" },
        { id: "f2", title: "All You Can Eat", subtitle: "Savor to your heart's fill", category: "Dining", value: "Unlimited" },
        { id: "f3", title: "Open Air Seating", subtitle: "Under the night sky", category: "Venue", value: "Outdoor" },
      ]}
      title="Why Terrace House?"
      description="More than just a meal, we offer an experience."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={true}
      testimonials={[
        { id: "1", name: "Rohan Sharma", imageSrc: "http://img.b2bpic.net/free-photo/gorgeous-brunette-smiling-woman-drinks-juice-coffee-spends-free-time-restaurant_273609-3316.jpg" },
        { id: "2", name: "Ananya Rao", imageSrc: "http://img.b2bpic.net/free-photo/caucasian-black-american-men-having-business-meeting-restaurant_613910-8942.jpg" },
        { id: "3", name: "Vijay Gupta", imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-people-sitting-restaurant_23-2149930190.jpg" },
        { id: "4", name: "Priya Verma", imageSrc: "http://img.b2bpic.net/free-photo/smiling-tender-parisian-girl-stylish-outfit-sends-air-kiss-portrait-young-woman-with-expressive-look_197531-12004.jpg" },
        { id: "5", name: "Amit Singh", imageSrc: "http://img.b2bpic.net/free-photo/attractive-happy-young-bearded-man-trendy-hat-texting-messages-via-social-networks-browsing-internet-using-free-wifi-his-electronic-device-coffee-break-restaurant_273609-1934.jpg" },
      ]}
      cardTitle="What Guests Say"
      cardTag="Reviews"
      cardAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        { id: "q1", title: "Do you have outdoor seating?", content: "Yes, we feature a beautiful terrace setting perfect for any weather." },
        { id: "q2", title: "Is table reservation required?", content: "Reservations are recommended, especially for large groups or during weekends." },
        { id: "q3", title: "What are your opening hours?", content: "We are open from 10 am until late. Please check our Google page for holiday timings." },
      ]}
      sideTitle="Common Questions"
      sideDescription="Need to know more about our services?"
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{ variant: "plain" }}
      tag="Get in Touch"
      title="Visit Us Today"
      description="Located at Maharaja Agrasen Plaza, Ambedkar Chowk, Baniawada, Faridabad. Reach out for reservations or queries."
      buttons={[{ text: "WhatsApp Us", href: "https://wa.me/918130609739" }, { text: "Get Directions", href: "https://maps.google.com" }]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Terrace House"
      columns={[
        { title: "Quick Links", items: [{ label: "Menu", href: "#menu" }, { label: "Reservations", href: "#contact" }] },
        { title: "Contact", items: [{ label: "WhatsApp", href: "https://wa.me/918130609739" }, { label: "Email", href: "mailto:hello@example.com" }] },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}