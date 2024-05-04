import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
    
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "129c47f4-a425-43a2-aca7-38330d458be8");

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        }).then((res) => res.json());

        if (res.success) {
            console.log("Sucesso", res);
            setResult(res.message);
            event.target.reset();
        } else {
            console.log("Erro", res);
            setResult(res.message);
        }
    }
  
    return (
    <div className='contact'>
        <div className='contact-col'>
            <h3>Nos envie uma mensagem <img src={msg_icon} alt="" /></h3>
            <p>Estamos aqui para ouvir você! Envie-nos uma mensagem e entraremos em contato o mais breve possível.</p>
            <ul>
                <li> <img src={mail_icon} alt="" /> sosanimals@dev.com</li>
                <li><img src={phone_icon} alt="" />+55 (81) 1234 - 5678</li>
                <li><img src={location_icon} alt="" />Recife</li>
            </ul>
        </div>
        <div className='contact-col'>
            <form onSubmit={onSubmit}>
                <label>Seu nome</label>
                <input type="text" name='name' placeholder='Insira o seu nome'
                required/>

                <label>Telefone</label>
                <input type="tel" name='phone' placeholder='Insira seu número'
                required/>

                <label>Deixe sua mensagem aqui</label>
                <textarea name="mensagem" rows="6" placeholder='Insira sua mensagem' required></textarea>

                <button type='submit' className='btn dark-btn'>Enviar <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact
