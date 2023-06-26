import { InputNumber, InputNumberValueChangeEvent } from 'primereact/inputnumber';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton, RadioButtonChangeEvent } from 'primereact/radiobutton';
import { classNames } from 'primereact/utils';

import { Demo } from '../../../types/demo';

interface ProdutoEditarProps {
    product: Demo.Product
    productDialog: boolean
    submitted: boolean
    productDialogFooter: JSX.Element
    hideDialog: () => void
    onCategoryChange: any
    onInputChange: any
    onInputNumberChange: any
}

const ProdutoEditar = ({ product, productDialog, submitted, productDialogFooter,
    hideDialog, onCategoryChange, onInputChange, onInputNumberChange }: ProdutoEditarProps) => {
    return (
        <Dialog visible={productDialog} style={{ width: '450px' }} header="Product Details" modal className="p-fluid" footer={productDialogFooter} onHide={hideDialog}>
            {product?.image && <img src={`/demo/images/product/${product?.image}`} alt={product?.image} width="150" className="mt-0 mx-auto mb-5 block shadow-2" />}
            <div className="field">
                <label htmlFor="name">Nome</label>
                <InputText id="name" value={product?.name} onChange={(e) => onInputChange(e, 'name')} required autoFocus className={classNames({ 'p-invalid': submitted && !product?.name })} />
                {submitted && !product?.name && <small className="p-invalid">O nome é obrigatório.</small>}
            </div>
            <div className="field">
                <label htmlFor="description">Descrição</label>
                <InputTextarea id="description" value={product?.description} onChange={(e) => onInputChange(e, 'description')} required rows={3} cols={20} />
            </div>

            <div className="field">
                <label className="mb-3">Category</label>
                <div className="formgrid grid">
                    <div className="field-radiobutton col-6">
                        <RadioButton inputId="category1" name="category" value="Accessories" onChange={onCategoryChange} checked={product?.category === 'Accessories'} />
                        <label htmlFor="category1">Accessórios</label>
                    </div>
                    <div className="field-radiobutton col-6">
                        <RadioButton inputId="category2" name="category" value="Clothing" onChange={onCategoryChange} checked={product?.category === 'Clothing'} />
                        <label htmlFor="category2">Vestuário</label>
                    </div>
                    <div className="field-radiobutton col-6">
                        <RadioButton inputId="category3" name="category" value="Electronics" onChange={onCategoryChange} checked={product?.category === 'Electronics'} />
                        <label htmlFor="category3">Eletrônicos</label>
                    </div>
                    <div className="field-radiobutton col-6">
                        <RadioButton inputId="category4" name="category" value="Fitness" onChange={onCategoryChange} checked={product?.category === 'Fitness'} />
                        <label htmlFor="category4">Moda Fitness</label>
                    </div>
                </div>
            </div>

            <div className="formgrid grid">
                <div className="field col">
                    <label htmlFor="price">Preço</label>
                    <InputNumber id="price" value={product?.price} onValueChange={(e) => onInputNumberChange(e, 'price')} mode="currency" currency="USD" locale="en-US" />
                </div>
                <div className="field col">
                    <label htmlFor="quantity">Quantidade</label>
                    <InputNumber id="quantity" value={product?.quantity} onValueChange={(e) => onInputNumberChange(e, 'quantity')} />
                </div>
            </div>
        </Dialog>
    )
}

export default ProdutoEditar