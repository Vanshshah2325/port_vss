import React, { useState, useEffect, useRef } from 'react'
import { Container, Row, Col, Button, Modal } from 'react-bootstrap'
import './Certificate.css'

// Contract:
// - Input: optional certificate file placed in public/certificate.pdf or public/certificate.png
// - Output: an on-screen viewer with watermark and deterrents against downloads/screenshots (best-effort)
// - Error modes: file missing -> shows placeholder and instructions

const Certificate = () => {
  const [visible, setVisible] = useState(false)
  const [showPrompt, setShowPrompt] = useState(false)
  const [blobUrl, setBlobUrl] = useState(null)
  const [gallery, setGallery] = useState([])
  const [selectedIdx, setSelectedIdx] = useState(-1)
  const viewerRef = useRef(null)

  useEffect(() => {
    // On mount, try to auto-load the certificate from public folder.
    const load = async () => {
      try {
        const imgResp = await fetch('/certificate.png')
        if (imgResp.ok) {
          const blob = await imgResp.blob()
          setBlobUrl(URL.createObjectURL(blob))
          setVisible(true)
          return
        }
      } catch (e) {
        // ignore
      }

      try {
        const pdfResp = await fetch('/certificate.pdf')
        if (pdfResp.ok) {
          const blob = await pdfResp.blob()
          setBlobUrl(URL.createObjectURL(blob))
          setVisible(true)
          return
        }
      } catch (e) {
        // ignore
      }
    }

    load()
  }, [])

  // Try to build a static gallery using webpack's require.context (works with CRA/Webpack)
  useEffect(() => {
    try {
      // import all files from assets/Certificates
      const req = require.context('../assets/Certificates', false, /\.(png|jpe?g|gif)$/i)
      const keys = req.keys().map((k) => req(k))
      setGallery(keys)
    } catch (e) {
      // folder may be missing or bundler may not support require.context; leave gallery empty
    }
  }, [])

  // Helper: open modal viewer for an image index
  const openViewer = (idx) => {
    setSelectedIdx(idx)
  }

  const closeViewer = () => {
    setSelectedIdx(-1)
  }

  return (
    <section className="certificate-section">
      <Container>
        <Row className="justify-content-center">
          <Col md={10} className="text-center">
            <h2 className="certificate-title">Certificate</h2>
            {/* <p className="muted">Secure viewer — downloads & direct saves are disabled (best-effort).</p> */}

            <div className="certificate-gallery">
              {gallery && gallery.length > 0 ? (
                <Row className="g-3">
                  {gallery.map((src, i) => (
                    // xs=12 -> 1 per row on mobile; sm/md/lg=6 -> 2 per row on larger screens
                    <Col key={i} xs={12} sm={6} md={6} lg={6} className="thumb-col">
                      <div
                        className="thumb"
                        onClick={() => openViewer(i)}
                        onContextMenu={(e) => e.preventDefault()}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && openViewer(i)}
                      >
                        <img src={src} alt={`certificate-${i}`} draggable={false} />
                      </div>
                    </Col>
                  ))}
                </Row>
              ) : (
                <div className="no-file">No certificate images found. Place images in src/assets/Certificates/</div>
              )}
            </div>

            <Modal show={selectedIdx > -1} onHide={closeViewer} size="lg" centered>
              <Modal.Header closeButton>
                <Modal.Title>Certificate</Modal.Title>
              </Modal.Header>
              <Modal.Body className="modal-body-center">
                {selectedIdx > -1 && (
                  <div className="modal-img-wrap" onContextMenu={(e) => e.preventDefault()}>
                    <img src={gallery[selectedIdx]} alt={`certificate-full-${selectedIdx}`} className="modal-cert-img" draggable={false} />
                    <div className="modal-watermark">Vansh Shah — Verified</div>
                  </div>
                )}
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={closeViewer}>Close</Button>
              </Modal.Footer>
            </Modal>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Certificate
