import BotonNuevo from '@/components/BotonNuevo'
import BotonGuardar from './BotonGuardar';
import BotonAbrir from './BotonAbrir';
import BotonCompartir from './BotonCompartir';


export default function PanelControl() {
    return (
        <div className='row g-1'>
            <div className='col'>
                <BotonNuevo />
            </div>
            <div className='col'>
                <BotonGuardar />
            </div>
            <div className='col'>
                <BotonAbrir />
            </div>
            <div className='col'>
                <BotonCompartir />
            </div>
        </div>
    );
}