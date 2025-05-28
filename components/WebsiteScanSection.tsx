import Section from './Section';
import ScanServiceSection from './ScanServiceSection';

export default function WebsiteScanSection() {
  return (
    <Section id="website-scan">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white text-center tracking-tight">
        Free Website Scan Tool by FadiLogic
      </h2>
      <ScanServiceSection />
    </Section>
  );
}