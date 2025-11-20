import { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const certifications = [
  { name: 'ISO 9001', description: 'Gestión de Calidad' },
  { name: 'CE', description: 'Conformidad Europea' },
  { name: 'FCC', description: 'Federal Communications Commission' },
  { name: 'RoHS', description: 'Restricción de Sustancias Peligrosas' },
  { name: 'Energy Star', description: 'Eficiencia Energética' },
  { name: 'UL', description: 'Underwriters Laboratories' },
  { name: 'IEC', description: 'Estándares Internacionales' },
  { name: 'NEMA', description: 'Asociación de Fabricantes Eléctricos' },
];

export default function BrandsSlider() {
  const swiperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (swiperRef.current) {
      new Swiper(swiperRef.current, {
        modules: [Autoplay],
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        breakpoints: {
          640: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 60,
          },
        },
      });
    }
  }, []);

  return (
    <section className="brands-slider-section">
      <div className="container">
        <div className="text-center mb-5">
          <h3 className="h5 text-uppercase text-muted mb-2">Certificaciones y Estándares</h3>
          <p className="text-muted">Calidad garantizada a nivel mundial</p>
        </div>

        <div ref={swiperRef} className="swiper brands-swiper">
          <div className="swiper-wrapper">
            {certifications.map((cert, index) => (
              <div key={index} className="swiper-slide">
                <div className="brand-item">
                  <div className="cert-badge">
                    <div className="cert-name">{cert.name}</div>
                    <div className="cert-description">{cert.description}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .brands-slider-section {
          padding: 60px 0;
          background: #ffffff;
          border-top: 1px solid #e9ecef;
          border-bottom: 1px solid #e9ecef;
        }

        .brands-swiper {
          padding: 20px 0;
        }

        .brand-item {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 120px;
        }

        .cert-badge {
          width: 100%;
          height: 100px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          border: 2px solid #dee2e6;
          border-radius: 12px;
          transition: all 0.3s ease;
          padding: 15px;
          text-align: center;
        }

        .cert-badge:hover {
          transform: translateY(-5px);
          border-color: var(--forza-primary);
          box-shadow: 0 10px 25px rgba(0, 102, 204, 0.15);
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
        }

        .cert-name {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--forza-primary);
          margin-bottom: 5px;
        }

        .cert-description {
          font-size: 0.7rem;
          color: #6c757d;
          font-weight: 500;
          line-height: 1.3;
        }

        @media (max-width: 768px) {
          .brands-slider-section {
            padding: 40px 0;
          }

          .brand-item {
            height: 100px;
          }

          .cert-badge {
            height: 85px;
            padding: 10px;
          }

          .cert-name {
            font-size: 0.95rem;
          }

          .cert-description {
            font-size: 0.65rem;
          }
        }
      `}</style>
    </section>
  );
}
