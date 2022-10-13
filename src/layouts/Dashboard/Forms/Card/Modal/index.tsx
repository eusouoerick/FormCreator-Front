import { useState } from 'react';
import type { Form } from 'src/types';

import useCardModal from './useCardModal';
import ShareModal from 'src/components/ShareModal';
import * as S from './styles';

type Props = {
  data: Form;
  closeModal: (s: any) => void;
  removeItemById: (id: string) => void;
};

const ModalFormCard = ({ data, closeModal, removeItemById }: Props) => {
  const [toggleShare, setToggleShare] = useState(false);
  const { openNewTab, modalRef, deleteAlert, deleteForm } = useCardModal({
    hash: data.hash,
    formId: data.id,
    closeModal,
    removeItemById,
  });

  return (
    <S.Modal ref={modalRef}>
      {toggleShare && <ShareModal slug={data.hash} closeModal={setToggleShare} />}

      <S.ModalOption onClick={deleteForm} dark={deleteAlert}>
        {!deleteAlert && (
          <>
            <S.Icon className='material-icons' translate='no'>
              delete
            </S.Icon>
            <S.Button css={{ color: 'red' }}>Delete</S.Button>
          </>
        )}
        {deleteAlert && (
          <>
            <S.Icon className='material-icons' translate='no' style={{ color: 'yellow' }}>
              error
            </S.Icon>
            <S.Button css={{ color: 'yellow' }}>Click to confirm</S.Button>
          </>
        )}
      </S.ModalOption>

      <S.ModalOption onClick={() => setToggleShare(true)}>
        <S.Icon className='material-icons' translate='no'>
          share
        </S.Icon>
        <S.Button>Share</S.Button>
      </S.ModalOption>

      <S.ModalOption onClick={openNewTab}>
        <S.Icon className='material-icons' translate='no'>
          open_in_new
        </S.Icon>
        <S.Button>Open in new tab</S.Button>
      </S.ModalOption>
    </S.Modal>
  );
};

export default ModalFormCard;
