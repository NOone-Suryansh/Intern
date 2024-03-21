import { View, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const Card = ({ title, imageUrl, description, price, city }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleOpenPopup = () => {
    setIsVisible(true);
  };

  const handleClosePopup = () => {
    setIsVisible(false);
  };
  return (
    <div className=''>
    <View>
      <TouchableOpacity onPress={handleOpenPopup} >
      <div className="my-3 relative ">
      <div className="card" style={{ width: "18rem" }}>
        <img src={imageUrl} className="card-img-top w-11 rounded-full h-11 m-3" alt="..." />
        <div className="card-body">
          <h5 className="card-title font-semibold">{title}</h5>
          <p className="card-text text-richblack-300">{city}</p>
          <button className="border border-richblack-900 rounded-full text-center mt-4 py-1 px-2">
            {price}
          </button>
        </div>
      </div>
    </div>
      </TouchableOpacity>

      <Modal  visible={isVisible} transparent={true} animationType="fade">
        <TouchableOpacity style={styles.modalBackground} activeOpacity={1} onPress={handleClosePopup}>
          <View style={styles.popupContainer}>
            <div className='w-[40vw] h-[40vh]'>
              <div className='flex gap-2 align-center'>
                <img className='h-9 w-9 mt-2' src={imageUrl} alt=""  />
                <div className='flex flex-col'>
                  <p className='font-semibold'>{title}</p>
                  <p className='text-richblack-300'>{city}</p>
                </div>
              </div>
              <p className='font-semibold text-lg mt-3'>Description</p>
              <p>{description}</p>
              <button className='w-fit bg-green rounded-3 p-2 mx-[40%] mt-[59px]'>Apply Now</button>
            </div>
            {/* Add your desired content for the pop-up */}
            <TouchableOpacity onPress={handleClosePopup} >
              
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
    </div>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popupContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  popupTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Card;
