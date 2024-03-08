import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from '../redux/actions/cartActions';
import { decreaseIceCreamQty } from '../redux/actions/iceCreamAction';
function Modal1(props) {
  const [show, setShow] = useState(false);
  const dispatch=useDispatch()
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
//   const addToCart1 = (item) => {
//     dispatch(decreaseIceCreamQty(item.id))
//     dispatch(addToCart(item))
// }
  return (
    <>
      <Button id="btn"  variant="primary" onClick={handleShow}>
      product details
      </Button>
    
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton >
          <Modal.Title>{props.name}</Modal.Title>
          <button className="close-button" onClick={handleClose}><FaTimes /></button>
        </Modal.Header>

       

        <Modal.Body>
    <span style={{ fontWeight: 'bold' }}>price:</span> {props.price}
       <br></br>
       <span style={{ fontWeight: 'bold' }}>description:</span> {props.description}
      </Modal.Body>
        <Modal.Footer>
          <Button id="close" class="btn btn-outline-dark" variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <button class="btn btn-outline-dark" id="addToCart" variant="primary" onClick={(e) => {
                                    e.preventDefault();
                                    dispatch(decreaseIceCreamQty(props.id));
                                    dispatch(addToCart(props.item))
                                }}>ADD TO CART</button>
          {/* <p>{props.item.qty}</p> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modal1;