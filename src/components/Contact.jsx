import { contactInfo } from "../data/contactData";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-panel glass">
          <div className="contact-copy">
            <div className="section-eyebrow">
              <span className="dot" aria-hidden="true" />
              05 - Contact Details
            </div>
            <h2 className="section-title">
              {contactInfo.headlineCn}
            </h2>
            {contactInfo.subCn && <p className="contact-sub">{contactInfo.subCn}</p>}
          </div>

          <div className="contact-links" aria-label="联系方式">
            {contactInfo.links.map((link) => (
              <div key={link.label} className="contact-item">
                <span className="mono-label">{link.label}</span>
                <span>{link.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


