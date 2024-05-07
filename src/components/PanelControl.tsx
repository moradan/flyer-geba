import BotonNuevo from '@/components/BotonNuevo'
import BotonCompartir from './BotonCompartir';


export default function PanelControl() {
    return (
        <>
            <div className='col col-sm-6'>
                <BotonNuevo />
            </div>
            <div className='col col-sm-6'>
                <BotonCompartir />
            </div>
        </>
    );
}