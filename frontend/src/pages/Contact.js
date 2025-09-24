import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 20%, #334155 40%, #1e293b 60%, #0f172a 100%)',
      paddingBottom: '60px'
    }}>
      {/* Hero Section */}
      <div style={{
        textAlign: 'center',
        padding: '120px 20px',
        background: `
          linear-gradient(rgba(15, 23, 42, 0.75), rgba(30, 41, 59, 0.8)), 
          url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=800&fit=crop&crop=center') center/cover no-repeat
        `,
        color: 'white',
        marginBottom: '80px',
        position: 'relative',
        minHeight: '500px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ position: 'relative', zIndex: '2', maxWidth: '800px' }}>
          <h1 style={{
            fontSize: '5rem',
            fontWeight: '800',
            marginBottom: '30px',
            background: 'linear-gradient(45deg, #ffffff 0%, #d4af37 50%, #f7d794 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontFamily: 'serif'
          }}>
            Contact Us
          </h1>
          <p style={{
            fontSize: '1.6rem',
            maxWidth: '650px',
            margin: '0 auto',
            color: '#f1f5f9'
          }}>
            Get in touch with our premium customer service team
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div style={{
        padding: '0 40px',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
          gap: '60px'
        }}>
          {/* Contact Form */}
          <div style={{
            backgroundColor: '#1e293b',
            borderRadius: '25px',
            padding: '50px',
            border: '1px solid #334155'
          }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '800',
              marginBottom: '30px',
              background: 'linear-gradient(45deg, #f8fafc, #d4af37, #f8fafc)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textAlign: 'center'
            }}>
              Send us a Message
            </h2>

            {submitted ? (
              <div style={{
                textAlign: 'center',
                padding: '60px 20px',
                color: '#d4af37'
              }}>
                <div style={{ fontSize: '4rem', marginBottom: '20px' }}>✅</div>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '15px', color: '#f8fafc' }}>
                  Message Sent Successfully!
                </h3>
                <p style={{ color: '#cbd5e1', fontSize: '1.1rem' }}>
                  We'll get back to you within 24 hours
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '25px' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    color: '#f8fafc',
                    fontSize: '1rem',
                    fontWeight: '600'
                  }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '15px 20px',
                      borderRadius: '15px',
                      border: '2px solid #475569',
                      background: 'rgba(51, 65, 85, 0.5)',
                      color: '#f8fafc',
                      fontSize: '1rem'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '25px' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    color: '#f8fafc',
                    fontSize: '1rem',
                    fontWeight: '600'
                  }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '15px 20px',
                      borderRadius: '15px',
                      border: '2px solid #475569',
                      background: 'rgba(51, 65, 85, 0.5)',
                      color: '#f8fafc',
                      fontSize: '1rem'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '25px' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    color: '#f8fafc',
                    fontSize: '1rem',
                    fontWeight: '600'
                  }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '15px 20px',
                      borderRadius: '15px',
                      border: '2px solid #475569',
                      background: 'rgba(51, 65, 85, 0.5)',
                      color: '#f8fafc',
                      fontSize: '1rem'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '30px' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    color: '#f8fafc',
                    fontSize: '1rem',
                    fontWeight: '600'
                  }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    style={{
                      width: '100%',
                      padding: '15px 20px',
                      borderRadius: '15px',
                      border: '2px solid #475569',
                      background: 'rgba(51, 65, 85, 0.5)',
                      color: '#f8fafc',
                      fontSize: '1rem',
                      resize: 'vertical',
                      minHeight: '120px'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: '100%',
                    background: 'linear-gradient(135deg, #d4af37 0%, #f7d794 100%)',
                    color: '#0f172a',
                    border: '3px solid #d4af37',
                    padding: '18px 40px',
                    borderRadius: '25px',
                    cursor: 'pointer',
                    fontSize: '1.1rem',
                    fontWeight: '700',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    transition: 'all 0.4s ease'
                  }}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div>
            <div style={{
              backgroundColor: '#1e293b',
              borderRadius: '25px',
              padding: '50px',
              marginBottom: '40px',
              border: '1px solid #334155'
            }}>
              <h3 style={{
                fontSize: '2rem',
                fontWeight: '800',
                marginBottom: '30px',
                background: 'linear-gradient(45deg, #f8fafc, #d4af37, #f8fafc)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textAlign: 'center'
              }}>
                Get in Touch
              </h3>

              <div style={{ marginBottom: '30px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '20px'
                }}>
                  <div style={{
                    fontSize: '2rem',
                    marginRight: '20px',
                    color: '#d4af37'
                  }}>
                    📞
                  </div>
                  <div>
                    <div style={{
                      color: '#f8fafc',
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      marginBottom: '5px'
                    }}>
                      Phone
                    </div>
                    <div style={{
                      color: '#cbd5e1',
                      fontSize: '1rem'
                    }}>
                      +91 98765 43210
                    </div>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '20px'
                }}>
                  <div style={{
                    fontSize: '2rem',
                    marginRight: '20px',
                    color: '#d4af37'
                  }}>
                    📧
                  </div>
                  <div>
                    <div style={{
                      color: '#f8fafc',
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      marginBottom: '5px'
                    }}>
                      Email
                    </div>
                    <div style={{
                      color: '#cbd5e1',
                      fontSize: '1rem'
                    }}>
                      info@dripsole.com
                    </div>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '20px'
                }}>
                  <div style={{
                    fontSize: '2rem',
                    marginRight: '20px',
                    color: '#d4af37'
                  }}>
                    📍
                  </div>
                  <div>
                    <div style={{
                      color: '#f8fafc',
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      marginBottom: '5px'
                    }}>
                      Address
                    </div>
                    <div style={{
                      color: '#cbd5e1',
                      fontSize: '1rem',
                      lineHeight: '1.5'
                    }}>
                      123 Fashion Street,<br />
                      Premium Plaza, Mumbai - 400001
                    </div>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <div style={{
                    fontSize: '2rem',
                    marginRight: '20px',
                    color: '#d4af37'
                  }}>
                    🕒
                  </div>
                  <div>
                    <div style={{
                      color: '#f8fafc',
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      marginBottom: '5px'
                    }}>
                      Store Hours
                    </div>
                    <div style={{
                      color: '#cbd5e1',
                      fontSize: '1rem',
                      lineHeight: '1.5'
                    }}>
                      Mon - Sat: 10:00 AM - 10:00 PM<br />
                      Sunday: 11:00 AM - 8:00 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
