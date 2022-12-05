import React from 'react';
// import { Container } from './styles';
import '../Styles/Modal.scss'
import Modal from 'react-bootstrap/Modal';
import Max from '../weather Icons/thermometer-up.png'
import regular from '../weather Icons/thermometer.png'
import min from '../weather Icons/thermometer-down.png'
import umidade from '../weather Icons/umidade.png'
import wind from '../weather Icons/wind.png'
function ModalClima(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.Clima?.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h2>Clima Atual: {props.Clima?.weather[0].description}</h2>
                <img height={"200"} src={`https://openweathermap.org/img/wn/${props.Clima?.weather[0].icon}@4x.png`} alt="" />
                <div className="Modal-Temperature">
                    <div className="MaxTemp">
                        <img src={Max} alt="Max" />
                        <p>{parseInt(props.Clima?.main?.temp_max)}°C</p>
                    </div>
                    <div className="MTemp">
                        <img src={regular} alt="Max" />
                        <p>{parseInt(props.Clima?.main?.temp)}°C</p>

                    </div>
                    <div className="MinTemp">
                        <img src={min} alt="Max" />
                        <p>{parseInt(props.Clima?.main?.temp_min)}°C</p>
                    </div>
                </div>
                <div className="ModalInfo">
                    <div>
                        <img src={umidade} alt="umidade" />
                        <p>{props.Clima?.main?.humidity}%</p>
                    </div>
                    <div>
                        <img src={wind} width="60" alt="umidade" />
                        <p>{props.Clima?.wind?.speed}Km</p>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default ModalClima;