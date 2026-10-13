'use client';

import { useState, useEffect } from 'react';

type Certification = {
  code: string;
  title: { en: string; es: string };
  issuer: string;
  date: { en: string; es: string };
  proof: string;
};

const CERTIFICATIONS: Certification[] = [
  // INE Security
  { code: 'eWPTX', title: { en: 'Web Application Penetration Tester eXtreme', es: 'Probador de Penetración Web eXtreme' }, issuer: 'INE Security', date: { en: 'February 2026', es: 'Febrero 2026' }, proof: '/certs/ine-ewptx.jpg' },
  { code: 'eCPPT', title: { en: 'Certified Professional Penetration Tester', es: 'Probador de Penetración Profesional Certificado' }, issuer: 'INE Security', date: { en: '2026', es: '2026' }, proof: '/certs/ine-ecppt.jpg' },
  { code: 'eJPT', title: { en: 'Junior Penetration Tester', es: 'Probador de Penetración Junior' }, issuer: 'INE Security', date: { en: 'September 2026', es: 'Septiembre 2026' }, proof: '/certs/ine-ejpt.jpg' },
  { code: 'eSOC', title: { en: 'Security Operations Certified', es: 'Certificado en Operaciones de Seguridad' }, issuer: 'INE Security', date: { en: 'July 2026', es: 'Julio 2026' }, proof: '/certs/ine-esoc.jpg' },
  { code: 'eIAMA', title: { en: 'Identity & Access Management Associate', es: 'Asociado en Gestión de Identidad y Acceso' }, issuer: 'INE Security', date: { en: 'October 2026', es: 'Octubre 2026' }, proof: '/certs/ine-eiama.jpg' },
  // Cisco
  { code: 'CCNP', title: { en: 'Cisco Certified Network Professional Enterprise', es: 'Cisco Certified Network Professional Enterprise' }, issuer: 'Cisco', date: { en: 'March 2026', es: 'Marzo 2026' }, proof: '/certs/cisco-ccnp-enterprise.jpg' },
  { code: 'ETHICAL HACKING', title: { en: 'Ethical Hacker', es: 'Hacker Ético' }, issuer: 'Cisco Networking Academy', date: { en: '2024', es: '2024' }, proof: '/certs/ethical-hacker.png' },
  { code: 'ENDPOINT', title: { en: 'Endpoint Security', es: 'Seguridad de Endpoints' }, issuer: 'Cisco Networking Academy', date: { en: '2024', es: '2024' }, proof: '/certs/endpoint-security-cisco.png' },
  { code: 'NETWORKING', title: { en: 'Networking Devices & Configuration', es: 'Dispositivos de Red y Configuración' }, issuer: 'Cisco Networking Academy', date: { en: '2024', es: '2024' }, proof: '/certs/networking-devices.png' },
  { code: 'PYTHON', title: { en: 'Python Essentials 1', es: 'Fundamentos de Python 1' }, issuer: 'Cisco Networking Academy', date: { en: '2024', es: '2024' }, proof: '/certs/python-essentials.png' },
  // CompTIA
  { code: 'AUTOOPS+', title: { en: 'CompTIA AutoOps+ — Expansion Series', es: 'CompTIA AutoOps+ — Serie de Expansión' }, issuer: 'CompTIA', date: { en: 'January 2026', es: 'Enero 2026' }, proof: '/certs/comptia-autoops.jpg' },
  // Certiplus
  { code: 'CYBERSECURITY', title: { en: 'Cybersecurity Certification Expert', es: 'Experto en Certificación de Ciberseguridad' }, issuer: 'Certiplus LLC', date: { en: 'September 2026', es: 'Septiembre 2026' }, proof: '/certs/certiplus-cybersecurity-expert.jpg' },
  // INDOTEL
  { code: 'CYBERSECURITY · 80H', title: { en: 'Cybersecurity — Advanced Level', es: 'Ciberseguridad — Nivel Avanzado' }, issuer: 'INDOTEL · IDB · Cymetria', date: { en: 'August 2026', es: 'Agosto 2026' }, proof: '/certs/indotel-ciberseguridad-avanzado.jpg' },
  { code: 'CYBERSECURITY · 80H', title: { en: 'Cybersecurity — Intermediate Level', es: 'Ciberseguridad — Nivel Intermedio' }, issuer: 'INDOTEL · IDB · Cymetria', date: { en: 'April 2026', es: 'Abril 2026' }, proof: '/certs/indotel-ciberseguridad-intermedio.jpg' },
  // Seguridad CERO
  { code: 'ISO 27001', title: { en: 'ISO 27001 Certification Path', es: 'Camino a la Certificación ISO 27001' }, issuer: 'Seguridad CERO', date: { en: '2024', es: '2024' }, proof: '/certs/camino-iso27001.jpg' },
  { code: 'ISO 27001', title: { en: 'ISO 27001 Implementation & Audit', es: 'Implementación y Auditoría ISO 27001' }, issuer: 'Seguridad CERO', date: { en: '2024', es: '2024' }, proof: '/certs/iso-auditor.jpg' },
  // HP LIFE
  { code: 'FINANCE', title: { en: 'Cash Flow', es: 'Flujo de Caja' }, issuer: 'HP LIFE Foundation', date: { en: '2024', es: '2024' }, proof: '/certs/cash-flow.jpg' },
  { code: 'INVENTORY', title: { en: 'Inventory Management', es: 'Administración de Inventario' }, issuer: 'HP LIFE Foundation', date: { en: '2024', es: '2024' }, proof: '/certs/inventory-management.jpg' },
  { code: 'FINANCE', title: { en: 'Finance Basics', es: 'Aspectos Básicos de Finanzas' }, issuer: 'HP LIFE Foundation', date: { en: '2024', es: '2024' }, proof: '/certs/finance-basics.jpg' },
];

export default function CertificationsGallery() {
  const [lang, setLang] = useState<'en' | 'es'>('en');
  const [selected, setSelected] = useState<Certification | null>(null);

  // Detectar idioma del navegador
  useEffect(() => {
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('es')) setLang('es');
  }, []);

  // Cerrar modal con ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <>
      <div className="cert-lang-switch">
        <button
          className={lang === 'en' ? 'active' : ''}
          onClick={() => setLang('en')}
        >
          EN
        </button>
        <button
          className={lang === 'es' ? 'active' : ''}
          onClick={() => setLang('es')}
        >
          ES
        </button>
      </div>

      <div className="certifications-grid">
        {CERTIFICATIONS.map((cert, i) => (
          <article
            className="certification-card featured-cert"
            key={`${cert.code}-${i}`}
            onClick={() => setSelected(cert)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setSelected(cert)}
          >
            <p className="project-type">{cert.code}</p>
            <h4>{cert.title[lang]}</h4>
            <p>{cert.issuer}</p>
            <span>
              {lang === 'en' ? 'Issued' : 'Emitido'} {cert.date[lang]}
            </span>
            <span className="cert-view-hint">
              {lang === 'en' ? 'Click to view' : 'Clic para ver'} →
            </span>
          </article>
        ))}
      </div>

      {/* MODAL / LIGHTBOX */}
      {selected && (
        <div
          className="cert-modal-overlay"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="cert-modal-header">
              <div>
                <h4>{selected.title[lang]}</h4>
                <p>
                  {selected.issuer} · {selected.date[lang]}
                </p>
              </div>
              <button
                className="cert-modal-close"
                onClick={() => setSelected(null)}
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            <div className="cert-modal-body">
              <img src={selected.proof} alt={selected.title[lang]} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
