import { Component, Fragment, ReactNode } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

type BackdropProps = {
  onClose: () => void;
};

export class Backdrop extends Component<BackdropProps> {
  render(): ReactNode {
    return <div className={styles.backdrop} onClick={this.props.onClose}></div>;
  }
}

export class ModalOverlay extends Component {
  render(): ReactNode {
    return (
      <div className={styles.modal}>
        <div className={styles.content}>{this.props.children}</div>
      </div>
    );
  }
}

type ModalProps = {
  onClose: () => void;
};

export default class Modal extends Component<ModalProps> {
  portal = document.getElementById("overlays");

  render(): ReactNode {
    return (
      <Fragment>
        {ReactDOM.createPortal(
          <Backdrop onClose={this.props.onClose} />,
          this.portal as Element
        )}
        {ReactDOM.createPortal(
          <ModalOverlay>{this.props.children}</ModalOverlay>,
          this.portal as Element
        )}
      </Fragment>
    );
  }
}
