import { useState } from "react";
import "../styles/Certifications.css";

export default function Certifications() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const certificates = [
    { src: "/photos/ess-tools-for-appdev.jpg", title: "Essential Tools for Application Development" },
    { src: "/photos/angular-for-frontend-engineers.png", title: "Angular for Frontend Engineers" },
    { src: "/photos/machine-learning-for-all.png", title: "Machine Learning for All" },
    { src: "/photos/ux-design-fundamentals.png", title: "UX Design Fundamentals" },
    { src: "/photos/software-architecture.png", title: "Software Architecture" },
    { src: "/photos/ux-research-and-prototyping.png", title: "UX Research and Prototyping" },
    { src: "/photos/software-development-processes-and-methodologies.png", title: "Software Development Processes and Methodologies" },
    { src: "/photos/software-processes-and-agile-practices.png", title: "Software Process and Agile Practices" },
    { src: "/photos/search-engines-for-web-and-enterprise-data.png", title: "Search Engines for Web and Enterprise Data" },
    { src: "/photos/principles-of-secure-coding.png", title: "Principles of Secure Coding" },
    { src: "/photos/operating-systems-and-you-becoming-a-power-user.png", title: "Operating Systems and You: Becoming a Power User" },
    { src: "/photos/introduction-to-software-product-management.png", title: "Introduction to Software Product Management" },
    { src: "/photos/introduction-to-ai.png", title: "Introduction to AI" },
    { src: "/photos/data-warehouse-concepts-design-and-data-integration.png", title: "Data Warehouse Concepts, Design, and Data Integration" },
    { src: "/photos/data-science-methodology.png", title: "Data Science Methodology" },
    { src: "/photos/database-management-essentials.png", title: "Database Management Essentials" },
    { src: "/photos/create-high-fidelity-designs-and-prototypes-in-figma.png", title: "Create High-Fidelity Designs and Prototypes in Figma" },
    { src: "/photos/client-needs-and-software-requirements.png", title: "Client Needs and Software Requirements" }
  ];

  const openModal = (src, title) => {
    setModalImage(src);
    setModalTitle(title);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="certifications-page">
      <div className="certifications-container">

        {/* ===== SALESFORCE ===== */}
        <section className="salesforce-section">
          <h2>Salesforce</h2>
          <p>
            Check out my Salesforce Trailhead badges and certifications showcasing
            hands-on learning and platform expertise.
          </p>
          <a
            href="https://www.salesforce.com/trailblazer/franchezckapascual"
            target="_blank"
            rel="noopener noreferrer"
            className="trailhead-btn"
          >
            View Trailhead Profile
          </a>
        </section>

        {/* ===== CERTIFICATES ===== */}
        <section className="certificates-section">
          <h2 className="section-title">Certificates</h2>

          <div className="certificates-grid">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="certificate-card"
                onClick={() => openModal(cert.src, cert.title)}
              >
                <img src={cert.src} alt={cert.title} />
                <h3>{cert.title}</h3>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* ===== MODAL ===== */}
      {isModalOpen && (
        <div className="certificate-modal" onClick={closeModal}>
          <div className="modal-inner" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-icon" onClick={closeModal} aria-label="Close">
            ×
            </button>
            <img src={modalImage} alt={modalTitle} />
            <p>{modalTitle}</p>
          </div>
        </div>
      )}
    </section>
  );
}
