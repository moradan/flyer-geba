import BotonNuevo from '@/components/BotonNuevo'
import BotonGuardar from './BotonGuardar';
import BotonAbrir from './BotonAbrir';
import BotonCompartir from './BotonCompartir';


export default function PanelControl() {
    return (
        <>
            <div className='col-6 col-sm-3'>
                <BotonNuevo />
            </div>
            <div className='col-6 col-sm-3'>
                <BotonGuardar />
            </div>
            <div className='col-6 col-sm-3'>
                <BotonAbrir />
            </div>
            <div className='col-6 col-sm-3'>
                <BotonCompartir />
            </div>
        </>
    );
}