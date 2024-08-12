import React, { useState } from 'react';

const Cards = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '16px',
    padding: '16px',
    '@media (max-width: 640px)': {
      display: 'block',
      padding: '0'
    }
  };

  const cardStyle = {
    position: 'relative',
    display: 'block',
    overflow: 'hidden',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    textDecoration: 'none',
    color: 'inherit',
    marginBottom: '16px' // Add margin for single column layout on mobile
  };

  const imgContainerStyle = {
    position: 'relative',
    height: '350px', // Adjust as needed
    '@media (min-width: 640px)': {
      height: '450px'
    }
  };

  const imgStyle = {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'opacity 0.3s ease-in-out'
  };

  const img1Style = {
    ...imgStyle,
    opacity: 1
  };

  const img2Style = {
    ...imgStyle,
    opacity: 0
  };

  const imgHoverStyle = {
    opacity: 0
  };

  const cardFooterStyle = {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: '16px',
    color: '#fff'
  };

  const titleStyle = {
    fontSize: '1.25rem',
    fontWeight: '500',
    margin: 0
  };

  const descriptionStyle = {
    marginTop: '0.375rem',
    fontSize: '0.75rem'
  };

  const buttonStyle = {
    marginTop: '0.75rem',
    display: 'inline-block',
    backgroundColor: '#000',
    padding: '8px 20px',
    fontSize: '0.75rem',
    fontWeight: '500',
    textTransform: 'uppercase',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '4px'
  };

  const modalOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const modalContentStyle = {
    backgroundColor: '#fff',
    padding: '24px',
    borderRadius: '8px',
    width: '90%',
    maxWidth: '600px'
  };

  const modalCloseStyle = {
    border: 'none',
    backgroundColor: '#f44336',
    color: '#fff',
    cursor: 'pointer',
    float: 'right',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px'
  };

  const modalInputStyle = {
    marginBottom: '12px',
    padding: '8px',
    border: '1px solid #ddd',
    borderRadius: '4px'
  };

  const modalSubmitStyle = {
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    padding: '10px',
    borderRadius: '4px',
    cursor: 'pointer'
  };

  return (
    <div>
      <div style={gridStyle}>
        {[...Array(9).keys()].map((_, index) => (
          <div key={index} style={cardStyle}>
            <a href="#" style={cardStyle}>
              <div style={imgContainerStyle}>
                <img
                  src="https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"
                  alt=""
                  style={img1Style}
                  className="group-hover:opacity-0"
                />
                <img
                  src="https://images.unsplash.com/photo-1593795899630-b6033c0fa58d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  alt=""
                  style={img2Style}
                  className="group-hover:opacity-100"
                />
              </div>
              <div style={cardFooterStyle}>
                <h3 style={titleStyle}>Skinny Jeans Blue</h3>
                <p style={descriptionStyle}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi dicta impedit
                  aperiam ipsum!
                </p>
                <span style={buttonStyle}>Shop Now</span>
              </div>
            </a>
            <button
              onClick={openModal}
              style={{
                cursor: 'pointer',
                transition: 'all 0.3s ease-in-out',
                backgroundColor: '#3b82f6',
                color: '#fff',
                padding: '8px 24px',
                borderRadius: '8px',
                border: '2px solid #2563eb',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                fontSize: '0.875rem',
                fontWeight: '500',
                textTransform: 'uppercase',
                position: 'relative'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#2563eb';
                e.currentTarget.style.borderBottomWidth = '6px';
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#3b82f6';
                e.currentTarget.style.borderBottomWidth = '4px';
                e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.backgroundColor = '#2563eb';
                e.currentTarget.style.borderBottomWidth = '2px';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(2px)';
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.backgroundColor = '#3b82f6';
                e.currentTarget.style.borderBottomWidth = '4px';
                e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Button
            </button>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div style={modalOverlayStyle}>
          <div style={modalContentStyle}>
            <button style={modalCloseStyle} onClick={closeModal}>X</button>
            <h2 style={{ marginTop: 0 }}>Contact Form</h2>
            <form style={{ display: 'flex', flexDirection: 'column' }}>
              <input type="text" placeholder="Full Name" style={modalInputStyle} />
              <input type="email" placeholder="Email" style={modalInputStyle} />
              <input type="number" placeholder="Phone Number" style={modalInputStyle} />
              <input type="text" placeholder="Company Name" style={modalInputStyle} />
              <input type="text" placeholder="Job Title" style={modalInputStyle} />
              <input type="date" style={modalInputStyle} />
              <textarea placeholder="Message" style={{ ...modalInputStyle, height: '100px' }}></textarea>
              <button type="submit" style={modalSubmitStyle}>Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cards;
