import { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Product {
  id: number;
  name: string;
  model: string;
  description: string;
  image: any;
  capacity: string;
  features: string[];
}

interface FeaturedProductsProps {
  products: Product[];
  strapiUrl: string;
}

export default function FeaturedProducts({ products, strapiUrl }: FeaturedProductsProps) {
  const swiperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (swiperRef.current) {
      new Swiper(swiperRef.current, {
        modules: [Navigation, Pagination, Autoplay],
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        },
      });
    }
  }, []);

  // Debug: log products count
  console.log('FeaturedProducts received:', products.length, 'products');

  return (
    <section className="featured-products-section section-padding">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3">
            Productos <span className="gradient-text">Destacados</span>
          </h2>
          <p className="lead text-muted">
            Descubre nuestra línea completa de soluciones de energía
          </p>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-5">
            <p className="text-muted">No hay productos destacados disponibles.</p>
            <p className="text-muted small">Asegúrate de marcar productos como "featured" en Strapi.</p>
          </div>
        ) : (
          <div className="swiper-container-wrapper">
            <div ref={swiperRef} className="swiper">
              <div className="swiper-wrapper">
                {products.map((product: Product) => {
                // Image is now directly in the product object as an array
                const imageUrl = product.image?.[0]?.url
                  ? `${strapiUrl}${product.image[0].url}`
                  : '/images/product-placeholder.svg';

                console.log('Product image URL:', imageUrl);

                return (
                  <div key={product.id} className="swiper-slide">
                    <div className="product-slide-card">
                      <div className="product-image-wrapper">
                        <img
                          src={imageUrl}
                          alt={product.name}
                          className="product-image"
                        />
                      </div>
                      <div className="product-content">
                        <span className="product-model">{product.model}</span>
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-description">{product.description}</p>
                        <div className="product-capacity">
                          <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style={{ marginRight: '6px' }}>
                            <path d="M2 6h10L8 1 4 6z"/>
                            <path d="M5 8v3H4V8H1l3-3 3 3H5zm6 0h3l-3-3-3 3h3v3h1V8z"/>
                          </svg>
                          {product.capacity}
                        </div>
                        <div className="product-features">
                          {product.features?.map((feature: string, idx: number) => (
                            <span key={idx} className="feature-badge">
                              {feature}
                            </span>
                          ))}
                        </div>
                        <a href="#contacto" className="btn-product-details">
                          Ver Detalles →
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </div>
        )}
      </div>

      <style>{`
        .featured-products-section {
          background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%);
        }

        .swiper-container-wrapper {
          position: relative;
          padding: 20px 0 60px;
        }

        .product-slide-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .product-slide-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(0, 102, 204, 0.15);
        }

        .product-image-wrapper {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          padding: 40px 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 250px;
        }

        .product-image {
          width: 100%;
          height: 200px;
          object-fit: contain;
          transition: transform 0.3s ease;
        }

        .product-slide-card:hover .product-image {
          transform: scale(1.05);
        }

        .product-content {
          padding: 25px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .product-model {
          color: var(--forza-primary);
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 8px;
          display: block;
        }

        .product-name {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 12px;
        }

        .product-description {
          color: #6c757d;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 15px;
          flex: 1;
        }

        .product-capacity {
          display: flex;
          align-items: center;
          color: var(--forza-accent);
          font-weight: 600;
          font-size: 0.95rem;
          margin-bottom: 15px;
          padding: 8px 12px;
          background: rgba(0, 168, 232, 0.1);
          border-radius: 8px;
          width: fit-content;
        }

        .product-features {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
        }

        .feature-badge {
          font-size: 0.8rem;
          padding: 5px 12px;
          background: #f8f9fa;
          border: 1px solid #e9ecef;
          border-radius: 20px;
          color: #495057;
          font-weight: 500;
        }

        .btn-product-details {
          display: inline-block;
          color: var(--forza-primary);
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          margin-top: auto;
        }

        .btn-product-details:hover {
          color: var(--forza-accent);
          transform: translateX(5px);
        }

        .swiper-button-next,
        .swiper-button-prev {
          color: var(--forza-primary);
          background: white;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 20px;
          font-weight: bold;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: var(--forza-primary);
          color: white;
        }

        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #ccc;
          opacity: 1;
        }

        .swiper-pagination-bullet-active {
          background: var(--forza-primary);
          width: 30px;
          border-radius: 6px;
        }

        @media (max-width: 768px) {
          .product-image-wrapper {
            min-height: 200px;
            padding: 30px 15px;
          }

          .product-image {
            height: 150px;
          }

          .product-name {
            font-size: 1.25rem;
          }

          .swiper-button-next,
          .swiper-button-prev {
            width: 40px;
            height: 40px;
          }

          .swiper-button-next:after,
          .swiper-button-prev:after {
            font-size: 16px;
          }
        }
      `}</style>
    </section>
  );
}
