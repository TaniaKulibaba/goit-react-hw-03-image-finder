import React, { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
    componentDidMount() {
        console.log('Modal componentDidMount');
        window.addEventListener('keydown', this.handleKeyDown);
    };

    componentWillUnmount() {
        console.log('Modal componentWillUnmount');
        window.removeEventListener('keydown', this.handleKeyDown);
    };
    
    handleKeyDown = e => {
        if (e.code === 'Escape') {
            console.log('Нажали ESC, нужно закрыть модалку');
            this.props.onClose();
        }
    };

    handleBackdropClick = e => {
    //    console.log('Кликнули в бекдроп');

    //    console.log('currentTarget: ', e.currentTarget);
    //    console.log('target: ', e.target);

        if (e.currentTarget === e.target) {
            this.props.onClose();
        }
    };



    render() {
        return createPortal(
            <div className="Overlay" onClick={this.handleBackdropClick}>
                <div className="Modal">
                    <img className="Modal-img" src={this.props.src} alt="" />
                </div>
            </div>,
            modalRoot,
        );
    }
}

export default Modal;