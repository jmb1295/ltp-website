/* global React, ReactDOM, Nav, Footer, HomePage, WhoWeArePage, HowWeThinkPage, OurFocusPage, ForOwnersPage, ContactPage, useTweaks, TweaksPanel, TweakSection, TweakSelect, TweakRadio, TweakToggle, TweakColor, TweakText, TweakSlider */
const { useState, useEffect } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "primaryColor": "#1F3329",
  "primaryDeep": "#18271F",
  "creamPrimary": "#F4EFE3",
  "creamPanel": "#ECE3CE",
  "accentBrass": "#C8A766",
  "fontSerif": "Source Serif 4",
  "fontSans": "Source Sans 3",
  "density": "default",
  "heroHeadingPart1": "A Better Path Forward",
  "heroHeadingPart2": "for Your Business.",
  "heroLede": "Long Trail Partners operates and acquires great businesses across the Northeast. If you've built a company and you're thinking about what comes next, we'd like to hear from you.",
  "heroCtaPrimary": "Start a Conversation",
  "standForHeading": "The businesses that keep communities running deserve owners who plan to stick around.",
  "tagline": "Built for the Long Haul.",
  "brandLine1": "LONG TRAIL",
  "brandLine2": "PARTNERS",
  "showStandFor": true,
  "showDifferent": true,
  "showExpect": true,
  "showLocations": true,
  "showExperience": true,
  "showTeam": true,
  "showCta": true
}/*EDITMODE-END*/;

function App() {
  const [route, setRoute] = useState(() => parseHash());
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffect(() => {
    const onHash = () => setRoute(parseHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // Apply tweaks → CSS vars
  useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty("--color-forest",      tweaks.primaryColor);
    r.style.setProperty("--color-forest-deep", tweaks.primaryDeep);
    r.style.setProperty("--color-cream",       tweaks.creamPrimary);
    r.style.setProperty("--color-cream-deep",  tweaks.creamPanel);
    r.style.setProperty("--color-brass",       tweaks.accentBrass);
    r.style.setProperty("--font-serif", `"${tweaks.fontSerif}", Georgia, serif`);
    r.style.setProperty("--font-sans",  `"${tweaks.fontSans}", "Helvetica Neue", Arial, sans-serif`);
    document.body.dataset.density = tweaks.density;
  }, [tweaks]);

  function navigate(href) {
    window.location.hash = `#/${href}`;
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  const sections = {
    hero: true,
    standFor: tweaks.showStandFor,
    different: tweaks.showDifferent,
    expect: tweaks.showExpect,
    locations: tweaks.showLocations,
    experience: tweaks.showExperience,
    team: tweaks.showTeam,
    cta: tweaks.showCta,
  };

  let page;
  switch (route) {
    case "who-we-are":   page = <WhoWeArePage navigate={navigate} />; break;
    case "how-we-think": page = <HowWeThinkPage navigate={navigate} />; break;
    case "our-focus":    page = <OurFocusPage navigate={navigate} />; break;
    case "for-owners":   page = <ForOwnersPage navigate={navigate} />; break;
    case "contact":      page = <ContactPage />; break;
    case "home":
    default:             page = <HomePage navigate={navigate} copy={tweaks} sections={sections} />;
  }

  return (
    <>
      <Nav current={route} navigate={navigate} copy={tweaks} />
      <main>{page}</main>
      <Footer navigate={navigate} copy={tweaks} />

      <TweaksPanel title="Tweaks" defaultPos={{ right: 24, bottom: 24 }}>
        <TweakSection title="Brand Colors">
          <TweakColor label="Forest (primary)" value={tweaks.primaryColor} onChange={(v) => setTweak("primaryColor", v)} />
          <TweakColor label="Forest deep"      value={tweaks.primaryDeep}  onChange={(v) => setTweak("primaryDeep", v)} />
          <TweakColor label="Cream"            value={tweaks.creamPrimary} onChange={(v) => setTweak("creamPrimary", v)} />
          <TweakColor label="Cream panel"      value={tweaks.creamPanel}   onChange={(v) => setTweak("creamPanel", v)} />
          <TweakColor label="Brass accent"     value={tweaks.accentBrass}  onChange={(v) => setTweak("accentBrass", v)} />
        </TweakSection>

        <TweakSection title="Typography">
          <TweakSelect label="Serif" value={tweaks.fontSerif} options={["Source Serif 4", "Playfair Display", "Cormorant Garamond", "EB Garamond", "Lora", "Crimson Pro"]} onChange={(v) => setTweak("fontSerif", v)} />
          <TweakSelect label="Sans"  value={tweaks.fontSans}  options={["Source Sans 3", "Inter", "Work Sans", "DM Sans", "IBM Plex Sans", "Manrope"]} onChange={(v) => setTweak("fontSans", v)} />
        </TweakSection>

        <TweakSection title="Layout">
          <TweakRadio label="Section density" value={tweaks.density} options={[{value: "compact", label: "Compact"}, {value: "default", label: "Default"}, {value: "spacious", label: "Spacious"}]} onChange={(v) => setTweak("density", v)} />
        </TweakSection>

        <TweakSection title="Brand & Hero Copy">
          <TweakText label="Brand line 1" value={tweaks.brandLine1} onChange={(v) => setTweak("brandLine1", v)} />
          <TweakText label="Brand line 2" value={tweaks.brandLine2} onChange={(v) => setTweak("brandLine2", v)} />
          <TweakText label="Tagline (footer)" value={tweaks.tagline} onChange={(v) => setTweak("tagline", v)} />
          <TweakText label="Hero — line 1" value={tweaks.heroHeadingPart1} onChange={(v) => setTweak("heroHeadingPart1", v)} />
          <TweakText label="Hero — line 2 (italic)" value={tweaks.heroHeadingPart2} onChange={(v) => setTweak("heroHeadingPart2", v)} />
          <TweakText label="Hero lede" value={tweaks.heroLede} onChange={(v) => setTweak("heroLede", v)} />
          <TweakText label="Hero CTA" value={tweaks.heroCtaPrimary} onChange={(v) => setTweak("heroCtaPrimary", v)} />
          <TweakText label="Stand For headline" value={tweaks.standForHeading} onChange={(v) => setTweak("standForHeading", v)} />
        </TweakSection>

        <TweakSection title="Home — Section Visibility">
          <TweakToggle label="What We Stand For" value={tweaks.showStandFor}   onChange={(v) => setTweak("showStandFor", v)} />
          <TweakToggle label="How We're Different" value={tweaks.showDifferent} onChange={(v) => setTweak("showDifferent", v)} />
          <TweakToggle label="What to Expect"     value={tweaks.showExpect}    onChange={(v) => setTweak("showExpect", v)} />
          <TweakToggle label="Our Businesses"     value={tweaks.showLocations} onChange={(v) => setTweak("showLocations", v)} />
          <TweakToggle label="Operator Quote"     value={tweaks.showExperience} onChange={(v) => setTweak("showExperience", v)} />
          <TweakToggle label="Our Team"           value={tweaks.showTeam}      onChange={(v) => setTweak("showTeam", v)} />
          <TweakToggle label="Closing CTA"        value={tweaks.showCta}       onChange={(v) => setTweak("showCta", v)} />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

function parseHash() {
  const h = window.location.hash.replace(/^#\/?/, "").trim().toLowerCase();
  if (!h) return "home";
  return h;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
