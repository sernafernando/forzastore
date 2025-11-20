import { useState, type FormEvent } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    producto: '',
    mensaje: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Simulación de envío (aquí conectarías con tu backend)
    setTimeout(() => {
      setStatus('success');
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        empresa: '',
        producto: '',
        mensaje: ''
      });

      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="section-padding bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3">
            Contáctanos <span className="gradient-text">Ahora</span>
          </h2>
          <p className="lead text-muted">Estamos listos para ayudarte a encontrar la solución perfecta</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card border-0 shadow-lg p-4">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="nombre" className="form-label fw-semibold">Nombre completo *</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                        placeholder="Juan Pérez"
                      />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label fw-semibold">Email *</label>
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="juan@empresa.com"
                      />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="telefono" className="form-label fw-semibold">Teléfono</label>
                      <input
                        type="tel"
                        className="form-control form-control-lg"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        placeholder="+1 234 567 8900"
                      />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="empresa" className="form-label fw-semibold">Empresa</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="empresa"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleChange}
                        placeholder="Tu Empresa S.A."
                      />
                    </div>

                    <div className="col-12">
                      <label htmlFor="producto" className="form-label fw-semibold">Producto de interés</label>
                      <select
                        className="form-select form-select-lg"
                        id="producto"
                        name="producto"
                        value={formData.producto}
                        onChange={handleChange}
                      >
                        <option value="">Selecciona una opción</option>
                        <option value="ups-empresarial">UPS Empresarial</option>
                        <option value="ups-hogar">UPS Hogar y Oficina</option>
                        <option value="solar">Inversores Solares</option>
                        <option value="reguladores">Reguladores de Voltaje</option>
                        <option value="pdu">PDU y Accesorios</option>
                        <option value="gaming">Soluciones Gaming</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>

                    <div className="col-12">
                      <label htmlFor="mensaje" className="form-label fw-semibold">Mensaje *</label>
                      <textarea
                        className="form-control form-control-lg"
                        id="mensaje"
                        name="mensaje"
                        rows={5}
                        value={formData.mensaje}
                        onChange={handleChange}
                        required
                        placeholder="Cuéntanos sobre tus necesidades de energía..."
                      ></textarea>
                    </div>

                    <div className="col-12">
                      {status === 'success' && (
                        <div className="alert alert-success d-flex align-items-center" role="alert">
                          <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:">
                            <use xlinkHref="#check-circle-fill"/>
                          </svg>
                          <div>
                            ¡Gracias por contactarnos! Te responderemos pronto.
                          </div>
                        </div>
                      )}

                      {status === 'error' && (
                        <div className="alert alert-danger" role="alert">
                          Hubo un error al enviar el mensaje. Por favor intenta nuevamente.
                        </div>
                      )}

                      <button
                        type="submit"
                        className="btn-forza-primary w-100 btn-lg"
                        disabled={status === 'loading'}
                      >
                        {status === 'loading' ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Enviando...
                          </>
                        ) : (
                          'Enviar Mensaje'
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="row mt-5 g-4">
              <div className="col-md-4 text-center">
                <div className="p-3">
                  <div className="mb-3" style={{ fontSize: '2.5rem' }}>📧</div>
                  <h5 className="fw-bold mb-2">Email</h5>
                  <a href="mailto:info@forzaups.com" className="text-decoration-none">info@forzaups.com</a>
                </div>
              </div>
              <div className="col-md-4 text-center">
                <div className="p-3">
                  <div className="mb-3" style={{ fontSize: '2.5rem' }}>📞</div>
                  <h5 className="fw-bold mb-2">Teléfono</h5>
                  <a href="tel:+1234567890" className="text-decoration-none">+1 (234) 567-8900</a>
                </div>
              </div>
              <div className="col-md-4 text-center">
                <div className="p-3">
                  <div className="mb-3" style={{ fontSize: '2.5rem' }}>💬</div>
                  <h5 className="fw-bold mb-2">Chat en vivo</h5>
                  <a href="#" className="text-decoration-none">Hablar con soporte</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SVG Icons */}
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
        <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
        </symbol>
      </svg>
    </section>
  );
}
