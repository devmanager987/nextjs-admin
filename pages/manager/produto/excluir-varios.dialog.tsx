import { InputNumber, InputNumberValueChangeEvent } from 'primereact/inputnumber';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton, RadioButtonChangeEvent } from 'primereact/radiobutton';
import { classNames } from 'primereact/utils';

import { Demo } from '../../../types/demo';

interface ProdutoExcluirVariosProps {
    product: Demo.Product
    deleteProductsDialog: boolean
    deleteProductsDialogFooter: JSX.Element
    hideDeleteProductsDialog: () => void
}

const ProdutoExcluirVarios = ({ product, deleteProductsDialog, deleteProductsDialogFooter, hideDeleteProductsDialog }: ProdutoExcluirVariosProps) => {
    return (
        <Dialog visible={deleteProductsDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteProductsDialogFooter} onHide={hideDeleteProductsDialog}>
            <div className="flex align-items-center justify-content-center">
                <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                {product && <span>Tem certeza de que deseja excluir os produtos selecionados?</span>}
            </div>
        </Dialog>
    )
}

export default ProdutoExcluirVarios