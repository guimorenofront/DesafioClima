import React, { useState } from 'react';
import { UseApi } from '../Helpers/UseApi';
import ModalClima from './wheaterModal';
import ModalError from './ErrorToast';
import Loading from './loading';

// import { Container } from './styles';

function SearchButton({ Search }) {
  
  const [Load, SetLoad] = useState(false)
  const [modalShow, setModalShow] = React.useState(false);
  const [ToastShow, setToastShow] = React.useState(false);
  const [ToastError, setToastError] = React.useState();
  const [dadosRela, SetdadosRela] = useState()

  const FormatData = (data) => {
    return data.split(' ')
  }
  return (
    <>
      <ModalClima
        show={modalShow}
        onHide={() => setModalShow(false)}
        Clima={dadosRela}
      />
      <ModalError
        onHide={() => setToastShow(false)}
        show={ToastShow}
        error={ToastError}
      />
      <button className='Search__PageContainer__Button' isLoading={`${Load}`} onClick={() => UseApi(FormatData(Search), SetLoad, setModalShow, SetdadosRela, setToastError, setToastShow)}>{Load === false ? 'Pesquisar' : <Loading />}  </button>
    </>
  );
}

export default SearchButton;