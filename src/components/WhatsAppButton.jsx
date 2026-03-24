import './WhatsAppButton.css';
import whatsappLogo from '/assets/images/logos/whatsapp logo.jpg';

export default function WhatsAppButton() {
  return (
    <a 
      href="https://wa.me/212600000000" 
      className="whatsapp-float" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      style={{padding: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
    >
      <img src={whatsappLogo} alt="WhatsApp" style={{width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover'}} />
    </a>
  );
}
