import { InputNumber, InputNumberValueChangeEvent } from 'primereact/inputnumber';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton, RadioButtonChangeEvent } from 'primereact/radiobutton';
import { classNames } from 'primereact/utils';

import { Demo } from '../../../types/demo';

interface ProdutoExcluirProps {
    product: Demo.Product
    deleteProductDialog: boolean
    deleteProductDialogFooter: JSX.Element
    hideDeleteProductDialog: () => void
}

const ProdutoExcluir = ({ product, deleteProductDialog, deleteProductDialogFooter, hideDeleteProductDialog }: ProdutoExcluirProps) => {
    return (
        <Dialog visible={deleteProductDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteProductDialogFooter} onHide={hideDeleteProductDialog}>
            <div className="flex align-items-center justify-content-center">
                <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                {product && (
                    <span>
                        Tem certeza de que deseja excluir <b>{product.name}</b>?
                    </span>
                )}
            </div>
        </Dialog>
    )
}

export default ProdutoExcluir